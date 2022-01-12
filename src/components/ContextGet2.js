import { useContext } from "react";
import PersonContext from "../contexts/PersonContext";

// 가장 보편적으로 사용되는 방법

export default function ContextGet2 (){
    const persons = useContext(PersonContext);
    return (
        <ul>
            {persons.map(person=>{
                <li>이름은 {person.name}이고 나이는 {person.age}</li>
            })}
        </ul>
    )
}