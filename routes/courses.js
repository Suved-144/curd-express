const ex =require('express')
const router = ex.Router()
const Course =require("../models/course")

router.get('/',async (req,res)=>{
    try{
        const courses =  await Course.find()
        res.json(courses)
    }
    catch(err){
        res.json(err)
    }
})  
router.get('/:courseId', async (req,res)=>{
    const courseId = req.params.courseId
    try{
        const c =await Course.findById(courseId)
        res.json(c)
    }
    catch(err){
        res.json(err)

    }
})
router.post('/create', async (req,res)=>{
    try{
    const course = await Course.create(req.body)
    res.json(course)
    }
    catch(err)
    {
        res.json(err);
    }
})

router.put('/edit/:courseId',async (req,res)=>{
    const courseId = req.params.courseId
    try{
        const course = await Course.updateOne(
            {
                "_id":courseId
            },
            
                req.body
            )
        res.json(course)
    }
    catch(err){
            res.json(err)
    }
})


router.delete('/delete/:courseId',async(req,res)=>{
    try{
        await Course.remove({_id:req.params.courseId})
        res.json({msg:"done"})
    }
    catch(err){
        res.json(err)
    }
})




module.exports = router;