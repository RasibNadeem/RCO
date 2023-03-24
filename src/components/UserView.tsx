import { FC } from "react";
import { Show, SimpleShowLayout, TextField } from "react-admin";

const UserView: FC<any> = (props) => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <TextField title="Admin Rights" source="adminRights" />
      </SimpleShowLayout>
    </Show>
  );
};

export default UserView;
