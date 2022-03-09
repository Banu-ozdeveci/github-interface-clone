import axios from "axios"

const URL_BASE ="https://api.github.com"


//getting the UserData from the Url_BASE

export async function getUserData(userName:string){
const userInfo = await axios.get(`${URL_BASE}/users/${userName}`)

console.log(userInfo)
return userInfo
}

//getting the Repo info from the Url_BASE
export async function getUserRepo(userName:string){
    const repos = await axios.get(`${URL_BASE}/users/${userName}/repos`)
    
    console.log(repos)
    return repos
    }