import React, { useState } from 'react';
// f
import { useMutation, useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import { EDIT_USER } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import '../Signup/style.css'

function EditProfile(props) {
  const [formState, setFormState] = useState({ email: '', username: '' });
  const [editUser] = useMutation(EDIT_USER); 

  const { currentUser, loading} = useQuery(QUERY_ME)

console.log(currentUser);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await editUser({
      variables: {
        email: formState.email || currentUser.me.email,
        username: formState.username || currentUser.me.username
      },
    });
    const token = mutationResponse.data.editUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  if(loading){
    return (<div> its loading chump</div>)
  }

  if (!currentUser && !loading){
    return (<div> You are not signed in chump</div>)
  }

  return (
    <div className='entry-container'>
      <div className='entry-form'>

      <h2>Edit Profile</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="inputs">
          <label htmlFor="username">Username:</label>
          <input
            placeholder= {currentUser.me.username} 
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="inputs">
          <label htmlFor="email">Email:</label>
          <input
            placeholder={currentUser.me.email}
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        
        <div className="inputs submit-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    </div>
    
  );
}

export default EditProfile;