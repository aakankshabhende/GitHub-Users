import React, { useState, useEffect } from 'react' 
import Loading from './Components/Loading';
import Users from './Components/Users';

function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const showUsers = async () => {
      try{
        const res = await fetch("https://api.github.com/users");
        setLoading(false);
        setUser(await res.json());
      }
      catch{
        setLoading(true);
      }
  }

  useEffect(() => {
    showUsers();
  },[]);

  if(loading){
    return <Loading/>
  }
  return (
    <>
        <Users user = {user}/>
    </>
  );
}

export default App;
