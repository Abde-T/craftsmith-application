
import { ImCross } from 'react-icons/im';

const LoginDropDown = ({ isVisible , setIsVisible}) => {

    const handleClick = () => {
        setIsVisible(!isVisible)
    }
   
  return (
    <div
      className={`login-dropdown fixed top-0 left-0 w-full h-full bg-white z-50 transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
       <ImCross
        className={`text-xl md:text-3xl absolute top-0 right-0 mt-4 mr-4 md:mt-12 md:mr-12 cursor-pointer transition-transform transform ${
          isVisible ? 'rotate-0' : 'rotate-45'
        }`}
        onClick={handleClick}
      />
      <div className="h-1/2 flex justify-around items-center md:h-full flex-col lg:flex-row md:text-4xl text-2xl font-bold">
        <section className="h-12 md:h-24 border-b-2 border-black"> 
          <div>
            <h1>Sign In as Craftsman → </h1>
          </div>
        </section>
        <section className="h-12 md:h-24 border-b-2 border-black">
          <div>
            <h1>Sign In to search Craftsmen → </h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginDropDown;





