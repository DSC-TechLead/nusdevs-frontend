import { Heart } from 'lucide-react';
import React from 'react'

const ProjectBox: React.FC = () => {
  return (
    <div style={{
        backgroundColor: 'white',
        borderRadius: '10px',
        border: 'none',
        height: '200px',
        padding: '20px',
        margin: '20px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        display: 'flex', // Use flexbox for horizontal layout
        flexDirection: 'row', // Align children in a row
        alignItems: 'flex-start', // Align items to the top
    }}>
        <div style={{
                backgroundColor: 'transparent',
                padding: '10px',
                border: '1px solid',
                width: '50px',
                height: '50px'
        }}/>
        <div style={{
            marginLeft: '20px', // Add space between the inner box and the text
            display: 'flex', // Use flexbox for vertical alignment of text
            flexDirection: 'column', // Stack text elements vertically
            textAlign: 'left', // Align text to the left
            flexGrow: 1 // Allow this div to take the remaining space
        }}>
            <div style={{
                display: 'flex', // Use flexbox for horizontal layout
                justifyContent: 'space-between', // Space between the items
                alignItems: 'center', // Center items vertically
            }}>
                <h3 style={{ margin: '0' }}>Role Title</h3>
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    marginLeft: 'auto' // Push the inner container to the right
                }}>
                    <Heart style={{ marginRight: '10px' }} /> {/* Optional margin for spacing */}
                    <button style={{
                        color: '#208EEA',                // Set text color to blue
                        backgroundColor: 'white',     // Set background color to white
                        border: '1px solid #208EEA',      // Set border to blue with thickness
                        borderRadius: '30px',          // Set rounded edges
                        padding: '5px 10px',
                    }}>Apply</button>
                </div>
            </div>
            <p style={{ margin: '0' }}>Company name / Host name</p>
            <p style={{ margin: '0' }}>Time period: xx/xxxx - xx/xxxx</p>
            <p style={{ margin: '0' }}>Description, description, description</p>
        </div>
    </div>
  )
}

export default ProjectBox;
