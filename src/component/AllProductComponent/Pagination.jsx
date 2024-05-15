function Pagination(props) {
  const { selectPage, setSelectPage, dataFinal, itemPerPage } = props;

  const checkLength = dataFinal.length % itemPerPage;
  let totalPage = 0;
  if (checkLength === 0) {
    totalPage = dataFinal.length / itemPerPage;
  } else {
    totalPage = (dataFinal.length - checkLength) / itemPerPage + 1;
  }

  const handlePrevious = () => {
    if (selectPage > 0) {
      setSelectPage(selectPage - 1);
    }
  };

  const handleNext = () => {
    if (selectPage === totalPage) {
      setSelectPage(selectPage + 1);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-10 text-base mx-auto text-center">
          <li onClick={handlePrevious}>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </a>
          </li>
          {Array.from({ length: totalPage }, (_, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${selectPage === index + 1 ? "font-semibold text-black border-2" : ""}`}
                onClick={() => setSelectPage(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li onClick={handleNext}>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
