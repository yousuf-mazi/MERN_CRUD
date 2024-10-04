import { useContext } from "react";
import Add_users from "./Add_users";
import UpdateUsers from "./UpdateUsers";
import { UsersContext } from "../Context/UserContext";

const Update_Add = () => {
  const { isUpdate } = useContext(UsersContext);
  return <div>{isUpdate ? <UpdateUsers /> : <Add_users />}</div>;
};

export default Update_Add;
