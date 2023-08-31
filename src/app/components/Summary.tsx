import { url } from "inspector";
import React from "react";

interface SummaryProps {
  data: string;
}

const Summary = ({ data }: SummaryProps) => (
  <section className="py-5 border-b border-neutral-300 lg:flex items-center ">
    <div className="my-5 bg-fixed">
      <img
        className="rounded-full mx-auto w-32 lg:w-full xl:w-4/5"
        src="./re.jpg"
        alt="profile"
      />
    </div>
    <p className="text-center tracking-wide leading-relaxed lg:text-left lg:mx-8 lg:text-lg">
      {data}
    </p>
  </section>
);

export default Summary;
