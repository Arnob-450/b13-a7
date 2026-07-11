import call from "../../assets/call.png"
import text from '../../assets/text.png'
import video from '../../assets/video.png'


const Card = ({ friend }) => {
    return (
        <div className="p-5 w-full bg-base-100 my-6 rounded-xl">
            <div className="flex gap-5 items-center ">
                <div>
                    {
                        friend.callType === 'Call' && <img src={call} alt="" /> ||
                        friend.callType === 'Video' && <img src={video} alt="" /> ||
                        friend.callType === 'Text' && <img src={text} alt="" />
                    }
                </div>
                <div className="flex flex-col gap-1">
                    <h2 className="text-2xl font-semibold" >{friend.callType} <span className="text-gray-500 text-xl font-normal"> with {friend.Name}</span></h2>
                    <p className="text-xl text-gray-500">{friend.Datetime}</p>
                </div>
            </div>



        </div>
    );
};

export default Card;