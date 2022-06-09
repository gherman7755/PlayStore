const Application = require("../models/Application");
const { verifyTokenAndPublisher, verifyTokenAndAuthorization } = require("./verifyToken");
const router = require("express").Router();


router.post("/", verifyTokenAndPublisher, async(req, res) =>{
    const newApplication = new Application(req.body)
    try{
        const savedApp = await newApplication.save();
        res.status(200).json(savedApp);
    }catch(err){
        res.status(500).json(err);
    }
})

router.put("/:id", verifyTokenAndPublisher, async (req, res) => {

    try{
        const updatedApp = await Application.findByIdAndUpdate(
            req.params.id, 
            {
                $set: req.body
            }, 
            {new: true});
        res.status(200).json(updatedApp)
    }catch(err){
        res.status(500).json(err);
     }
});

router.delete("/:id", verifyTokenAndPublisher, async(req, res) => {
    try{
        await Application.findByIdAndDelete(req.params.id);
        res.status(200).json("Application has been deleted!");
    } catch(err){
        res.status(500).json(err);
    }
});

router.get("/find/:id", async(req, res) => {
    try{
        const application = await Application.findById(req.params.id);
        // const {link, ...others} = application._doc
        // console.log(application)
        res.status(200).json(application);
    } catch(err){
        res.status(500).json(err);
    }
});

router.get("/prem", verifyTokenAndAuthorization, async(req, res) => {
    const query = req.query.new;
    try{
        const apps = query
        ? await Application.find().sort({_id:-1}).limit(5)
        : await Application.find();
        // console.log(apps)
        res.status(200).json(apps);
    } catch(err){
        console.log(err)
        res.status(500).json(err);
    }
})

router.get("/", async(req, res) =>{
    const query = req.query.new;
    try{
        const apps = query
        ? await Application.find().sort({_id:-1}).limit(5)
        : await Application.find();
        const arr1 = apps.slice();
        // console.log(verifyTokenAndAuthorization)
        for (let i = 0; i < arr1.length; i++){
            arr1[i].link = undefined;
        }
        // console.log(arr1);
        // console.log(apps)
        res.status(200).json(apps);
    } catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;