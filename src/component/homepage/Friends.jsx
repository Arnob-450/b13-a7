import { use } from "react";

const friendsPromise = fetch("/friendsData.json").then(res => res.json());
const Friends = () => {
    const friends = use(friendsPromise);
    console.log(friends);
    return (
        <div className="container mx-auto px-15 py-5">
            <h1 className="text-3xl font-bold mb-6">Your Friends</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
                {
                    friends.map((friend) => {
                        return (<div className="card bg-base-100 w-96 shadow-sm">
                            <figure className="px-10 pt-10"> 
                                <img className="rounded-full  "
                                    src={friend.picture}
                                    alt={friend.name} />
                            </figure>
                            <div className="card-body flex flex-col items-center text-center">
                                <h2 className="card-title text-center">
                                    {friend.name} 
                                </h2>
                                <p className="text-gray-500 text-l">{friend.days_since_contact}d ago</p>
                                <div className="flex gap-2 mt-2">
                                   {friend.tags.map((tag) => {
                                    return <div className="badge bg-green-200 ">{tag}</div>
                                }
                                )}  
                                </div>

                                
                               
                                <div className={`badge text-white ${friend.status === 'overdue' ? 'badge-error' : friend.status === 'on-track' ? 'bg-green-700' : 'badge-warning'}`}>
                                    {friend.status}
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>
        </div>
    );
};

export default Friends;