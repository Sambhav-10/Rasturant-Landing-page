import React from "react";

const Event = () => {
  return (
    <>
      <div>
        <div className="text-center mb-10">
          <div className="flex justify-center mt-10">
            <p className="text-[#C39D63] font-bold">DON'T MISS</p>
          </div>
          <div className="flex justify-center text-6xl my-5">Our News And Events</div>
          <div className="flex justify-center">
            <p className="mt-5 w-1/3">
              Sed ut perspiciats unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
          <div className="flex justify-center mt-4 p-4 gap-8">
            <div className="w-1/4 text-start shadow-md">
              <img className="h-50 w-full" src="https://images.pexels.com/photos/3999499/pexels-photo-3999499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="mt-2 p-2">
                <h1>Nunc Volutpat Venetais</h1>
                <h4 className="text-[#C39D63] font-bold mt-1"> CATEGORY</h4>
                <p className="mt-4">
                  Nulla a odio sed magna congue condimentum. Pellentesque
                  convallis enim nec libero vulputate, et rhoncus urna placerat.
                  Phasellus mattis, diam vel vehicula facilisis, erat leo
                  dapibus augue, at mollis tellus ex non nisi. Ut faucibus
                  fringilla semper. Aenean nunc ex
                </p>
              </div>
            </div>
            <div className="w-1/4 text-start shadow-md">
              <img 
              className="h-60 w-full" 
              height={"60px"} src="https://images.pexels.com/photos/9839457/pexels-photo-9839457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="mt-5 p-2">
                <h1>Vestibulum Nisl Felis</h1>
                <h4 className="text-[#C39D63] font-bold my-1">CATEGORY</h4>
                <p className="mt-2 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  aliquam justo et nibh venenatis aliquet. Morbi mollis mollis
                  pellentesque. Aenean vitae erat velit.
                </p>
              </div>
            </div>
            <div className="w-1/4 text-start shadow-md ">
              <img className="h-60 w-full"  src="https://images.pexels.com/photos/6740849/pexels-photo-6740849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="mt-5 p-2">
                <h1>Proin Eu Augue Efficitur</h1>
                <h4 className="text-[#C39D63] font-bold">CATEGORY</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  aliquam justo et nibh venenatis aliquet. Morbi mollis mollis
                  pellentesque. Aenean vitae erat velit.
                </p>
              </div>
            </div>
          </div>
          <button className="p-4 bg-[#C39D63] my-5">Read More</button>
        </div>
      </div>
    </>
  );
};

export default Event;
