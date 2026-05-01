// function Home({name,age}){
//         return(
//             <> 
//             <h2>Home page</h2>
//             <h2>Welcome {name}  {age}</h2>
//             </>
           
//         )
// }
// //this is not recommended
// // function Home(props){
// //     return (
// //         <>
// //         <h1>Home Page</h1>
// //         <h2>Welcome {props.name}  {props.age}</h2>
// //         </>
// //     )
// // }
// export default Home
import { useState } from "react"

export default function Home(){
    const [count,setCount]=useState(0);

    const incCount=()=>{
        setCount((prev)=>prev+1)
        setCount((prev)=>prev+1)
        setCount((prev)=>prev+1)

        // setCount(count+1)
        // setCount(count+1)

        // setCount(count++)
        // setCount(count+=1)
    }
    return (
        <>
            <h1>useState - Hook</h1>
            <h3>{count}</h3>
            <button onClick={incCount}>inc</button>
        </>
        
    )
}