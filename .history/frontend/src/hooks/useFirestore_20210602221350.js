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
        const isCollectionEmpty = snap.size === 0;
        if (!isCollectionEmpty) {
          snap.forEach((doc) => {
            documents.push({ ...doc.data(), id: doc.id });
          }); // gre skozi kolekcijo v trenutnem casu
          const lastDoc = snap.docs[snap.docs.length - 1];
          setDocs(documents);
          setLoading(false);
        }
      });
    return () => unsub(); // ko ne uporabljamo več se odjavimo
  }, [collection]);

  return { docs, setDocs };
};

export default useFirestore;
