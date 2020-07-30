const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { type: Date,
        default: () => new Date(+new Date() + 7*24*60*60*1000)
  },
  exercises: [
    {   
        type: {
            type: String,
            trim: true,
            required: true
        },
        name: {
            type: String,
            trim: true,
            required: true
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }
]
}
);

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
