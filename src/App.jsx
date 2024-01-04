import "./App.css";

function App() {
  return (
    <>
     <div className="w-full h-[72px] flex items-center justify-between">
      <img src="/src/images/brand_logo.png" alt="" />
      <div className="flex items-center justify-between gap-3">
        <p className="w-[72px] h-[24px] ">MENU</p>
        <p className="w-[72px] h-[24px] ">LOCATION</p>
        <p className="w-[72px] h-[24px] ">ABOUT</p>
        <p className="w-[72px] h-[24px] ">CONTACT</p>
      </div>
      <button className="bg-nike-red py-[6px] px-[16px] text-white">Login</button>
     
    </div>
    <div className="w-[1125px] h-[613px] mt-[80px] flex p-5">
      {/*left section */}
      <div className="w-1/2 flex flex-col  gap-[36px]">
        <p className="text-[100px] font-extrabold leading-[100px] text-left">YOUR FEET DESERVE THE BEST</p>
        <p className="text-[16px] text-left">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="flex gap-[40px]">
        <button className="bg-nike-red py-[6px] px-[16px] font-semibold text-white ">Shop Now</button>
        <button className="bg-white py-[6px] px-[16px] font-semibold text-gray-600 border border-gray-500">Category</button>
        </div>
        </div>
        {/*right section */}
        <div className="w-1/2 ">
          <img className=" w-[530px] h-[488px] ml-10 p-4" src="/src/images/shoe_image.png" alt="" />
        </div>
       
     


    </div>
    </>
   
  );
}

export default App;
