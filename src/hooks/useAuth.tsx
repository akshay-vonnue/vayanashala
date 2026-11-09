import { useMutation } from "@tanstack/react-query";
import { LOGIN, SIGNUP } from "../utils/constant";
import type { LoginArgs, SignUpArgs } from "../utils/types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useAuth() {
  const navigate = useNavigate();

  const handleSignUp = useMutation<string, Error, SignUpArgs>({
    mutationKey: ["signup"],
    mutationFn: signup,
    onSuccess: (data) => {
      console.log(data);
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  const handleLogin = useMutation<string, Error, LoginArgs>({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  return {
    handleSignUp,
    handleLogin,
  };
}

const signup = async (payload: SignUpArgs) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}${SIGNUP}`,
    {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
};

const login = async (payload: LoginArgs) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}${LOGIN}`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
};
