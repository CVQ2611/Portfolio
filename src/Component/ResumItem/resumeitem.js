import classNames from 'classnames/bind';
import style from './ResumItem.module.scss';
import PropType from 'prop-types';
const cx = classNames.bind(style);
function ResumItem({ item }) {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('time')}>{item.time}</span>
            <div className={cx('content')}>
                <div className={cx('branch')}>{item.branch}</div>
                <div className={cx('company')}>{item.company}</div>
                <div className={cx('mission')}>{item.mission}</div>
            </div>
        </div>
    );
}
ResumItem.propType = {
    item: PropType.object.isRequired,
};

export default ResumItem;
