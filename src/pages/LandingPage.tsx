function LandingPage() {
  return (
    <div className="align-center bg-primary-color w-full h-screen">
      <div className="flex flex-1  bg-gradient bg-primary-color h-[100%]">
        <div className="flex flex-col bg-secondary-color w-full items-center justify-center">
          <img src="/book.png" width={200} height={80} alt="" />
          <div className="font-['Playwrite_IT_Trad',cursive] text-4xl text-white">
            Vayanashala
          </div>
          <div className="text-white text-center text-[15px] mt-10 px-4">
            “The only thing that you absolutely have to know, is the location of
            the library.” ― Albert Einstein{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-1 h-[100%]">h</div>
    </div>
  );
}

export default LandingPage;
