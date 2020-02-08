const express=require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render("index",{
        'title':"Mi sitio con node"
    });
});

router.get('/contact',(req,res)=>{
    res.render("contact",{
        'title':"Mi sitio con node"
    });
});

module.exports = router;