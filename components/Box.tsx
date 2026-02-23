'use client';

const Box = ({ title, sub_title }: { title: string; sub_title: string }) => {
  return (
    <div className="mb-4">
      <p className="font-extrabold text-[12px]">{title}</p>
      <p className="text-[12px]">{sub_title}</p>
    </div>
  );
};

export default Box;
