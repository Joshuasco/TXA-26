type LearningTrackCardProps = {
  title: string;
};
function LearningTrackCard({ title }: LearningTrackCardProps) {
  return (
    <div className="h-60  w-[280px] md:h-[220px] md:w-[260px] border-4 bg-[#D93429] flex items-center justify-center  shrink-0">
      <h2 className="w-[160px] text-center flex items-center justify-center font-semibold text-base md:text-lg text-white ">
        {title}
      </h2>
    </div>
  );
}

export default LearningTrackCard;
