import { ArrowRight, type LucideIcon } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  features: string[];
}

export default function ProductCard({ title, description, Icon, features }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full group cursor-pointer hover:border-[#00a1e0]">
      <div className="p-8 flex-grow">
        <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#004b87] transition-colors duration-300">
          <Icon className="w-8 h-8 text-[#004b87] group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#004b87] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-600">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00a1e0] mt-2 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center text-[#004b87] font-semibold group-hover:text-[#00a1e0] transition-colors">
        Learn More <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}
