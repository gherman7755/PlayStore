const Game = require("../models/Game");
const { verifyTokenAndPublisher, verifyTokenAndAuthorization } = require("./verifyToken");
const router = require("express").Router();

router.post("/", verifyTokenAndPublisher, async(req, res) =>{
    const newGame = new Game(req.body)
    try{
        const savedGame = await newGame.save();
        res.status(200).json(savedGame);
    }catch(err){
        console.log(err)
        res.status(500).json(err);
    }
})

router.put("/:id", verifyTokenAndPublisher, async (req, res) => {

    try{
        const updatedGame = await Game.findByIdAndUpdate(
            req.params.id, 
            {
                $set: req.body
            }, 
            {new: true});
        res.status(200).json(updatedGame)
    }catch(err){
        res.status(500).json(err);
     }
});

router.delete("/:id", verifyTokenAndPublisher, async(req, res) => {
    try{
        await Game.findByIdAndDelete(req.params.id);
        res.status(200).json("Game has been deleted!");
    } catch(err){
        res.status(500).json(err);
    }
});

router.get("/find/:id", async(req, res) => {
    try{
        const game = await Game.findById(req.params.id);
        res.status(200).json(game);
    } catch(err){
        res.status(500).json(err);
    }
});

router.get("/prem", verifyTokenAndAuthorization, async(req, res) => {
    const query = req.query.new;
    try{
        const games = query
        ? await Game.find().sort({_id:-1}).limit(5)
        : await Game.find();
        // console.log(games)
        res.status(200).json(games);
    } catch(err){
        console.log(err)
        res.status(500).json(err);
    }
})

router.get("/", async(req, res) =>{
    const query = req.query.new;
    try{
        const games = query
        ? await Game.find().sort({_id:-1}).limit(5)
        : await Game.find();
        const arr1 = games.slice();
        // console.log(verifyTokenAndAuthorization)
        for (let i = 0; i < arr1.length; i++){
            arr1[i].link = undefined;
        }
        // console.log(arr1);
        // console.log(games)
        res.status(200).json(games);
    } catch(err){
        res.status(500).json(err);
    }
})

module.exports = router