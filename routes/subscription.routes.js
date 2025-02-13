import { Router } from "express";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const subscriptionRouter = Router();

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "Get All Subscriptions" });
});

subscriptionRouter.get("/:id", authorize, getUserSubscriptions);

export default subscriptionRouter;
