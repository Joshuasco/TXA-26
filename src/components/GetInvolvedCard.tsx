type GetInvolvedCArdProps={
  title:string;
  description:string;
  button:string
}

function GetInvolvedCard({title, description,button}:GetInvolvedCArdProps) {
  return (
     <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-xl">
             {title}
            </h3>
            <p className="text-sm font-normal w-full">
            {description}
            </p>
          <button className="bg-[#F63A0A] w-max py-3 md:py-4 px-8 flex items-center justify-center cursor-pointer text-white hover:bg-[#e63500] transition text-sm border-2">
          {button}
          </button>
          </div>
  )
}

export default GetInvolvedCard
