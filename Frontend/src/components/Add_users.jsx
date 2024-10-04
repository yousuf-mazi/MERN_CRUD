import { useContext, useState } from "react";
import { UsersContext } from "../Context/UserContext";

const Add_users = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const {createItem,} = useContext(UsersContext)


    const handleSubmit = (event) =>{
        event.preventDefault();
        const CreateUserForm = {name:name, email:email}
        createItem(CreateUserForm)
    }


    return (
      <div className="row my-3 align-items-center ">
        <form onSubmit={handleSubmit} className="row">
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
            <button type="submit" className="btn btn-success mb-3" >Add</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default Add_users;