import React, { useEffect, useState } from "react";
import { getFirestore, collection, query, getDocs, orderBy } from "firebase/firestore";
import "./EmailList.css";
import EmailListSettings from './EamilListSettings';
import EmailType from "./EmailType";
import EmailBody from "./EmailBody";
import { app,auth } from "../config/firebase";

const EmailList = () => {
  const [emails, setEmails] = useState([]);
  const firestore = getFirestore(app);
  const currentUser = auth?.currentUser?.email;

  useEffect(() => {
    const fetchEmails = async () => {
      if(!currentUser) {
        return;
      }
      const emailCollection = collection(firestore, "users", currentUser, 'inbox');
      const q = query(emailCollection, orderBy("timeStamp", "desc")); // Sort by timeStamp in descending order

      try {
        const querySnapshot = await getDocs(q);
        const emailData = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          emailData.push({
            id: doc.id,
            ...data,
          });
        });

        setEmails(emailData);
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    };

    fetchEmails();
  }, [firestore, currentUser]);

  return (
    <div className="email-list">
      <EmailListSettings />
      <EmailType />
      {emails.map((email) => (
        <EmailBody
          key={email.id}
          to={email.to}
          subject={email.subject}
          msg={email.msg}
          timeStamp={new Date(email.timeStamp?.seconds * 1000).toLocaleString()}
        />
      ))}
    </div>
  );
};

export default EmailList;
