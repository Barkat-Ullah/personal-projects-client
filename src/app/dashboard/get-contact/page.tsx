import AllContacts from "@/components/Dashboard/AllContacts";
import { backend } from "@/utils/backend";
export interface ContactTypes {
  _id: string;
  name: string;
  email: string;
  message: string;
}
const GetContactPage = async () => {
  const res = await fetch(`${backend}/contact`, {
    cache: "no-store",
  });
  const { data: contacts }: { data: ContactTypes[] } = await res.json();
  console.log(contacts);
  return (
    <div>
      <AllContacts contacts={contacts} />
    </div>
  );
};

export default GetContactPage;
