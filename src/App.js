import React, {useState}from 'react'

const App = () => {
 const [contact,setTable]=useState([
  {FirstName:'Jayanth', LastName: 'Reddy',  EmailAddress: 'Jayanthchintu@gmail.com'},
  {FirstName:'Likith', LastName: 'Royal',  EmailAddress: 'Likith@gmail.com'},
  {FirstName:'Fahad', LastName: 'shaik',  EmailAddress: 'Fahad@gmail.com'},
 ])

  return (
    <div>
      <table border='1' style={{width:'100%,', textAlign:'left'}}>
      <tr>
      <th>FirstName</th>
      <th>LastName</th>
      <th>EmailAddress</th>
      </tr>
      {contact.map((contact,name)=>(
        <tr key={name}>
        <td>{contact.FirstName}</td>
        <td>{contact.LastName}</td>
        <td>{contact.EmailAddress}</td>
        </tr>
      ))}
      </table>
      

    </div>
  )
}

export default App









