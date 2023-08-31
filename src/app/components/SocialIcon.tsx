import React from "react";
import Image from "next/image";
import FacebookIcon from "../assets/facebook.svg";
import InstagramIcon from "../assets/instagram.svg";
import GithubIcon from "../assets/github.svg";

interface SocialIconProps {
  type: string;
}

const SocialIcon = ({ type }: SocialIconProps) => {
  let iconSrc = "";

  switch (type) {
    case "facebook":
      iconSrc = FacebookIcon;
      break;
    case "instagram":
      iconSrc = InstagramIcon;
      break;
    case "github":
      iconSrc = GithubIcon;
      break;
    default:
      break;
  }

  return (
    <div className="footer-social-icon">
      {iconSrc && (
        <Image
          src={iconSrc} // 设置为正确的图标路径
          alt={type}
          width={24}
          height={24}
        />
      )}
    </div>
  );
};

export default SocialIcon;
