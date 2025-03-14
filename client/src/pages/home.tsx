import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ProfileCard } from "@/components/profile-card";
import { Footer } from "@/components/footer";
import type { Link, Profile } from "@shared/schema";

export default function Home() {
  const profileQuery = useQuery<Profile>({
    queryKey: ["/api/profile"],
  });

  const linksQuery = useQuery<Link[]>({
    queryKey: ["/api/links"],
  });

  const isLoading = profileQuery.isLoading || linksQuery.isLoading;
  const hasError = profileQuery.isError || linksQuery.isError;

  if (hasError) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 flex flex-col items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden p-6 mb-8">
          <div className="text-center space-y-4">
            <h1 className="text-xl font-semibold text-red-500">Error Loading Profile</h1>
            <p className="text-gray-600">
              Sorry, there was an error loading the profile information. Please try again later.
            </p>
          </div>
        </div>
      </div>
    );
  }

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
          name={profileQuery.data?.name || ""}
          handle={profileQuery.data?.handle || ""}
          bio={profileQuery.data?.bio || ""}
          avatarUrl={profileQuery.data?.avatarUrl || ""}
          links={linksQuery.data || []}
          isLoading={isLoading}
        />
        <Footer />
      </div>
    </div>
  );
}
