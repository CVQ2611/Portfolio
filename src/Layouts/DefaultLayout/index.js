import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';
import PropType from 'prop-types';
const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <h1>header</h1>
            </div>
            <div className={cx('content')}></div>
        </div>
    );
}

DefaultLayout.PropType = {
    children: PropType.node,
};

export default DefaultLayout;
