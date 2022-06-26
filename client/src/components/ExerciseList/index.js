import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseList = ({ exercises, names, title }) => {
  if (!exercises.length) {
    return <h3>No exercises Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {names &&
      names.map(name => (
        <div key={name._id}>
          <h4>{name.exerciseName}</h4>
        </div>
      ))}
      {exercises &&
        exercises.map(exercise => (
          <div key={exercise._id} className="card mb-3">
            <div className="card-header">
            <h4> {exercise.createdAt}</h4>
             <p>{exercise.exerciseName}</p>  
             
            <p>{exercise.weight ? `Weight: ${exercise.weight} lbs` : ' '}</p>
            <p>{exercise.repetitions ? `Repetitions: ${exercise.repetitions}` : ' '}</p>
            <p>{exercise.notes ? `Notes: ${exercise.notes}` : ' '}</p>
            <button>Delete</button>
            </div>

          </div>
        ))}
    </div>
  );
};

export default ExerciseList;
