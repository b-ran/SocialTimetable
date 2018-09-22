import {UsersHandler} from "../external/UsersHandler";

export class Friends {

    static data = [];

    static populateFriends() {
        return new Promise((resolve) => {
            UsersHandler.attemptToGetFriends().then(()=> {
                this.data = [];
                this.data = UsersHandler.users;
                console.log("------Friends------");
                console.log(this.data);
                resolve();
            });
        });
    }

}
