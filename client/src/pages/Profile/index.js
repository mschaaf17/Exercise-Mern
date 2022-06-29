import React, { useEffect, useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import { EDIT_USER } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
//this imports the style from signup page so that they have a similar look
import '../Signup/style.css';
import Footer from '../../components/Footer/index.js'


function Profile(props) {
  //see mutations but it tells it what data to display and edit
  const [editUser] = useMutation(EDIT_USER);

  // useEffect(() => {
    //this gets the data from the backend see querey me 
  const { data: currentUser, loading } = useQuery(QUERY_ME);
  // if (!loading) {
  //   setFormState({
  //     email: currentUser?.me?.email,
  //     username: currentUser?.me?.username,
  //   });
  // }
  // });

  const [formState, setFormState] = useState({
    email: '',
    username: '',
  });
//this handles the form as a whole so once the submit btn is clicked it will update the changes to the user
  const handleFormSubmit = async event => {
    event.preventDefault();
    const mutationResponse = await editUser({
      variables: {
        email: formState.email || currentUser?.me?.email,
        username: formState.username || currentUser?.me?.username,
      },
    });

    const token = mutationResponse.data.editUser.token;
    Auth.login(token);
  };

  //this handles the change of the items inside each unique input field
  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  console.log(formState);
//show for if you are not logged in
  if (!currentUser) {
    return <div> You are not signed in</div>;
  }

  if (loading) {
    return <div>loading</div>;
  }

  //   setFormState({
  //     email: currentUser?.me?.email,
  //     username: currentUser?.me?.username,
  //   });
  return (
    <div className="entry-container">
      <div className="entry-form">
        <h2>Edit Profile</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="inputs">
            <label htmlFor="username">Username:</label>
            <input
              value={formState.username}
              placeholder={currentUser?.me?.username}
              name="username"
              type="username"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div className="inputs">
            <label htmlFor="email">Email:</label>
            <input
              value={formState.email}
              placeholder={currentUser?.me?.email}
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
      <Footer/>
    </div>   
  
  );
}

export default Profile;
