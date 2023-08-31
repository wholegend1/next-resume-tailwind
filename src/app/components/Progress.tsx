import React from "react";
interface progressProps {
  percent: number;
  name: string;
}
const Progress = ({ percent, name }: progressProps) => (
  <div className="shadow w-full bg-neutral-200 rounded overflow-hidden mb-2">
    <div
      className="bg-indigo-500 text-sm py-1 text-white font-light"
      style={{ width: `${percent}%` }}
    >
      <span className="pl-2">{name}</span>
    </div>
  </div>
);

export default Progress;
