import { auth } from "../config/firbase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function signUp(email, pass){
    try{
        const credentials = await createUserWithEmailAndPassword(auth, email, pass)
        fetch('https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/users.json',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:credentials.user.uid,
                email:credentials.user.email
            })
        })
        localStorage.setItem('token', JSON.stringify(await credentials.user.getIdToken()))
    }
    catch(e){
        return e.message
    }
    
}