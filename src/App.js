import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import AddPost from './components/AddPost';
import NavBar from './components/NavBar';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">

    <NavBar/>
    <Router>
      <Routes>
      <Route path='/' element={<Posts/>}/>
      <Route path='/add' element={<AddPost/>}/>
      {/* <Route path='/post/:id' element={<SinglePost/>}/> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
