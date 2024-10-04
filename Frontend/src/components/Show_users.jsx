import { useContext } from "react";
import { UsersContext } from "../Context/UserContext";
import { MdBrowserUpdated, MdDeleteOutline } from "react-icons/md";
import "./Show_user.css";

const Show_users = () => {
  const { UserForm, deleteItem,isUpdate,setisUpdate,setupdateid} = useContext(UsersContext);

  const handleClick = (id) => {
    setisUpdate(!isUpdate);
    setupdateid(id)
  };
  

  return (
    <div>
      {UserForm.map((user_items) => (
        // eslint-disable-next-line react/jsx-key
        <div className="row div">
          <div className="col-4">
            <p>Name : {user_items.name}</p>
          </div>
          <div className="col-6">
            <p>Email : {user_items.email}</p>
          </div>
          <div className="col-2">
            <div className="row">


              <div className="col icon_div">
                <button className="button-stayle"
                onClick={()=>handleClick(user_items._id)}
                >
                  <MdBrowserUpdated />
                </button>
              </div>
              <div className="col icon_div">
                <button
                  className="button-stayle"
                  onClick={() => deleteItem(user_items._id)}
                >
                  <MdDeleteOutline />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Show_users;
