interface user {
  id: number;
  name: string;
  password: string;
  adminRights: string;
}

const DataKey = "ra-data-localforage";

const getDataFromStorage: () => [user] = () => {
  const users: string | null = window.localStorage.getItem(DataKey);
  if (users) return JSON.parse(users);
  return [];
};

const saveDataToLocalStorage: () => void = () => {
  const existingUsers = getDataFromStorage();
  if (!existingUsers.length) {
    const users: user[] = [
      { id: 1, name: "ian", password: "admin", adminRights: "true" },
      { id: 2, name: "jason", password: "user", adminRights: "false" },
    ];

    window.localStorage.setItem(DataKey, JSON.stringify(users));
  }
};

const updateDataInLocalStorage = (data: [user]) => {
  localStorage.removeItem(DataKey);
  window.localStorage.setItem(DataKey, JSON.stringify(data));
};

export { saveDataToLocalStorage, getDataFromStorage, updateDataInLocalStorage };
