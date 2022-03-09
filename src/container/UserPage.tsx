import React, { useState ,useEffect} from 'react';
import NavBar from '../components/NavBar';
import UserInfo from '../components/UserInfo';
import Tabs from '../components/Tabs';
import Repositories from '../components/Repositories';
import { getUserData,getUserRepo } from '../api/Api';
import { matchPath } from 'react-router-dom';
import Loading from '../components/Loading';
import "./UserPage.css";

const UserPage= ({match}:{match:any})=> {

const [user,setUser]= useState()
const [repos, setRepos] = useState([])

const userNameParams = match.params.userName

useEffect(()=>{
    fetchUser()
    fetchRepos()

},[])

async function fetchUser(){
    const {data} = await getUserData(userNameParams)
    setUser(data)
}
async function fetchRepos(){
    const {data} = await getUserRepo(userNameParams)
    setRepos(data)
}
return (
   <>
   {user ? 
   (
       <>
<NavBar />
<div className="container">

<UserInfo user={user} />
<div className="userInfo">
<Tabs  repos ={repos} user={user} />
<Repositories repos ={repos} user={user}/>
</div>
</div>
       </>
   ): (<Loading/>)


}
   
   </>

    
)

}

export default UserPage;