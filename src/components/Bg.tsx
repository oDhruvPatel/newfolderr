import React, { ReactNode } from 'react';

interface BgProps {
  children: ReactNode;
}

const Bg: React.FC<BgProps> = ({ children }) => {
  const divs = Array.from({ length: 10000 }, () => (
    <div className="md:bg-white/5 z-0 w-[3px] h-[3px] rounded-full bg-white/10"></div>
  ));

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 h-full w-screen flex gap-8 flex-wrap items-start justify-start overflow-hidden">
        {divs}
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default Bg;
