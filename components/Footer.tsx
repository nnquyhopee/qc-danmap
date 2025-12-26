import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 text-center border-t border-slate-200 dark:border-[#283039] bg-white dark:bg-[#101922]">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Dan Nguyen Tien. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;