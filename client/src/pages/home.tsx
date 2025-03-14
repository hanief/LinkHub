import React from "react";
import { ProfileCard } from "@/components/profile-card";
import { Footer } from "@/components/footer";
import type { Link } from "@shared/schema";

export default function Home() {
  // Static profile data
  const profileData = {
    id: 1,
    name: "Sarah Johnson",
    handle: "@sarahjohnson",
    bio: "Digital Product Designer & Frontend Developer. Creating user-centered designs for web and mobile applications.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  };
  
  // Static links data
  const linksData: Link[] = [
    {
      id: 1,
      title: "Twitter",
      url: "https://twitter.com/sarahjohnson",
      icon: "fa-twitter",
      profileId: 1,
      isPrimary: false
    },
    {
      id: 2,
      title: "Instagram",
      url: "https://instagram.com/sarahjohnson",
      icon: "fa-instagram",
      profileId: 1,
      isPrimary: false
    },
    {
      id: 3,
      title: "LinkedIn",
      url: "https://linkedin.com/in/sarahjohnson",
      icon: "fa-linkedin",
      profileId: 1,
      isPrimary: false
    },
    {
      id: 4,
      title: "My Portfolio",
      url: "https://sarahjohnson.com",
      icon: "fa-globe",
      profileId: 1,
      isPrimary: true
    },
    {
      id: 5,
      title: "GitHub Projects",
      url: "https://github.com/sarahjohnson",
      icon: "fa-github",
      profileId: 1,
      isPrimary: false
    },
    {
      id: 6,
      title: "My Blog",
      url: "https://medium.com/@sarahjohnson",
      icon: "fa-medium",
      profileId: 1,
      isPrimary: false
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 bg-gray-50 opacity-90 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] z-0"></div>
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      {/* Content */}
      <div className="z-10">
        <ProfileCard
          name={profileData.name}
          handle={profileData.handle}
          bio={profileData.bio}
          avatarUrl={profileData.avatarUrl}
          links={linksData}
          isLoading={false}
        />
        <Footer />
      </div>
    </div>
  );
}
