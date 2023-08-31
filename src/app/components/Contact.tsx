import React from "react";
import Image from "next/image";
import MailIcon from "../assets/mail.svg";
import MobileIcon from "../assets/mobile.svg";
import GlobeIcon from "../assets/globe.svg";
import LocationIcon from "../assets/location.svg";

interface ContactProps {
  field: string;
  value: string;
}

const Contact = ({ field, value }: ContactProps) => (
  <span className="flex my-2 text-indigo-900 tracking-widest items-center">
    {field === "email" && (
      <>
        <Image
          src={MailIcon} // 路径需要根据实际情况进行调整
          alt="Mail Icon"
          className="contact-icon"
        />
        <a className="contact-link" href={`mailto:${value}`} title="email">
          {value}
        </a>
      </>
    )}
    {field === "phone" && (
      <>
        <Image
          src={MobileIcon} // 路径需要根据实际情况进行调整
          alt="Mail Icon"
          className="contact-icon"
          width={24}
          height={24}
        />
        <a className="contact-link" href={`tel:${value}`} title="phone">
          {value}
        </a>
      </>
    )}
    {field === "website" && (
      <>
        <Image
          src={GlobeIcon} // 路径需要根据实际情况进行调整
          alt="Mail Icon"
          className="contact-icon"
          width={24}
          height={24}
        />
        <a
          className="contact-link"
          target="_blank"
          href={value}
          rel="noopener noreferrer"
          title="website"
        >
          Personal Site
        </a>
      </>
    )}
    {field === "location" && (
      <>
        <Image
          src={LocationIcon} // 路径需要根据实际情况进行调整
          alt="Mail Icon"
          className="contact-icon"
          width={24}
          height={24}
        />
        <span className="contact-link">{value}</span>
      </>
    )}
  </span>
);

export default Contact;
