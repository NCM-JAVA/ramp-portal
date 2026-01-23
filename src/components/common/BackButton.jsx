import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = ({ label = "Back" }) => {
  const navigate = useNavigate();

  return (
   <ArrowLeft
      className="w-5 h-5 text-white-600 cursor-pointer hover:text-white-800 transition"
      onClick={() => navigate(-1)}
    />
  );
}

export default BackButton;