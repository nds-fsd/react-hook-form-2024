import { useParams } from 'react-router';

const User = () => {
  const { userName } = useParams();

  return (
    <div>
      <h1> Hello {userName} </h1>
    </div>
  );
};

export default User;
