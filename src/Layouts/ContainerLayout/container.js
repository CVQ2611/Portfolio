import classNames from 'classnames/bind';
import style from './Container.module.scss';
const cx = classNames.bind(style);

function Container() {
    return (
        <main className={cx('wrapper')}>
            <div className={cx('container')}>hello</div>
        </main>
    );
}

export default Container;
