import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Mobile Friendly",
    description:
      "Our design ensures seamless functionality and aesthetics on all devices, delivering an exceptional mobile experience.",
  },
  {
    icon: "BadgeCheck",
    title: "Social Proof",
    description:
      "Build trust with your audience by showcasing testimonials, reviews, and endorsements effectively.",
  },
  {
    icon: "Goal",
    title: "Targeted Content",
    description:
      "Deliver personalized content that speaks directly to your audience, driving engagement and conversions.",
  },
  {
    icon: "PictureInPicture",
    title: "Strong Visuals",
    description:
      "Capture attention with high-quality visuals and designs that effectively convey your brand message.",
  },
  {
    icon: "MousePointerClick",
    title: "Clear CTA",
    description:
      "Encourage action with well-placed and compelling call-to-action buttons designed to convert.",
  },
  {
    icon: "Newspaper",
    title: "Clear Headline",
    description:
      "Communicate your value proposition instantly with headlines that are concise, impactful, and attention-grabbing.",
  },  
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Why Choose Us
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Explore the unique features and advantages that set us apart. From cutting-edge technology to user-focused design, we deliver solutions tailored to your needs.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
