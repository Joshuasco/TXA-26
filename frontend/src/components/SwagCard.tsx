type SwagCardProps = {
  imageSrc: string;
  name: string;
  price: string;
};

export default function SwagCard({ imageSrc, name, price }: SwagCardProps) {
  return (
    <div className="flex flex-col mx-auto w-full max-w-[360px] xl:max-w-[400px]">

      {/* Flip Container */}
      <div className="group relative aspect-square [perspective:1000px]">

        {/* Flip Inner */}
        <div
          className="
            relative w-full h-full
            transition-transform duration-700 ease-in-out
            [transform-style:preserve-3d]
            group-hover:[transform:rotateY(180deg)]
          "
        >
          {/* FRONT — Image */}
          <div className="absolute inset-0 bg-[#EBEAEB] overflow-hidden [backface-visibility:hidden]">
            <img
              src={imageSrc}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* BACK — Image + Overlay + Actions */}
          <div
            className="
              absolute inset-0
              [transform:rotateY(180deg)]
              [backface-visibility:hidden]
            "
          >
            {/* Background Image */}
            <img
              src={imageSrc}
              alt={name}
              className="w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Actions */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <button className="text-white text-lg border-2 border-white px-5 py-1">
                Add to Cart
              </button>
              <button className="bg-[#F63A0A] text-white text-lg px-6 py-2">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-2 pt-4">
        <p className="text-xl font-normal">{name}</p>
        <p className="text-2xl font-bold">{price}</p>
      </div>
    </div>
  );
}
