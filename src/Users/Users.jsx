import { React } from "react";
import style from "./Users.module.css";

let Users = (props) => {
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.avaUrl} alt="a" className={style.avaUrl} />
            </div>
            <div>
              <button>follow</button>
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.sity}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
