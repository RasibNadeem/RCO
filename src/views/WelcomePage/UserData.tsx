import { FC, useState } from "react";
import DataTable from "react-data-table-component";
import { Edit } from "react-feather";
import { Label, Badge } from "reactstrap";
import UserModal from "../../components/UserModal";

import { updateDataInLocalStorage } from "../../utils";

interface userData {
  id: number;
  name: string;
  password: string;
  adminRights: string;
}

const UserData: FC<{ users: userData[] }> = ({ users }) => {
  const [selectedRecord, setSelectedRecord] = useState<any>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalMode, setModalMode] = useState<string>("add");

  const handleUserUpdate = (data: userData | undefined) => {
    if (!data) return;
    const index = users.findIndex((item) => item.id === data.id);
    let newUsers: any = [...users];
    newUsers[index] = { ...data };
    setUsers(newUsers);
    updateDataInLocalStorage(newUsers);
    setModalMode("add");
    setOpenModal(false);
  };

  const columns: any = [
    {
      name: "id",
      selector: "id",
      sortable: true,
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Admin",
      selector: (row: userData) =>
        row.adminRights === "true" ? (
          <Badge color="success" pill>
            Yes
          </Badge>
        ) : (
          <Badge color="danger" pill>
            No
          </Badge>
        ),
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row: userData) => {
        return (
          <Edit
            className="edit-icons"
            onClick={() => {
              setSelectedRecord(row);
              setOpenModal(true);
              setModalMode("edit");
            }}
          />
        );
      },
    },
  ];

  return (
    <>
      <div className="text-center fs-2">
        <Label>Users</Label>
      </div>
      <DataTable data={users} columns={columns} />
      {!!openModal && (
        <UserModal
          open={openModal}
          mode={modalMode}
          data={selectedRecord}
          onClose={() => setOpenModal(false)}
          onUpdate={handleUserUpdate}
        />
      )}
    </>
  );
};

export default UserData;
