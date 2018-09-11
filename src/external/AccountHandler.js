import firebase from "react-native-firebase";
//import * as firebase from "react-native-firebase";



export class AccountHandler {

    static attemptLogin(email, password) {
        console.log(email + " " + password);
        firebase.auth().signInWithEmailAndPassword(email, password);
        //   .then( ()=> {
        //    firebase.ref("user").orderByChild("email").equalTo(email).once("value", snapshot => console.log(snapshot.val()));
        // });

        //     .catch(
        //     error => {throw (error)}
        // )
    }



}
