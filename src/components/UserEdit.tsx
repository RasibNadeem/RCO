import { FC } from "react";
import { Edit, SimpleForm, TextInput, BooleanField } from "react-admin";

const UserEdit: FC<any> = (props) => {
  const MyBooleanField: FC<any> = ({ record, source }) => (
    <BooleanField record={record} source={source} />
  );
  return (
    <Edit title="Edit a user" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <MyBooleanField source="adminRights" labelTrue="Yes" labelFalse="No" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
