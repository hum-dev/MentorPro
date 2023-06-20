import { getMentors, getMentor, updateMentor, deleteMentor,create } from "../Controllers/mentorController.js";

const mentorRoutes = (app) => {
    app.route("/mentors")
    .get(getMentors);

    
    app.route("/mentor/:mentor_id")
    .get(getMentor)
    .put(updateMentor)
    .delete(deleteMentor);

    app.route("/mentor/create")
    .post(create);

}
export default mentorRoutes;