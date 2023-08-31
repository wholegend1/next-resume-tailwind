import React from "react";
interface ExperienceProps {
  data: {
    role: string;
    company: string;
    start: string;
    end?: string;
    description: string;
  }[];
}

const Experience = ({ data }: ExperienceProps) => (
  <section
    data-aos="fade-right"
    data-aos-easing="ease-in-sine"
  >
    <h1 className="section-header">工作經歷</h1>
    {data &&
      data.map((item, i) => (
        <article className="my-5" key={`${item.company}-${i}`}>
          <h2 className="item-header">{item.role}</h2>
          <h3 className="item-sub">
            {item.company} | {item.start} - {item.end || "至今"}
          </h3>
          <p className="py-6">{item.description}</p>
        </article>
      ))}
  </section>
);

export default Experience;
