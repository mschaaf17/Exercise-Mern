// import { useQuery } from '@apollo/client'
// import { QUERY_EXERCISES } from '../utils/queries'

// import React from 'react'

// const displayExercises = () => {
//     const { loading, data } = useQuery(QUERY_EXERCISES)
//     console.log(data)
//     const exerciseData = data?.exercises || {}


//     if (loading) {
//         return <h2>LOADING...</h2>
//     }
    
//     return (
//         <>
//         <h1>Exercises</h1>
//         <div>
//             {exerciseData.exercises.length}
//         </div>
//         <div>
         
//         </div>
//         </>
//     )
// }

// export default displayExercises