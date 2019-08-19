var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ["AUS", "DAL", "LAX", "SEA"]
    },

    arival: Date
});

var flightSchema = new Schema({
    
    airline: {
        type:String,
        required: true,
        enum: ['American','Southwest','United']
    },

    flightNo:{
        type: Number,
        min:10,
        max:9999
    },

    departs:
    {
        type: Date,
    },
    airport: {
        type: String,
        enum: ["AUS", "DAL", "LAX", "SEA"],
        default: 'SEA'
    },
    destinations: [destinationSchema]
})



module.exports = mongoose.model('Flight', flightSchema);
