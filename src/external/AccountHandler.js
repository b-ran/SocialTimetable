import {User} from "../model/User";
import firebase from "firebase"
import {UserMessages} from "../components/UserMessages";

export class AccountHandler {


    static attemptSignIn(email, password) {

        return new Promise((resolve) => {
            firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
                firebase.database().ref("user/" + firebase.auth().currentUser.uid).once("value", (data) => {
                    let rawUserData = data.toJSON();
                    let newUserState = {
                        uid: firebase.auth().currentUser.uid,
                        firstName: rawUserData.firstName,
                        lastName: rawUserData.lastName,
                        friends: rawJSONToArray(rawUserData.friends),
                        email: email,
                        password: password,
                        lessons: rawJSONToArray(rawUserData.lessons),
                    };
                    User.updateState(newUserState);
                    resolve();
                });
            }).catch((error) => {
                UserMessages.toast(error.toString());
            });
        });
    }

    static async attemptSignOut() {
        await firebase.auth().signOut();
        User.signOut();
    }

    static async attemptRegistration(email, password) {
        await firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
            UserMessages.toast(error.toString());
        });
        await firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
            UserMessages.toast(error.toString());
        });
        await firebase.database().ref("user/" + firebase.auth().currentUser.uid).set(
            {
                uid: firebase.auth().currentUser.uid,
                firstName: User.state.firstName,
                lastName: User.state.lastName
            }
        ).catch((error) => {
            UserMessages.toast(error.toString());
        });
    }

    static async attemptSendingPasswordResetEmail(email) {
        await firebase.auth().sendPasswordResetEmail(email).catch((error) => {
            UserMessages.toast(error.toString());
        });
    }

}

export function rawJSONToArray(rawData) {
    let array = [];
    for (let i in rawData) {
        array.push(rawData[i]);
    }
    return array;
}
