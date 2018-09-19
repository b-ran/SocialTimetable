import {FriendHandler} from "../external/FriendHandler";

export class Requests {


    static makeRequest(targetUser) {
        FriendHandler.request(targetUser);

    }

}
