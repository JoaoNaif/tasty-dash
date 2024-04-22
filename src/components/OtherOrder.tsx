export const OtherOrder = () => {
  const date = new Date();
  return (
    <div className="flex flex-col gap-5 bg-stone-50 p-4 rounded-md">
      <div className="flex md:flex-row lg:flex-col  text-sm justify-between">
        <div className="flex">
          <p>
            {date.getDate() < 10 ? (
              <span>0{date.getDate()}</span>
            ) : (
              date.getDate()
            )}
            /
          </p>
          <p>
            {date.getMonth() < 10 ? (
              <span>0{date.getMonth()}</span>
            ) : (
              date.getMonth()
            )}
            /
          </p>
          <p>{date.getFullYear()}</p>
        </div>
        <div>Entregue</div>
      </div>
      <div className="flex justify-between md:items-center">
        <ul className="text-sm lg:text-xl">
          <li>Minha casa</li>
          <li>Rua Brasil</li>
          <li>São Paulo, São Paulo</li>
        </ul>
        <h1 className="font-bold">R$169.98</h1>
      </div>
    </div>
  );
};
