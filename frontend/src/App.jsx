import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout"
import Login from './components/Login'
import Register from "./components/Register";
import {UserContextProvider} from "./UserContext";
import CreatePost from './components/CreatePost';
import IndexPage from './components/IndexPage';

function App() {
  return (
    <UserContextProvider>

      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path='/' index element ={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/create' element={<CreatePost />} />
          
        </Route>
      </Routes>

    </UserContextProvider>
  );
}

export default App;


