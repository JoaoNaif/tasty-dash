export const LineOrder = ({ percentage }: { percentage: number }) => {
  return (
    <div className="h-1 w-1/2 border bg-orange-200">
      <div className={`bg-[#FF8C00]  h-1 w-[${percentage}%]`} />
    </div>
  );
};
