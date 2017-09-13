var clients = [];//Здесь список юзеров создается
exports.subscribe = function(req, res) {
    clients.push(res);
};
exports.publish = function(message) {
    clients.forEach(function(res) {
        res.end(message);
    });
    clients = [];
    console.log(0);
};
