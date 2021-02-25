const express = require("express");
const user = require("../model/user");

const router = express.Router();


router.get("/", (req, res) => {
    user.find   ()
        .then((user) => res.status(200).json({users: user, msg: "user find successfully"}))
        .catch((err) => res.status(500).json({err: err, msg: "internal server error"}))
    });

router.get("/:id", (req, res) => {
    user.findById({_id: req.params.id})
        .then((user) => 
        {
            if(!user) {
                return res.status(404).json({msg: "user not found"}) 
            }
            res.status(200).json({users: user, msg: "user find successfully"})
        })
        .catch((err) => res.status(500).json({err: err, msg: "internal server error"}))
    });
    
router.post("/", (req, res) => {
    let newUser = new user(req.body);
    newUser.save()
        .then(() => res.status(200).json({msg: "user created successfully"}))
        .catch((err) => res.status(500).json({err: err, msg: "Internal serveer error"}))
    });
router.put("/:id", (req, res) => {
    user.updateOne({_id: req.params.id}, {$set: req.body})
        .then(() => res.status(200).json({msg: "user update successfully"}))
        .catch((err) => res.status(500).json({err: err, msg: "Internal server error"}))
});
router.delete("/", (req, res) => {
    user.remove()
        .then(() => res.status(200).json({msg: "user deleted successfully"}))
        .catch((err) => res.status(500).json({err: err, msg: "Internal server error"}))
    });
module.exports = router;