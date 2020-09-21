// Health API handler
module.exports =  function (req, res) {
    res.status(200);
    res.json({
        msg: 'REST Service is running',
        status: 200
    });
};