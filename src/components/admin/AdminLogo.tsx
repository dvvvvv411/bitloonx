
import { Link } from "react-router-dom";
import bitloonxLogo from "@/assets/bitloonx-logo.png";

const AdminLogo = () => {
  return (
    <Link to="/admin" className="flex items-center">
      <img 
        src={bitloonxLogo} 
        alt="bitloonx Logo" 
        className="h-10 object-contain mr-2" 
      />
    </Link>
  );
};

export default AdminLogo;
