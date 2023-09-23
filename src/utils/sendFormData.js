import { auth } from "../config/firbase";
export default async function sendFormData(request){
    const user =auth.currentUser
    const idToken = await user.getIdToken()
    const formData = await request.formData()
    const toSend = {}
    for (const key of formData.keys()) {
        toSend[key] = formData.get(key)
      }
      
    try{
        await fetch(`https://e-commerce-8a744-default-rtdb.europe-west1.firebasedatabase.app/users/${user.uid}.json?auth=${idToken}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(toSend)
        })
    }
    catch(e){
        return e.message
    }
}