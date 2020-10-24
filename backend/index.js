const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const controllers = require('./controllers');

const API_PORT = 3030;
const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(cors());
app.use(router);


router.get("/getComments", async (req, res) => res.json(await controllers.getComments(req.query)));

router.post("/addComment", async (req, res) => res.json(await controllers.addNewComment(req.body)));


app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));


