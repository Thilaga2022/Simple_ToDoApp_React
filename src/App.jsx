import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Initial list of activities (todo items)
  const [list, setList] = useState([])

  // Function to delete an activity by its ID
  function handleDelete(removeid) {
    // Filter out the item with the matching ID
    var tempArr = list.filter(function (item) {
      if (item.id == removeid) {
        return false
      } else {
        return true
      }
    })
    // Update the list with the filtered array
    setList(tempArr)

     // If the list will become empty after deletion, show alert
  if (tempArr.length === 0) {
    alert("Meow-velous job! 🐾 All tasks done 😺");
  }
  }

  // State to track new user input for adding a todo
  const [newitem, setnewitem] = useState("")

  // Function to update the newitem state as user types
  function getinput(event) {
    setnewitem(event.target.value)
  }

  // Function to add a new activity to the list
  function addactivitytolist() {
    // Add the new item with a unique ID
    setList([...list, { id: list.length + 1, activity: newitem }])
    
    // Clear the input field after adding
    setnewitem("")
   
  }

  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{color:'white'}}>Todo List</h1>

      {/* Input field to take user activity */}
      <input style={{padding:'10px',border:'1px solid',outline:'none',borderRadius:'5px',width:'25%'}}
        onChange={getinput} 
        type="text" 
        value={newitem} 
        placeholder='Enter Activity' 
      />

      {/* Button to add the new activity */}
      <button 
        onClick={addactivitytolist} 
        style={{ marginLeft: '10px',padding:'10px',background:'tomato',width:'8%',borderRadius:'5px',color:'white' }}
      >
        Add
      </button>

      {/* Display the list of activities */}
      <ul style={{listStyle:'none'}}>
        {
          list.map(function (item) {
            return (
              <li key={item.id} style={{ margin: '10px' }}>
                {item.activity}

                {/* Button to delete the specific activity */}
                <button 
                  onClick={() => { handleDelete(item.id) }} 
                  style={{ marginLeft: '10px',background:'yellow',padding:'5px',borderRadius:'5px' }}
                >
                  Delete
                </button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App
