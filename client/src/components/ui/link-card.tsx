import React from "react";
import { ChevronRight } from "lucide-react";
import { 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaGithub, 
  FaMedium, 
  FaGlobe 
} from "react-icons/fa";

type LinkCardProps = {
  title: string;
  url: string;
  icon: string;
  isPrimary?: boolean;
};

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "fa-twitter":
      return <FaTwitter className="text-blue-400 w-6 h-6" />;
    case "fa-instagram":
      return <FaInstagram className="text-pink-500 w-6 h-6" />;
    case "fa-linkedin":
      return <FaLinkedin className="text-blue-600 w-6 h-6" />;
    case "fa-github":
      return <FaGithub className="text-gray-800 w-6 h-6" />;
    case "fa-medium":
      return <FaMedium className="text-gray-800 w-6 h-6" />;
    case "fa-globe":
    default:
      return <FaGlobe className="w-6 h-6" />;
  }
};

export function LinkCard({ title, url, icon, isPrimary = false }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center p-4 rounded-lg transition-colors duration-300 transform hover:scale-[1.01] ${
        isPrimary
          ? "bg-primary hover:bg-primary/90 text-white"
          : "bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-100"
      }`}
      onClick={() => {
        // This would be where analytics tracking would go in a real app
        console.log(`Link clicked: ${title} (${url})`);
      }}
    >
      <div className="w-6 text-center">
        {getIconComponent(icon)}
      </div>
      <span className={`ml-3 font-medium ${isPrimary ? "" : "text-gray-700"}`}>
        {title}
      </span>
      <ChevronRight className={`h-4 w-4 ml-auto ${isPrimary ? "" : "text-gray-400"}`} />
    </a>
  );
}
