import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, [navigate]);
  return <div>404 - Found</div>;
};

export default NotFound;
