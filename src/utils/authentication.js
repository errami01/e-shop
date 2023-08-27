import { auth } from "../config/firbase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getUserData } from "./fetcher";

export async function signUp(email, pass){
    try{
        const credentials = await createUserWithEmailAndPassword(auth, email, pass)
        const idToken = await credentials.user.getIdToken()
        localStorage.setItem('token', JSON.stringify(idToken))
        await fetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/users/${credentials.user.uid}.json?auth=${idToken}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:credentials.user.email
            })
        })
        await getUserData(credentials.user.uid)
    }
    catch(e){
        return e.message
    }
    
}