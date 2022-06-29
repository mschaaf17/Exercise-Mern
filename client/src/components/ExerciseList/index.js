import React from 'react';
import './exerciselist.css';

const ExerciseList = ({ exercises = [], deleteExercise }) => {
  if (!exercises.length) {
    return <h1>No Exercises Yet</h1>;
  }

  return (
    <div className="workout-log">
      <div id="workout-log-title">
        <h1>Workout Log</h1>
      </div>
      <div className="cards">
        {exercises &&
          exercises.map(el => (
            <div key={el._id} className="card">
              <div className="card-header">
                <div className="list-element">
                  <p className="title">Exercise: </p>
                  <p>{el.exerciseCategory.exerciseName}</p>
                </div>

                <div className="list-element">
                  <p className="title">Date: </p>
                  <p>{new Date(parseInt(el.createdAt)).toLocaleDateString()}</p>
                </div>

                {el.repetitions && (
                  <div className="list-element">
                    <p className="title">Repetitions: </p>
                    <p>{el.repetitions}</p>
                  </div>
                )}
                {el.weight && (
                  <div className="list-element">
                    <p className="title">Weight: </p>
                    <p> {el.weight} lbs</p>
                  </div>
                )}
                {el.notes && (
                  <div className="list-element">
                    <p className="title">Notes: </p>
                    <p>{el.notes}</p>
                  </div>
                )}
              </div>
              <button
                className="workout-delete"
                onClick={() => deleteExercise(el._id)}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ExerciseList;
