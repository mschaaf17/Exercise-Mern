import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_EXERCISE_NAME } from '../../utils/mutations';

const ExerciseNameForm = () => {
  const [exerciseName, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addExerciseName, { error }] = useMutation(ADD_EXERCISE_NAME)

  // update state based on form input changes
  const handleNameChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleNameSubmit = async (event) => {
    event.preventDefault();

    try {
      await addExerciseName({
        variables: { exerciseName },
      });

      // clear form value
      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className= "exerciseNameLog">
      <p
        className={`nameLog ${characterCount === 280 || error ? 'text-error' : ''}`}
      >
        Logging a new Exercise? <br></br>Enter Exercise Name {' '}
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        onSubmit={handleNameSubmit}
      >
        <input className ="nameText"
          placeholder="New Exercise Name"
          value={exerciseName}
          onChange={handleNameChange}
        ></input>
        <button className="btn"type="submit">
          Add Exercise to List
        </button>
      </form>
    </div>
  );
};

export default ExerciseNameForm;
