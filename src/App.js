// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// export default App;

//////////////////////////////////////
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects"
import projects from "./data/projects";
import Courses from "./components/Courses";
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="min-h-screen bg-gray-800">
      {/* <h1 className="text-white text-5xl font-bold">
        Tailwind Works!
      </h1> */}
      <Navbar/>
      <Hero/>
     <About/>
     <Skills/>
     <Projects/>
     <projects/>
     <Courses/>
     <Contact/>
     <Footer/>
       
    </div>
  );
}

export default App;
