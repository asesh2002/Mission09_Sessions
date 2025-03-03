import './App.css';
import basketballData from './CollegeBasketballTeams.json';

// import the json
const BasketballDataSample = basketballData.teams;

//tell user what the site is showing 
function Header() {
  return <h1> March Madness College Basketball Teams</h1>;
}

//school function: creates a single school 
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
      <h5>Mascot Name: {mascot}</h5>
      <h5>Location: {location}</h5>
    </>
  );
}

//display each of the shcool from the json as a list
function SchoolList() {
  return (
    <>
    {/* reference the json file with the mapping to grab the data out of it and display
    create a school object for each school to display*/}
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

//display the header and the list of schools
function App() {
  return (
    <>
      <Header />
      <SchoolList />
    </>
  );
}

export default App;
