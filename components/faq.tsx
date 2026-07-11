"use client"

import { useState } from "react"

interface FAQItem {
  q: string
  a: string
}

interface FAQProps {
  faqs?: FAQItem[]
}

const defaultFaqs: FAQItem[] = [
  {
    q: "What kind of yatra packages do you offer?",
    a: "We offer pilgrimage packages to Char Dham, Do Dham, Vaishno Devi, Kedarnath, Amarnath, and other major spiritual destinations across India, with both group and customised private tours."
  },
  {
    q: "What is included in the package price?",
    a: "Our packages typically include accommodation, meals, transport, an experienced tour guide, and temple darshan arrangements. Inclusions vary slightly by package, and our team will share a detailed breakdown before booking."
  },
  {
    q: "Can you customise a package for my family or group?",
    a: "Absolutely. We design custom itineraries based on your group size, budget, comfort level, and the number of days you have, including special arrangements for senior citizens."
  },
  {
    q: "Are your packages suitable for senior citizens?",
    a: "Yes, many of our pilgrims are elderly travellers. We offer comfortable transport, paced itineraries, wheelchair and pony assistance where needed, and on-trip support from our team."
  },
  {
    q: "Do you provide VIP or priority darshan?",
    a: "Yes, VIP and priority darshan can be arranged at select temples, subject to availability, to help you avoid long queues during your visit."
  },
  {
    q: "What is the best time of year to travel?",
    a: "This depends on the destination — most Himalayan yatras run from May to October, while shrines like Vaishno Devi are open year-round. Our team can recommend the ideal time based on your chosen package."
  },
  {
    q: "How do I book a yatra with you?",
    a: "You can book by calling our team, sending us a message on WhatsApp, or filling out the enquiry form on our website. We'll guide you through the available packages and help confirm your dates."
  },
  {
    q: "What are your payment and cancellation terms?",
    a: "50% booking amount will be paid in advance, and the remaining 50% amount must be paid on the first day of the tour after hotel check-in."
  }
]

export function FAQ({ faqs = defaultFaqs }: FAQProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleGeneralWhatsapp = () => {
    const phoneNumber = '+917208771688';
    const message = encodeURIComponent("Hello, I'm interested in a spiritual trip with Margika Yatra.");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    if (typeof window !== 'undefined') {
      window.open(whatsappURL, '_blank');
    }
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-orange-50/50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-orange-600 text-xs font-bold tracking-widest uppercase">
              <span className="w-8 h-[2px] bg-orange-500 rounded"></span>
              <span>Common Questions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-center lg:text-left">
              Frequently
              <span className="block font-serif italic text-orange-600 font-medium mt-1">Asked Questions</span>
            </h2>
            
            <div className="w-16 h-[2px] bg-gray-300 mx-auto lg:mx-0"></div>
            
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md text-center lg:text-left mx-auto lg:mx-0">
              Everything you need to know before booking your spiritual journey with Margika Yatra, from Mumbai, Thane, or anywhere in India.
            </p>
            
            <div className="flex flex-col gap-3 pt-4 items-center lg:items-start">
              <a 
                href="tel:+917208771688"
                className="inline-flex items-center gap-2.5 bg-[#E8631C] text-white font-bold py-[15px] px-[26px] rounded-lg shadow-sm text-[13.5px] tracking-[0.5px] uppercase w-fit active:scale-[0.98] transition-transform duration-100"
              >
                <span className="text-base leading-none">📞</span>
                <span>SPEAK TO AN EXPERT</span>
              </a>
              
              <button 
                onClick={handleGeneralWhatsapp}
                className="inline-flex items-center gap-2.5 bg-[#3CBE5E] text-white font-bold py-[15px] px-[26px] rounded-lg shadow-sm text-[13.5px] tracking-[0.5px] uppercase w-fit active:scale-[0.98] transition-transform duration-100"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WHATSAPP A QUESTION</span>
              </button>
            </div>
          </div>

          {/* Right side — pure CSS accordion, no Framer Motion */}
          <div className="lg:col-span-7 space-y-1">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className="border-b border-orange-200/60 last:border-0"
                >
                  <button
                    className="w-full flex items-center justify-between py-5 text-left text-gray-800 font-semibold focus:outline-none group"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base md:text-lg pr-4 group-active:text-orange-600">{item.q}</span>
                    <span 
                      className="w-8 h-8 rounded-full border border-orange-300 flex items-center justify-center text-orange-600 font-light text-xl shrink-0 transition-transform duration-200"
                      style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    >
                      +
                    </span>
                  </button>
                  
                  {/* Pure CSS transition — no JS animation library needed */}
                  <div
                    style={{
                      maxHeight: isOpen ? '400px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease',
                    }}
                  >
                    <div className="pb-5 text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  )
}
