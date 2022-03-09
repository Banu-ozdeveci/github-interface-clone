import React from 'react'
import "./UserInfo.css";
import Button from '@mui/material/Button';


  interface ItemProps{
    user:{
        name:string;
        avatar_url:string;
        bio:string;
        blog:string;
        email:string;
        followers:string;
        twitter_username:string;
         following:string;
         location:string;


    }
}

const UserInfo: React.FC<ItemProps> = ({user})=> (
<div className="user-infos">
 
    <img
      src={user.avatar_url}
      className="p-2 avatar"
      width="190"
      height="190"
      alt="User"
    />
   
    <div className="user">
      <h5>{user.name}</h5>
      <Button variant="contained">Follow</Button>
      <div className="infos" >
        {user.location && (
          <div className="info">
            <i className="fa fa-map-marker pr-1" style={{color:  "#1976d2",marginRight:"6px"}} />
            <span>{user.location} · </span>
          </div>
        )}
        {user.blog && (
          <div className="info">
            <i className="fa fa-globe pr-1" style={{color:  "#1976d2",marginRight:"6px"}} />
            <span>{user.blog} · </span>
          </div>
        )}
        {user.email && (
          <div className="info">
            <i className="fa fa-envelope pr-1"  style={{color:  "#1976d2",marginRight:"6px"}}/>
            <span>{user.email} · </span>
          </div>
        )}
        {user.twitter_username && (
          <div className="info">
            <i className="fa fa-twitter pr-1" style={{color:  "#1976d2",marginRight:"6px"}} />
            <span>{user.twitter_username} · </span>
            <br />
          </div>
        )}

        {user.followers && (
          <div className="info">
            <i className="fa fa-group" style={{color:  "#1976d2",marginRight:"6px"}} />
            <span>{user.followers} Followers · </span>
          </div>
        )}
        {user.following && (
          <div className="info">
            <i className="fa fa-heart pr-1" style={{color:  "#1976d2",marginRight:"6px"}} />
            <span>{user.following} Following </span>
          </div>
        )}
      </div>
    </div>
  </div>
);


export default UserInfo;