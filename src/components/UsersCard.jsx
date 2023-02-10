const UsersCard = (props) => {
  return (
    <>
      <div className="max-w-sm rounded  shadow">
        <div className="px-5 py-3 ">
          <div className="text-xl mb-4">
            <span>Name :</span>
            <span className="font-semibold">{props.Name}</span>
          </div>
          <div className="text-xl mb-4">
            <span>DOB :</span>
            <span className="font-semibold">{props.DOB}</span>
          </div>
          <div className="text-xl mb-4">
            <span>Gender :</span>
            <span className="font-semibold">{props.Gender}</span>
          </div>
          <div className="text-xl mb-3">
            <span>City :</span>
            <span className="font-semibold">{props.City}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersCard;
