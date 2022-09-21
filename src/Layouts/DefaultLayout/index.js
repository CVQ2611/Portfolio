import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';
import PropType from 'prop-types';
import Header from '~/Component/Header/header';
import { useViewport } from '~/Setwith/useViewport';
const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    const viewPort = useViewport();
    const isMobile = viewPort.width <= 991;
    if (isMobile) {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('sidebar-mt')}>
                    <Header />
                </div>
                <div className={cx('content-mt')}>{children}</div>
            </div>
        );
    } else {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('sidebar')}>
                    <Header />
                </div>
                <div className={cx('content')}>{children}</div>
            </div>
        );
    }
}

DefaultLayout.PropType = {
    children: PropType.node,
};

export default DefaultLayout;
