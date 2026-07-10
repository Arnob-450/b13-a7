

import { useContext } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TimeLineContext } from "../../context/TimeLineProvder";

  


const COLORS = ["#7C3AED", "#214F43", "#34A853"];

const Stats = () => {
const { timeline } = useContext(TimeLineContext);

const call= timeline.filter((calls)=>calls.callType.toLowerCase() === 'call').length
const text= timeline.filter((calls)=>calls.callType.toLowerCase() === 'text').length
const video= timeline.filter((calls)=>calls.callType.toLowerCase() === 'video').length

const data = [
  { name: "Text", value: text },
  { name: "Call", value: call},
  { name: "Video", value: video},
];

  return (
    <div className="bg-white rounded-xl shadow  container mx-auto p-10 my-10">
      <h2 className="text-2xl font-semibold mb-4">
        By Interaction Type
      </h2>

      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              innerRadius={70}
              outerRadius={100}
              dataKey="value"
              paddingAngle={5}
              stroke="#fff"
              strokeWidth={5}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stats;