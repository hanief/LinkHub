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
    <div className="min-h-screen py-12 px-4 sm:px-6 flex flex-col items-center justify-center bg-gray-50">
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
  );
}
