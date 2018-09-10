import * as firebase from "react-native-firebase";


export class AccountHandler {

    static attemptLogin(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(
            error => {throw (error)}
        )
    }

}