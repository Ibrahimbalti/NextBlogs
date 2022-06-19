import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className=' flex flex-row h-screen '>
        <div className=' lg:w-1/5 md:w-1/4 sm:w-4/12 h-full max-h-screen overflow-y-auto flex flex-col bg-red-400 text-center '>
          {/* <Sidebar1 /> */}

          <Sidebar />
        </div>
        <div className=' lg:w-4/5 md:w-3/4 sm:w-8/12 bg-gray-50 max-h-screen overflow-y-auto  '>
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}

export default MyApp;
