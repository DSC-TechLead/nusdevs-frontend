import React, { useState } from 'react'

const ProjectList: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(-3)
  const [selectedLanguage, setSelectedLanguage] = useState(-3)
  const [selectedSort, setSelectedSort] = useState(-3)

  return (
    <div>
        <div style={{ 
          display: 'flex',           
          alignItems: 'center',      
          padding: '10px',          
          maxWidth: '100%',              
          overflow: 'hidden',        
        }}>
          <input style={{ 
            padding: "10px",         
            border: "2px solid black", 
            borderRadius: "30px",  
            flex: '1',               
            marginRight: '10px',     
            minWidth: "0",          
            maxWidth: "calc(100% - 120px)" 
            }}
            placeholder='What are you looking for...'
          />
          <button style={{
            padding: "10px 20px",     
            border: "none", 
            borderRadius: "30px",    
            backgroundColor: "#208EEA", 
            color: "white",
            minWidth: "100px",      
            height: "100%",        
          }}>
            Search
          </button>
        </div>
        <div style={{
          display: 'flex',           
          alignItems: 'center',      
          padding: '10px',          
          maxWidth: '100%',              
          overflow: 'hidden',
          justifyContent: 'center'
        }}>
          <select style={{
            borderRadius: "30px", 
          }}
          value={selectedOption}
          onChange={(e) => {
            const inputValue = Number(e.target.value);
            setSelectedOption(inputValue)
          }}
          >
            <option value={-3}>Projects</option>
            <option value={-2}>Item 2</option>
            <option value={-1}>Item 3</option>
          </select>

          <div style={{
            height: '20px', 
            width: '1px',
            backgroundColor: 'black',
            margin: '0 10px' 
          }} />

          <select style={{
              borderRadius: "30px", 
              marginRight: "10px"
            }}
            value={selectedLanguage}
            onChange={(e) => {
              const inputValue = Number(e.target.value);
              setSelectedLanguage(inputValue)
            }}
          >
            <option value={-3}>Java</option>
            <option value={-2}>Python</option>
            <option value={-1}>C</option>
          </select>

          <select style={{
              borderRadius: "30px"
          }}
            value={selectedSort}
            onChange={(e) => {
              const inputValue = Number(e.target.value);
              setSelectedLanguage(inputValue)
            }}
            >
              <option value={-3}>Date posted</option>
          </select>

          <div style={{
            height: '20px', // Adjust height to match the select height
            width: '1px',
            backgroundColor: 'black',
            margin: '0 10px' // Space around the separator
          }} />

          <button style={{
              borderRadius: "30px",
              backgroundColor: 'white',
              border: '1px solid'
          }}>
            All Filters
          </button>
        </div>
    </div>
  )
}
export default ProjectList;
