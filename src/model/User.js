import {AccountHandler} from "../external/AccountHandler";
import {OtherUsers} from "./OtherUsers";
import {Requests} from "./Requests";
import {Requested} from "./Requested";
import {Friends} from "./Friends";
import {LessonHandler} from "../external/LessonHandler";

export class User {

    static state = {
        uid: null,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        lessons: [],
    };

    static async signIn(email, password) {
       await AccountHandler.attemptSignIn(email, password);
    }

    static signOut() {
        //AccountHandler.attemptSignOut();
        this.resetState();
    }

    static sendPasswordResetEmail(email) {
        AccountHandler.attemptSendingPasswordResetEmail(email);
    }

    static register(firstName, lastName, email, password) {
        this.state.firstName = firstName;
        this.state.lastName = lastName;
        this.state.email = email;
        this.state.password = password;
        AccountHandler.attemptRegistration(email, password);
    }

    static updateState(newUserState) {
        this.state.uid = newUserState.uid;
        this.state.firstName = newUserState.firstName;
        this.state.lastName = newUserState.lastName;
        this.state.email = newUserState.email;
        this.state.password = newUserState.password;
        this.state.lessons = newUserState.lessons;
        if (this.state.lessons === undefined) this.state.lessons = [];
    }

    static async populateAll() {
        await OtherUsers.populateUsers();
        await Requests.populateRequests();
        await Requested.populateRequested();
        await Friends.populateFriends();
        await OtherUsers.filterUsers();
    }

    static isOnline() {
        let state = this.state;
        return !(state.uid == null || state.firstName === "" || state.lastName === "" || state.email === "" || state.password === "");
    }

    static resetState() {
        this.state.uid = null;
        this.state.firstName = "";
        this.state.lastName = "";
        this.state.email = "";
        this.state.password = "";
    }

    static addLesson(lesson) {
        console.log(this.state);
        this.state.lessons.push(lesson);
        console.log(this.state);
    }
}
