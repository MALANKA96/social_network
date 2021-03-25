import * as React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/image/user.png";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={`/profile/` + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt="a"
              className={style.avaUrl}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id == user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id == user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.sity"}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
