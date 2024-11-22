import { Link } from 'react-router';

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link to="/user/maria">User Maria</Link>
        </li>
        <li>
          <Link to="/user/juan">User Juan</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
