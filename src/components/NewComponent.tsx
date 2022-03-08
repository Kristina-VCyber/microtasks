
type NewComponentType = {
    students: Array<StudentType>
    // students:StudentType[]
}
type StudentType = {
    id:number,
    name:string,
    age:number
}

//
// type NewComponentType = {
//     topCars: TopCarsType[]
// }
//
// type TopCarsType= {
//     manufacturer: string
//     model:string
// }


export const NewComponent = (props:NewComponentType) => {


    return (
       <ul>
           {props.students.map((objFromStudentArr, index) => {

               return (
                   // <li key = {objFromStudentArr.id}>{objFromStudentArr.name + " " + objFromStudentArr.age}</li>
                   <li key = {objFromStudentArr.id}>
                       <span>{objFromStudentArr.name}</span>
                       <span> age: {objFromStudentArr.age}</span>
                   </li>

               )
           })}
       </ul>
    )
}