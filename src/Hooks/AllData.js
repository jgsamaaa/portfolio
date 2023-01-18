import { useEffect, useState } from 'react';
// for work_images
import work1 from '../assets/images/work_images/1.png';
import work2 from '../assets/images/work_images/2.png';
import work3 from '../assets/images/work_images/3.png';
import work4 from '../assets/images/work_images/4.png';
import work5 from '../assets/images/work_images/5.png';
import work6 from '../assets/images/work_images/6.png';
import work7 from '../assets/images/work_images/7.png';
import work8 from '../assets/images/work_images/8.jpg';
import work9 from '../assets/images/work_images/9.jpg';
// works small images
import workSmall1 from '../assets/images/work_images/small/1.png';
import workSmall2 from '../assets/images/work_images/small/2.png';
import workSmall3 from '../assets/images/work_images/small/3.png';
import workSmall4 from '../assets/images/work_images/small/4.png';
import workSmall5 from '../assets/images/work_images/small/5.png';
import workSmall6 from '../assets/images/work_images/small/6.png';
import workSmall7 from '../assets/images/work_images/small/7.png';
import workSmall8 from '../assets/images/work_images/small/8.jpg';
import workSmall9 from '../assets/images/work_images/small/9.jpg';

//  icon use as img here
import icon from '../assets/images/icons/icon-1.svg';
import icon2 from '../assets/images/icons/icon-3.svg';
import icon4 from '../assets/images/icons/icon-5.svg';
import icon5 from '../assets/images/icons/icon-6.svg';
// contact image
import iconPhone from '../assets/images/contact/phone-call 1.png';
import iconEmail from '../assets/images/contact/email 1.png';
import iconMap from '../assets/images/contact/map 1.png';
import { CgNotes } from 'react-icons/cg';
import { FaRegUser, FaAward } from 'react-icons/fa';
import { FiCodesandbox } from 'react-icons/fi';
import { RiContactsBookLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

import { MdOutlineBusinessCenter, MdOutlineSchool } from 'react-icons/md';

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem('theme'));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem('theme');

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem('theme', 'light');
    } else {
      themeValue === 'dark' && setCheck(true);
      themeValue === 'light' && setCheck(false);
    }

    localStorage?.getItem('theme') === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === 'light') {
      setCheck(false);
      localStorage.setItem('theme', 'light');
      setLocal('light');
    } else {
      setCheck(true);
      localStorage.setItem('theme', 'dark');
      setLocal('dark');
    }
    localStorage?.getItem('theme') === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  };

  // fillter portfilo data
  const handleData = (text) => {
    if (text === 'All') {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for protfilo section
  const workItems = [
    {
      id: '1',
      tag: 'Web Design',
      title: 'Tattoo Website',
      img: work1,
      imgSmall: workSmall1,
      bg: '#FFF0F0',
      code: 'Source Code',
      githubCode: 'https://github.com/jgsamaaa/tattooshopwebsite',
      langages: 'ReactJS, TailwindCSS ',
      link: 'https://gabrieltattoo.netlify.app/',
      linkText: 'Tattoo Website',
      description:
        'Inspired by my friends tattoo business, I created this website to practice my TailwindCSS skills. This website is made with ReactJs, Tailwind CSS, framer-motion and a little bit of SASS.',
    },
    {
      id: '2',
      tag: 'Web Design',
      title: 'Bistro Cafe',
      img: work2,
      imgSmall: workSmall2,
      bg: '#FFF3FC',
      code: 'Source Code',
      githubCode: 'https://github.com/jgsamaaa/restaurantlandingpage',
      langages: 'ReactJS, TailwindCSS',
      link: 'https://gabrielrestaurant.netlify.app/',
      linkText: 'Bistro Cafe Website',
      description:
        'A restaurant website made with ReactJs and TailwindCSS. Making this was hard and fun.',
    },
    {
      id: '3',
      tag: 'Logo',
      title: 'Gym Website',
      img: work3,
      imgSmall: workSmall3,
      bg: '#FFF0F0',
      code: 'Source Code',
      githubCode: 'https://github.com/jgsamaaa/gym-website',
      langages: 'ReactJs, TailwindCSS',
      link: 'https://gabrieltattoo.netlify.app/',
      linkText: 'GymMe',
      description:
        ' Practicing my coding skill more. Was fun to make especially the carousel. ',
    },
    {
      id: '4',
      tag: 'Web Design',
      title: 'Photographer Portfolio',
      img: work7,
      imgSmall: workSmall7,
      bg: '#FFF0F8',
      code: 'Source Code',
      githubCode: 'https://github.com/jgsamaaa/portfoliophotographer',
      langages: 'ReactJS, TailwindCSS',
      link: 'https://gabriel-photograperportfolio.netlify.app/',
      linkText: 'Photographer Portfolio',
      description:
        'Made this one to be my other portfolio and to practice my coding skills more.',
    },

    {
      id: '5',
      tag: 'Web Design',
      title: 'QR Code Generator',
      img: work5,
      imgSmall: workSmall5,
      bg: '#FFFAE9',
      code: 'Source Code',
      githubCode: 'https://github.com/jgsamaaa/qrcode',
      langages: 'ReactJS, TailwindCSS',
      link: 'https://qrcodegeneratorproject.netlify.app/',
      linkText: 'QR Code Generator',
      description:
        '  A simple ReactJS with Tailwindcss that can generate a QR Code, you can download the QR Code image as well.',
    },
    {
      id: '6',
      tag: 'Web Design',
      title: 'Calorie Meal Planner',
      img: work6,
      imgSmall: workSmall6,
      bg: '#F4F4FF',
      code: 'Source Code',
      githubCode: 'https://github.com/jgsamaaa/foodcalories',
      langages: 'ReactJS, Spoonacular API',
      link: 'https://gabrieldailymealplanner.netlify.app/',
      linkText: 'Daily Meal Planner',
      description:
        ' Put how many calories you want for the day and it will give you 3 meals base on the calories you put in.',
    },
    {
      id: '7',
      tag: 'Weather App',
      title: 'Weather App',
      img: work4,
      imgSmall: workSmall4,
      bg: '#E9FAFF',
      code: 'Source Code',
      githubCode: 'https://github.com/jgsamaaa/weatherapppublic',
      langages: 'ReactJS, OpenWeather API',
      link: 'https://weatherforecasttoday.netlify.app/',
      linkText: 'Weather Today',
      description: '  I made this project to be more familiar with using API.',
    },
    {
      id: '8',
      tag: 'Web Design',
      title: 'Chul urina',
      img: work8,
      imgSmall: workSmall8,
      bg: '#FFF0F8',
      client: 'Envato',
      langages: 'HTML, CSS, Javascript',
      link: 'https://www.envato.com',
      linkText: 'www.envato.com',
      description:
        '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.',
    },
    {
      id: '9',
      tag: 'Logo',
      title: 'Chul urina',
      img: work9,
      imgSmall: workSmall9,
      bg: '#FCF4FF',
      client: 'Feepik',
      langages: 'Figma',
      link: 'https://www.freepik.com/free-photos-vectors/market-logo',
      linkText: 'www.freepik.com',
      description:
        '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.',
    },
  ];
  const [data, setData] = useState(workItems);

  // Menu items for Homepage Two
  const menuItemTwo = [
    {
      id: '01',
      name: 'About',
      link: '/about',
      icon: <FaRegUser />,
    },
    {
      id: '02',
      name: 'Resume',
      link: '/resume',
      icon: <CgNotes />,
    },
    {
      id: '03',
      name: 'Works',
      link: '/works',
      icon: <FiCodesandbox />,
    },
    {
      id: '05',
      name: 'Contact',
      link: '/contact',
      icon: <RiContactsBookLine />,
    },
  ];

  // experience items for about page
  const experienceArray = [
    {
      id: '6',
      icon: icon5,
      title: 'Web Development',
      des: 'I can make a front end website from scratch using HTML, CSS, Javascript and ReactJS.',
      color: '#269FFF',
      bg: '#F3FAFF',
    },
    {
      id: '3',
      icon: icon2,
      title: 'Photography',
      des: 'I like taking pictures of everything that interest me especially Animals and Nature.',
      color: '#8774FF',
      bg: '#FCF4FF',
    },
    {
      id: '4',
      icon: icon,
      title: 'Gaming',
      des: 'I am a competitive person outside and inside the game. I play Dota 2 and Valorant.',
      color: '#FF6080',
      bg: '#FFF4F4',
    },
    {
      id: '5',
      icon: icon4,
      title: 'Managment',
      des: 'I  have worked for 7 years in the hospitality industry thus I am confident about managing things.',
      color: '#FF75D8',
      bg: '#FFF0F8',
    },
  ];

  // Resume items for Resume page
  const resumeArray = [
    {
      type: 'Education',
      icon: MdOutlineSchool,
      id: '01',
      date: '2021',
      title: 'Uplift',
      place: 'Manila, NCR, Philippines',
      bg: '#FFF4F4',

      id1: '02',
      date1: '2015-2016',
      title1: 'PC Troubleshooting - Networking Essentials',
      place1: 'Informatics Computer Institute, Philippines',
      bg1: '#FFF1FB',

      id2: '03',
      date2: '2011-2015',
      title2: 'Highschool ',
      place2: 'Stella Matutina Academy, Philippines',
      bg2: '#FFF4F4',
    },
    {
      type: 'Experience',
      icon: MdOutlineBusinessCenter,
      id: '04',
      date: '2017- Present',
      title: 'Hospitality Industry',
      place: 'Limon, Colorado',
      bg: '#EEF5FA',

      id1: '05',
      date1: '2016',
      title1: 'PC Troubleshooting',
      place1: 'Stella Matutina Academy',
      bg1: '#F2F4FF',

      id2: '06',
      date2: '2012-2015',
      title2: 'Assistant Car Mechanic',
      place2: 'Philippines',
      bg2: '#EEF5FA',
    },
    {
      type: 'Awards',
      icon: FaAward,
      id: '07',
      date: '2015-2017',
      title: '  Graphic Designer',
      place: 'Web Graphy, Los Angeles, CA',
      bg: '#FCF4FF',

      id1: '08',
      date1: '2014 - 2015',
      title1: 'Jr. Web Developer',
      place1: 'Creative Gigs.',
      bg1: '#FCF9F2',

      id2: '09',
      date2: '2015-2017',
      title2: 'Best Freelancer',
      place2: 'Fiver & Upwork Level 2 & Top Rated',
      bg2: '#FCF4FF',
    },
  ];

  // Personal information for contact pages
  const contactArray = [
    {
      id: '01',
      icon: iconPhone,
      title: 'Phone ',
      item1: '+452 666 386',
      item2: '+452 666 386',
      bg: '#FCF4FF',
    },
    {
      id: '02',
      icon: iconEmail,
      title: 'Email ',
      item1: 'support@gmail.com',
      item2: 'example@gmail.com',
      bg: '#EEFBFF',
    },
    {
      id: '03',
      icon: iconMap,
      title: 'Address ',
      item1: 'Maount View, Oval',
      item2: 'Road, New York, USA',
      bg: '#F2F4FF',
    },
  ];

  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    NavLink,
    menuItemTwo,
    experienceArray,
    resumeArray,
    contactArray,
  };
};

export default AllData;
