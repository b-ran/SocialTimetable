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
        console.log(search);
        return new Promise((resolve) => {
            this.users = [];
            this.users = this.startUsers;
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
        return new Promise(async (resolve) => {
            this.users = await this.users.filter((user) => {
                return user.uid !== User.state.uid;
            });
            this.users = await this._filterArray(this.users, Requests.data);
            this.users = await this._filterArray(this.users, Requested.data);
            this.users = await this._filterArray(this.users, Friends.data);
            resolve();
        });

    }

    static populateUsers() {
        return new Promise((resolve) => {
            UsersHandler.attemptToGetUsers().then(() => {
                this.startUsers = UsersHandler.users;
                this.users = [];
                this.users = this.startUsers;
                console.log("------OtherUsers------");
                console.log(this.users);
                resolve();
            });
        });
    }


    static _filterArray(to:any[] , from:any[]) {
        console.log(from);
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

}
