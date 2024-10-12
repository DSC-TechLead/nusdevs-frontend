import React from 'react'

const ProjectList: React.FC = () => {
  return (
    <div>
        <div style={{ 
          display: 'flex',           // Use flexbox layout
          alignItems: 'center',      // Center items vertically
          padding: '10px',           // Add padding to the container
          maxWidth: '100%',          // Ensure the container does not exceed the screen width
          boxSizing: 'border-box',    // Include padding in the element's total width
          overflow: 'hidden',         // Prevent overflow of the container
        }}>
          <input style={{ 
            padding: "10px",         // Vertical padding for the input
            border: "2px solid black", 
            borderRadius: "30px",  
            flex: '1',               // Allow input to grow and take available space
            marginRight: '10px',     // Gap between input and button
            minWidth: "0",          // Prevent input from overflowing
            maxWidth: "calc(100% - 120px)" // Adjust max width based on button's estimated width
            }}
            placeholder='What are you looking for...'
          />
          <button style={{
            padding: "10px 20px",     // Padding for the button
            border: "none", 
            borderRadius: "30px",    
            backgroundColor: "#208EEA", 
            color: "white",
            minWidth: "100px",       // Minimum width for the button
            height: "100%",          // Make button height match input height
          }}>
            Search
          </button>
        </div>

    </div>
  )
}

export default ProjectList;