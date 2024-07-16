import express from "express";
const router = express.Router();
import Admin from "../models/Admin.js";

router.post("/register", async (req, res) => {
    try {
        const { admin_name, admin_email, admin_password } = req.body;

        console.log(req.body);

        const adminID = admin_email.split("@")[0] + Math.random().toString().split('.')[1];
        console.log(adminID);

        const newAdmin = new Admin({
            admin_id: adminID,
            admin_name,
            admin_email,
            admin_password,
        });

        await newAdmin.save();
        console.log(newAdmin);
        res.status(200).json(newAdmin);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});

router.post("/login", async (req, res) => {});

export default router;
