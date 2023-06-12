import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Home,About,Contact,NoPages} from './component/pages'
import Navbar from './component/navbar';
function App() {
  return (
    <div>
      <Router basename='Dummy-React-Router/'>
        <Routes>
          <Route element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path='About' element={<About/>}/>
            <Route path='Contact' element={<Contact/>}/>
            <Route path='*' element={<NoPages/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
