import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  // component state
  const [showEvents, setShowEvents] = useState(true)
  const [name, setName] = useState("Dawid")
  const [events, setEvents] = useState([
    {title: "Mario's birthday bash", id: 1},
    {title: "Bowser's live stream", id: 2},
    {title: "Peach's peach", id: 3}
  ])

  //callback function
  const handleClick = () => {
    setName('Elon')
    console.log(name)
  }

  const handleDelete = (id) => {
    setEvents((prev) => {
      return prev.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }

  return (
    <div className="App">
      {
      !showEvents && <div>
        <button onClick={() => setShowEvents(true)}> Show </button>
      </div>}
      {
      showEvents && <div>
        <button onClick={() => setShowEvents(false)}> Hide </button>
      </div>}
      <h1> My name is { name }</h1>
      <button onClick={handleClick} > Change name </button>
      {
        // we're looping over events array
        // for each event we're returning jsx template
        // h3 with a title of the event nested inside a div with a key property set to event's id
        showEvents && events.map((event, index) => 
          (<div key={event.id}> 
            <h3> {index} - {event.title} </h3>
            <button onClick={ () => handleDelete(event.id)}> Delete event </button>
          </div>)
        )
      }
    </div>
  );
}

export default App;
