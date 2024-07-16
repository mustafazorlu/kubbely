import mongoose from "mongoose";

const AdminsSchema = mongoose.Schema(
    {
        admin_id: {
            type: String,
        },
        admin_name: {
            type: String,
            required: true,
        },
        admin_email: {
            type: String,
            required: true,
        },
        admin_password: {
            type: String,
            required: true,
        },
        admin_comments: {
            type: Array,
        },
    },
    {
        timestamps: true,
    }
);

const Admin = mongoose.model("admins", AdminsSchema);

export default Admin;
