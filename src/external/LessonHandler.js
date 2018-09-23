import * as firebase from "firebase";
import {User} from "../model/User";

export class LessonHandler {

    static saveLesson(lesson) {
        firebase.database().ref(`user/${User.state.uid}/lessons`).push(lesson);
    }

    static loadLessons(uid) {
        if (uid == null) return;
        let lessons = [];
        firebase.database().ref(`user/${uid}`).child("lessons").on("value", snapshot => {
            snapshot.forEach(item =>{
                lessons.push(item.val());
            })
        });
        return lessons;
    }

}
