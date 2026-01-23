type Props = {
  name: string;
  role: string;
  imageSrc: string;
};

export default function SpeakerCard({ name, role, imageSrc }: Props) {
  return (
    <div
      className="
        border-bl-[12px] border-black border-3 border-b-10 rounded-bl-3xl rounded-br-3xl
        overflow-hidden mx-auto
        w-full
        max-w-[360px]
        xl:max-w-[414px]
        aspect-[4/5]
        flex flex-col bg-black
      "
    >
      {/* Image */}
      <div className="flex-1 overflow-hidden border border-black  rounded-tl-lg rounded-tr-lg shadow-2xl  ">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover "
        />
      </div>


    {/* Details */}
<div className="flex flex-col px-4 py-3 bg-white items-start justify-center shadow-2xl ">
  <h3 className="text-xl md:text-2xl md:pl-2 font-bold text-black">
    {name}
  </h3>
  <p className="text-md md:text-lg italic font-semibold text-black">
    {role}
  </p>
</div>

    </div>
  );
}
