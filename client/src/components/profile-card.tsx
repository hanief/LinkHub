import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck } from "lucide-react";
import { LinkCard } from "@/components/ui/link-card";
import { Link } from "@shared/schema";

type ProfileCardProps = {
  name: string;
  handle: string;
  bio: string;
  avatarUrl: string;
  links: Link[];
  isLoading?: boolean;
};

export function ProfileCard({
  name,
  handle,
  bio,
  avatarUrl,
  links,
  isLoading = false,
}: ProfileCardProps) {
  if (isLoading) {
    return (
      <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden p-6 mb-8 animate-pulse">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gray-200"></div>
          <div className="text-center space-y-2">
            <div className="h-6 bg-gray-200 rounded w-48 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-32 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-64 mx-auto"></div>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-14 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden p-6 mb-8">
      {/* Profile Header Section */}
      <div className="flex flex-col items-center space-y-4">
        {/* Profile Avatar */}
        <div className="relative w-24 h-24 md:w-28 md:h-28">
          <Avatar className="w-full h-full border-2 border-primary shadow-md">
            <AvatarImage src={avatarUrl} alt={name} className="object-cover" />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-1 shadow-sm">
            <BadgeCheck className="h-4 w-4" />
          </div>
        </div>

        {/* Profile Info */}
        <div className="text-center space-y-2">
          <h1 className="text-xl font-semibold text-gray-800">{name}</h1>
          <p className="text-gray-600 text-sm max-w-sm">{bio}</p>
        </div>
      </div>

      {/* Links Section */}
      <div className="mt-6 space-y-4">
        {links.map((link) => (
          <LinkCard
            key={link.id}
            title={link.title}
            url={link.url}
            icon={link.icon}
            isPrimary={link.isPrimary || false}
          />
        ))}
      </div>
    </div>
  );
}
