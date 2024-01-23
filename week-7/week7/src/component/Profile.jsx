const Profile = ()=>{
    return <div style={styles.card}>
        <h2 style={styles.name}>Name</h2>
        <p>age</p>
        <p>Location</p>
        <div style={styles.socialLinks}>
            <h3 style={styles.link}>80K<p >Followers</p></h3>          
            <h3 style={styles.link}>803K<p>Likes</p></h3>          
            <h3 style={styles.link}>1.4K<p>Photos</p></h3>
            
        </div>
    </div>
}


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
  };
export default Profile;