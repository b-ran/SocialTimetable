import firebase from "firebase"
import {User} from "../model/User";
import {OtherUsers} from "../model/OtherUsers";

export class UsersHandler {

    static users = [];

    static async attemptToGetUsers() {
        await this.attemptToGetListAtRef("user", "uid").then((response) => {
            this.users = response;
        });
    }

    static async attemptToGetRequests() {
        await this.attemptToGetListAtRef("requests/" + User.state.uid, "sender").then((response) => {
            this.users = this.__findUsersFromUid(response);
        });
    }

    static async attemptToGetRequested() {
        await this.attemptToGetListAtRef("requested/" + User.state.uid, "receiver").then((response) => {
            this.users = this.__findUsersFromUid(response);
        });
    }

    static async attemptToGetFriends() {
        await this.attemptToGetListAtRef("user/" + User.state.uid + "/friends", "friend").then((response) => {
            this.users = this.__findUsersFromUid(response);
        });
    }

    static __findUsersFromUid(uidList) {
        let foundUsers = [];
        for (let i in OtherUsers.startUsers) {
            let user = OtherUsers.startUsers[i];
            for (let j in uidList) {
                let uid = uidList[j];
                for (let key in uid) {
                    if (uid[key] === user.uid) {
                        foundUsers.push(user)
                    }
                }
            }
        }
        return foundUsers;
    }

    static attemptToGetListAtRef(refPath, child) {
        return new Promise((resolve) => {
            let list = [];
            firebase.database().ref(refPath).orderByChild(child).on('value', (snapshot) => {
                let items = snapshot.val();
                for (let key in items) {
                    list.push(items[key]);
                }
                resolve(list);
            })
        })
    }

}
