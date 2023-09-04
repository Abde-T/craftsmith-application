const LoginDropDown = ({ isVisible }) => {
  return (
    isVisible && (
      <div className="absolute flex justify-end right-10 mt-16 w-60 z-50">
        <div className=" shadow-lg p-4 space-y-3 ">
          <input
            type="email"
            className="w-full border border-black rounded-lg p-2"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full border border-black rounded-lg p-2"
            placeholder="Password"
          /> 
          <button className="text-white border border-white rounded-lg p-2 ml-16">Submit</button> 
        </div>
        
      </div>
    )
  );
};

export default LoginDropDown;
