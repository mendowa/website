import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Custom Domain Integration",
    description:
      "Easily connect your custom domain to establish a professional and recognizable online presence for your brand.",
    pro: 0,
  },
  {
    title: "Social Media Integrations",
    description:
      "Seamlessly integrate with popular social platforms like Facebook, Twitter, and Instagram to expand your reach.",
    pro: 0,
  },
  {
    title: "Email Marketing Integrations",
    description:
      "Connect with top email marketing tools like Mailchimp and HubSpot to drive targeted campaigns effectively.",
    pro: 0,
  },
  {
    title: "SEO Optimization",
    description:
      "Advanced tools and features to boost your site's ranking on search engines and attract more organic traffic.",
    pro: 1,
  },
  {
    title: "Advanced Analytics",
    description:
      "Gain deep insights into your website’s performance with detailed reports and data visualization.",
    pro: 1,
  },
  {
    title: "Priority Support",
    description:
      "Enjoy 24/7 priority support from our expert team to ensure your issues are resolved quickly.",
    pro: 1,
  },
  {
    title: "E-Commerce Integrations",
    description:
      "Easily integrate with top e-commerce platforms like Shopify and WooCommerce to power your online store.",
    pro: 0,
  },
  {
    title: "Custom Branding",
    description:
      "Take full control of your website's look and feel with custom branding options to match your identity.",
    pro: 1,
  },  
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Grow Your Business
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        From marketing and sales to operations and strategy, we have the
        expertise to help you achieve your goals.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
