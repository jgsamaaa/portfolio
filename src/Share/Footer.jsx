import React from 'react';
import UseData from '../Hooks/UseData';

const Footer = ({ bg, condition }) => {
  const { local } = UseData();
  return (
    <footer className="overflow-hidden rounded-b-2xl">
      <p className="py-6 text-center text-gray-lite dark:text-color-910 ">
        © 2022 All Rights Reserved by{' '}
        <a
          className="hover:text-[#FA5252] duration-300 transition"
          href="https://themeforest.net/user/ib-themes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gabriel Dumaug
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
