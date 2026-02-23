'use client';

import settings from "@/data/settings";

const Box2 = ({ title, sub_title }: { title: string; sub_title: string }) => {
  return (
    <div className="mb-4">
      <p className="font-extrabold text-[12px]">{title}</p>
      <h6 className="capitalize">{settings.currency}{sub_title}</h6>
    </div>
  );
};

export default Box2;
