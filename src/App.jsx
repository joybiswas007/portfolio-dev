import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from "./components/Home"
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/projects' element={<Projects />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
