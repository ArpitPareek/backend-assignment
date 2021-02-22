var mongoose = require('mongoose');
// Setup schema
var ServerSchema = mongoose.Schema({
    ram: {
        type: String,
        required: true
    },
    cpu: {
        type: String,
        required: true
    },
    operating_system: {
        type: String,
        required:true
    },
    graphics: {
        type: String,
        required:true
    },
    storage: {
        type: String,
        required:true
    },
    create_date: {
        type: Date,
        default: Date.now
    },
});
// Export Server model
var Server = module.exports = mongoose.model('server', ServerSchema);
//module.exports.get = function (callback, limit) {
//    Server.find(callback).limit(limit);
//}