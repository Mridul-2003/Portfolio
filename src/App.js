import './App.scss';
import {Route,Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home/home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>
      <Route path="/about" element={<Layout/>}>
      <Route index element={<About/>}/>
    
      </Route>
      <Route path="/contact" element={<Layout/>}>
      <Route index element={<Contact/>}/>
    
      </Route>
      <Route path="/project" element={<Layout/>}>
      <Route index element={<Projects/>}/>
    
      </Route>
      
      
    </Routes>
    </>
  );
}

export default App;
