const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

const router = require("express").Router();

// 呟き投稿API
router.post("/post", async (req, res) => {
    const { content } = req.body;

    if (!content) {
        return res.status(400).json({
            "message": "投稿内容がありません"
        });
    }

    try {
        const newPost = await prisma.post.create({
            data: {
                content,
                authorId: 7
            }
        });

        res.status(201).json(newPost);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            "message": "サーバーエラーです。"
        })
    }

});

module.exports = router;