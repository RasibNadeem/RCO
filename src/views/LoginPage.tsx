import { useState } from "react";
import { useLogin, useNotify, Notification } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  input: {
    margin: "1rem",
  },
  button: {
    margin: "1rem",
  },
});

const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    login({ name, password }).catch(() => notify("Invalid name or password"));
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        className={classes.input}
        value={name}
        required={true}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        type="password"
        className={classes.input}
        value={password}
        required={true}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className={classes.button}
      >
        Login
      </Button>
      <Notification />
    </form>
  );
};

export default LoginPage;
