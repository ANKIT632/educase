import { NavLink } from "react-router-dom";

export default function Login() {
  return (

    <div className="min-h-screen w-full flex justify-center overflow-auto items-center x-[20px]">
      <div className="h-screen justify-start flex flex-col sm:min-h-[90vh] sm:my-2 sm:border w-full rounded-sm p-2 sm:w-[350px] bg-gray-100 space-y-5">

        <div className="space-y-5">
          <div className="flex flex-col gap-1 px-4 py-2">
            <h1 className="text-[28px] font-semibold leading-none">
              Sign in to your
            </h1>
            <h1 className="text-[28px] font-semibold leading-none">
              PopX account
            </h1>

            <h1 className="text-md leading-none w-50 text-gray-600 mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h1>

          </div>

          <div className="flex flex-col gap-6 px-[1rem]">
            <div className="relative">
              <label
                htmlFor="email"
                className="absolute left-3 -top-3 bg-gray-100 font-semibold px-1 text-purple-600 text-sm"
              >
                Email address <span className="pl-1 text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                className="text-black border border-gray-300 focus:border-purple-600 outline-none h-12 w-full px-3 rounded-md"
                placeholder="Enter Email"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="absolute left-3 -top-3 bg-gray-100 font-semibold px-1 text-purple-600 text-sm"
              >
                Password <span className="pl-1 text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                className="text-black border border-gray-300 focus:border-purple-600 outline-none h-12 w-full px-3 rounded-md"
                placeholder="Enter Password"
              />
            </div>
          </div>
        </div>

        <NavLink to="/settings" className="px-[1rem] w-full">
          <button
            type="submit"
            className="w-full bg-[#6C25FF] hover:bg-[#5a1fe6] text-white font-semibold text-lg h-[46px] mb-[1rem] cursor-pointer rounded-sm"
          >
            Login
          </button>
        </NavLink>
      </div>
    </div>
  );
}