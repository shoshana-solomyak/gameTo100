import UserProfile from "./UserProfile";

function UserList({ users, setInGame }) {
  if (users.length < 1) {
    return;
  }
  return (
    <div>
      {users.map((user, key) => (
        <UserProfile key={key} user={user} />
      ))}
      <button
        onClick={() => {
          setInGame(true);
        }}
      >
        start game
      </button>
    </div>
  );
}
export default UserList;
