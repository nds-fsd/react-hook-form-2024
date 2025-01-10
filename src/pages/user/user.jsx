import { useParams } from 'react-router';
import { getUserToken } from '../../utils/localStorage.utils';

const User = () => {
  const isLogged = !!getUserToken();

  const { userName } = useParams();

  if (!isLogged) {
    return undefined;
  }

  return (
    <div>
      <h1> Hello {userName} </h1>
    </div>
  );
};

export default User;
