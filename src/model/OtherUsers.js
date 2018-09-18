import {UsersHandler} from "../external/UsersHandler"
import {User} from "../model/User"


export class OtherUsers {

    static startUsers = [];
    static users = [];

    static findUsers(search) {
        return new Promise((resolve) => {
            this._populateUsers().then(() => {
                this.users = this.startUsers;
                resolve();
            });
        });




        // await this.users.filter((user) => {
        //    return user.uid !== User.state.uid;
        // });

        // await this.users = this.users.filter((user) => {
        //     let fullName: string = (user.firstName + " " + user.lastName).toLowerCase();
        //     return ((user.uid.substring(0,search.length) === search ||
        //         fullName.substring(0,search.length) === search.toLowerCase()));
        // });
    }

    static _populateUsers() {
        return new Promise((resolve) => {
            if (this.startUsers.length !== 0) return;
            UsersHandler.attemptToGetUsers().then(() => {
                this.startUsers = UsersHandler._users;
                resolve();
            });
        });
    }

}
