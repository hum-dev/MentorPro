import { getMessages, getMessage, createMessage } from "../Controllers/ContactController.js";

const messageRoutes = (app) => {
    app.route("/messages")
        .get(getMessages);

    app.route("/message/:message_id")
        .get(getMessage);

    app.route("/message")
        .post(createMessage);
};

export default messageRoutes;
