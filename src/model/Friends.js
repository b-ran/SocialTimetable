import {UsersHandler} from "../external/UsersHandler";
import {OtherUsers} from "./OtherUsers";

export class Friends {

    static data = [];

    static populateFriends() {
        return new Promise((resolve) => {
            UsersHandler.attemptToGetFriends().then(()=> {
                this.data = [];
                this.data = UsersHandler.friends;
                resolve();
            });
        });
    }

}
