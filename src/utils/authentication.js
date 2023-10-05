import { auth } from "../config/firbase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getUserData } from "./fetcher";
import { removeLocalCart, removeLocalUserData, setLocalIdToken } from "./utils";
import { myHistory } from "./myHistory";
import { onAuthStateChanged } from "firebase/auth";

export async function signUp(email, pass){
    try{
        const credentials = await createUserWithEmailAndPassword(auth, email, pass)
        const idToken = await credentials.user.getIdToken()
        setLocalIdToken(idToken)
        await fetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/users/${credentials.user.uid}.json?auth=${idToken}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:credentials.user.email
            })
        })
        await getUserData()
    }
    catch(e){
        return e.message
    }
    
}
export const logOut = async ()=> {
    await signOut(auth)
    removeLocalUserData()
    removeLocalCart()
    myHistory.navigate("#")
}
export function confirmUserState(){
    return new Promise((res, rej)=>{
        onAuthStateChanged(auth, (user)=>{
            if(user) res(user.uid)
            else {
                rej('No user found')
            }
        })
    })
}