interface user {
  id: number;
  name: string;
  password: string;
  adminRights: string;
}

interface post {
  id: number;
  name: string;
  description: string;
}

const users: user[] = [
  { id: 1, name: "ian", password: "admin", adminRights: "true" },
  { id: 2, name: "jason", password: "user", adminRights: "false" },
];

const posts: post[] = [
  { id: 1, name: "Post 1", description: "This is post one" },
  { id: 2, name: "Post 2", description: "This is post two" },
];

const saveDataToLocalStorage = () => {
  localStorage.setItem("posts", JSON.stringify(posts));
  localStorage.setItem("users", JSON.stringify(users));
};

export { users, posts, saveDataToLocalStorage };
