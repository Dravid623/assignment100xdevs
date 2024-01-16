import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <Card
        name="Dravid"
        discription="I am developer"
        interests={["Coding", "Reading", "Gaming"]}
      ></Card>
    </>
  );
}

const Card = (props) => {
  return (
    <div>
      <h1>Business Card</h1>
      <div style={styles.card}>
        <h2 style={styles.name}>{props.name}</h2>
        <p style={styles.description}>{props.discription}</p>
        <h4 style={styles.interestsHeader}>Interest</h4>
        <ul style={styles.interestItem}>
          {props.interests.map((interest, index) => (
            <li key={index} style={styles.interestItem}>{interest}</li>
          ))}
        </ul>
        <div style={styles.socialLinks}>
          <a href={props.linkedin} style={styles.link}>Linkedin</a>
          <br></br>
          <a href={props.twitter} style={styles.link}>Twitter</a>
        </div>
      </div>
    </div>
  );
};

  // Styles
  const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px',
      maxWidth: '400px',
      backgroundColor: '#f8f9fa'
    },
    name: {
      fontSize: '24px',
      marginBottom: '10px',
      color: '#333',
    },
    description: {
      fontSize: '16px',
      color: '#555',
      marginBottom: '15px',
    },
    socialLinks: {
      display: 'flex',
      marginBottom: '15px',
    },
    link: {
      textDecoration: 'none',
      color: '#fff', // Text color
      padding: '10px 15px', // Padding for the button
      borderRadius: '5px', // Border radius for rounded corners
      backgroundColor: '#007BFF', // Background color for the button
      display: 'inline-block', // Display as inline-block to be side by side
      margin: '10px', // Margin between buttons
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
    },
    interestsHeader: {
      fontSize: '18px',
      marginBottom: '10px',
      color: '#333',
    },
    interestsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    interestItem: {
      fontSize: '14px',
      marginBottom: '5px',
      color: '#555',
    },
  };

export default App;
