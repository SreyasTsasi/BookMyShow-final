import { Router } from "express"; 

 import * as rh from "./requesthandlers.js";

const router = Router();

router.route("/upload").post(rh.uploadFile);
router.route("/get-profile").get(rh.getProfile);
// router.route("/get-data").get(rh.getRequestHandler);
// router.route("/post-data").post(rh.getRequestHandler);

export default router;