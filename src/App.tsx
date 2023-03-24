import { Admin, Resource } from "react-admin";
import localStorageDataProvider from "ra-data-local-storage";

import UserList from "./components/UserList";
import UserEdit from "./components/UserEdit";
import { users, posts, saveDataToLocalStorage } from "./utils";
import authProvider from "./utils/authProvider";
import LoginPage from "./views/LoginPage";
import UserView from "./components/UserView";
import { useEffect } from "react";
import PostList from "./components/PostList";

const dataProvider = localStorageDataProvider({
  defaultData: {
    users,
  },
});

function App() {
  useEffect(() => {
    const localUser = localStorage.getItem("user");
    const localposts = localStorage.getItem("posts");
    if (!localUser || !localposts) saveDataToLocalStorage();
  }, []);

  return (
    <Admin
      loginPage={LoginPage}
      authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource name="posts" list={PostList} />
      <Resource name="users" show={UserView} list={UserList} edit={UserEdit} />
    </Admin>
  );
}

export default App;
