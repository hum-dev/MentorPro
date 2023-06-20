import { getMentees, getMentee, updateMentee, deleteMentee, create } from "../Controllers/menteeController.js";


const menteeRoutes = (app) => {
    app.route('/mentees')
        .get(getMentees)
        

    app.route('/mentee/:mentee_id')
        .get(getMentee)
        .put(updateMentee)
        .delete(deleteMentee);

    app.route("/mentee/create")
        .post(create);



}

export default menteeRoutes;