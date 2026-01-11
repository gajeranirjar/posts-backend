const { getPost, addPost, updatePost, deletePost } = require("../controllers/postController");

const router = require("express").Router();

router.get("/" , getPost);
router.post("/" , addPost);
router.put("/:id" , updatePost);
router.delete("/:id" , deletePost);

module.exports = router;