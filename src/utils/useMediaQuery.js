 import { useEffect, useState } from "react";

 const useMediaQuery = (query) => {
   const [matches, setMatches] = useState(false);

   useEffect(() => {
     const mediaQuery = window.matchMedia(query);

     const handleChange = (event) => {
       setMatches(event.matches);
     };

     // Set initial match value
     setMatches(mediaQuery.matches);

     // Add event listener to handle changes
     mediaQuery.addListener(handleChange);

     // Clean up the event listener
     return () => {
       mediaQuery.removeListener(handleChange);
     };
   }, [query]);

   return matches;
 };

 export default useMediaQuery;
