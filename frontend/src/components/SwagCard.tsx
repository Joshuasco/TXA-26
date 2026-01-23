type SwagCardProps = {
  imageSrc: string;
  name: string;
  price: number;
  onAddToCart: () => void;
  onOrderNow: () => void;
};

export default function SwagCard({
  imageSrc,
  name,
  price,
  onAddToCart,
  onOrderNow
}: SwagCardProps) {
  return (
    <div className="flex flex-col mx-auto w-full max-w-[360px] xl:max-w-[400px]">
      <div className="group relative aspect-square md:[perspective:1000px]">
        <div className="relative w-full h-full transition-transform duration-700 ease-in-out md:[transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)]">
          {/* Front face */}
          <div className="absolute inset-0 bg-[#EBEAEB] overflow-hidden md:[backface-visibility:hidden]">
            <img
              src={imageSrc}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Back face - hidden on small screens, shown on hover for md+ */}
          <div className="hidden md:block absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <img
              src={imageSrc}
              alt={name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <button
                className="text-white text-lg border-2 border-white px-5 py-1 hover:bg-white hover:text-black transition-colors"
                onClick={onAddToCart}
              >
                Add to Cart
              </button>
              <button
                className="bg-[#F63A0A] text-white text-lg px-6 py-2 hover:bg-[#d63308] transition-colors"
                onClick={onOrderNow}
              >
                Order Now
              </button>
            </div>
          </div>

          {/* Buttons always visible on small screens */}
          <div className="md:hidden absolute inset-0 flex flex-col items-center justify-center gap-3">
            <button
              className="text-white text-lg border-2 border-white px-5 py-1 hover:bg-white hover:text-black transition-colors"
              onClick={onAddToCart}
            >
              Add to Cart
            </button>
            <button
              className="bg-[#F63A0A] text-white text-lg px-6 py-2 hover:bg-[#d63308] transition-colors"
              onClick={onOrderNow}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-4">
        <p className="text-xl font-normal">{name}</p>
        <p className="text-2xl font-bold">NGN {price.toLocaleString()}</p>
      </div>
    </div>
  );
}
