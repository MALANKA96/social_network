import React from "react";

import style from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activeStatus = () => {
    this.setState({ editMode: true });
  };

  deactiveStatus = () => {
    this.setState({ editMode: false });
    this.props.updateProfileStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div onDoubleClick={this.activeStatus}>
            {this.props.status || "status none"}
          </div>
        )}
        {this.state.editMode && (
          <div onBlur={this.deactiveStatus}>
            <input
              onChange={this.onStatusChange}
              type="text"
              autoFocus={true}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
