var data= require("../data/friends");

module.exports=function(app){

    //returns all users in friends.js
    app.get("/api/friends",function(req,res){
        res.json(data);
    });

    app.post("/api/friends", function(req,res){

       var user=req.body;

    // parseInt for scores
    for(var i = 0; i < user.scores.length; i++) {
        user.scores[i] = parseInt(user.scores[i]);
      }
  
    //   // default friend match is the first friend but result will be whoever has the minimum difference in scores
      var matchIndex = 0;
      var minimumDifference = 40;
  
      // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
      //  whatever the difference is, add to the total difference
      for(var i = 0; i < data.length; i++) {
        var totalDifference = 0;
        for(var j = 0; j < data[i].scores.length; j++) {
          var difference = Math.abs(user.scores[j] - data[i].scores[j]);
          totalDifference += difference;
        }
  
    //     // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
        if(totalDifference < minimumDifference) {
          matchIndex = i;
          minimumDifference = totalDifference;
        }

      }


  

    data.push(user);

    res.json(data[matchIndex])

    

    
    });


};

