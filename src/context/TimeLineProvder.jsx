import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const TimeLineContext = createContext();
const TimeLineProvder = ({children}) => {
     
     const [timeline, setTimeline] = useState([]);

    const handleTimeline = (friend, type, time) => {
         console.log(`Timeline for ${friend.name} - ${type} at ${time}`);
         setTimeline(prevTimeline => [...prevTimeline,
             { Name:friend.name,
               id:friend.id, 
               callType:type,
               Datetime:time }]);
         toast.success(`Timeline for ${friend.name} - ${type} at ${time}`);      
        
    };
     console.log(timeline, "timeline");

    const data={
       handleTimeline,
       timeline,
       setTimeline,
    }
    return <TimeLineContext.Provider value={data}>
        {children}
    </TimeLineContext.Provider>
};

export default TimeLineProvder;