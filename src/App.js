import ken from "./assets/kenBlue-removebg-preview.png";
function App() {
  return (
    <div className="h-screen w-screen bg-BACKGROUND flex flex-col items-center justify-start">
      <div className="w-full bg-BLACK h-8 px-20 text-BACKGROUND text-xs justify-end flex items-center"> copyright </div>
      <div className="w-full px-20 max-container-width flex justify-between bg-WHITE items-center py-2">
      <div className="hidden md:flex font-semibold text-xl app-secondary-font text-BACKGROUND  border-b-2 border-ORANGE">ART 4 EVERYONE</div>
      <div className="flex w-80 justify-around app-secondary-font">
        <p className="text-base text-BLACK border-b-2 border-ORANGE"> BIO </p>
        <p className="text-base text-DARK_GREY "> ART </p>
        <p className="text-base text-GREY"> CONTACT </p>
      </div>
      </div>
      <p className=" ken_handwriting-header mt-16 text-WHITE w-full lg:text-center text-left pl-8 lg:pl-0">Hey There!    <span className="z-100 ken_handwriting-sub-header text-red mt-4 text-WHITE">
        im Ken
      </span></p>
   
      <div className="w-full h-60 flex bg-WHITE absolute banner-top shadow-lg shadow-ORANGE">
        <p className="app-secondary-font w-full md:w-2/3 p-4 border-RED"> 
        <p className="my-2 text-3xl"> TITLE </p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ducimus veritatis dignissimos animi doloribus aspernatur et consequatur eveniet illo natus adipisci, excepturi rem consequuntur officiis molestiae, id impedit sed quae?
        </p>
        <div className="w-full hidden md:flex justify-center">
          <div className="w-full  max-container-width">
            <img className="hidden md:flex  absolute ken-top" src={ken} alt="" />
          </div>
        </div>
      </div>
      <div className="border-RED w-full h-full flex items-end">

      <div className="w-full bg-BLACK h-8 px-20 text-BACKGROUND text-xs justify-end flex items-center"> copyright </div>
      </div>
    </div>
  );
}

export default App;
