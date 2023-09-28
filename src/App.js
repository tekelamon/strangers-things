import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
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
  const [user, setUser] = useState(null);

  const router = createBrowserRouter([
    {
      element: <Navigation />,
      children: [
        {
          path: '/',
          element: <Posts />,
          loader: () => { return fetchPosts() }
        },
        {
          path: '/login',
          element: <Login setUser={setUser} />
        },
        {
          path: '/profile',
          element: <Profile />
        },
        {
          path: '/register',
          element: <Register setUser={setUser} />
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />
}

export default App;
