import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  ADD_EXERCISE,
  ADD_EXERCISE_NAME,
  REMOVE_EXERCISE,
} from '../../utils/mutations';
import { QUERY_EXERCISES, QUERY_NAMES } from '../../utils/queries';
import ExerciseList from '../../components/ExerciseList';
import './index.css';
// import moment from 'moment';
import armWorkouts from '../../assets/images/arm-workout.png';
import legWorkouts from '../../assets/images/leg-workout.png';
import abWorkouts from '../../assets/images/ab-workout.png';

export default function Workout() {
  const [time, setTime] = useState(0);

  const [timerOn, setTimerOn] = useState(false);

  const exerciseSrc = {
    arms: armWorkouts,
    legs: legWorkouts,
    abs: abWorkouts,
  };
  const handleClickStop = () => {
    setTimerOn(false);
    // setStopTime(time);
    // setDate(new Date());
  };

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1000);
      }, 1000);
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

  // add exercises log
  const [addExercise, { error }] = useMutation(ADD_EXERCISE, {
    update(cache, { data: { addExercise } }) {
      try {
        const { exercises } = cache.readQuery({ query: QUERY_EXERCISES });
        cache.writeQuery({
          query: QUERY_EXERCISES,
          data: {
            exercises: {
              ...exercises,
              exercises: [...exercises.exercises, { ...addExercise }],
            },
          },
        });
      } catch (e) {
        console.log('err: ', e);
      }
    },
  });

  //get exercise names
  const { data } = useQuery(QUERY_NAMES);
  const exerciseNames = data?.exerciseNames || [];

  //get all the exercises
  const { data: allExercises } = useQuery(QUERY_EXERCISES);

  // update state based on input changes
  const handleChange = event => {
    const { name, value } = event.target;

    setExerciseState({
      ...exerciseState,
      [name]: value,
    });
  };

  // example workouts

  let initialState = {
    legs: false,
    arms: false,
    abs: false,
  };

  const [state, setState] = useState(initialState);

  // delete logged exercise
  const [removeExercise] = useMutation(REMOVE_EXERCISE, {
    update(cache, { data: { removeExercise } }) {
      try {
        const { exercises } = cache.readQuery({ query: QUERY_EXERCISES });
        cache.writeQuery({
          query: QUERY_EXERCISES,
          data: {
            exercises: {
              ...exercises,
              exercises: [
                ...exercises.exercises.filter(
                  el => el._id !== removeExercise._id
                ),
              ],
            },
          },
        });
      } catch (e) {
        console.log('err: ', e);
      }
    },
  });

  const deleteExercise = async _id => {
    // event.preventDefault();
    console.log(_id);
    try {
      await removeExercise({
        variables: { _id },
      });
    } catch (e) {
      console.log(error);
    }
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
          time: time / 1000,
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

  return (
    <>
      <div className="flex">
        <div className="workout_timer">
          {/* timer section */}
          <div className="workout-container" id="timer-container">
            <h1>Working Out? Start Timer!</h1>
            <div id="hms">
              <span>
                {('0' + Math.floor((time / 3600000) % 60)).slice(-2)}:
              </span>
              <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
              <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
              {/* <span>{("0" + ((time / 10) % 100)).slice(-2)}</span> */}
            </div>

            <div className="button-container">
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
              {/* <button onClick = {submitTime}>Save</button> */}
            </div>
          </div>
        </div>

        <div className="workout-container" id="log-container">
          <h1>Log Your Workout</h1>
          <div id="exercise-container">
            <form className="submit_log" onSubmit={handleFormSubmit}>
              <div id="exercise-form">
                <div className="exercise-input">
                  <input
                    id="type"
                    type="text"
                    list="typelist"
                    name="exerciseName"
                    autoComplete="off"
                    placeholder="Add/Select Exercise"
                    value={exerciseState.exerciseName}
                    onChange={handleChange}
                  />
                  <datalist id="typelist">
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
                  </datalist>
                </div>

                <input
                  className="exercise-input"
                  placeholder="Weight"
                  name="weight"
                  autoComplete="off"
                  type="text"
                  value={exerciseState.weight}
                  onChange={handleChange}
                />
                <input
                  className="exercise-input"
                  placeholder="Repetitions"
                  autoComplete="off"
                  name="repetitions"
                  type="text"
                  value={exerciseState.repetitions}
                  onChange={handleChange}
                />

                <textarea
                  className="exercise-textarea"
                  placeholder="Notes"
                  name="notes"
                  type="text"
                  value={exerciseState.notes}
                  onChange={handleChange}
                />
              </div>
              <div className="button-container">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
        {/* example exercises */}
        <div className="example-workouts">
          <h1>Not Ready To Log?</h1>
          <p> Check out these workouts!</p>
          <div className="examples">
            {Object.keys(state).map(el => (
              <div key={el}>
                <button
                  onClick={() => {
                    initialState = { legs: false, arms: false, abs: false };
                    if (state[el]) {
                      setState(initialState);
                    } else {
                      initialState[el] = true;
                      setState(initialState);
                    }
                  }}
                >
                  {el.toUpperCase()}
                </button>
                {state[el] ? (
                  <div className="example-picture">
                    <img src={exerciseSrc[el]} alt="arm workout plan" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* only display exerciseList when user has exercise logs */}
        <div className="" id="saved-workouts">
          <ExerciseList
            exercises={allExercises?.exercises.exercises}
            deleteExercise={deleteExercise}
          />
        </div>
      </div>
    </>
  );
}
