import { addDoc, collection, getDocs } from 'firebase/firestore';
import { firebaseDB } from './init';

const todo = 'hello';

const addTodo = async () => {
  try {
    const docRef = await addDoc(collection(firebaseDB, 'todos'), {
      todo: todo,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const getTodos = async () => {
  const response = await getDocs(collection(firebaseDB, 'todos'));

  const todos = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return todos;
};
