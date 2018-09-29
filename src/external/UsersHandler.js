import firebase from "firebase"
import {User} from "../model/User";
import {OtherUsers} from "../model/OtherUsers";
import {AccountHandler, rawJSONToArray} from "./AccountHandler";

export class UsersHandler {

    static users = [];
    static friends = [];
    static requests = [];
    static requested = [];

    static async attemptToGetUsers() {
        await this.attemptToGetListAtRef("user", "uid").then((response) => {
            this.users = [];
            this.users = response;
        });
    }

    static async attemptToGetRequests() {
        await this.attemptToGetListAtRef("requests/" + User.state.uid, "sender").then((response) => {
            this.requests = [];
            this.requests = this.__findUsersFromUid(response);
        });

    }

    static async attemptToGetRequested() {
        await this.attemptToGetListAtRef("requested/" + User.state.uid, "receiver").then(async (response) => {
            this.requested = await [];
            this.requested = await this.__findUsersFromUid(response);
        });
    }

    static async attemptToGetFriends() {
        await this.attemptToGetListAtRef("user/" + User.state.uid + "/friends", "friend").then(async (response) => {

            this.friends = await [];
            this.friends = await this.__findUsersFromUid(response);

        });
    }

    static __findUsersFromUid(uidList) {
        let foundUsers = [];
        for (let i in uidList) {
            let uid = uidList[i];
            for (let j in OtherUsers.startUsers) {
                let user = OtherUsers.startUsers[j];
                for (let key in uid) {
                    if (uid[key] === user.uid) {
                        user.friends = rawJSONToArray(user.friends);
                        user.lessons = rawJSONToArray(user.lessons);
                        foundUsers.push(user);
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
