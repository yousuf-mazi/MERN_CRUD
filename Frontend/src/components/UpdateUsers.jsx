import { useContext, useState } from "react";
import { UsersContext } from "../Context/UserContext";

const UpdateUsers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const {update,updateid} = useContext(UsersContext)

  const OnUpdate =()=>{
    event.preventDefault();
    const UpdateUserForm = {name:name, email:email}
    update(updateid,UpdateUserForm)
    
  }


  return (
    <div className="row my-3 align-items-center ">
    <form onSubmit={OnUpdate} className="row">
      <div className="col-auto" >
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="col-auto" >
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="col-auto px-10">
        <button type="submit" className="btn btn-success mb-3" >Update</button>
      </div>
    </form>
  </div>
  );
};

export default UpdateUsers;
