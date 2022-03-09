import React,{useState} from 'react';
import Repository from './Repository';
import "./Repository.css";
import {TextField} from '@mui/material';

type ItemProps={
    user:Object[];
    repos:[{name:string; id:number,language:string;
        stargazers_count:number;
        description:string;
    }];
    repo: 
    {
        id:number
        name:string;
        language:string;
        stargazers_count:number;
        description:string;
    }
;
}

const Repositories: React.FC<ItemProps> = ({user,repos})=>{

const [search, setSearch]=useState("")

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setSearch(event.target.value);
};
  return (  
    <section className="repositories">
        <TextField fullWidth  id="fullWidth"   label="Search Repository.."
  value={search}
  onChange={handleChange}
 />
       
        {
            repos.filter((val)=>{
                if (search ==""){
                    return val
                }
                else if (val.name.toLowerCase().startsWith(search.toLocaleLowerCase( ))){
                    return val}
                }).map((repo,id)=>(
<Repository key={repo.id}  repo={repo} user={user}/>

            ))
        }


</section>)

    }

export default Repositories;