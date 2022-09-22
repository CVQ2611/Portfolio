import classNames from 'classnames/bind';
import style from './Header.module.scss';

import TaskBar from '../TaskBar/taskBar';
import { useViewport } from '~/Setwith/useViewport';
import TaskBarSmall from '../TaskBarSmall/sideBarMT';

const cx = classNames.bind(style);

function Header() {
    const viewPort = useViewport();
    const isMobile = viewPort.width <= 1023;
    if (isMobile) {
        return (
            <header className={cx('wrapper')}>
                <TaskBarSmall />
            </header>
        );
    } else {
        return (
            <header className={cx('wrapper')}>
                <TaskBar />
            </header>
        );
    }
}

export default Header;
