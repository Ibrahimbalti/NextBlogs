import React from "react";

function ProfileUpdate({ data }) {
  console.log("Data is", data);
  return (
    <div className='grid lg:grid-cols-1  justify-items-center p-5 md:grid-cols-2 '>
      {/* ................................Content 1........................ */}
      {data.map((page, index) => {
        return (
          <div>
            <div>
              {page["_embedded"]["wp:featuredmedia"] && (
                <img
                  className='lg:h-48 md:h-full w-full object-cover object-center'
                  src={page["_embedded"]["wp:featuredmedia"][0]["source_url"]}
                  alt='blog'
                />
              )}
            </div>

            <div className='p-6'>
              <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                {page.title.rendered}
              </h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: page["content"]["rendered"],
                }}
                className='leading-relaxed text-base'
              ></div>
              <a className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>
                {" "}
                More
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const getPosts = await fetch(
    "http://blogs.local//wp-json/wp/v2/pages?_embed&&slug=profile-update"
  );
  const data = await getPosts.json();
  // const d3 = data.map((d) => {
  //   return d["_embedded"]["wp:featuredmedia"][0]["source_url"];
  // });

  return { props: { data } };
}

export default ProfileUpdate;
