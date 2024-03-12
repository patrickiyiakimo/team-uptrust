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
         <button>
           {/* submit */}
           <svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             fill="currentColor"
             class="w-6 h-6"
           >
             <path
               fill-rule="evenodd"
               d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
               clip-rule="evenodd"
             />
             <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
           </svg>
         </button>
       </div>
     </div>
   );
 };

 export default Output;
