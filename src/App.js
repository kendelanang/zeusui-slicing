import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Team from './components/Team';
import Provide from './components/Provide';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Collections />
      <Team />
      <Provide />
    </>
  );
}

export default App;
