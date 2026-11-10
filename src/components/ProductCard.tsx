import { ArrowRight, type LucideIcon } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  features: string[];
}

export default function ProductCard({ title, description, Icon, features }: ProductCardProps) {
  return (
    <div className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#b8cddd] hover:shadow-xl hover:shadow-slate-200/70">
      <div className="flex-grow p-7">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf2f8] transition-colors duration-300 group-hover:bg-[#0b4b82]">
          <Icon className="h-6 w-6 text-[#0b4b82] transition-colors duration-300 group-hover:text-white" />
        </div>
        <h3 className="mb-3 text-xl font-bold text-[#10233f] transition-colors group-hover:text-[#0b4b82]">
          {title}
        </h3>
        <p className="mb-6 text-sm leading-6 text-slate-500">
          {description}
        </p>
        
        <ul className="mb-8 space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm leading-5 text-slate-500">
              <div className="mr-2 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d49a14]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex items-center border-t border-slate-100 bg-slate-50 px-7 py-4 text-sm font-semibold text-[#0b4b82] transition-colors group-hover:text-[#d48f00]">
        Learn More <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}
