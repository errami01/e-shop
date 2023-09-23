export function setLocalIdToken(id){
    localStorage.setItem('idToken', JSON.stringify(id))
}
export function getLocalIdToken(){
    return JSON.parse(localStorage.getItem('idToken'))
}
export function setLocalUserData(data){
    localStorage.setItem('user', JSON.stringify(data))
}
export function getLocalUserData(){
    return JSON.parse(localStorage.getItem('user'))
}