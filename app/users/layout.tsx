import getUsers from "@/actions/getUsers";
import Sidebar from "../_components/sidebar";
import UserList from "./components/user-list";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();
  return (
    <Sidebar>
      <main className="h-full">
        <UserList items={users} />
        {children}
      </main>
    </Sidebar>
  );
}
