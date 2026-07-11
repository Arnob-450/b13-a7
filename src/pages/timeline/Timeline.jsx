import { useContext, useState } from "react";
import { TimeLineContext } from "../../context/TimeLineProvder";
import { FaChevronDown } from "react-icons/fa";
import Card from "../../component/timeline/Card";

const Timeline = () => {
    const { timeline } = useContext(TimeLineContext);

    const [filter, setFilter] = useState("All");

    const filteredTimeline =
        filter === "All"
            ? timeline
            : timeline.filter(
                  (friend) => friend.callType.toLowerCase() === filter.toLowerCase()
              );

              console.log(timeline);

    return (
        <div>
            <div className="container mx-auto p-10">
                <h2 className="font-bold text-4xl">Timeline</h2>

                <div className="mt-2">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn m-1"
                        >
                           Filter timeline   ({filter}) <FaChevronDown />
                        </div>

                        <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                        >
                            <li>
                                <a onClick={() => setFilter("All")}>All</a>
                            </li>
                            <li>
                                <a onClick={() => setFilter("Call")}>Call</a>
                            </li>
                            <li>
                                <a onClick={() => setFilter("Text")}>Text</a>
                            </li>
                            <li>
                                <a onClick={() => setFilter("Video")}>Video</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6 space-y-4">
                    {filteredTimeline.length > 0 ? (
                        filteredTimeline.map((friend) => (
                            <Card key={friend.id} friend={friend} />
                        ))
                    ) : (
                        <p className="text-gray-500 text-center p-8 sm:p-16 lg:p-48 bg-base-100 rounded-2xl text-xl sm:text-3xl lg:text-5xl font-semibold">
                            No timeline found 
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Timeline;