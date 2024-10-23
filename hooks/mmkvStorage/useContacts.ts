import * as Contacts from "expo-contacts";
import { useEffect, useState } from "react";

const useContacts = () => {
  const [contacts, setContacts] = useState(null);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      console.log("status", status);
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync();

        if (data.length > 0) {
          const contact = data[0];
          console.log(contact);
          setContacts(contact as any);
        }
      }
    })();
  }, []);
  return { contacts };
};

export default useContacts;
