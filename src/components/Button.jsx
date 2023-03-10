const Button = (props) => {
  return (
    <>
      <button
        onClick={props.onClick}
        type="button"
        className={
          props?.className +
          " inline-block px-4  py-2  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        }
      >
        {props.text}
      </button>
    </>
  );
};

export default Button;
