import './App.css';
import Post from "./components/Post";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout"
// import IndexPage from "./pages/IndexPage";
import Login from './components/Login'
import Register from "./components/Register";
import {UserContextProvider} from "./UserContext";
// import CreatePost from "./pages/CreatePost";
// import PostPage from "./pages/PostPage";
// import EditPost from "./pages/EditPost";

function App() {
  return (
    <UserContextProvider>

      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path='/' index element ={
          <>
           <Post />
          </>
      } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Route>
      </Routes>

    </UserContextProvider>
  );
}

export default App;


