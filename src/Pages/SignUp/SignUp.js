import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const SignUp = () => {

    const {register, formState: { errors }, handleSubmit} = useForm();

    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState("");
    const navigate = useNavigate();


    const handleSignUp = (data) => {
        setSignUpError("");
        createUser(data.email, data.password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            toast.success("User Created Successfully.");
    
            const userInfo = {
              displayName: data.name,
            };
            console.log(userInfo)
            updateUser(userInfo)
              .then(() => {
                //saveUser(data.name, data.email);
                navigate('/');
              })
              .catch((err) => console.log(err));
          })
          .catch((error) => {
            console.log(error.message);
            toast.error(error.message);
            setSignUpError(error.message);
          });
      };


    return (


        <div className="h-[500px] flex justify-center items-center mb-16">
      <div className="w-96 p-7 shadow-2xl rounded-md">
        <h2 className="text-xl text-center font-bold text-secondary uppercase">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 Characters or Longer",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            <br />
            {errors.password && (
              <p className="text-red-600 mb-1">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent w-full"
            value="Sign Up"
            type="submit"
          />
          <div>
            {signUpError && <p className="text-error">{signUpError}</p>}
          </div>
        </form>
        <p className="mt-1 text-center">
          <small>
            Already Have an Account?{" "}
            <Link className="text-secondary font-bold" to="/login">
              PLease Login
            </Link>
          </small>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>


    );
};

export default SignUp;