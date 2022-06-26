import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_EXERCISE } from '../../utils/mutations';
// import { ADD_USER_EXERCISE } from '../../utils/mutations'
// import { REMOVE_USER_EXERCISE } from '../../utils/mutations'
import { QUERY_EXERCISES } from '../../utils/queries';
import ExerciseList from '../../components/ExerciseList';
// import './index.css';

export default function Workout() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  const [exerciseState, setExerciseState] = useState({
    exerciseName: '',
    weight: '',
    repetitions: '',
    notes: '',
  });
  const [addExercise] = useMutation(ADD_EXERCISE);

  const { loading, data } = useQuery(QUERY_EXERCISES);
  console.log(data);
  const exercises = data?.exercises || [];
  console.log(exercises);

  // update state based on input changes
  const handleChange = event => {
    const { name, value } = event.target;
    setExerciseState({
      ...exerciseState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();
    // query exercises isnt of mutations
    try {
      const { data } = await addExercise({
        variables: { ...exerciseState },
      });

      console.log({ data });
    } catch (e) {
      console.error(e);
    }
    // clear all values
    setExerciseState({
      exerciseName: '',
      weight: '',
      repetitions: '',
      notes: '',
    });

    console.log('Submitted!');
  };

  // logged exercises form
  // if(!data.length) {
  //     return <h3>No exercises logged yet.</h3>
  // }

  return (
    <>
      <div>
        This is the workout page!
        <div className="flex">
          <div className="workout_timer">
            <div className="border_bottom">
              {/* timer section */}
              <h1>Working Out? Start Timer!</h1>
              <span>
                {('0' + Math.floor((time / 3600000) % 60)).slice(-2)}:
              </span>
              <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
              <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
              {/* <span>{("0" + ((time / 10) % 100)).slice(-2)}</span> */}

              <div>
                {!timerOn && time === 0 && (
                  <button className="green" onClick={() => setTimerOn(true)}>
                    Start
                  </button>
                )}
                {timerOn && (
                  <button className="red" onClick={() => setTimerOn(false)}>
                    Stop
                  </button>
                )}

                {!timerOn && time !== 0 && (
                  <button className="green" onClick={() => setTimerOn(true)}>
                    Resume
                  </button>
                )}

                {!timerOn && time > 0 && (
                  <button className="yellow" onClick={() => setTime(0)}>
                    Reset
                  </button>
                )}
              </div>
            </div>

            {/* enter exercise area */}
            <div>
              <h1>Log your Workout</h1>
              <form className="submit_log" onSubmit={handleFormSubmit}>
                <input
                  placeholder="Exercise Name"
                  name="exerciseName"
                  type="text"
                  value={exerciseState.exerciseName}
                  onChange={handleChange}
                />
                <input
                  placeholder="weight"
                  name="weight"
                  type="text"
                  value={exerciseState.weight}
                  onChange={handleChange}
                />
                <input
                  placeholder="repetitions"
                  name="repetitions"
                  type="text"
                  value={exerciseState.repetitions}
                  onChange={handleChange}
                />
                <p
                  placeholder="cardioTime"
                  name="cardioTime"
                  type="text"
                  value={time}
                >
                  {' '}
                  <span>
                    {('0' + Math.floor((time / 3600000) % 60)).slice(-2)}:
                  </span>
                  <span>
                    {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
                  </span>
                  <span>
                    {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
                  </span>
                </p>
                <textarea
                  placeholder="notes"
                  name="notes"
                  type="text"
                  value={exerciseState.notes}
                  onChange={handleChange}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
          <div className="workout_log">
            <h1>Workout Log</h1>
            <div>date the workout was logged</div>
            <div>
              <span value={time}>
                <span>
                  {('0' + Math.floor((time / 3600000) % 60)).slice(-2)}:
                </span>
                <span>
                  {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
                </span>
                <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
              </span>
              <span>createdAt</span>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <ExerciseList exercises={exercises} title="Exercise Log" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
