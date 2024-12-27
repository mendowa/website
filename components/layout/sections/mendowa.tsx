"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import applicationData from "../../../app/data/application.json"

export const HeroSection = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white mb-10 text-center">
          Discover Applications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {applicationData.map((application) => (
            <div
              key={application.id}
              className="bg-gray-900 shadow-lg hover:shadow-2xl hover:shadow-white transition-shadow duration-300 rounded-xl overflow-hidden flex flex-col items-center"
            >
              <div className="w-full h-48 flex items-center justify-center">
                <img
                  src={application.image}
                  alt={application.name}
                  className="w-auto h-full max-h-full object-contain"
                />
              </div>
              <div className="p-6 w-full">
                <h3 className="text-xl font-semibold text-white mb-2 text-center">
                  {application.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 text-center">
                  {application.deskripsi}
                </p>
                <button className="block mx-auto bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                  <a 
                    href={application.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
