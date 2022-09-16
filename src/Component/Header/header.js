import classNames from 'classnames/bind';
import style from './Header.module.scss';
import { publicPage } from '~/Routes/routes';
import SideBar from '../SideBar/sidebar';

const cx = classNames.bind(style);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('info')}>
                <div className={cx('avatar')}></div>
                <div className={cx('name')}>abs</div>
            </div>
            <div className={cx('button')}>
                <SideBar items={publicPage} />
            </div>
        </header>
    );
}

export default Header;
