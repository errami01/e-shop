import { useEffect } from "react";

export function UpdateState(props){
    const {data, setState} = props
    useEffect(()=> setState(data),[])
}