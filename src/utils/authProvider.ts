import { AuthProvider } from "react-admin";
import { users } from "./index";

const authProvider: AuthProvider = {
  login: ({ name, password }) => {
    const foundUser = users.find(
      (item) => item.name === name && item.password === password
    );

    if (foundUser) {
      localStorage.setItem("user", JSON.stringify(foundUser));
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  },
  logout: () => {
    localStorage.removeItem("user");
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem("user") ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => {
    let user = localStorage.getItem("user");
    if (user) {
      const parseUser = JSON.parse(user);
      if (parseUser.adminRights === "true") return Promise.resolve("user");
      else return Promise.resolve("");
    }
    return Promise.resolve();
  },

  checkError: (error) =>
    Promise.reject({
      message:
        "Authentication failed. Please check your username and password.",
    }),
};

export default authProvider;
