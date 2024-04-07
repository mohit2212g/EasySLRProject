// userprofile.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const UserProfilePage = () => {
  const userProfilePageStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  };

  const userProfileContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  };

  const updateProfileStyle = {
    width: '45%',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const updateProfileHeadingStyle = {
    marginBottom: '15px',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    color: 'black', // Set label color to black
    marginBottom: '5px', // Adjust if needed
  };

  const inputFieldStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const submitButtonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
  };

  const taskStatisticsStyle = {
    width: '45%',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const taskStatisticsHeadingStyle = {
    marginBottom: '15px',
  };

  const statGroupStyle = {
    marginBottom: '15px',
  };

  const statFieldStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    color: '#333',
  };

  return (
    <div style={userProfilePageStyle}>
      <Header companyName="ProjectManagementApp" userProfile="User Profile" />
      <div style={userProfileContentStyle}>
        <div style={updateProfileStyle}>
          <h2 style={updateProfileHeadingStyle}>Update Profile</h2>
          <form>
            <div style={formGroupStyle}>
            <label htmlFor="name" style={labelStyle}>Name:</label>
              <input type="text" id="name" name="name" style={inputFieldStyle} />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="email" style={labelStyle}>Email:</label>
              <input type="email" id="email" name="email" style={inputFieldStyle} />
            </div>
            <div style={formGroupStyle}>
              <button type="submit" style={submitButtonStyle}>Update</button>
            </div>
          </form>
        </div>
        <div style={taskStatisticsStyle}>
          <h2 style={taskStatisticsHeadingStyle}>Task Statistics</h2>
          <div style={statGroupStyle}>
            <label htmlFor="totalTasks" style={labelStyle}>Total Tasks:</label>
            <input type="text" id="totalTasks" name="totalTasks" readOnly style={statFieldStyle} />
          </div>
          <div style={statGroupStyle}>
            <label htmlFor="onTimeTasks" style={labelStyle}>On Time Complete Tasks:</label>
            <input type="text" id="onTimeTasks" name="onTimeTasks" readOnly style={statFieldStyle} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfilePage;
