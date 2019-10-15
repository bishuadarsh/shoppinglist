//router storage
var express = require('express');
var router = express.Router();

const Item = require('../model/shoppingItem');

router.get('/items',(req,res,next) => {
    Item.find(function(err,items){
        if(err) {
            res.json(err);
        }
        else {
            res.json(items);
        }
    });
});

//interting new data
router.post('/item',(req,res,next) => {
    
    let newShoppingItem = new Item ({
        itemName : req.body.itemName,
        itemQuantity : req.body.itemQuantity,
        itemBought : req.body.itemBought
     });

     newShoppingItem.save((err,item)=>{
         if(err) { 
             res.json(err)
            }
         else {
             res.json({msg : 'Item has been added to db'});
            }
     });
});

//updating method
router.put('/item/:id',(req,res,next) => {
    Item.findOneAndUpdate({_id: req.params.id},{
        $set : {
            itemName : req.body.itemName,
            itemQuantity : req.body.itemQuantity,
            itemBought : req.body.itemBought
        }
    },
        function(err,result) {
            if(err){
                res.json(err);
            } else {
                res.json(result);
            }
            

        });
    });

//deleting method
router.delete('/item/:id',(req,res,next) => {
    Item.remove({_id: req.params.id},function(err,result){
        if(err) {
            res.json(err)
        } else {
            res.json(result)
        }
     });
 });

module.exports = router; // exporting router variable