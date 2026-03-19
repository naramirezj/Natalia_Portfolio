import { Router } from "express";
import { chatWithNataliaAgent } from "../agent/chatWithAgent.js";

const router = Router();

router.post("/", async(req, res) => {
    try{
        const { message } = req.body as { message?: string};
        if(!message || !message.trim()){
            return res.status(400).json({ error: "Message is required"}); 
        }

        const reply = await chatWithNataliaAgent(message);
        return res.json({reply});
    } catch (error){
        console.error("Chat route error: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
