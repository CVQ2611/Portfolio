import classNames from 'classnames/bind';
import style from './NamePage.module.scss';
import PropType from 'prop-types';
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
NamePage.propType = {
    name: PropType.string.isRequired,
    data: PropType.string.isRequired,
};

export default NamePage;
