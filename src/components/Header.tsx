import Image from "../assets/Subtract.svg";
import Slogan from "../assets/wtech.png";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  function redirectHome() {
    navigate('/');
  }

  return (
    <button onClick={redirectHome}>
      <div className="bg w-full flex h-20 items-center">
        <div className="header__logo ml-8">
          <img src={Image} alt="logo" className="h-5 mt-2" />
        </div>
        <div className="header__slogan">
          <img src={Slogan} alt="logo" className="ml-2" />
        </div>
      </div>
    </button>
  );
}
