import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.post("/", (req, res) => {
    res.send({ title: "Add new Subscription" });
})

subscriptionRouter.get("/", (req, res) => {
    res.send({ title: "Get All Subscriptions" });
});

export default subscriptionRouter;