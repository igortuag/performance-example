const getUsers = async () => {
  // settimeout is just to simulate a slow request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
};

export default async function UserList() {
  const users = await getUsers();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
