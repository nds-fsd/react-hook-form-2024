import { Link, Outlet } from 'react-router';
import { getUserToken } from '../utils/localStorage.utils';
import Logout from '../pages/logout/logout';

const Layout = ({forceUpdate}) => {
  const token = getUserToken();

  console.log(token);
  const isLogged = !!token;

  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {!isLogged && <Link to="/registerForm">Register react hook form</Link>}
          </li>
          <li>
            {!isLogged && <Link to="/login">Login</Link>}
          </li>

          <li>
            {isLogged && <Logout forceUpdate={forceUpdate}/>}
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <Outlet />
    </div>
  );
};

export default Layout;
