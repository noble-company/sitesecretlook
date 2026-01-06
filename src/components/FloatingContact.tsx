import { forwardRef } from "react";
import { Calendar } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";

const FloatingContact = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 w-[70px] h-[70px] min-h-[48px] rounded-full bg-gold flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-100 transition-all duration-300 group cursor-pointer"
        aria-label="Agendar online"
      >
        <Calendar className="w-7 h-7 text-foreground group-hover:animate-pulse" aria-hidden="true" />
      </a>
    </div>
  );
});

FloatingContact.displayName = "FloatingContact";

export default FloatingContact;
