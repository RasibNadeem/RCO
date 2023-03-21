import { FC, useEffect, useState, ChangeEvent } from "react";
import {
  Label,
  Input,
  Modal,
  Button,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import Select from "react-select";

interface Props {
  open: boolean;
  mode: String;
  data?: userData;
  onClose: () => void;
  onUpdate?: any;
}

interface userData {
  id?: number;
  name?: string;
  password?: string;
  adminRights?: string;
}

const dropdownData = [
  { label: "Yes", value: "true" },
  { label: "No", value: "false" },
];

const UserModal: FC<Props> = ({ open, mode, data, onClose, onUpdate }) => {
  const [userData, setUserData] = useState<userData | undefined>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    if (mode === "edit") {
      setUserData(data);
    }
  }, []);

  return (
    <Modal isOpen={open}>
      <ModalHeader>
        <Label className="text-center fs-4 fw-bold">
          {`${mode.toLocaleUpperCase()} USER`}{" "}
        </Label>
      </ModalHeader>
      <ModalBody>
        <Label className="mt-1">Id *</Label>
        <Input
          value={userData?.id}
          name="name"
          disabled={mode === "edit"}
          onChange={(e) => handleChange(e)}
        />
        <Label className="mt-1">Name *</Label>
        <Input
          value={userData?.name}
          name="name"
          onChange={(e) => handleChange(e)}
        />
        <Label className="mt-1">Admin Rights *</Label>

        <Select
          options={dropdownData}
          value={dropdownData.find(
            (item) => item.value == userData?.adminRights
          )}
          onChange={(e) =>
            handleChange({ target: { name: "adminRights", value: e?.value } })
          }
        />
        <Label className="mt-1">{`Password ${
          mode === "edit" ? "(Only if you want to update)" : ""
        }`}</Label>
        <Input
          value={userData?.password}
          name="password"
          onChange={handleChange}
        />
        <div className="mt-4 text-end">
          <Button onClick={onClose} color="danger" className="me-1">
            Cancel
          </Button>
          <Button color="primary" onClick={() => onUpdate(userData)}>
            {mode.toUpperCase()}
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default UserModal;
