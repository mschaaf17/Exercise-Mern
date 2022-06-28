import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_EXERCISE, ADD_EXERCISE_NAME, REMOVE_EXERCISE, SAVE_TIME } from '../../utils/mutations';
import { QUERY_EXERCISES, QUERY_NAMES } from '../../utils/queries';
import ExerciseList from '../../components/ExerciseList';
import ExerciseNameForm from '../../components/ExerciseName';
import './index.css';
import moment from 'moment';

export default function Workout() {
  const [time, setTime] = useState(0);

  const [timerOn, setTimerOn] = useState(false);
  // const [stopTime, setStopTime] = useState(0);
  // const [date, setDate] = useState(new Date());
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


  // submit time
  // figure out how to grab time state!
  const [saveTime] = useMutation(SAVE_TIME)
  const submitTime = async ({time}) =>{
    
    try {
      await saveTime({
        variables: { time }
      })
    } catch (e) {
      console.log(error)
    }
    console.log({time})
    console.log('submitting time')
  }

 

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
        console.log(exercises);

        // console.log(exercises.exercises);
        console.log(addExercise);

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

  // add a new exercise name
  const [addExerciseNameState, setExerciseNameState] = useState('');
  const [addExerciseName] = useMutation(ADD_EXERCISE_NAME);

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
  // delete logged exercise
  const [removeExercise] = useMutation(REMOVE_EXERCISE)
  const deleteExercise = async (_id) => {
    // event.preventDefault();
    console.log(_id)
    try {
      await removeExercise({
        variables: { _id },
      });
      
    } catch (e) {
      console.log(error);
    }
    console.log('submit');
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
          <div className="border_bottom">
            {/* timer section */}
            <div className="workout-container" id="timer-container">
              <h1>Working Out? Start Timer!</h1>
              <div id="hms">
                <span>
                  {('0' + Math.floor((time / 3600000) % 60)).slice(-2)}:
                </span>
                <span>
                  {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
                </span>
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
                <button onClick = {submitTime}>Save</button>
              </div>
            </div>
          </div>
          {/* <div>
            <ExerciseNameForm />
          </div> */}
          {/* enter exercise area */}
          <div className="workout-container" id="log-container">
            <h1>Log your Workout</h1>
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
          {/* only display exerciseList when user has exercise logs */}

          <div className="" id="saved-workouts">
            <ExerciseList exercises={allExercises?.exercises.exercises} deleteExercise ={deleteExercise} />
          </div>
        </div>
      </div>
      <footer className="">
        <div className="footer-container">
          &copy;{new Date().getFullYear()} by Cannibal Coders
        </div>
      </footer>
    </>
  );
}
