const mongoose = require('mongoose');

const smoothieSchema = mongoose.Schema({

    
        title : {type: String,require:false},
              
        ingredients : [
            {
                nom : {type: String,require:false},
        
                quantité : {type: String,require:false},
                
            }
                             ],
        features :   {
                        cost :{type: String,require:false},
                
                        prepareTime:{type: String,require:false},
                       
                    },
        advice : {type: String,require:false},
        
        description : {type: String,require:false},
        steps : [
                {
                    stepText: {type: String,require:false},
                }
            ],
        photo: [
                {
                    title: String,
                    path: String,
                    description: String,

                }
                ],

});

const Smoothie = module.exports = mongoose.model('smoothie', smoothieSchema);