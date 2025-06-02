
import { useState } from "react";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import FamilyMoments from "@/components/FamilyMoments";
import Pastors from "@/components/Pastors";
import Location from "@/components/Location";
import SocialMedia from "@/components/SocialMedia";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <AboutUs />
      <FamilyMoments />
      <Pastors />
      <Location />
      <SocialMedia />
    </div>
  );
};

export default Index;
