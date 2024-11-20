import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const ReactHookFormDemo = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: 'onBlur', // Trigger validation on blur
    defaultValues: {
      username: '',
      email: '',
      age: '',
      subscribe: false,
      customInput: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form Submitted', data);
  };

  const subscribe = watch('subscribe');

  return (
    <div>
      <h2>React Hook Form Examples</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Basic Input */}
        <div>
          <label>Username:</label>
          <input
            {...register('username', { required: 'Username is required' })}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>

        {/* Email Input with Pattern Validation */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email format',
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        {/* Conditional Field */}
        <div>
          <label>
            <input type="checkbox" {...register('subscribe')} />
            Subscribe to newsletter
          </label>
        </div>
        {subscribe && (
          <div>
            <label>Age:</label>
            <input
              type="number"
              {...register('age', {
                required: 'Age is required for subscribers',
                min: { value: 18, message: 'You must be at least 18' },
              })}
            />
            {errors.age && <p>{errors.age.message}</p>}
          </div>
        )}

        {/* Custom Component Controlled with `Controller` */}
        <div>
          <label>Custom Input:</label>
          <Controller
            name="customInput"
            control={control}
            rules={{ required: 'This field is required' }}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Custom Controlled Input"
              />
            )}
          />
          {errors.customInput && <p>{errors.customInput.message}</p>}
        </div>

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactHookFormDemo;
