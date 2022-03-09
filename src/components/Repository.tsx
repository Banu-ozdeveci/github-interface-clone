import React from 'react'
import "./Repository.css"

type ItemProps={
    user: Array<any>;
    repo: 
        {
            name:string;
            language:string;
            stargazers_count:number;
            description:string;
        }
    ;
}
const Repository : React.FC<ItemProps>= ({user,repo}) => (

    <div className = "repo">
        <div>
        <div className="title">
            <i className='fa fa-book pr-1'/>
            <a href ='#'>
                <span>{repo.name}</span>
                </a>
                </div>
            <span className="desc">{repo.description}</span>
            </div>
            <div className="d-flex">
                <div className="subitem">
                    <i className = "fa fa-code pr-1"/>
                    <span>{repo.language}</span></div>

                    <div className="subitem">
                    <i className = "fa fa-star pr-1"/>
                    <span>{repo.stargazers_count}</span></div>

                    <div className="subitem">
                    <i className = "fa fa-fork pr-1"/>
                    <span>Fork</span></div>
                    </div>
            
            
            </div>
)


export default Repository;