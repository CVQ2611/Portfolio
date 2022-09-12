import HomePage from '~/pages/Home/home';
import ResumePage from '~/pages/Resume/resumePage';
import AboutMePage from '~/pages/Aboutme/aboutMePages';
import ContactPage from '~/pages/Contact/contactPages';
import PortfolioPage from '~/pages/Portfolio/portfolioPage';

export const publicPage = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/about', name: 'About Me', component: AboutMePage },
    { path: '/resume', name: 'Resume', component: ResumePage },
    { path: '/portfolio', name: 'Portfolio', component: PortfolioPage },
    { path: '/contact', name: 'Contact', component: ContactPage },
];
