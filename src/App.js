import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormDemo from './FormDemo';
import CounterCompo from './CounterCompo';
import MyNavBar from './MyNavBar';
import MyRoutes from './MyRoutes';
import MyNavScroll from './MyNavScroll';
import Home from './compo/Home';
import About from './compo/About';
import Contact from './compo/Contact';
import MyStud from './MyStud';



function App() {
  return (
    <div>
      {/* <MyNavBar/> */}
      {/* <MyRoutes/> */}
      {/* <MyNavScroll/>
      <section id="home">
        <Home/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="contact">
        <Contact/>
      </section> */}

      <MyStud/>
    </div>
  );
}

export default App;
