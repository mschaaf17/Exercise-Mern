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
      <form>
        <input placeholder="Exercise Name" name="exerciseName" type="text" value= 'exerciseName'/>
        <input placeholder="weight" name="weight" type="text" value= 'weight'/>
        <input placeholder="repetitions" name="repetitions" type="text" value= 'repetitions'/>
        <p placeholder="cardioTime" name="cardioTime" type="text" value= {time}>   <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span></p>
        <textarea placeholder="notes" name="notes" type="text" value= 'notes'/>
        <button type="submit">Submit</button>
      </form>
    </div>
    <h1>Workout Log</h1>
    <div>
        6/21/22
    </div>
    <div>
        <span>30:01</span>
        <span>running, push ups</span>
    </div>
    </div>
  )
}
