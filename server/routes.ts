import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Static profile data
  const profileData = {
    id: 1,
    name: "Sarah Johnson",
    handle: "@sarahjohnson",
    bio: "Digital Product Designer & Frontend Developer. Creating user-centered designs for web and mobile applications.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  };
  
  // Static links data
  const linksData = [
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

  // API routes prefix with /api
  app.get("/api/profile", (req, res) => {
    res.json(profileData);
  });

  app.get("/api/links", (req, res) => {
    res.json(linksData);
  });

  const httpServer = createServer(app);

  return httpServer;
}
