import { useMutation } from "@tanstack/react-query";
import { SIGNUP } from "../utils/constant";
import type { SignUpArgs } from "../utils/types";
import toast from "react-hot-toast";

export function useAuth() {
  const handleSignUp = useMutation<string, Error, SignUpArgs>({
    mutationKey: ["signup"],
    mutationFn: signup,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  return {
    handleSignUp,
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
  return response.json();
};
