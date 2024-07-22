import UserList from "./UserList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="grid gap-5">
      <h1>Home</h1>
      <Suspense fallback={<div>Loading User List...</div>}>
        <UserList timeout={1000} />
      </Suspense>
      <Suspense fallback={<div>Loading User List...</div>}>
        <UserList timeout={2000} />
      </Suspense>
      <Suspense fallback={<div>Loading User List...</div>}>
        <UserList timeout={3000} />
      </Suspense>
    </main>
  );
}
