"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import applicationData from "../../../app/data/application.json"

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="py-1">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Applications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {applicationData.map((application) => (
            <div
              key={application.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              {/* Add an image if needed */}
              <div className="w-full h-40 bg-gray-200 rounded-md mb-4">
                <img
                  // src={application.image}
                  alt={application.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h3 className="text-lg font-semibold text-center">{application.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
