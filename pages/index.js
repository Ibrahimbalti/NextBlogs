import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Pagination from "../components/Pagination";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
export default function Home({ data }) {
  console.log("data is", data);
  const [blog, setBlog] = useState(data);
  const [postPerage, setPostperpage] = useState(2);
  const [currentpage, setCurrentpage] = useState(0);

  const indexoffLastPost = currentpage * postPerage;
  const indexofFirstPost = postPerage + indexoffLastPost;
  const currentPost = blog.slice(indexoffLastPost, indexofFirstPost);
  const hanldePage = (blog_) => {
    setBlog(blog_);
  };
  const router = useRouter();
  const pageCount = Math.ceil(blog.length / postPerage);
  const changePage = ({ selected }) => {
    setCurrentpage(selected);
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {currentPost.map((post, index) => {
              return (
                <Link href={`/routes/${post["slug"]}`} key={index}>
                  <div className='xl:w-1/3 md:w-1/2 p-4'>
                    <div className='bg-gray-100 p-6 rounded-lg'>
                      <img
                        alt='content'
                        className='object-cover object-center h-full w-full'
                        src={
                          post["_embedded"]["wp:featuredmedia"][0]["source_url"]
                        }
                      />
                      <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                        {post["title"]["rendered"]}
                      </h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: post["excerpt"]["rendered"],
                        }}
                        className='leading-relaxed text-base'
                      ></div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <br />
          <br />
          <br />
          {/* <Pagination postPerage={postPerage} totalPost={blog.length} /> */}
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName='pagination'
            pageClassName='page-num'
            previousLinkClassName='page-num'
            nextLinkClassName='page-num'
            disabledClassName={"paginationDisabled"}
            activeLinkClassName='active'
          />
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  const getPosts = await fetch("http://blogs.local/wp-json/wp/v2/posts?_embed");
  const data = await getPosts.json();
  return { props: { data } };
}
