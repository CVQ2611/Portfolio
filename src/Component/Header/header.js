import classNames from 'classnames/bind';
import style from './Header.module.scss';
import { publicPage } from '~/Routes/routes';
import SideBar from '../SideBar/sidebar';
import Avatar from '../Avatar/avatar';

const cx = classNames.bind(style);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('info')}>
                <div className={cx('avatar')}>
                    <Avatar />
                </div>
                <div className={cx('name')}>Alex Smith</div>
            </div>
            <div className={cx('button')}>
                <SideBar items={publicPage} />
            </div>
        </header>
    );
}

export default Header;
