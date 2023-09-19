import React  from 'react';
import './App.css';
import GitHubUser from './GithubUser';
//import GitHubUserGrapgQl from './GithubUser-GraphQl';
//import DisplayLargeUsers from './DisplayLargeUsers'

const peaks= [
{name: "Freel Peak", elevation:"10891"},
{name: "Monument Peak", elevation:"10067"},
{name: "Pyramid Peak", elevation:"9983"},
{name: "Mt. Tallac Peak", elevation:"9735"}
];

function App() {
  return (
    <div className="App">
      <GitHubUser login="moonhighway" />
      {/* <GitHubUserGrapgQl /> */}
      {/* <div>
       <DisplayLargeUsers />
      </div> */}
    </div>
  );
}

export default App;
