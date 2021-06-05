import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);
  const [lastDocs, setLastDocs] = useState();

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .limit(3)
      .onSnapshot((snap) => {
        let documents = [];
        const isCollectionEmpty = collections.size === 0;
        if (!isCollectionEmpty) {
          snap.forEach((doc) => {
            documents.push({ ...doc.data(), id: doc.id });
          }); // gre skozi kolekcijo v trenutnem casu
          setDocs(documents);
        }
      });
    return () => unsub(); // ko ne uporabljamo več se odjavimo
  }, [collection]);

  return { docs, setDocs };
};

export default useFirestore;
