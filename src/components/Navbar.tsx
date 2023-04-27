import React, { useEffect, useRef, useState } from 'react';
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import { menu, close } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const classes = ['backdrop-blur-lg', 'bg-opacity-0', 'bg-primary'];
    window.onscroll = () => {
      if (window.scrollY > 70) {
        classes.forEach((c) => {
          navRef?.current?.classList.add(c);
        });
      } else {
        classes.forEach((c) => {
          navRef?.current?.classList.remove(c);
        });
      }
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 shadow-sm backdrop-blur-[4px] overflow-x-hidden`}
    >
      <div className="flex justify-between w-full items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="/logo.png"
            alt="logo"
            className="w-12 h-12 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            &nbsp;&nbsp;Rajat Raghuvanshi
            <span className="sm:block hidden">| Software developer |</span>
          </p>
        </Link>
        <ul className="list-none hidden lg:flex flex-row gap-10 ">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } font-medium hover:drop-shadow-white cursor-pointer text-lg`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-start">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-medium font-poppins hover:text-white cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle((prev) => !prev);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
