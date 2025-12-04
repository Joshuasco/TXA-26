type Props = {
  imageSrc: string;
  name: string;
  description: string;
};

function SpeakerImageSlide({ imageSrc, name, description }: Props) {
  return (
    <div className="w-[412px] h-[607px] flex flex-col items-start no-wrap shrink-0">
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-[430px] object-cover rounded-lg"
      />

      <div className="flex flex-col items-start gap-3 w-full mt-2 px-4 md:px-0">
        <h3 className="text-2xl font-semibold">{name}</h3>

        <p className="text-gray-700">{description}</p>

        <button className="bg-[#F63A0A] text-white px-6 py-3">
          View Bio
        </button>
      </div>

    </div>
  );
}

export default SpeakerImageSlide;
