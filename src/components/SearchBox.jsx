const SearchBox = (props) => {
  return (
    <>
      <input
        type="search"
        className="
        form-control
        block
        w-2/6
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
        value={props.getItem}
        onChange={(e) => {
          props.setItem(e.target.value);
        }}
        id="exampleSearch"
        placeholder="Seach Here"
      />
    </>
  );
};

export default SearchBox;
