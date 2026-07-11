import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { addToLocalDB, getAllFromLocalDB } from "../utils/localDB";

export const TimeLineContext = createContext();
const TimeLineProvder = ({ children }) => {

    const [timeline, setTimeline] = useState(() => getAllFromLocalDB());

     


    const handleTimeline = (friend, type, time) => {

        const newTimeline = {
            Name: friend.name,
            id: crypto.randomUUID(),  
            friendId: friend.id,
            callType: type,
            Datetime: time,
        };

        // console.log(`Timeline for ${friend.name} - ${type} at ${time}`);
        setTimeline(prevTimeline => [...prevTimeline, newTimeline]);
        toast.success(`Timeline for ${friend.name} - ${type} at ${time}`);
        addToLocalDB(newTimeline);

    };
    // console.log(timeline, "timeline");

    const data = {
        handleTimeline,
        timeline,
        setTimeline,
    }
    return <TimeLineContext.Provider value={data}>
        {children}
    </TimeLineContext.Provider>
};

export default TimeLineProvder;