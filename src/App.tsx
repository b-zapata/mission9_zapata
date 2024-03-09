import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as basketballTeamsData from './CollegeBasketballTeams.json';

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

interface BasketballTeams {
  teams: TeamProps[];
}

function Welcome() {
  return <h1>These are the NCAA March Madness teams!</h1>;
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamsList />
    </div>
  );
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="team-card">
        <h2>{oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

function TeamsList() {
  const basketballTeams: BasketballTeams = basketballTeamsData;

  return (
    <div className="teams-list">
      {basketballTeams.teams.map((oneTeam) => (
        <Team key={oneTeam.tid} {...oneTeam} />
      ))}
    </div>
  );
}

export default App;
