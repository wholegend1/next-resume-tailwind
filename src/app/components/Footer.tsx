import React from "react";
import HeartIcon from "../assets/heart.svg";
import SocialIcon from "./SocialIcon";

interface SocialItem {
  service: string;
  url: string;
}

interface FooterProps {
  social: SocialItem[];
}

const Footer: React.FC<FooterProps> = ({ social }) => (
  <footer className="py-6 mx-auto items-center justify-between md:flex">
    <div className="items-center flex tracking-wide mb-5 md:mb-0 justify-center text-sm ml-2">
      <span className="inline-block mr-1">
        © {new Date().getFullYear()} | Developed with
      </span>
      <span className="inline-block mr-1">🧡</span>
      <span className="inline-block mr-1">by</span>
      <a
        className="text--500 hover:text-indigo-700 font-bold"
        href="#"
        rel="noopener noreferrer"
      >
        Chang Wilbur
      </a>
    </div>
    {social && (
      <div className="flex items-center justify-center ml-2">
        {social.map((item) => (
          <a
            key={item.service}
            className="footer-social-link"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={item.service}
          >
            <SocialIcon type={item.service} />
          </a>
        ))}
      </div>
    )}
  </footer>
);

export default Footer;
