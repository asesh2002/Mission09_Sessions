import './App.css';
import basketballData from './CollegeBasketballTeams.json';

const BasketballDataSample = basketballData.teams;

function Header() {
  return <h1> March MadnessCollege Basketball Teams</h1>;
}

function School({
  name,
  mascot,
  location,
}: {
  name: string;
  mascot: string;
  location: string;
}) {
  return (
    <>
      <h2>School: {name}</h2>
      <h3>Mascot Name: {mascot}</h3>
      <h3>Location: {location}</h3>
    </>
  );
}

function SchoolList() {
  return (
    <>
      {BasketballDataSample.map((m) => (
        <School
          key={m.school}
          name={m.school}
          mascot={m.name}
          location={`${m.city}, ${m.state}`}
        />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <SchoolList />
    </>
  );
}

export default App;
