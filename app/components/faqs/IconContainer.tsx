function IconContainer({ isOpen }: { isOpen: boolean }) {
  const plusIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-grey-15 size-5">
      <path
        fillRule="evenodd"
        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const minusIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-grey-15 size-5">
      <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
    </svg>
  );

  return <span className="bg-orange-97 rounded-md border-2 p-1.5">{isOpen ? minusIcon : plusIcon}</span>;
}
export default IconContainer;
