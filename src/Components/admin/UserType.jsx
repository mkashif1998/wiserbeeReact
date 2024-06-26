import React from "react";
import { useDispatch } from "react-redux";
import { getPassword, getUserName } from "../../redux/adminCredSlice";
const UserType = ({ itemClick }) => {
  const dispatch = useDispatch();
  const userTypes = ["Student", "Teacher", "Parent"];
  const rememberMe = true;
  return (
    <div className="row">
      <div
        className="col-md-12   px-2 card shadow d-flex flex-column justify-content-between"
        style={{ height: "29rem" }}
      >
        <div className="form-group">
          <label className="mb-2">User Type</label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => itemClick(e.target.value)}
          >
            {userTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <form autoComplete="false">
          <div className="form-group mb-2">
            <label htmlFor="email" className="text-secondary">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              id="email"
              autoComplete="false"
              onChange={(e) => dispatch(getUserName(e.target.value))}
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="password" className="text-secondary">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
              onChange={(e) => dispatch(getPassword(e.target.value))}
            />
          </div>
          <div className="form-check form-switch d-flex align-items-center gap-2 py-2 ">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              checked={rememberMe}
              // onChange={handleCheckboxChange}
            />
            <label className="sign-in-toggle poppins-regular">Active</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserType;
