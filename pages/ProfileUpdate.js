import React from "react";

function ProfileUpdate() {
  return (
    <div className='grid lg:grid-cols-3 gap-3 justify-items-center p-5 md:grid-cols-2 sm:grid-cols-1'>
      {/* ................................Content 1........................ */}

      <div>
        <div>
          <img
            className='lg:h-48 md:h-full w-full object-cover object-center'
            src='https://dummyimage.com/720x400'
            alt='blog'
          />
        </div>

        <div className='p-6'>
          <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
            The Catalyzer
          </h1>
          <p className='leading-relaxed mb-3'>
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <a className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>
            {" "}
            More
          </a>
        </div>
      </div>
      {/* ................................Content 2........................ */}
      <div>
        <div>
          <img
            className='lg:h-48 md:h-full w-full object-cover object-center'
            src='https://dummyimage.com/720x400'
            alt='blog'
          />
        </div>

        <div className='p-6'>
          <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
            The Catalyzer
          </h1>
          <p className='leading-relaxed mb-3'>
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <a className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>
            {" "}
            More
          </a>
        </div>
      </div>

      {/* ................................Content 3........................ */}
      <div>
        <div>
          <img
            className='lg:h-48 md:h-full w-full object-cover object-center'
            src='https://dummyimage.com/720x400'
            alt='blog'
          />
        </div>

        <div className='p-6'>
          <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
            The Catalyzer
          </h1>
          <p className='leading-relaxed mb-3'>
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <a className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>
            {" "}
            More
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdate;
