import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseList = ({ exercises, title }) => {
  if (!exercises.length) {
    return <h3>No exercises Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {exercises &&
        exercises.map(exercise => (
          <div key={exercise._id} className="card mb-3">
            <p className="card-header">
              {exercise.exerciseName} <br></br>
              date of exercises
            </p>

          </div>
        ))}
    </div>
  );
};

export default ExerciseList;
