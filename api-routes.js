//Initializing express router
const router = require('express').Router();

//default api response
router.get('/', (req, res) => {
    res.json({
        status: "API works",
        message: "Welcome Welcome Welcome"
    });
});

//import server controller
var serverController = require("./serverController");

//server routes
router.route("/servers")
    .get(serverController.index)
    .post(serverController.new);

router.route("/servers/:server_id")
    .get(serverController.view)
    .patch(serverController.update)
    .put(serverController.update)
    .delete(serverController.delete);

//export API routes
module.exports = router;