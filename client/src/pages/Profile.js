import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom';
// import { LOGIN_USER } from '../utils/mutations';
// import Auth from '../utils/auth';


function EditProfile (){

    const [username, setUsername] = useState('bob');


    return(

        <div>
            <div>
      <p>You clicked {username} </p>
      <button onClick={() => setUsername('james')}>
        Click me
      </button>
    </div>
        </div>
    //     <div className="">
    //   <Link to="/edituser">New user? edituser here</Link>

    //   <h2>Login</h2>
    //   <form onSubmit={handleFormSubmit}>
    //   <div className="">
    //       <label htmlFor="username">User Name:</label>
    //       <input
    //         placeholder="username goes here"
    //         name="username"
    //         type="text"
    //         id="username"
            
    //       />
    //     </div>
    //     <div className="">
    //       <label htmlFor="email">Email address:</label>
    //       <input
    //         placeholder="email@emailaddress.com"
    //         name="email"
    //         type="email"
    //         id="email"
            
    //       />
    //     </div>
    //     <div className="">
    //       <label htmlFor="pwd">Password:</label>
    //       <input
    //         placeholder="******"
    //         name="password"
    //         type="password"
    //         id="pwd"
            
    //       />
    //     </div>
    //     <div className="">
    //       <button type="submit">Submit</button>
    //     </div>
    //   </form>
    // </div>
    )
}

export default EditProfile;



