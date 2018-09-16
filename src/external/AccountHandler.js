//import reactFirebase from "react-native-firebase";
//import * as firebase from "react-native-firebase";
import {User} from "../model/User";
import firebase from "firebase"

export class AccountHandler {


    static async attemptSignIn(email, password) {
        if (email == null || email === "" || password == null || password === "") {
            throw new Error(UserMessages.MISSING_DATA);
        }
        await firebase.auth().signInWithEmailAndPassword(email, password);
        firebase.database().ref("user/" + firebase.auth().currentUser.uid).on("value", (data)=> {
            let rawUserData = data.toJSON();
            let newUserState = {
                uid: firebase.auth().currentUser.uid,
                firstName: rawUserData.firstName,
                lastName: rawUserData.lastName,
                email: email,
                password: password,
            };
            User.updateState(newUserState);
            console.log("Updated Logged User");
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
