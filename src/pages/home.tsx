import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    
      <div className="h-screen w-screen flex justify-center items-center x-[20px] ">
       
       <div className="h-screen justify-end flex flex-col   sm:border w-full rounded-sm p-2  sm:w-[350px] bg-gray-100">

        <div className="flex flex-col gap-3 mb-[29px]">
          <h1 className="text-[28px] font-semibold leading-none">
            Welcome to PopX
          </h1>
          <h1 className="text-base text-[#1D2226] w-50 ">
            Lorem ipsum dolor sit amet,  consectetur adipiscing elit,
          </h1>
        </div>

        <div className="flex flex-col gap-[10px]">
          <NavLink
            to="/register"
            className="w-full bg-[#6C25FF] hover:bg-[#5a1fe6] text-white text-center py-3 rounded-md font-semibold"
          >
            Create Account
          </NavLink>
          <NavLink
            to="/login"
            className="w-full border border-[#6C25FF] text-[#6C25FF] text-center py-3 rounded-md hover:bg-[#f3f3f3] font-semibold"
          >
            Aready Resgister ? login
          </NavLink>
        </div>
        </div>

</div>
  );
}