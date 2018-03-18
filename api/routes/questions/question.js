const express = require('express');
const router = express.Router();
const config = require('../../../config/database');
const Question = require('../../models/question');
question:Object;
// question 

router.post('/add', (req, res, next) => {
  let newQuestion = new Question ({
    question: req.body.question,
    options: req.body.options,
    answer: req.body.answer,
    category : req.body.category,
    topic : req.body.topic
  });
  Question.addQuestion(newQuestion, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to add Questions'});
    } else {
      res.json({success: true, msg:'Question was added Successfully !'});
    }
  });
});

router.get('/getquestions',(req,res,next) => {
    Question.find({category:"english"},function(err,datas){

      if(err){return {success:false,msg:"failed"};}
      else{ 

        res.json(datas);
      }
    });
  });
 

module.exports = router;