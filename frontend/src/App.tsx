import './App.css';
import basketballData from './CollegeBasketballTeams.json';

const BasketballDataSample = basketballData.teams;

function SchoolList() {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>School Name</th>
            <th>Mascot Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {BasketballDataSample.map((m) => (
            <tr>
              <td>{m.school}</td>
            </tr>
          )

          )}
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

function Header() {
  return <h1> Basketball teams</h1>;
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

function App() {
  return (
    <>
      <Header />
      <SchoolList />
    </>
  );
}

export default App;
