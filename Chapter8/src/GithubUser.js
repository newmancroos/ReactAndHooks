import React, {useState, useEffect} from 'react';
import {useFetch} from './UseFetch';  
function GitHubUser({login}){
    // const [data, setData] = useState();
    // const [error, setError] = useState();
    // const [loading, setLoading] = useState(false);

    // useEffect(()=>{
    //     //if(!login) return;
    //     setLoading(true);
    //     fetch(`https://api.github.com/users/${login}`)
    //     .then(data => data.json())
    //     .then(setData)
    //     .then(() => setLoading(false))
    //     .catch(setError)
    // },[login]);

    const {loading,data,error} = useFetch(`https://api.github.com/users/${login}`);
    if(loading) return <h1>Loading</h1>
    if(error) 
        return <pre>JSON.string(error, null, 2)</pre>;
    if(!data) return null;

    return(
        <div>
            <img 
                src={data.avatar_url}
                alt={data.login}
                title={data.login}
                style={{width:200}}
                />
            
            <div>
                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>

        </div>
    )
}

export default GitHubUser;