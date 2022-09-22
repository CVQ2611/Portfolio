import classNames from 'classnames/bind';
import style from './Char.module.scss';
const cx = classNames.bind(style);

function CharItem({ item }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('name')}>{item.name}</div>
            <div className={cx('char')}>
                <div className={cx('slice-color')} style={{ width: `${item.experien}` }}></div>
            </div>
        </div>
    );
}

export default CharItem;
