import {UsersHandler} from "../external/UsersHandler";

export class Requested {

    static data = [];

    static populateRequested() {
        return new Promise((resolve) => {
            UsersHandler.attemptToGetRequested().then(()=> {
                this.data = [];
                this.data = UsersHandler.requested;
                resolve();
            });
        });
    }

}
