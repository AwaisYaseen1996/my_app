
import './App.css';
import Navbar from './components/navbar/navbar';
// import Content from './components/navbar/content';
import Etwt from './components/navbar/section 2/etwt';
import Travel from './components/navbar/section 3/travel';

function App() {
  return (
    <>
      <Navbar />
      {/* <Content /> */}
      <Etwt />
      <Travel />
    </>
  );
}

export default App;
