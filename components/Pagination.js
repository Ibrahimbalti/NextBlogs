import React, { useEffect, useState } from "react";

// const PageNo = [
//   {
//     number: "1",
//   },
//   {
//     number: "2",
//   },
//   {
//     number: "3",
//   },
//   {
//     number: "4",
//   },
// ];

function Pagination({ postPerage, totalPost }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerage); i++) {
    pageNumbers.push(i);
  }

  const [page, setPage] = useState(0);
  // useEffect(() => {
  //   handlePage(data.slice(page * offsetPage, page * offsetPage + offsetPage));
  // }, [page]);

  const nextpage = () => {
    setPage(page + 1);
    console.log("page is ", page);
  };

  const nextPrevious = () => {
    setPage(page - 1);
  };

  // const lastPage = Math.ceil(offsetPage / 2);
  // console.log("last page", lastPage);
  // let lastPage = data[data.length - 1];
  return (
    <ul className='inline-flex -space-x-px'>
      <li>
        <button
          onClick={nextPrevious}
          disabled={page <= 0}
          className='py-2 px-3 ml-0 leading-tight   rounded-l-lg   hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
        >
          Prev
        </button>
      </li>
      {pageNumbers.map((number) => {
        return (
          <li className='pl-2'>
            <a
              href='#'
              className='py-1 px-3 font-light leading-tight text-white bg-red-500   hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white border rounded-full'
            >
              {number}
            </a>
          </li>
        );
      })}

      <li>
        <button
          className='py-2 px-3 leading-tight text-gray-500   hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          onClick={nextpage}
        >
          Next
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
