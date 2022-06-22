import React, {useEffect, useState} from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { ADD_EXERCISE } from '../../utils/mutations'
import { ADD_USER_EXERCISE } from '../../utils/mutations'
import { REMOVE_USER_EXERCISE } from '../../utils/mutations'
import { QUERY_EXERCISES } from '../../utils/queries'

export default function Workout() {
    const [time, setTime] = useState(0)
    const [timerOn, setTimerOn] = useState(false)

    useEffect(()=> {
        let interval = null;

        if (timerOn) {
            interval = setInterval(()=> { 
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)

    }, [timerOn])

    const [exerciseState, setExerciseState] = useState({
        exerciseName: ''
    })
    const [addExercise] = useMutation(ADD_EXERCISE)

    const [exerciseInfoState, setExerciseInfoState] = useState({
      weight: '',
      repetitions: '',
      notes: '',
    })
    const [addUserExercise] = useMutation(ADD_USER_EXERCISE)


    // update state based on input changes
    const handleChange = (event) => {
        const {name, value} = event.target
        setExerciseState({
            ...exerciseState,
            [name]: value
        })
        setExerciseInfoState({
            ...exerciseInfoState,
            [name]: value
        })
    }

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault()

        try {
            const {data} = await addExercise({
                variables: {...exerciseState}
            })
            const {moreData } = await addUserExercise({
                variables: {...exerciseInfoState}
            })
            console.log({data})
            console.log({moreData})
        }
        catch (e) {
            console.error (e)
        }
        // clear all values
        setExerciseState({
            exerciseName: ''
        })
        setExerciseInfoState({
            weight: '',
            repetitions: '',
            notes: ''
        })
        console.log('Submitted!')
    }


    // logged exercises form 
    // if(!data.length) {
    //     return <h3>No exercises logged yet.</h3>
    // }

  return (
    <div>
        This is the workout page!
        <div className='border'>
    {/* timer section */}
        <h1>Working Out? Start Timer!</h1>
        <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        {/* <span>{("0" + ((time / 10) % 100)).slice(-2)}</span> */}

        <div>
            {!timerOn && time === 0 && (
            <button onClick={() => setTimerOn(true)}>Start</button>
            )}
            {timerOn && (
             <button onClick={() => setTimerOn(false)}>Stop</button>
            )}
      
                {!timerOn && time !== 0 && (
        <button onClick={() => setTimerOn(true)}>Resume</button>

                )}

                {!timerOn && time > 0 && (
        <button onClick={() => setTime(0)}>Reset</button>

                )}
        </div>
        </div>

        {/* enter exercise area */}
    <div className="border">
      <h1>Log your Workout</h1>
      <form onSubmit = {handleFormSubmit}>
        <input placeholder="Exercise Name" name="exerciseName" type="text" value= {exerciseState.exerciseName} onChange = {handleChange}/>
        <input placeholder="weight" name="weight" type="text" value= {exerciseInfoState.weight} onChange = {handleChange}/>
        <input placeholder="repetitions" name="repetitions" type="text" value= {exerciseInfoState.repetitions} onChange = {handleChange}/>
        <p placeholder="cardioTime" name="cardioTime" type="text" value= {time}>   <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span></p>
        <textarea placeholder="notes" name="notes" type="text" value= {exerciseInfoState.notes} onChange = {handleChange}/>
        <button type="submit">Submit</button>
      </form>
    </div>

    <div>
    <h1>Workout Log</h1>
    <div>
    date the workout was logged
    </div>
    <div>
        <span>{time}</span>
        <span>createdAt</span>
    </div>
    </div>
    </div>
  )
}
