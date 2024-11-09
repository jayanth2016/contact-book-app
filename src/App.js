import React,{useState} from 'react'

const App = () => {
  const  [contacts, setContacts] = useState([
    { id: 1, firstName: 'Jayanth', lastName: 'Kotapalli', email: 'jayanth@gmail.com' },
    { id: 2, firstName: 'Rohan', lastName: 'Teja', email: 'rohan@gmail.com' },
    { id: 3, firstName: 'Siva', lastName: 'Mani', email: 'sivagmail.com' },
  ]);

  return (
    <div>
    <button>Create Contact</button>
    <ul>
        {contacts.map((contact) => (
          <p key={contact.id}>
            <p><strong>firstName:</strong>{contact.firstName}, <strong>lastName: </strong>{contact.lastName},</p> 
            <strong>Email:</strong> {contact.email}
          </p>
        ))}
      </ul>
    </div>
  )
}

export default App






