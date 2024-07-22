const getUsers = async () => {
  // settimeout is just to simulate a slow request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
};

const Loading = () => {
  return <div>Loading...</div>;
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
