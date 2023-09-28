import { Link, Outlet } from 'react-router-dom';

export const Navigation = () => {
  return <div>
    <nav>
      <Link to='/' >Posts</Link>
      <Link to='/login' >Login</Link>
      <Link to='/profile' >Profile</Link>
      <Link to='/register' >Register</Link>
    </nav>

    <Outlet />
  </div>
};
