import UserItem from "./UserItem";

const Users = ({ users }) => {
  return users.map((user) => <UserItem user={user} key={users.id} />);
};

export default Users;
