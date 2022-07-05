import React from "react";

function WorkoutDetails({ workout, key }) {
  return (
    <div className="workout-details">
      <h4 key={key}>{workout.title}</h4>
      <p>
        <strong>Load (kg) : </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps (kg) : </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
    </div>
  );
}

export default WorkoutDetails;
