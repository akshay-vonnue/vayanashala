import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import type { LoginArgs } from "../../utils/types";

function LoginForm() {
  const { register, handleSubmit } = useForm<LoginArgs>();

  const { handleLogin } = useAuth();

  const submitHandler: SubmitHandler<LoginArgs> = (data) => {
    console.log(data);
    handleLogin.mutateAsync(data);
  };

  return (
    <React.Fragment>
      <form
        action=""
        className="flex flex-col gap-5 p-10"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="flex gap-5">
          <label className="flex-1 text-white" htmlFor="email">
            email
          </label>
          <input
            {...register("email")}
            className="bg-white flex-1 p-1 px-6 rounded-sm"
            type="text"
            id="email"
                  />    
                  
        </div>
        <div className="flex gap-5">
          <label className="flex-1 text-white" htmlFor="password">
            password
          </label>
          <input
            {...register("password")}
            className="bg-white flex-1 p-1 px-6 rounded-sm"
            type="password"
            id="password"
          />
        </div>
        <button className="bg-amber-500 p-3 mt-5 rounded-md">
          {handleLogin.isPending ? "Loading..." : "Login"}
        </button>
      </form>
    </React.Fragment>
  );
}

export default LoginForm;
