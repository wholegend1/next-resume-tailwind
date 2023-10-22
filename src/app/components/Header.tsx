import React from "react";
import Contact from "./Contact";

interface HeaderProps {
  name: string;
  role: string;
  contacts: {
    [key: string]: string;
  };
}

const Header = ({ name, role, contacts }: HeaderProps) => (
  <header className="pb-2 md:flex items-center justify-between">
    <div>
      <h1 className="text-black text-4xl md:text-5xl font-bold tracking-wide leading-tight">
        {name}
      </h1>
      <h2 className="font-light text-lg md:text-2xl text-sky-900 leading-relaxed tracking-widest">
        {role}
      </h2>
    </div>
    <div className="mt-5 md:mt-0 md:border-l md:border-gray-300 md:pl-4">
      {contacts &&
        Object.keys(contacts).map((key) => (
          <Contact key={key} field={key} value={contacts[key]} />
        ))}
    </div>
  </header>
);

export default Header;
