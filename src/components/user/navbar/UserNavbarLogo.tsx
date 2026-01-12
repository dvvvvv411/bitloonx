
import { Link } from "react-router-dom";
import bitloonxLogo from "@/assets/bitloonx-logo.png";

const UserNavbarLogo = () => {
  return (
    <div className="flex items-center">
      <Link to="/nutzer" className="flex items-center">
        <img 
          src={bitloonxLogo} 
          alt="bitloonx Logo" 
          className="h-10 object-contain" 
        />
      </Link>
    </div>
  );
};

export default UserNavbarLogo;
