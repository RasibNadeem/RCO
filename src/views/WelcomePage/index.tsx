import { FC, useState, useEffect } from "react";
import { Button } from "reactstrap";

import { getDataFromStorage } from "../../utils";
import Login from "./Login";
import UserData from "./UserData";

const WelcomePage: FC = () => {
  interface userData {
    id: number;
    name: string;
    password: string;
    adminRights: string;
  }

  const [user, setUser] = useState<userData | undefined>();
  const [users, setUsers] = useState<[userData] | []>([]);

  useEffect(() => {
    setUsers(getDataFromStorage());
  }, []);

  return (
    <>
      {!!user && (
        <div className="text-end m-3">
          <Button onClick={() => setUser(undefined)} color="primary">
            Logout{" "}
          </Button>
        </div>
      )}
      <div
        className={`w-100 ${
          !user || user.adminRights === "false"
            ? "d-flex justify-content-center flex-column align-items-center h-100"
            : ""
        } container`}
      >
        {!user ? <Login users={users} setUser={setUser} /> : null}
        {!!user &&
          (user.adminRights === "true" ? (
            <UserData users={users} />
          ) : (
            <div>Welcome to the website</div>
          ))}
      </div>
    </>
  );
};

export default WelcomePage;
