import React from "react";

import style from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    active: false,
  };

  activeStatus = () => {
    this.setState({ active: true });
  };

  deactiveStatus = () => {
    this.setState({ active: false });
  };
  render() {
    return (
      <div>
        {!this.state.active && (
          <div onDoubleClick={this.activeStatus}>{this.props.status}</div>
        )}
        {this.state.active && (
          <div onBlur={this.deactiveStatus}>
            <input type="text" autoFocus={true} value={this.props.status} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
