import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import type { SignUpArgs } from "../../utils/types";

function SignupForm() {
  const { register, handleSubmit } = useForm<SignUpArgs>({
    defaultValues: {
      role: "member",
    },
  });

  const { handleSignUp } = useAuth();

  const submitHandler: SubmitHandler<SignUpArgs> = (data) => {
    console.log(data);
    handleSignUp.mutateAsync(data);
  };

  return (
    <React.Fragment>
      <form
        action=""
        className="flex flex-col gap-5 p-10"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="flex gap-5">
          <label className="flex-1 text-white" htmlFor="first_name">
            First name
          </label>
          <input
            {...register("first_name")}
            className="bg-white flex-1 p-1 px-6 rounded-sm"
            type="text"
            id="first_name"
          />
        </div>
        <div className="flex gap-5">
          <label className="flex-1 text-white" htmlFor="last_name">
            Last name
          </label>
          <input
            {...register("last_name")}
            className="bg-white flex-1 p-1 px-6 rounded-sm"
            type="text"
            id="last_name"
          />
        </div>
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
          <label className="flex-1 text-white" htmlFor="phone">
            phone
          </label>
          <input
            {...register("phone")}
            className="bg-white flex-1 p-1 px-6 rounded-sm"
            type="text"
            id="phone"
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
          {handleSignUp.isPending ? "Loading..." : "Signup"}
        </button>
      </form>
    </React.Fragment>
  );
}

export default SignupForm;
