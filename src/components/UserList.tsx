import { FC } from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  usePermissions,
  ShowButton,
} from "react-admin";

const UserList: FC<any> = (props) => {
  const { permissions } = usePermissions();

  if (permissions !== "user")
    return (
      <div className="not-authorized">
        You dont have permission to access this
      </div>
    );

  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="adminRights" />

        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default UserList;
