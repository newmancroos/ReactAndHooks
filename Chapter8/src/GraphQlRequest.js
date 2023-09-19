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
)

// client
//     .request(query, {login: "moontahoe"})
//     .then(results => JSON.stringify(result, null, 2))
//     .then(console.log)
//     .catch(console.error);