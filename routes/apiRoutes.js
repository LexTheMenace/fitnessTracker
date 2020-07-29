var db = require("../models");

module.exports = function(app) {

  app.get("/api/workouts", function(req, res) {
      console.log("Workout API");
    db.Workout.find({}).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

  app.put("/api/workouts/:id", function(req, res) {
    db.Workout.findByIdAndUpdate(req.params.id, 
      {$push: { exercises: req.body }}  )
      .then(dbWorkout => {
        res.json(dbWorkout);
    })
   
  });
  app.post("/api/workouts/", function(req, res) {
    console.log("Post workout /:id")
    db.Workout.create({}).then(function(dbWorkout) {
        res.json(dbWorkout);
    })
  });

};
