const { useState } = require("react");

 const Output = () => {
   const [showFirstIcon, setShowFirstIcon] = useState(true);

   const handleIconClick = () => {
     setShowFirstIcon((prev) => !prev);

   };

   return (
     <div className="output">
       <div className="tracker">
         <ul>
           <li>
             <h1>Uptrust</h1>
           </li>
           <li onClick={handleIconClick}>
             {showFirstIcon ? (
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 strokeWidth="1.5"
                 stroke="currentColor"
                 className="w-6 h-6"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                 />
               </svg>
             ) : (
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 strokeWidth="1.5"
                 stroke="currentColor"
                 className="w-6 h-6"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                 />
               </svg>
             )}
           </li>
         </ul>
       </div>
       <div className="content">
         <h2>How can we help you in rating your CV with our AI bot?</h2>
         <p>
           To understand how Uptrust works, you can click on the Learn More
           button on the home page
         </p>
         <input type="text" name="text" placeholder="Message Uptrust AI bot" />{" "}
         <br />
         <button>submit</button>
       </div>
     </div>
   );
 };

 export default Output;
