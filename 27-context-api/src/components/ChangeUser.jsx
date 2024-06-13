import UserContext from "../context/UserContext";
import { useContext } from "react";

function ChangeUser() {
  const { user, setUser } = useContext(UserContext);

  return (
    <button onClick={() => setUser(user === "Ilqar" ? "Warius" : "Ilqar")}>
      Change user
    </button>
  );
}

export default ChangeUser;
