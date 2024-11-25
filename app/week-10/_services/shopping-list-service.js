import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Function to get the items for a specific user from Firestore
export async function getItems(userId) {
  const q = query(collection(db, `users/${userId}/items`));
  const querySnapshot = await getDocs(q);
  const items = [];
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
}

// Function to add a new item to a specific user's list of items in Firestore
export async function addItem(userId, item) {
  const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
  return docRef.id;
}
