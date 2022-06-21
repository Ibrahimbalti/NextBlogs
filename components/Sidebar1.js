import { useState } from "react";
import Link from "next/dist/client/link";
const Sidebar1 = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  // http://blogs.local//wp-json/wp/v2/pages/?slug=profileupdates
  const OpenMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      {showSidebar ? (
        <button
          className='flex text-4xl text-red-500 items-center cursor-pointer  right-0 top-6 z-50 sm:hidden'
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className=' z-30 flex items-center cursor-pointer right-0 top-6 sm:hidden'
          fill='#2563EB'
          viewBox='0 0 100 80'
          width='40'
          height='40'
        >
          <rect width='100' height='10'></rect>
          <rect y='30' width='100' height='10'></rect>
          <rect y='60' width='100' height='10'></rect>
        </svg>
      )}

      {showSidebar && (
        <div
          className={` bg-blue-600  p-10  text-white h-full z-40  ease-in-out duration-300 ${
            showSidebar ? "translate-x-0 " : "-translate-x-full"
          }`}
        >
          <div className='relative inline-block text-left mt-20'>
            <div>
              <button
                type='button'
                className='inline-flex justify-center ml-8 text-1xl  text-sm font-bold text-white  focus:outline-none outline:none py-3'
                id='menu-button'
                aria-expanded='true'
                aria-haspopup='true'
                onClick={OpenMenu}
              >
                <Link href='/'>
                  <a
                    href='#'
                    className='text-white block px-4 pt-2 text-sm'
                    role='menuitem'
                    tabindex='-1'
                    id='menu-item-0'
                  >
                    Dashboard
                  </a>
                </Link>
                {/* <!-- Heroicon name: solid/chevron-down --> */}
                <svg
                  className=' ml-24 h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fill-rule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  />
                </svg>
              </button>
            </div>

            {showMenu && (
              <div
                className='origin-top-right absolute right-2 left=0 mt-2 w-56    focus:outline-none'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='menu-button'
                tabindex='-1'
              >
                <div className='py-1' role='none'>
                  {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                  <Link href='/EditProfile'>
                    <a
                      href='#'
                      className='text-white block px-4 pt-2 text-sm'
                      role='menuitem'
                      tabindex='-1'
                      id='menu-item-0'
                    >
                      1.1 Edit Profile
                    </a>
                  </Link>
                </div>
                <div className='py-1' role='none'>
                  <Link href='/ProfileUpdate'>
                    <a
                      href='#'
                      className='text-white block px-4 py-2 text-sm'
                      role='menuitem'
                      tabindex='-1'
                      id='menu-item-2'
                    >
                      1.2 Update Profile
                    </a>
                  </Link>
                </div>
                <div className='pt-1' role='none'>
                  <Link href='/Feedback'>
                    <a
                      href='#'
                      className='text-white block px-4 py-2 text-sm'
                      role='menuitem'
                      tabindex='-1'
                      id='menu-item-4'
                    >
                      1.3 FeedBack
                    </a>
                  </Link>
                </div>
                <div className='pt-1' role='none'>
                  <Link href='/Graphical'>
                    <a
                      href='#'
                      className='text-white block px-4 py-2 text-sm'
                      role='menuitem'
                      tabindex='-1'
                      id='menu-item-6'
                    >
                      1.4 Grapical
                    </a>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar1;
