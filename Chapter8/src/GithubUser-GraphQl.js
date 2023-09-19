import React, {useState, useEffect} from 'react';
//import Client from './GraphQlRequest';


import {GraphQLClient} from "graphql-request";

const query = `
query findRepos(){
 user(login:'moontahoe'){
    login
    name
    location
    avatar-url : avatarUrl
    repositories(first:100){
        totalCount
        nodes{
            name
        }
    }
 }
}`;

const client = new GraphQLClient(
    "https://api.github.com/graphql",
    {
        headers:{
            Authorization: 'Bearer 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'
        }
    }
);

function GitHubUserGrapgQl(){

    // const [login, setLogin] = useState("moontahoe");
    // const [userData, setUserData] = useState();

    // useEffect(() => {
    //     client
    //     .request(query, {login})
    //     .then(({user}) => user)
    //     .then(setUserData)
    //     .catch(console.error);
    // })

    // return(
    //     <div>
    //         <img 
    //             src={userData.avatar_url}
    //             alt={userData.login}
    //             title={userData.login}
    //             style={{width:200}}
    //             />
            
    //         <div>
    //             <h1>{userData.login}</h1>
    //             {userData.name && <p>{userData.name}</p>}
    //             {userData.location && <p>{userData.location}</p>}
    //         </div>

    //     </div>
    // )
}

export default GitHubUserGrapgQl;