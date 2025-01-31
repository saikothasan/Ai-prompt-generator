import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "How does the AI prompt enhancer improve my prompts?",
      answer:
        "Our AI prompt enhancer uses advanced language models and prompt engineering techniques to analyze your original prompt. It then adds specificity, context, and structure to make the prompt more effective for the chosen AI tool. This can include clarifying ambiguities, adding relevant details, and incorporating best practices for interacting with AI models.",
    },
    {
      question: "Can I use the enhanced prompts for any AI tool?",
      answer:
        "Yes, you can use the enhanced prompts with any AI tool. While we offer optimization for specific popular tools like ChatGPT, DALL-E, and others, the general enhancements will improve your results across most AI platforms. Always review and adjust the enhanced prompt if needed to best fit the specific AI tool you're using.",
    },
    {
      question: "Will enhancing my prompt guarantee better results from AI tools?",
      answer:
        "While enhanced prompts generally lead to better results, the outcome also depends on the capabilities of the AI tool and the nature of your request. Enhanced prompts increase the likelihood of getting more accurate, relevant, and detailed responses, but they don't guarantee perfect results every time.",
    },
    {
      question: "How can I learn to write better prompts myself?",
      answer:
        "Using our prompt enhancer is a great way to learn about effective prompt writing. By comparing your original prompts to the enhanced versions, you can observe the changes made and understand the principles behind them. Additionally, we recommend experimenting with different prompts, studying the AI tool's documentation, and practicing regularly to improve your prompt writing skills.",
    },
    {
      question: "Is there a limit to how many prompts I can enhance?",
      answer:
        "Currently, there is no strict limit on the number of prompts you can enhance. However, we encourage responsible use of the tool. If we notice unusually high usage, we may implement fair use policies to ensure the service remains available and responsive for all users.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

