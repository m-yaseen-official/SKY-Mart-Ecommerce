import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductNavigation = ({
  showPrevious = false,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="mt-8">
      {showPrevious ? (
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onPrevious}
            className="flex-1 h-14 rounded-2xl border border-white/20 bg-[#2A2A2A] hover:bg-[#3A3A3A] duration-300 flex items-center justify-center gap-2 text-white font-medium"
          >
            <ChevronLeft size={18} />
            Previous
          </button>

          <button
            onClick={onNext}
            className="flex-1 h-14 rounded-2xl bg-[#D9FF00] text-black font-semibold hover:scale-[1.02] duration-300 flex items-center justify-center gap-2"
          >
            Next
            <ChevronRight size={18} />
          </button>
        </div>
      ) : (
        <button
          onClick={onNext}
          className="w-full h-14 rounded-2xl bg-[#D9FF00] text-black font-semibold hover:scale-[1.02] duration-300 flex items-center justify-center gap-2"
        >
          Next
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  );
};

export default ProductNavigation;