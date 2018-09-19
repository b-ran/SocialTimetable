import {UsersHandler} from "../external/UsersHandler"
import {User} from "../model/User"


export class OtherUsers {

    static startUsers = [];
    static users = [];

    static findUsers(search) {
        if (!User.isOnline()) return;
        console.log(search);
        return new Promise((resolve) => {
            this.users = [];
            this.users = this.startUsers;
            this._filterUsers();

            this.users = this.users.filter((user) => {
                let fullName: string = (user.firstName + " " + user.lastName).toLowerCase();
                return ((user.uid.substring(0, search.length) === search ||
                    fullName.substring(0, search.length) === search.toLowerCase()));
            });
            resolve();
        });


    }

    static _filterUsers() {
        this.users = this.users.filter((user) => {
            return user.uid !== User.state.uid;
        });
    }

    static populateUsers() {
        return new Promise((resolve) => {
            if (this.startUsers.length !== 0) return;
            UsersHandler.attemptToGetUsers().then(() => {
                this.startUsers = UsersHandler._users;
                this.users = UsersHandler._users;
                this._filterUsers();
                resolve();
            });
        });
    }

}
