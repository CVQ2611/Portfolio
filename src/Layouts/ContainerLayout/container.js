import classNames from 'classnames/bind';
import style from './Container.module.scss';
import PropType from 'prop-types';
const cx = classNames.bind(style);

function Container({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>{children}</div>
        </div>
    );
}

Container.propType = {
    children: PropType.node,
};

export default Container;
