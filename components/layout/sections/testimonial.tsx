"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe",
    userName: "Product Manager",
    comment:
      "Next.js and Shadcn are a game changer! This template makes it so easy to customize everything to match our brand perfectly.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sophia Collins",
    userName: "Cybersecurity Analyst",
    comment:
      "The flexibility and performance of this template are incredible. It saves so much time without sacrificing quality.",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Carlos Méndez",
    userName: "Desarrollador Web",
    comment:
      "¡Increíble! Este template me permite personalizar fácilmente cada detalle para que coincida con la identidad de mi marca. ¡Altamente recomendado!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Hana Kim",
    userName: "UX Designer",
    comment:
      "사용하기 정말 쉬워요! 색상과 글꼴을 간단히 바꿀 수 있고 디자인도 세련됐어요. 추천합니다!",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Luca Rossi",
    userName: "Responsabile IT",
    comment:
      "Un template fantastico! È molto facile da personalizzare e si integra perfettamente con le nostre esigenze aziendali.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Yuki Tanaka",
    userName: "フロントエンドエンジニア",
    comment:
      "とても使いやすいテンプレートです。色やフォントを簡単に変更できるので、ブランドに合わせたカスタマイズが楽にできました。",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Isabella Reed",
    userName: "DevOps Engineer",
    comment:
      "This is by far the best template I've used. Everything works out of the box, and the documentation is superb.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Chen Wei",
    userName: "软件工程师",
    comment:
      "这个模板非常棒！不仅功能强大，而且易于定制，完全符合我们的需求。",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ethan Parker",
    userName: "Data Scientist",
    comment:
      "I was blown away by how smooth the setup was. It's fast, reliable, and looks amazing. Perfect for any project.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sofia López",
    userName: "Analista de Datos",
    comment:
      "Este template me ha ahorrado muchísimo tiempo y esfuerzo. Todo está tan bien estructurado que es un placer trabajar con él.",
    rating: 4.9,
  },  
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our 1000+ Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
