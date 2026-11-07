import SignupForm from "../../components/form/SignupForm";

function SignupPage() {
  return (
    <div className={`bg-primary-color flex flex-col gap-5 p-7 rounded-md`}>
      <div className="flex flex-col w-full items-center">
        <img src="/book.png" width={80} height={80} alt="" />
        <div className="font-['Playwrite_IT_Trad',cursive] text-4xl text-white">
          Vayanashala
        </div>
      </div>
      <SignupForm />
    </div>
  );
}

export default SignupPage;
