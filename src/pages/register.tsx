
import { NavLink } from "react-router-dom";

export default function Register() {
  return (

    <div className="min-h-screen w-full flex justify-center overflow-auto items-center x-[20px]">
       
    <div className="h-screen justify-end flex flex-col   sm:min-h-[90vh] sm:my-2 sm:border w-full rounded-sm py-2  sm:w-[350px] bg-gray-100 space-y-5  ">

      <div className="space-y-5">
     
          <div className="flex flex-col gap-1 px-4 py-2">
            <h1 className="text-[28px] font-semibold leading-none">
              Create your
            </h1>
            <h1 className="text-[28px] font-semibold leading-none">
              PopX account
            </h1>
          </div>


        <div className=" flex flex-col gap-6  px-[1rem] ">

          <div className="relative ">
            <label
              htmlFor="fullname"
              className="absolute left-3 -top-3 bg-gray-100 font-semibold  px-1 text-purple-600 text-sm  "
            >
              Full Name <span className="pl-1 text-red-500">*</span>
            </label>
            <input
              id="fullname"
              type="text"
              className="text-black border border-gray-300 focus:border-purple-600 outline-none h-12 w-full px-3 rounded-md"
              placeholder="Enter Full Name"
            />
          </div>

          <div className="relative ">
            <label
              htmlFor="PhoneNumber"
              className="absolute left-3 -top-3 bg-gray-100 font-semibold  px-1 text-purple-600 text-sm"
            >
              Phone Number <span className="pl-1 text-red-500">*</span>
            </label>
            <input
              id="PhoneNumber"
              type="phone"
              className="text-black border border-gray-300 focus:border-purple-600 outline-none h-12 w-full px-3 rounded-md"
              placeholder="Enter Phone Number"
            />
          </div>

          <div className="relative ">
            <label
              htmlFor="email"
              className="absolute left-3 -top-3 bg-gray-100 font-semibold  px-1 text-purple-600 text-sm"
            >
              Email adress <span className="pl-1 text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              className="text-black border border-gray-300 focus:border-purple-600 outline-none h-12 w-full px-3 rounded-md"
              placeholder="Enter Email "
            />
          </div>

          <div className="relative ">
            <label
              htmlFor="password"
              className="absolute left-3 -top-3 bg-gray-100 font-semibold  px-1 text-purple-600 text-sm"
            >
              Password <span className="pl-1 text-red-500">*</span>
            </label>
            <input
              id="password"
              type="text"
              className="text-black border border-gray-300 focus:border-purple-600 outline-none h-12 w-full px-3 rounded-md"
              placeholder="Enter password"
            />
          </div>

          <div className="relative ">
            <label
              htmlFor="CompanyName"
              className="absolute left-3 -top-3 bg-gray-100 font-semibold  px-1 text-purple-600 text-sm"
            >
              Company name <span className="pl-1 text-red-500">*</span>
            </label>
            <input
              id="CompanyName"
              type="text"
              className="text-black border border-gray-300 focus:border-purple-600 outline-none h-12 w-full px-3 rounded-md"
              placeholder="Enter Company name"
            />
          </div>

          <div className="-mt-3">

            <label className="text-black text-sm font-semibold ">
              Are you an agency? <span className="text-red-500">*</span>
            </label>

            <div className="flex gap-6 mt-1">
              {["yes", "no"].map((value) => (
                <div key={value} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value={value}
                    name="agency"
                    className="w-5 h-5   
                 "
                  />

                  <span className="text-black capitalize text-sm">{value}</span>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    
      <NavLink to="/settings" className="px-[20px] w-full">
        <button
          type="submit"
          className="w-full bg-[#6C25FF] hover:bg-[#5a1fe6] text-white font-semibold text-lg h-[46px]  mb-[1rem] cursor-pointer rounded-sm"
        >
          Create Account
        </button>
      </NavLink>
      </div>

    </div>
  );
}
