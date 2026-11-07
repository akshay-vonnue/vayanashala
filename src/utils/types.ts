export interface SignUpArgs {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
  role: "member" | "librarian";
}