import * as firebase from "firebase";
import {User} from "../model/User"
import {OtherUsers} from "../model/OtherUsers";

export class FriendHandler {

    static request(targetUser) {
        firebase.database().ref(`requests`).child(targetUser.uid).push({sender: User.state.uid});
        firebase.database().ref(`requested`).child(User.state.uid).push({receiver: targetUser.uid});
    }

    static acceptRequest(targetUser) {
        let start = OtherUsers.startUsers.length;
        firebase.database().ref(`user/${User.state.uid}`).child("friends").push({friend: targetUser.uid});
        firebase.database().ref(`user/${targetUser.uid}`).child("friends").push({friend: User.state.uid});
        this.deleteRequest(targetUser);
        OtherUsers.startUsers = OtherUsers.startUsers.slice(0,start);
    }

    static deleteRequest(targetUser) {
        this.delete("requests", User.state.uid, "sender", targetUser.uid);
        this.delete("requested", targetUser.uid, "receiver", User.state.uid);
    }

    static delete(dir, child, label, value) {
        let path =  firebase.database().ref(dir).child(child);
        return new Promise((resolve) => {
            path.orderByChild(label).equalTo(value).once("value", (snapshot) => {
                for (let key in snapshot.val()) {
                    path.child(key).remove().then(() => {
                        resolve(true);
                    });
                }
            });
        });
    }

}
