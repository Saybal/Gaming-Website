import { BsDiscord } from "react-icons/bs";
import { FaDiscord, FaTwitter, FaYoutube, FaMedium, FaCopyright, FaRegCopyright } from "react-icons/fa";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
    { href: "https://www.linkedin.com/in/saybal-roy/", icon: <FaLinkedinIn /> },
  { href: "https://www.facebook.com/saybal.roy/", icon: <FaFacebook /> },
  { href: "https://github.com/Saybal", icon: <FaGithub /> },
  { href: "https://discord.com/users/1269307066800013494", icon: <BsDiscord /> },
];

const Footer = () => {
  return (
    <footer className=" relative z-1 w-screen bg-[#1B1B1B] py-4 text-violet-50 font-general">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="flex gap-1 items-center text-center text-sm font-light">
        <FaRegCopyright /> Nova 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-base transition-colors duration-500 ease-in-out hover:text-gray-400"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;