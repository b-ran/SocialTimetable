import firebase from "firebase"

export class UsersHandler {

    static _users = [];

    static attemptToGetUsers() {
        return new Promise((resolve) => {
            firebase.database().ref("user").orderByChild("uid").on('value', (snapshot) => {
                let profiles = snapshot.val();
                for (let key in profiles) {
                    this._users.push(profiles[key]);
                }
                resolve();
            })
        })
    }

}
