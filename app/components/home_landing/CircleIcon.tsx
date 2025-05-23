function CircleIcon({ direction }: { direction: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" }) {
  const directions = {
    topLeft: "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    topRight: "top-0 right-0 translate-x-1/2 -translate-y-1/2",
    bottomLeft: "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
    bottomRight: "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
  };

  return <span className={`${directions[direction]} absolute h-5 w-5 rounded-full border-2 border-black bg-white`}></span>;
}
export default CircleIcon;
