import React, { useEffect, useState } from "react";

import style from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {

  
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);


  useEffect(() => {
    setStatus(props.status);
  }, [props.status] )

  const activeStatus = () => {
    setEditMode(true);
  };

  const deactiveStatus = () => {
    setEditMode(false);
    props.updateProfileStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activeStatus}>
            {props.status || "status none"}
          </span>
        </div>
      )}
      {editMode && (
        <div onBlur={deactiveStatus}>
          <input autoFocus={true} onChange={onStatusChange} value={status} />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
