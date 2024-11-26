// import { Link } from "react-router-dom";

// function CadasterLogin ({ setUser, setPassword, pegarToken, label, textButton, pages, cadaster }){


//     return(
//         <div>
//              <div className="flex flex-col gap-y-6 mt-24">

//             <input 
//             className="input-login py-4 px-6 rounded w-3/5 self-center"
//             type="text" placeholder="Name:"
//             onChange={(e)=>{setUser(e.target.value)}}/>

//             <input
//             className="input-login py-4 px-6 rounded w-3/5 self-center"
//             type="password" placeholder="Passoword:"
//             onChange={(e)=>{setPassword(e.target.value)}}/>

//             </div>

//             <div className="text-center mt-12">
//                 <div>
//                     <button className="font-semibold button-login py-3 px-14 rounded text-xl"
//                     onClick={pages = "login" ? pegarToken : cadaster}>{textButton}</button>
//                 </div>

//                 <div className="mt-6">
//                     <Link to={label === "Don't have account" ? "/cadaster" : "/"}>
//                         <a>{label}<span className="color-green"> click here</span></a>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CadasterLogin