import { FC } from "react";
import { List, Datagrid, TextField } from "react-admin";

const PostList: FC<any> = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="description" />
      </Datagrid>
    </List>
  );
};

export default PostList;
