import classNames from 'classnames/bind';
import style from './Services.module.scss';
const cx = classNames.bind(style);

function Services({ data }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('img')} src={data.src} alt={'icon'} />
            <div className={cx('name')}>{data.name}</div>
            <p className={cx('desc')}>{data.desc}</p>
        </div>
    );
}

export default Services;
