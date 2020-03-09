var data= require("../data/friends");

function apiRoutes(app){
    app.get('/api/friends', function(req,res){
        res.json(data);
    });

    // app.post('/api/friends', function(req,res){

    // })

}

module.exports=apiRoutes;