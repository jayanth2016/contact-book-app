import React,{useState} from 'react'
import"./App.css";
const App = () => {
const [model,setModel] = useState (false)
const [name,setName] = useState ('')
const [contact,setContact] = useState ('')
const [contactbook,setContactbook]= useState ([])
const [email,setEmail] = useState ('')
const handleSubmit =(e)=> {
    e.preventDeault();
    if(name && contact && email){
        setContactbook(...contact, {name, contact, email})
        setName('');
        setContact('');
        setModel(false)
    }

}

  return (

    <div className='BOOK'>
    <div className='APP'>
      <h1>Contact-book</h1>
      <button onClick={()=>setModel(true)} className='button'>Create Contact</button>
      </div>
      {model && (
        <div className='model-over'> 
        <div className='model'>
        <h1 className='add'>Add Contact</h1>
        <form onSubmit={handleSubmit}>
         <div>
        <label>Name:</label>
        <input 
        placeholder='Enter your name'
         type='name'
          value={name} 
          required 
          className='input'
          onChange={(e) => setName(e.target.value)}
          >
        </input>

        </div>
        <div>
        <label >Contact:</label>
        <input 
        placeholder='Enter your Number'
         type='number'
          value={contact} 
          required className='input '
          onChange={(e) => setContact(e.target.value)}>
        </input>
        </div>
        <div>
        <label >email:</label>
        <input 
        placeholder='Enter your email'
         type='email'
          value={email} 
          required className='input'
          onChange={(e) => setEmail(e.target.value)}
         >
        </input>
        </div>
        <div>
        <button className='button'> Submit</button>
        <button onClick={()=>setModel(false)} className='button'> close</button>
        </div>
        </form>
        </div>

        </div>

      )}
    </div>
    
  )
}

export default App






