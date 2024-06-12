const Alert = ({ text, type, showType }) => {
  return (
    <div className="absolute top-3 left-0 right-0 flex justify-center">
      <div
        className={`${
          type === "danger" ? "bg-red-800" : "bg-[#22BB33]"
        } px-3 py-2 text-indigo-100 leading-none lg:rounded-full rounded-md flex lg:inline-flex items-center`}
      >
        {showType && (
          <p
            className={`${
              type === "danger" ? "bg-red-500" : "bg-blue-500"
            } flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}
          >
            {type === "danger" ? "Error" : "Success"}
          </p>
        )}
        <p className="text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
