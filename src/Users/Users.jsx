import { React } from "react";
import style from "./Users.module.css";
import * as axios from 'axios';
import userPhoto from "../assets/image/user.png";

let Users = (props) => {
  if (props.users.length === 0) {
    
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        
        props.setUsers(response.data.items);
      });

    /*  props.setUsers([
      {
        id: 1,
        avaUrl: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg",
        followed: true,
        fullName: "Nik",
        status: "im",
        location: { sity: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        avaUrl:
          "https://meragor.com/files/styles//ava_800_800_wm/avatar-v-ochkah-025.jpg",
        followed: true,
        fullName: "Sony",
        status: "im 2",
        location: { sity: "Brest", country: "Belarus" },
      },
      {
        id: 3,
        avaUrl:
          "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
        followed: false,
        fullName: "Ant",
        status: "im 3",
        location: { sity: "Baranovichi", country: "Belarus" },
      },
      {
        id: 4,
        avaUrl:
          "https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg",
        followed: true,
        fullName: "Pasha",
        status: "im 23",
        location: { sity: "Kiev", country: "Ukreine" },
      },
    ]); */
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small != null ? u.photos.small : userPhoto } alt="a" className={style.avaUrl} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  {" "}
                  unfollow{" "}
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  {" "}
                  follow{" "}
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.sity"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
