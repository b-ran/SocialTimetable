import {FriendHandler} from "../external/FriendHandler";
import {UsersHandler} from "../external/UsersHandler";
import {OtherUsers} from "./OtherUsers";
import AddFriends from "../pages/AddFriends";
import {Requested} from "./Requested";
import {Friends} from "./Friends";

export class Requests {

    static data = [];

    static makeRequest(targetUser) {
        return new Promise(async (resolve) => {
            await FriendHandler.request(targetUser);
            await Requested.populateRequested();
            await OtherUsers.filterUsers();
            resolve();
        });
    }

    static acceptRequest(targetUser) {
        return new Promise(async (resolve) => {
            await FriendHandler.acceptRequest(targetUser);
            await this.populateRequests();
            await OtherUsers.filterUsers();
            resolve();
        });
    }

    static populateRequests() {
        return new Promise((resolve) => {
            UsersHandler.attemptToGetRequests().then(()=> {
                this.data = [];
                this.data = UsersHandler.users;
                console.log("------Requests------");
                console.log(this.data);
            });
            resolve();
        });


    }

}
