import { useEffect, useState } from "react";
import Button from "./components/Button";
import FormDetails from "./components/FormDetails";
import Modal from "./components/Modal";
import SearchBox from "./components/SearchBox";
import UsersCard from "./components/UsersCard";

function App() {
  const [showModel, setShowModel] = useState(false);
  const [name, setName] = useState("");
  const [udate, setUDate] = useState(new Date());
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [users, setUsers] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [searchItem, setSearchItem] = useState("");
  const [prevUsers, setPrevUsers] = useState([]);

  const addNotesLocalStorage = () => {
    isFirstRender
      ? setUsers(JSON.parse(localStorage.getItem("Users")) || [])
      : localStorage.setItem("Users", JSON.stringify(users));
    setIsFirstRender(false);
  };
  useEffect(addNotesLocalStorage, [users, isFirstRender]);

  const SearchHandle = () => {
    const Users = JSON.parse(localStorage.getItem("Users")) || [];
    const Result = Users.filter((ele) => {
      return (
        ele.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        ele.city.toLowerCase().includes(searchItem.toLowerCase())
      );
    });
    setPrevUsers(Result);
  };
  useEffect(SearchHandle, [users, searchItem]);

  // const Users = JSON.parse(localStorage.getItem("Users")) || [];
  return (
    <div>
      <div className="flex flex-row items-center justify-center mt-7 gap-7">
        <SearchBox getItem={searchItem} setItem={setSearchItem} />
        <Button
          className="bg-blue-600"
          text="Add Users"
          onClick={() => {
            setShowModel(true);
          }}
        />
      </div>
      <div className="flex flex-wrap align-items-center justify-center mt-7 gap-5">
        {prevUsers.map((ele, i) => {
          return (
            <UsersCard
              key={i}
              Name={ele.name}
              DOB={ele.udate.slice(0, 10)}
              Gender={ele.gender}
              City={ele.city}
            />
          );
        })}
      </div>

      <Modal
        show={showModel}
        onClose={() => {
          setShowModel(false);
        }}
      >
        <FormDetails
          type="text"
          getValue={name}
          setChange={setName}
          placeholder="Enter Name"
        />
        <FormDetails
          type="date"
          getValue={udate}
          setChange={setUDate}
          placeholder="Enter Date"
        />
        <FormDetails
          type="text"
          getValue={gender}
          setChange={setGender}
          placeholder="Enter Gender"
        />
        <FormDetails
          type="text"
          getValue={city}
          setChange={setCity}
          placeholder="Enter City"
        />
        <div className="float-right">
          <Button
            className="bg-green-600"
            text="Add Details"
            onClick={() => {
              setUsers((prev) => [
                {
                  id: Number(new Date()),
                  name,
                  udate,
                  gender,
                  city,
                },
                ...prev,
              ]);
            }}
          />
        </div>
      </Modal>
    </div>
  );
}

export default App;
