import {UsersHandler} from "../external/UsersHandler"
import {User} from "../model/User"
import {Requests} from "./Requests";
import {Requested} from "./Requested";
import {Friends} from "./Friends";


export class OtherUsers {

    static startUsers = [];
    static users = [];

    static findUsers(search) {
        if (!User.isOnline()) return;
        return new Promise((resolve) => {
            this.filterUsers().then(() => {
                this.users = this.users.filter((user) => {
                    let fullName: string = (user.firstName + " " + user.lastName).toLowerCase();
                    return ((user.uid.substring(0, search.length) === search ||
                        fullName.substring(0, search.length) === search.toLowerCase()));
                });
                resolve();
            });
        });
    }

    static filterUsers() {
        let users = this.startUsers;
        return new Promise(async (resolve) => {
            users = await users.filter((user) => {
                return user.uid !== User.state.uid;
            });
            users = await this._filterArray(users, Requests.data);
            users = await this._filterArray(users, Requested.data);
            users = await this._filterArray(users, Friends.data);
            this.users = users;
            resolve();
        });

    }

    static populateUsers() {
        return new Promise((resolve) => {
            UsersHandler.attemptToGetUsers().then(() => {
                this.startUsers = [];
                this.startUsers = UsersHandler.users;
                resolve();
            });
        });
    }


    static _filterArray(to:any[] , from:any[]) {
        let array = [];
        if (from.length === 0) return to;
        for (let i in to) {
            let count = 0;
            for (let j in from) {
                count+=1;
                if (to[i].uid === from[j].uid) {
                    break;
                }
                if (count === from.length) array.push(to[i]);
            }
        }
        return array;
    }

    static getStart() {
        return this.startUsers;
    }
}
