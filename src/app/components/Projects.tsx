import React from "react";

interface Project {
  name: string;
  company: string;
  description: string;
  link: string;
  website?:string;
}

interface ProjectsProps {
  data: Project[];
}

const Projects = ({ data }: ProjectsProps) => (
  <section
    data-aos="fade-zoom-in"
    data-aos-easing="ease-in-out"
    data-aos-anchor-placement="bottom-bottom"
  >
    <h1 className="section-header">專案製作</h1>
    {data.map((item) => (
      <article className="my-5" key={item.name}>
        <h2 className="item-header">{item.name}</h2>
        <h3 className="item-sub">{item.company}</h3>
        <p className="py-4">{item.description}</p>
        <div className="flex justify-end gap-1">
          {item.website && (
            <a
              className="btn btn-secondary"
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              查看網站
            </a>
          )}
          <a
            className="btn btn-secondary"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            訪問他
          </a>
        </div>
      </article>
    ))}
  </section>
);

export default Projects;
