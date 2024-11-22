import { useState } from 'react';

const Register = ({ user }) => {
  console.log(user);

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState(user?.password);
  const [error, setError] = useState({});

  const handleName = (event) => {
    setName(event.target.value);
    if (!name || name.length > 20) {
      setError({ ...error, name: 'Name is required!' });
    } else {
      setError({ ...error, name: undefined });
    }
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    if (!password || password.length < 8) {
      setError({ ...error, password: 'password to short!' });
    } else {
      setError({ ...error, password: undefined });
    }
  };

  const handleSubmit = () => {
    if (error.name || error.password) {
      return;
    }

    console.log(password);

    setError({});

    const body = {
      name: name,
      password: password,
      email: email,
    };

    const url = 'https://nuclio.com/user';
    const options = {
      method: 'POST',
      headers: {},
      body: JSON.stringify(body),
    };

    // fetch(url, options).then(res => res.json)
    //     .then(data => {
    //         if (data.error) {
    //             setError(data.message);
    //         }
    //     });

    console.log(url, options);
  };

  return (
    <div>
      <h2>react html form</h2>

      <label htmlFor="name">
        name:
        <input id="name" type="text" onChange={handleName} placeholder="Pepe" value={name} />
      </label>
      <br></br>
      {error?.name && <p>{error.name}</p>}
      <label htmlFor="email">
        email:
        <input id="email" type="text" onChange={handleEmail} placeholder="pepe@nuclio.com" value={email} />
      </label>
      <br></br>
      <label htmlFor="password">
        password:
        <input id="password" type="password" onChange={handlePassword} placeholder="12345678" value={password} />
      </label>
      <br></br>
      {error?.password && <p>{error.password}</p>}

      <button onClick={handleSubmit}>Submit</button>

      <p>Hello {name}</p>
    </div>
  );
};

export default Register;
