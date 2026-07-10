import { FiArchive } from "react-icons/fi";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router";


const FriendDetails = () => {
    const { id } = useParams();
    console.log(id, "id");
    const friends = useLoaderData();
    console.log(friends, "friends");
    const expectedFriend = friends.find(friend => friend.id === parseInt(id));
    console.log(expectedFriend, "expectedFriend");
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-15 py-5 mt-5 sm:mt-10 lg:mt-15 mb-5 sm:mb-10 lg:mb-15">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-4">
                <div className="w-full lg:w-96">
                    <div className=" bg-base-100 w-full lg:w-96 shadow-sm flex flex-col items-center text-center gap-2 p-4 rounded-xl">
                        <img className="w-24 sm:w-32 h-24 sm:h-32 rounded-full object-cover" src={expectedFriend?.picture} alt={expectedFriend?.name} />
                        <h1 className="text-lg sm:text-xl">{expectedFriend?.name}</h1>
                        <div className={`badge text-white text-xs sm:text-sm ${expectedFriend?.status === 'overdue' ? 'badge-error' : expectedFriend?.status === 'on-track' ? 'bg-green-700' : 'badge-warning'}`}>
                            {expectedFriend?.status}
                        </div>
                        <div className="flex gap-2 flex-wrap justify-center">
                            {expectedFriend?.tags.map((tag) => {
                                return <div key={tag} className="badge bg-green-200 text-xs sm:text-sm"> {tag}</div>
                            }
                            )}
                        </div>

                        <h2 className="text-xs sm:text-lg text-gray-400 font-normal">"{expectedFriend?.bio}"</h2>
                        <p className="text-gray-400 text-xs sm:text-sm">{expectedFriend?.email}</p>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <div className="card bg-base-100 w-full lg:w-96 shadow-sm p-4 ">
                            <h2 className="flex text-center items-center justify-center font-semibold gap-2 text-xs sm:text-base"><HiOutlineBellSnooze />Snooze {expectedFriend?.days_since_contact} days</h2>
                        </div>
                        <div className="card bg-base-100 w-full lg:w-96 shadow-sm p-6 btn">
                            <h2 className="flex text-center items-center justify-center font-semibold gap-2 text-xs sm:text-base"><FiArchive /> Archive</h2>
                        </div>
                        <div className="card bg-base-100 w-full lg:w-96 shadow-sm p-6 btn">
                            <h2 className="text-red-400 flex text-center items-center justify-center gap-2 text-xs sm:text-base"><RiDeleteBin6Line />  Delete</h2>
                        </div>
                    </div>

                </div>
                <div className="flex-1 flex flex-col gap-4 sm:gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                        <div className="card bg-base-100 p-6 sm:p-13 text-center shadow-sm">
                            <h2 className="text-2xl sm:text-3xl font-bold">{expectedFriend?.days_since_contact}</h2>
                            <p className="text-gray-400 text-xs sm:text-xl">Days since last contact</p>
                        </div>
                        <div className="card bg-base-100 p-6 sm:p-13 text-center shadow-sm">
                            <h2  className="text-2xl sm:text-3xl font-bold">{expectedFriend?.goal}</h2>
                            <p className="text-gray-400 text-xs sm:text-xl">Goal</p>
                        </div>
                        <div className="card bg-base-100 p-6 sm:p-13 text-center shadow-sm">
                            <h2 className="text-2xl sm:text-3xl font-bold">{expectedFriend?.next_due_date}</h2>
                            <p className="text-gray-400 text-xs sm:text-xl">Next Due</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center card p-4 sm:p-8 bg-base-100 shadow-sm gap-4">
                        <div className=" flex flex-col gap-4 sm:gap-7">
                            <h2 className="text-lg sm:text-xl">Relationships Goal</h2>
                            <p className="text-gray-400 text-sm sm:text-lg" >Connect every <span className="font-bold text-black">{expectedFriend?.goal} days</span> </p>
                        </div>

                        <button className="btn btn-active btn-sm sm:btn-md">Edit</button>
                    </div>

                    <div className="card p-4 sm:p-5 bg-base-100 flex flex-col gap-4 sm:gap-6 shadow-sm">
                        <h2 className="text-lg sm:text-xl" >Quick Check-In</h2>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between px-0 sm:px-5"> 

                            <button className="btn btn-sm lg:btn-md p-4 sm:p-6 lg:p-10 px-6 sm:px-10 lg:px-20 text-sm sm:text-base lg:text-2xl"><IoCallOutline /> Call</button>
                            <button className="btn btn-sm lg:btn-md p-4 sm:p-6 lg:p-10 px-6 sm:px-10 lg:px-20 text-sm sm:text-base lg:text-2xl"><LuMessageSquareMore />Text</button>
                            <button className="btn btn-sm lg:btn-md p-4 sm:p-6 lg:p-10 px-6 sm:px-10 lg:px-20 text-sm sm:text-base lg:text-2xl"><IoVideocamOutline />Video</button>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default FriendDetails;