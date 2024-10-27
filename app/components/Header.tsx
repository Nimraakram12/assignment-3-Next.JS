import { HiCubeTransparent } from "react-icons/hi";
import Link from "next/link";


export default function Header(){
    return(
        <nav className=" bg-purple-400 text-gray-900 h-20 p-4 items-center pl-10 flex gap-10 text-1xl ">
     <HiCubeTransparent style={
        {fontSize: "2rem",
        padding:"3px",
        margin: "0"
        }
    
     }/>
       
 <p className="text-gray-900  font-extrabold mr-auto flex flex-wrap p-5 flex-col text-4xl -ml-10 ">Code Hub</p>
 <ul className='flex gap-8 justify items-between mr-auto ml-5 font-bold '>
       <li className="hover:text-white text-2xl"><Link href="/">Home</Link></li>
       <li className="hover:text-white text-2xl"><Link href="/about">About</Link></li>
       <li className="hover:text-white text-2xl"><Link href="/portfolio">Portfolio</Link></li>
       <li className="hover:text-white text-2xl"><Link href="/contact-us">Contact Us</Link></li>
     </ul>
    
    <div className="flex space-x-4 md:mt-0">
        <button className="inline-flex items-center bg-gray-800 text-white border-0 py-1 px-3 focus-outline-none hover:bg-purple-800 rounded text-base">
        Log in
        </button>
        
    </div>
    <div className="flex space-x-4 md:mt-0">
        <button className="inline-flex items-center bg-gray-800 text-white border-0 py-1 px-3 focus-outline-none hover:bg-purple-800 rounded text-base">
        Sign Up
        </button>
       
    </div>
     </nav>

    );
}