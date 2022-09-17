import classNames from 'classnames/bind';
import style from './Home.module.scss';
const cx = classNames.bind(style);

function HomePage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}> </div>
        </div>
    );
}

export default HomePage;
