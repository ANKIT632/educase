import { FaCamera } from "react-icons/fa";

export default function Settings() {
  return (
    <div className="min-h-screen w-full flex justify-center overflow-auto items-center x-[20px]">

      <div className="h-screen  flex flex-col   sm:min-h-[90vh] sm:my-2 sm:border w-full rounded-sm   sm:w-[350px] bg-gray-100 space-y-5  ">

        <h1 className="text-lg p-2 py-3 font-semibold bg-white rounded-sm">Account Settings</h1>

        <div className="bg-gray-100 border-b-2 border-gray-300  border-dashed  p-5">

          <div className="flex items-start gap-5 mb-7">
            <div className="relative">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/account.png"
                  alt="Account"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow">
                <FaCamera className=" text-purple-600 text-sm" />
              </div>
            </div>

            <div>
              <h1 className="text-sm font-bold text-gray-800">Marry Doe</h1>
              <h1 className="text-sm text-gray-800">Marry@Gmail.com</h1>
            </div>
          </div>

          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            deleniti quaerat recusandae mollitia optio! Quasi dolore at, ut fugiat
            temporibus, deleniti dignissimos esse porro voluptas quod nulla non
            officiis officia.
          </p>
        </div>

      </div>

    </div>
  );
}