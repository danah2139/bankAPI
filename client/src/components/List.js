import API from "../api/API";
const List = () => {
  const renderUsers = async () => {
    try {
      let users = await API.get();
      return users.map((user) => <div>{user}</div>);
    } catch (e) {
      console.log(e);
    }
  };
  return <div>{renderUsers()}</div>;
};
export default List;
