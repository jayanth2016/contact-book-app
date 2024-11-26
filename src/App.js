import React, {useState}from 'react'
const App = () => {
 const [contacts,setContacts] = useState ()
 const [showform,setShowForm] = useState (false)
 const [contact,setContact]=useState([
  {Name:'Swaroop',    surName: 'Reddy',    EmailAddress: 'swaroopchintu@gmail.com'},
  {Name:'Dhanush',    surName: 'Royal',    EmailAddress: 'Dhanush@gmail.com'},
  {Name:'Deekshith',  surName: 'Sirish',   EmailAddress: 'Deekshith@gmail.com'},
 ])

  const [newContact, setNewContact] = useState({  Name: '', surName: '',EmailAddress: '', });

  const handleContac = () => {
    setContact([...contact, newContact]);
    setNewContact({ Name: '', surName: '', EmailAddress: '' }); 
    setShowForm(false); 
  };

  return (
      <div>
      <button onClick={()=> setShowForm(true)}>Add contact</button>
      {!showform ? ( <table border='1' style={{width:'100%,', textAlign:'left'}}>                                                                                                                                                                                                                                                                  
      <tr>
      <th>Serial Number</th>
      <th>FirstName</th>
      <th>LastName</th>
      <th>EmailAddress</th>
      </tr>
      {contact.map((contact,index)=>(
        <tr key={index}>
        <td>{index+1}</td>
        <td>{contact.Name}</td>
        <td>{contact.surName}</td>
        <td>{contact.EmailAddress}</td>
        </tr>
      ))}
      </table>) : 
     
      
     <div>

<input
  type="text"
  name="name"
  placeholder="Name"
  onChange={(e => setNewContact({...newContact,Name : e.target.value}))} 

/>
<br />
<input
  type="text"
  name="surname"
  placeholder="Surname"
  onChange={(e => setNewContact({...newContact,surName : e.target.value}))} 

/>
<br />
<input
  type="email"
  name="email"
  placeholder="Email"
  onChange={(e => setNewContact({...newContact,EmailAddress : e.target.value}))} 

/>
<br />
<button onClick={handleContac}>Save Contact</button>
</div>
}
    
   </div>

  )
}

export default App

