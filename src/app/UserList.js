const getUsers = async (timeout) => {
  // settimeout is just to simulate a slow request
  await new Promise((resolve) => setTimeout(resolve, timeout));

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
};

export default async function UserList({ timeout = 1000 }) {
  const users = await getUsers(timeout);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
