import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Button } from "antd";

const NormalLogoutForm = ({ logOut, loginUser }) => {
  return (
    <div className="LogoutForm">
      <p>welcome {loginUser.username}</p>
      <Button type="primary" onClick={logOut}>
        Log Out
      </Button>
    </div>
  );
};

export default NormalLogoutForm;
