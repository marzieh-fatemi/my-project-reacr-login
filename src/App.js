import './App.css';
import React, {useState} from 'react'
import HomePage from './pages/Home';
import LoginForm from './components/LoginForm';

function App() {

  const adminUser={
    email:"admin@admin.com",
    password:"admin123"
  }

  const [user,setUser]=useState({name:"" , email:""});
  const [error, setError]=useState("");


  const Login = details =>{
    console.log(details);

    if (details.email == adminUser.email && details.password==adminUser.password){
      console .log("loggin")

      setUser({
        name:details.name,
        email:details.email 
      })
    }else{
      console.log("Details do no match")
      setError("Details do no match")
    }
    
  }

  
  return (
    <div className='App'>
      {(user.email !== "") ? (
          <HomePage name={user.name}/>
      ) : (<LoginForm Login={Login} error={error}/>

      )}

    </div>
    
  );
}

export default App;
