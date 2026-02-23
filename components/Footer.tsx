'use client';

import settings from '@/data/settings';

const Footer = () => {
  return (
    <footer className="py-7 text-center">
      &copy; {new Date().getFullYear()} {settings.comp_name}
    </footer>
  );
};

export default Footer;
