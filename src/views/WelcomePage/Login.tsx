import { FC, useState, ChangeEvent } from "react";
import { Label, Input, Button } from "reactstrap";

interface userData {
  id: number;
  name: string;
  password: string;
  adminRights: string;
}

interface Login {
  name: string;
  password: string;
}

interface Props {
  users: userData[];
  setUser: any;
}

const Login: FC<Props> = ({ users, setUser }) => {
  const [state, setState] = useState<Login>({ name: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleLogin = () => {
    if (state.name === "" || state.password === "")
      return alert("Please add all values");

    const foundUser: any = users.find((item) => {
      if (item.name === state.name && state.password === item.password) {
        return item;
      }
    });
    localStorage.setItem("user", JSON.stringify(foundUser));

    if (!foundUser) return alert("Invalid name or password");
    setUser(foundUser);
  };

  return (
    <div>
      <h3 className="text-center">Login</h3>

      <Label className="mt-1">Name</Label>
      <Input required value={state.name} name="name" onChange={handleChange} />
      <Label className="mt-1">Password</Label>
      <Input
        required
        value={state.password}
        name="password"
        onChange={handleChange}
        type="password"
      />
      <div className="text-center">
        <Button onClick={handleLogin} color="primary" className="mt-5">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
