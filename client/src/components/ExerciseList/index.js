import React from 'react';
import './style.css';
import Moment from 'moment'

const ExerciseList = ({ exercises = [] }) => {
  console.log(exercises);
  // const [date, setDate] = useState(new Date());
  if (!exercises.length) {
    return <h3>No exercises Yet</h3>;
  }

  return (
    <div className="workout-log">
      <div id="workout-log-title">
      <h1>Workout Log</h1>
      </div>
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
      <div className="card">
      {exercises &&
        exercises.map(el => (
          <div key={el._id} className="">
            <div className="card-header">
              <div className='p'><div className='list-element'>Exercise:  </div>{el.exerciseCategory.exerciseName}</div>
              <div className='p'><div className='list-element'>Date:  </div>{new Date(parseInt(el.createdAt)).toLocaleDateString()}</div>
              <div className='p'><div className='list-element'>Repetitions:  </div>{el.repetitions}</div>
              <div className='p'><div className='list-element'>Weight:  </div>{el.weight}lbs</div>
              <div className='p'><div className='list-element'>Notes:  </div>{el.notes}</div>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
};

export default ExerciseList;
