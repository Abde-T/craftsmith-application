const LoginDropDown = ({ isVisible, children }) => {
    return (
      isVisible && (
        <div className="login-dropdown fixed top-0 left-0 w-full h-full bg-white z-50">
          {children}
        </div>
      )
    );
  };

  export default LoginDropDown