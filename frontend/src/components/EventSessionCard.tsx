type EventSessionCardProps = {
  heading: string;
  description: string;
  imageSrc: string;
  color?: string;
};

function EventSessionCard({
  heading,
  description,
  imageSrc,
  color,
}: EventSessionCardProps) {
  return (
    <div className="relative h-60 md:h-[320px] w-[280px] md:w-[361px] shrink-0 z-100">
      {/* Background Color Layer – now BEHIND */}
      {color && (
        <div
          className="absolute top-8 left-3 w-[280px] md:w-[361px] h-[200px] md:h-[280px] rounded-lg border-4 pointer-events-none z-0"
          style={{ backgroundColor: color }}
        ></div>
      )}
      {/* Main Card */}
      <div className="absolute w-[280px] md:w-[361px] h-[220px] md:h-[300px] rounded-lg overflow-hidden border-4 z-20">
        {/* Image */}
        <img
          src={imageSrc}
          alt={heading}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-[rgba(0,0,0,0.78)]"></div>
        {/* Text */}
        <div className="absolute bottom-4 left-4 flex flex-col gap-2">
          <h2 className="font-semibold text-lg md:text-2xl text-white">
            {heading}
          </h2>
          <p className="text-white text-xs md:text-sm font-light w-[180px] md:w-[250px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventSessionCard;
