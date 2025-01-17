import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';
import { api } from '../../utils/apiWrapper';
import { setUserSession } from '../../utils/localStorage.utils';

const RegisterForm = ({ user }) => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  // Other way to navigate to other page
  const navigateToPage = (name) => {
    navigate('/user/' + name);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: user,
  });

  const createUser = (data) => {
    return api.post('/auth/register', data);
  };

  const mutation = useMutation(createUser, {
    onSuccess: (data) => {
      setUserSession(data);
      queryClient.invalidateQueries('users');
    },
    onError: (error) => {
        console.log(error);
    }
});


  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
    navigateToPage(data.name);
  };

  const name = watch('name');


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>react hook form</h2>
      <label htmlFor="name">
        name:
        <input
          id="name"
          type="text"
          placeholder="Pepe"
          {...register('name', { required: 'name is required', maxLength: { value: 20, message: 'name is to large' } })}
        />
        {errors?.name && <p>{errors.name.message}</p>}
      </label>
      <br></br>
      <label htmlFor="email">
        email:
        <input
          id="email"
          type="text"
          {...register('email', { pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' } })}
          placeholder="pepe@nuclio.com"
        />
      </label>
      <br></br>
      {errors?.email && <p>{errors.email.message}</p>}
      <label htmlFor="password">
        password:
        <input
          id="password"
          type="password"
          {...register('password', { minLength: { value: 8, message: 'password is to short' }, required: true })}
          placeholder="12345678"
        />
      </label>
      <br></br>
      {errors?.password && <p>{errors.password.message}</p>}

      <span>Accept policies</span>
      <input type="checkbox" {...register('policy')} />
      <br></br>
      <input type="Submit" value="Submit" />
      <p> Hello {name} </p>
    </form>
  );
};

export default RegisterForm;
