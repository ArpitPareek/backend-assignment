Server = require('./serverModel');

//handle index actions
exports.index = function (req, res) {
    Server.get(function (err, serverData) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "information retrieved successfully",
            data: serverData
        });
    });    
} 

//handle create server actions
exports.new = function (req, res) {
    var server = new Server();
    server.ram = req.body.ram;
    server.cpu = req.body.cpu;
    server.graphics = req.body.graphics;
    server.operating_system = req.body.operating_system;
    server.storage = req.body.storage;

    //save the data
    server.save(function (err) {
        if (err) {
            res.json(err);
        }
        res.json({
            message: "new server created",
            data: server
        });
    });
};

//handle view server info
exports.view = function (req, res) {
    Server.findById(req.params.server_id, function (err, serverData) {
        if (err) {
            res.send(err)
        } res.json({
            message: "server data is loading",
            data: serverData
        });
    });
};

//handle update server info
exports.update = function (req, res) {
    Server.findById(req.params.server_id, function (err, serverData) {
        if (err) {
            res.send(err)
        }
        serverData.ram = req.body.ram;
        serverData.cpu = req.body.cpu;
        serverData.graphics = req.body.graphics;
        serverData.operating_system = req.body.operating_system;
        serverData.storage = req.body.storage;

        //saving the new data
        serverData.save(function (err) {
            if (err) {
                res.json(err);
            } res.json({
                message: "server data updated",
                data: serverData
            });
        });
    });
};

//handle delete server
exports.delete = function (req, res) {
    Server.remove({
        _id: req.params.server_id
    }, function (err, contact) {
        if (err) {
            res.send(err);
        }
        res.json({
            status: "success",
            message: "contact deleted"
        });
    });
};