import { MessageCircle, CreditCard, Truck, Heart } from "lucide-react";

const steps = [
  {
    icon: <MessageCircle size={28} />,
    title: "1. Browse & Choose",
    description:
      "Explore our catalogue and pick your favourite items. Tap 'Order via WhatsApp' on any product.",
  },
  {
    icon: <CreditCard size={28} />,
    title: "2. Confirm & Pay",
    description:
      "We'll confirm availability and share payment details. Pay via M-Pesa, bank transfer, or cash on delivery.",
  },
  {
    icon: <Truck size={28} />,
    title: "3. Fast Delivery",
    description:
      "We deliver across Kenya! Nairobi: Same/next day. Upcountry: 2-3 business days via courier.",
  },
  {
    icon: <Heart size={28} />,
    title: "4. Enjoy!",
    description:
      "Unbox your new favourite products. Not satisfied? Easy returns within 7 days.",
  },
];

export default function HowToOrder() {
  return (
    <section className="py-16 sm:py-20 bg-espresso relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-tan/5 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold/40" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">
              Simple Process
            </span>
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory mb-4">
            How to Order
          </h2>
          <p className="text-ivory/50 text-sm sm:text-base max-w-lg mx-auto">
            Getting your favourite products is as easy as 1-2-3-4!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-white/5 border border-gold/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-espresso transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-ivory mb-2">
                {step.title}
              </h3>
              <p className="text-ivory/40 text-xs sm:text-sm leading-relaxed">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-gold/30">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
