import express from 'express';

const router  = express.Router();

router.get(`/:roomid`, (req, res)=>{
    res.status(200).send(`you are in the room :${req.params.roomid.toString()}`);
})

export default router;