import HomePage from '~/pages/Home/home';
import ResumePage from '~/pages/Resume/resumePage';
import AboutMePage from '~/pages/Aboutme/aboutMePages';
import ContactPage from '~/pages/Contact/contactPages';
import PortfolioPage from '~/pages/Portfolio/portfolioPage';
import { faBriefcase, faCircleUser, faHouse } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard, faEnvelope } from '@fortawesome/free-regular-svg-icons';

export const publicPage = [
    { path: '/', name: 'Home', icon: faHouse, component: HomePage },
    { path: '/about', name: 'About Me', icon: faCircleUser, component: AboutMePage },
    { path: '/resume', name: 'Resume', icon: faAddressCard, component: ResumePage },
    { path: '/portfolio', name: 'Portfolio', icon: faBriefcase, component: PortfolioPage },
    { path: '/contact', name: 'Contact', icon: faEnvelope, component: ContactPage },
];
