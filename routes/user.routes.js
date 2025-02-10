import { Router } from "express";

const useRouter = Router();

useRouter.get('/', (req, res) => {
    res.send({ title: "Get All Users"})
});

export default  useRouter;