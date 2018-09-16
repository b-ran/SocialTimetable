import {AccountHandler} from "../external/AccountHandler";

export class User {

    static state = {
        uid: null,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    };

    static signIn(email, password) {
        AccountHandler.attemptSignIn(email, password);
    }

    static signOut() {
        AccountHandler.attemptSignOut();
        state.clear();
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

    }

    static online() {
        return !this.state.isEmpty();
    }
}
