function Announcement() {
  return (
    <div className="bg-orange-90 text-grey-15 flex items-center justify-center gap-2.5 rounded-md border-2 p-3 text-center">
      <p className="text-sm md:text-base">Admission is Open, Grab your seat now</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path
          fillRule="evenodd"
          d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
export default Announcement;
