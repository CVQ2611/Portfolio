import classNames from 'classnames/bind';
import style from './NamePage.module.scss';
const cx = classNames.bind(style);

function NamePage({ name, data }) {
    return (
        <div className={cx('header')}>
            <span className={cx('section')}>
                <span className={cx('name')}>{name}</span>
                <span className={cx('slogan')}>{data}</span>
            </span>
        </div>
    );
}

export default NamePage;
