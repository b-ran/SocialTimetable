import {User} from "../model/User";
import firebase from "firebase"

export class AccountHandler {


    static attemptSignIn(email, password) {
        return new Promise( (resolve) => {
            if (email == null || email === "" || password == null || password === "") {
                throw new Error(UserMessages.MISSING_DATA);
            }
            firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
                firebase.database().ref("user/" + firebase.auth().currentUser.uid).once("value", (data)=> {
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
            });
        });
    }

    static async attemptSignOut() {
        await firebase.auth().signOut();
        User.signOut();
    }

    static async attemptRegistration(email, password) {
        if (email == null || email === "" || password == null || password === "") {
            throw new Error(UserMessages.MISSING_DATA);
        }

        await firebase.auth().createUserWithEmailAndPassword(email, password);
        await firebase.auth().signInWithEmailAndPassword(email, password);
        await firebase.database().ref("user/" + firebase.auth().currentUser.uid).set(
            {
                uid: firebase.auth().currentUser.uid,
                firstName: User.state.firstName,
                lastName: User.state.lastName
            }
        ).catch((error) => {
            console.log(error);
        });
    }

    static async attemptSendingPasswordResetEmail(email) {
        if (email == null || email === "") {
            throw new Error(UserMessages.MISSING_EMAIL);
        }
        await firebase.auth().sendPasswordResetEmail(email)
    }

}

function rawJSONToArray(rawData) {
    let array = [];
    for (let i in rawData) {
        array.push(rawData[i]);
    }
    return array;
}
