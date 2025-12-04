type MediaOpinionCardProps = {
  heading: string;
  description: string;
  text: string;
  color?: string;
};

function MediaOpinionCard({
  heading,
  description,
  text,
  color,
}: MediaOpinionCardProps) {
  return (
    <div className="relative h-[300px] md:h-[320px] w-[280px] md:w-[361px] shrink-0">

      {/* BACKGROUND COLORED BLOCK (BEHIND) */}
      {color && (
        <div
          className="absolute top-8 left-3 w-[280px] md:w-[361px] h-[240px] md:h-[280px] rounded-lg border-4 z-0"
          style={{ backgroundColor: color }}
        ></div>
      )}

      {/* MAIN CARD (ON TOP) */}
      <div className="absolute top-0 left-0 w-[280px] md:w-[361px] h-[260px] md:h-[300px] rounded-lg overflow-hidden border-4 bg-[#F5F5F5] z-20 p-4 flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <img src="quote.png" alt="quote" className="w-8 h-8" />
          <p className="font-normal text-xs md:text-xl">{description}</p>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-xl md:text-2xl text-black">
            {heading}
          </h2>
          <p className="text-black text-xs md:text-sm font-light">{text}</p>
        </div>

        <button className="bg-[#F63A0A] mt-auto w-max py-3 md:py-4 px-8 text-white hover:bg-[#e63500] transition text-sm border-2">
          Read More
        </button>
      </div>
    </div>
  );
}

export default MediaOpinionCard;
