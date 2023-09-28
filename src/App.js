import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// import required pages
import { Navigation } from './pages/Navigation';
import { Login } from './pages/Login';
import { Posts } from './pages/Posts';
import { Profile } from './pages/Profile';
import { Register } from './pages/Register';

// import required functionality
import { fetchPosts } from './components/utilities';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Navigation /> } >
          <Route index element={ <Posts /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/profile' element={ <Profile /> } />
          <Route path='/register' element={ <Register /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
