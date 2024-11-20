import { useForm } from "react-hook-form";

const RegisterForm = ({user}) => {

    const {register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: user
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    const name = watch("name");

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>react hook form</h2>
            <label for="name">
                name: 
                <input id="name" type="text" placeholder="Pepe" {...register("name", { required: "name is required", maxLength: {value: 20, message: "name is to large"} })} />
                {errors?.name && (<p>{errors.name.message}</p>)}
            </label><br></br>
            <label for="email">
                email: 
                <input id="email" type="text" {...register("email", {pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }})} placeholder="pepe@nuclio.com" />
            </label><br></br>
            {errors?.email && (<p>{errors.email.message}</p>)}
            <label for="password">
                password: 
                <input id="password" type="password" {...register("password", { minLength: {value: 8, message: "password is to short"}, required: true  })} placeholder="12345678" />
            </label><br></br>
            {errors?.password && (<p>{errors.password.message}</p>)}

            <span>Accept policies</span>
            <input type="checkbox" {...register("policy")} /><br></br>
            <input type="Submit" value="Submit"/>
            <p> Hello {name} </p>
        </form>
    )
};

export default RegisterForm;