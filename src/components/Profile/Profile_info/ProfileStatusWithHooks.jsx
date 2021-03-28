import React, { useEffect, useState } from "react";


const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

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
        <div onDoubleClick={activeStatus}>
          Status: {props.status || "status none"}
        </div>
      )}
      {editMode && (
        <div onBlur={deactiveStatus}>
          Status:{" "}
          <input autoFocus={true} onChange={onStatusChange} value={status} />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
