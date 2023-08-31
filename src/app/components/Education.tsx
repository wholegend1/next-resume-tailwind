import React from "react";

interface EducationItem {
  degree: string;
  institution: string;
  start: string;
  end: string;
}

interface EducationProps {
  data: EducationItem[];
}

const Education = ({ data }: EducationProps) => (
  <section
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
    className="mb-5"
  >
    <h1 className="section-header mb-5">Education</h1>
    {data &&
      data.map((item: EducationItem) => (
        <div className="my-2" key={item.degree}>
          <h2 className="item-header text-lg">{item.degree}</h2>
          <h3 className="item-sub">{item.institution}</h3>
          <p className="text-sm text-neutral-500 font-light">
            {item.start} - {item.end}
          </p>
        </div>
      ))}
  </section>
);

export default Education;
