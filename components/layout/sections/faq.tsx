import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How can I join the Mendowa Discord server?",
    answer: `It's simple! Click the invite link on our website or social media channels to join us. We'd love to have you!`,
    value: "item-1",
  },
  {
    question: "Is joining the Mendowa Discord server free?",
    answer:
      `Yes, absolutely! Our Discord server is completely free to join. It's open to anyone who wants to be part of our community.`,
    value: "item-2",
  },
  {
    question:
      "What can I do in the Mendowa Discord server?",
    answer:
      `You can chat with like-minded people, join exciting discussions, participate in events, and access exclusive content we share with our community.`,
    value: "item-3",
  },
  {
    question: "Are there rules I need to follow in the Mendowa Discord server?",
    answer: `Yes, we have a few simple rules to keep the community friendly and respectful. Please check the #rules channel once you join!`,
    value: "item-4",
  },
  {
    question:
      `Who can I contact if I have issues in the Mendowa Discord server?`,
    answer: `You can reach out to our moderators or admins directly. They're always ready to help with any concerns or questions you might have.`,
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
