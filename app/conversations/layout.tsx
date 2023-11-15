import getConversations from "@/actions/getConversation";
import Sidebar from "../_components/sidebar";
import ConversationList from "./components/conversation-list";
import getUsers from "@/actions/getUsers";

export default async function ConversationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();
  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList users={users} initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
