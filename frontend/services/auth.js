import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export async function login(email, senha) {
  return await signInWithEmailAndPassword(auth, email, senha);
}