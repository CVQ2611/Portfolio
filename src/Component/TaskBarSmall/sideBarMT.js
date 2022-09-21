import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '../Button/button';
import style from './SideBarMobileTablet.module.scss';
import TaskBar from '../TaskBar/taskBar';
import { useState } from 'react';
const cx = classNames.bind(style);

function TaskBarSmall() {
    const [switchLeft, setSwitchLeft] = useState(false);
    const handleClick = () => {
        if (switchLeft) {
            setSwitchLeft(false);
        } else {
            setSwitchLeft(true);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('label')}>
                <div className={cx('name')}>Alex Smith</div>
                <div className={cx('button')}>
                    <Button mobile={true} onClick={handleClick}>
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                </div>
            </div>
            <div
                className={cx('sidebar')}
                style={switchLeft ? { transform: 'translateX(0)' } : { transform: 'translateX(-100%)' }}
            >
                <TaskBar clickHide={handleClick} />
            </div>
        </div>
    );
}

export default TaskBarSmall;
