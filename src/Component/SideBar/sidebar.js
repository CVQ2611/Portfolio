import classNames from 'classnames/bind';
import style from './SideBar.module.scss';
import Button from '../Button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const cx = classNames.bind(style);

function SideBar({ items }) {
    const [active, setActive] = useState(items[0].name);

    return (
        <>
            {items.map((item) => (
                <Button
                    key={item.name}
                    to={item.path}
                    header
                    active={active === item.name}
                    onClick={() => setActive(item.name)}
                >
                    <FontAwesomeIcon icon={item.icon} />
                    <p className={cx('name')}>{item.name}</p>
                </Button>
            ))}
        </>
    );
}

export default SideBar;
