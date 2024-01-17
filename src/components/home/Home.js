import React from "react";

const Home = () => {
  return (
    
    <div className="pt-20 w-full h-[600px] bg-[url(https://images.pexels.com/photos/349609/pexels-photo-349609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] ">
      <div className="text-white h-full text-center bg-black  bg-opacity-60 h-full w-full flex items-center">
        <div>
          <h1 className="text-7xl text-bold text-white font-bold ">
            Only Quality Food
          </h1>
          <div className="w-full flex justify-center">
            <p className="w-1/2 text-xl mt-9">
              Set ut persipicatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ab
              illo inventore vertatis et quai architectoeaque ipsa ab illo
              inventroe.
            </p>
          </div>

          <div className="mt-9 space-x-9 ">
            <button className="border-2 border-white p-2">VIEW MENU</button>
            <button className="bg-[#C39D63] p-2">RESERVATION</button>
          </div>
          <div className="flex justify-center mt-9 ">
           <img width={"30px"} className="" src="https://cdn-icons-png.flaticon.com/512/159/159666.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
