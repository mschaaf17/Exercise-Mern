import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_EXERCISE } from '../../utils/mutations';
// import { ADD_USER_EXERCISE } from '../../utils/mutations'
// import { REMOVE_USER_EXERCISE } from '../../utils/mutations'
import { QUERY_EXERCISES, QUERY_NAMES } from '../../utils/queries';
import ExerciseList from '../../components/ExerciseList';
import './index.css';
import moment from 'moment';

export default function Workout() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [stopTime, setStopTime] = useState(0);
  const [date, setDate] = useState(new Date());
  const handleClickStop = () => {
    setTimerOn(false);
    setStopTime(time);
    setDate(new Date());
  };

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
    weight: 0,
    repetitions: 0,
    notes: '',
  });

  const [addExercise, { error }] = useMutation(ADD_EXERCISE);

  //get exercise names
  const { data } = useQuery(QUERY_NAMES);
  const exerciseNames = data?.exerciseNames || [];

  //get all the exercises
  const { data: allExercises } = useQuery(QUERY_EXERCISES);
  console.log(allExercises);

  // update state based on input changes
  const handleChange = event => {
    const { name, value } = event.target;
    setExerciseState({
      ...exerciseState,
      [name]: value,
    });
  };

  // handle submit
  const handleFormSubmit = async event => {
    event.preventDefault();
    if (!exerciseState.exerciseName) {
      console.log('invalid input');
      return;
    }

    try {
      const { data } = await addExercise({
        variables: {
          ...exerciseState,
          weight: parseInt(exerciseState.weight),
          repetitions: parseInt(exerciseState.repetitions),
        },
      });
    } catch (e) {
      console.error(e);
    }

    setExerciseState({
      exerciseName: '',
      weight: '',
      repetitions: '',
      notes: '',
    });
  };

  // logged exercises form
  // if(!data.length) {
  //     return <h3>No exercises logged yet.</h3>
  // }

  // hiit workout
  // const [show, setshow] = useState(false)

  // // ab workout
  // const [ab, setAb] = useState(false)

  // const filteredExercises = exerciseNames.filter(exercise => {
  //   const createdAt = moment(exercise.createdAt).startOf('day');
  //   const momentDate = moment(date).startOf('day');
  //   return createdAt.isSame(momentDate);
  // });

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
                  <button className="red" onClick={handleClickStop}>
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
              {/* <h2>
                {exerciseState.weight} {exerciseState.notes}
              </h2> */}
              <form className="submit_log" onSubmit={handleFormSubmit}>
                <select
                  // placeholder="Exercise Name"
                  name="exerciseName"
                  // type="text"
                  defaultValue="default"
                  onChange={handleChange}
                >
                  <option disabled value="default">
                    Select Exercise
                  </option>
                  {exerciseNames &&
                    exerciseNames.map(exerciseName => {
                      if (exerciseName.exerciseName) {
                        return (
                          <option
                            key={exerciseName.exerciseName}
                            id={exerciseName._id}
                          >
                            {exerciseName.exerciseName}
                          </option>
                        );
                      }
                    })}
                </select>

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
                {/* <p
                  placeholder="cardioTime"
                  name="cardioTime"
                  type="text"
                  value={time}
                >
                  {" "}
                  <span>
                    {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
                  </span>
                  <span>
                    {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                  </span>
                  <span>
                    {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                  </span>
                </p> */}
                <textarea
                  placeholder="notes"
                  name="notes"
                  type="text"
                  value={exerciseState.notes}
                  onChange={handleChange}
                />
                <button type="submit">Submit</button>
              </form>
              {/* <div><h3>Not ready to log?</h3>
              <p>Try out some recommended workout videos!</p>

                {!show && (
                     <button onClick ={() => setshow(true)}>Hiit Workout</button>

                )}
                 {show && (
                     <button onClick ={() => setshow(false)}>Close</button>

                )}


              {
               show? <video width="320" height="300" controls>
               <source src= {hiit} type="video/mp4"/>
             Your browser does not support the video tag.
             </video> : null
              }

{!ab && (
                     <button onClick ={() => setAb(true)}>Ab Workout</button>

                )}
                 {ab && (
                     <button onClick ={() => setAb(false)}>Close</button>

                )}


              {
               ab? <video width="320" height="300" controls>
               <source src= {ab} type="video/mp4"/>
             Your browser does not support the video tag.
             </video> : null
              }

              </div> */}
            </div>
          </div>

          {/* only display exerciseList when it exists */}
          {allExercises && (
            <ExerciseList exercises={allExercises.exercises.exercises} />
          )}
        </div>
      </div>
    </>
  );
}
