import React from "react";
import BoltIcon from "../assets/bolt.svg";
import Image from "next/image";
interface textProps {
  text: string;
}
const ListItem = ({ text }: textProps) => (
  <div className="my-1">
    <Image
      src={BoltIcon}
      alt="Bolt Icon"
      width={24}
      height={24}
      className="inline-block h-3 text-sky-500"
    />
    <span className="inline-block font-medium ml-2">{text}</span>
  </div>
);

export default ListItem;
