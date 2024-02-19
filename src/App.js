import "./App.css"
import { useState } from "react"
import contactsArray from "./contacts.json"


function App() {

  const [contacts, setContacts ] = useState(contactsArray.slice(0,5))

  function addRandomContact(){
    let random
    const randomIndex = Math.floor(Math.random() * contactsArray.length) + 1
    if ((!contactsArray.map(person => person.id).includes((contactsArray[randomIndex])).id)){
      random = randomIndex
    }
    setContacts([...contacts, contactsArray[random]])
  }

  function sortByPopularity(){
    setContacts([...contacts].sort((a,b) => b.popularity - a.popularity))
  }

  function sortByName(){
    setContacts([...contacts].sort((a,b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    }))
  }

  function deleteContact(id){
    setContacts([...contacts].filter( contact => {
     return  contact.id !== id
    }))
    }



  return <div className="App">

    <button onClick={addRandomContact}>Add Random Contact</button>
    <button onClick={sortByPopularity}>Sort By Popularity</button>
    <button onClick={sortByName}>Sort By Name</button>


    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>


        </tr>
      </thead>
        <tbody>
        
        {contacts.map(person => {   
          return (  
            <tr>   
              <td> <img style={{ height: '60px' }} src={person?.pictureUrl} alt="img"/></td>  
              <td>{person.name}</td>  
              <td>{person.popularity}</td>   
              <td>{person.wonOscar ? "🏆" : null}</td> 
              <td>{person.wonEmmy ? "🏆" : null}</td>  
              <button onClick={() => deleteContact(person.id)}>Delete</button>

            </tr>    
          )
        })}

       
        </tbody>
      </table>


  </div>;
}
export default App;
