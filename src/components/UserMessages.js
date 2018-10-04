import {Toast} from "native-base";

export class UserMessages {

    static MISSING_EMAIL: string = "Please Input Email Address";
    static MISSING_DATA: string = "Please Fill in all Fields";
    static SIGN_OUT: string = "Signed Out!";

    static sign_out_toast() {
        this.toastr.showToast(this.SIGN_OUT);
    }

    static toast(msg) {
        this.toastr.showToast(msg);
    }

    static toastr = {
        showToast: (message, duration = 2500) => {
            Toast.show({
                text: message,
                duration,
                buttonText: 'Okay',
            });
        },
    };

}
