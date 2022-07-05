import React, { useState } from "react";

function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setٍError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setٍError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setReps("");
      setLoad("");
      setٍError(null);
      console.log("New workout added!");
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <h3>Add a new Workout</h3>
      <label>Exercise Title:</label>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <label>Exercise Load (kg):</label>
      <input
        type="number"
        onChange={(e) => {
          setLoad(e.target.value);
        }}
        value={load}
      />
      <label>Exercise Reps:</label>
      <input
        type="number"
        onChange={(e) => {
          setReps(e.target.value);
        }}
        value={reps}
      />
      <button>Add Workout</button>
    </form>
  );
}

export default WorkoutForm;
