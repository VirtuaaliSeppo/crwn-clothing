import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    {...otherProps}
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button ${
      inverted ? "inverted" : ""
    }`}
  >
    {children}
  </button>
);

export default CustomButton;
