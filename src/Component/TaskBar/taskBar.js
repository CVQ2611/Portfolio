import classNames from 'classnames/bind';
import style from './TaskBar.module.scss';
import { publicPage } from '~/Routes/routes';
import SideBar from '../SideBar/sidebar';
import Avatar from '../Avatar/avatar';
import PropType from 'prop-types';
const cx = classNames.bind(style);

function TaskBar({ clickHide }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <div className={cx('avatar')}>
                    <Avatar />
                </div>
                <div className={cx('name')}>Alex Smith</div>
            </div>
            <div className={cx('button')}>
                <SideBar items={publicPage} handle={clickHide} />
            </div>
        </div>
    );
}

TaskBar.propType = {
    clickHide: PropType.func,
};
export default TaskBar;
