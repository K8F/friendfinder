var data= require("../data/friends");

module.exports=function(app){
    app.get("/api/friends",function(req,res){
        res.json(data);
    });

    app.post("/api/friends", function(req,res){
       console.log(req.body.scores);

       var user=req.body;

    //    for (var i=0; i<user.scores.length; i++){
    //        user.scores[i]
    //    };

    data.push(user)
    
    })


}

