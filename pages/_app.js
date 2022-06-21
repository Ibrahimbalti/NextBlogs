import "../styles/globals.css";
import Sidebar1 from "../components/Sidebar1";
import { useState } from "react";
function MyApp({ Component, pageProps }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      {/* className="flex flex-col items-center justify-center min-h-screen py-2" */}
      <main className=' flex flex-row h-screen '>
        {/* <div className='   items-center justify-center lg:w-1/5 md:w-1/4 sm:w-4/12 h-full max-h-screen overflow-y-auto flex flex-col bg-red-400 text-center '>
          <Sidebar1 />
        </div> */}
        <>
          <div className=' xs:w-4/12  lg:w-1/5 md:w-1/4 sm:w-4/12 h-full max-h-screen overflow-y-auto flex flex-col text-center'>
            <Sidebar1 />
          </div>
        </>
        <div className=' lg:w-4/5 md:w-3/4 sm:w-8/12 xs:w-8/12 bg-gray-50 max-h-screen overflow-y-auto  '>
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}

export default MyApp;
