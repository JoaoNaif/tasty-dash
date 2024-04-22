interface Props {
  percentage: number;
}

export const CircleOrder = ({ percentage }: Props) => {
  return (
    <div className="flex flex-col justify-end">
      <div
        className={`h-5 w-5 border-2 border-[#FF8C00] rounded-full ${
          percentage === 100 && "bg-[#FF8C00]"
        }`}
      ></div>
    </div>
  );
};
