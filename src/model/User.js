import {AccountHandler} from "../external/AccountHandler";

export class User {

    state = {
        uid: null,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    };

    static login(email, password) {
        AccountHandler.attemptLogin(email, password);
    }
}