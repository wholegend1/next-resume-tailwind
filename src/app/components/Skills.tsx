import React from "react";
import Progress from "./Progress";
import ListItem from "./List_Item";

interface Skill {
  title: string;
  type: string;
  subSkills: SubSkill[];
}

interface SubSkill {
  name: string;
  percent?: number;
}

interface SkillsProps {
  data: Skill[];
}

const Skills = ({ data }: SkillsProps) => (
  <section
    data-aos="fade-left"
    data-aos-anchor="#example-anchor"
    data-aos-offset="500"
    data-aos-duration="500"
  >
    <h1 className="section-header">Skills</h1>
    {data.map((skill: Skill) => (
      <div key={skill.title} className="my-5">
        <h1 className="item-header font-semibold text-lg mb-2">
          {skill.title}
        </h1>
        {skill.subSkills &&
          skill.subSkills.length > 0 &&
          skill.subSkills.map((subSkill: SubSkill) => (
            <span key={subSkill.name}>
              {skill.type === "percent" && subSkill.percent !== undefined ? (
                <Progress name={subSkill.name} percent={subSkill.percent} />
              ) : skill.type === "tag" ? (
                <span key={subSkill.name} className="tag">
                  {subSkill.name}
                </span>
              ) : skill.type === "list" ? (
                <ListItem key={subSkill.name} text={subSkill.name} />
              ) : null}
            </span>
          ))}
      </div>
    ))}
  </section>
);

export default Skills;
