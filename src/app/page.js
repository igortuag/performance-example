const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
};

export default async function Home() {
  const users = await getUsers();

  return (
    <main>
      <h1>Home</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}
