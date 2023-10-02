import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout"
import Login from './pages/Login'
import Register from "./pages/Register";
import {UserContextProvider} from "./UserContext";
import CreatePost from './pages/CreatePost';
import IndexPage from './pages/IndexPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <UserContextProvider>

      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path='/' index element ={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/create' element={<CreatePost />} />
          <Route path='/post/:id' element={<PostPage />}></Route>
        </Route>
      </Routes>

    </UserContextProvider>
  );
}

export default App;


