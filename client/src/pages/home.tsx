import React from "react";
import { ProfileCard } from "@/components/profile-card";
import { Footer } from "@/components/footer";
import type { Link } from "@shared/schema";

export default function Home() {
  // Static profile data
  const profileData = {
    id: 1,
    name: "Quranic Arabic Indonesia",
    handle: "@quranicarabicindonesia",
    bio: "Belajar bahasa Al-Quran dengan mudah dan sistematis",
    avatarUrl: "/qai-logo.jpeg",
  };

  // Static links data
  const linksData: Link[] = [
    {
      id: 1,
      title: "Ikuti di Instagram",
      url: "https://instagram.com/quranicarabicindonesia",
      icon: "fa-instagram",
      profileId: 1,
      isPrimary: false,
    },
    {
      id: 2,
      title: "Tonton Bedah Ayat di Youtube",
      url: "https://youtube.com/@bedah_ayat",
      icon: "fa-youtube",
      profileId: 1,
      isPrimary: false,
    },
    {
      id: 3,
      title: "Hubungi di Whatsapp",
      url: "https://wa.me/6285150774188",
      icon: "fa-whatsapp",
      profileId: 1,
      isPrimary: false,
    },
    {
      id: 4,
      title: "Ikuti Whatsapp Channel",
      url: "https://whatsapp.com/channel/0029VaP1aN1C1Fu9fhqEuA0j",
      icon: "fa-whatsapp",
      profileId: 1,
      isPrimary: false,
    },
    {
      id: 5,
      title: "Beli buku QAI di Shopee",
      url: "https://s.shopee.co.id/6V9ixJJ6Pk",
      icon: "fa-cart-shopping",
      profileId: 1,
      isPrimary: false,
    },
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
