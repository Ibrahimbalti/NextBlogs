import React from "react";

function BlogDetail({ data }) {
  console.log(data);
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto flex flex-col'>
        {data.map((post, index) => {
          const today = new Date(post["date"]).toLocaleDateString();
          return (
            <div className='lg:w-4/6 mx-auto' key={index}>
              <div className='rounded-lg h-64 overflow-hidden'>
                <img
                  alt='content'
                  className='object-cover object-center h-full w-full'
                  src={post["_embedded"]["wp:featuredmedia"][0]["source_url"]}
                />
              </div>
              <div className='flex flex-col sm:flex-row mt-10'>
                <div>
                  <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                    {post["title"]["rendered"]}
                  </h2>
                  <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                    {post["_embedded"]["author"][0]["name"]} : {today}
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post["content"]["rendered"],
                    }}
                    className='leading-relaxed text-base'
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BlogDetail;

export async function getServerSideProps(context) {
  const { id } = context.params;
  const getPosts = await fetch(
    `http://blogs.local/wp-json/wp/v2/posts?_embed&slug=${id}`
  );
  const data = await getPosts.json();
  return { props: { data } };
}
