const LoginDropDown = ({ isVisible }) => {
    return (
      isVisible && (
        <div className="login-dropdown fixed top-0 left-0 w-full h-full bg-white z-50">
          <div className="flex justify-around pt-48 text-4xl font-bold">
          <section className="h-24 border-b-2 border-black"> 
            <div>
              <h1>Sign In as Craftsman → </h1>
            </div>
            </section>
            <section className="h-24 border-b-2 border-black">
            <div>
              <h1>Sign In to search Craftsmen → </h1>
            </div>
          </section>
          </div>
        </div>
      )
    );
  };

  export default LoginDropDown