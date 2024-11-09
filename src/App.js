import React,{useState} from 'react'

const App = () => {
  const  [contact, setContacts] = useState([
    { id: 1, firstName: 'Jayanth', lastName: 'Kotapalli', email: 'Jayanth@gmail.com' },
    { id: 2, firstName: 'Rohan', lastName: 'Teja', email: 'Rohan@gmail.com' },
    { id: 3, firstName: 'Siva', lastName: 'Mani', email: 'Siva@gmail.com' },
  ]);

  return (
    <div>
    <button>Create Contact</button>
    <ul>
      {contact.map ((contact) => (
        <p key={contact.id}>
        <p> <p><strong>firstName:</strong>{contact.firstName}, 
              <strong>lastName: </strong>{contact.lastName},</p> 
              <strong>Email:</strong> {contact.email}
          </p>  
        </p>
      ))}
    </ul>
    </div>
  )
}

export default App






