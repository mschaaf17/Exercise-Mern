import React from 'react';
import './style.css';

const ExerciseList = ({ exercises = [] }) => {
  console.log(exercises);
  // const [date, setDate] = useState(new Date());
  if (!exercises.length) {
    return <h3>No exercises Yet</h3>;
  }

  return (
    <div className="workout-log">
      <h3>Workout Log</h3>
      {/* <div>{date.toLocaleDateString()}</div>
      <div>
        <span value={stopTime}>
          <span>
            {('0' + Math.floor((stopTime / 3600000) % 60)).slice(-2)}:
          </span>
          <span>{('0' + Math.floor((stopTime / 60000) % 60)).slice(-2)}:</span>
          <span>{('0' + Math.floor((stopTime / 1000) % 60)).slice(-2)}</span>
        </span>
        <span>createdAt</span>
      </div> */}
      {exercises &&
        exercises.map(el => (
          <div key={el._id} className="card mb-3">
            <div className="card-header">
              {/* <p>{el.exerciseCategory.exerciseName}</p> */}
              <p>Date:{el.createdAt}</p>
              <p>Repetition:{el.repetitions}</p>
              <p>Weight:{el.weight} lbs</p>
              <p>Note:{el.notes}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ExerciseList;
