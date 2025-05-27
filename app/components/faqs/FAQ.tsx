function FAQ() {
  return (
    <div className="rounded-[10px] border-2 bg-white">
      <button className="flex w-full items-center justify-between gap-[10px] px-6 pt-[30px]">
        <h4 className="text-lg font-semibold">What are the school hours at Little Learners Academy?</h4>
        <span className="bg-orange-97 rounded-md border-2 p-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-grey-15 size-5">
            <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
        </span>
      </button>

      <hr className="bg-grey-15 mx-auto mt-6 h-[2px] w-[calc(100%-60px)] border-none px-6" />

      <div>
        <p className="px-6 pt-6 pb-[30px] font-medium">
          Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.
        </p>
      </div>
    </div>
  );
}
export default FAQ;
