import classNames from 'classnames/bind';
import style from './SideBar.module.scss';
import Button from '../Button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const cx = classNames.bind(style);

function SideBar({ items, handle }) {
    const [active, setActive] = useState(items[0].name);

    return (
        <>
            {items.map((item) => (
                <span key={item.name} onClick={handle}>
                    <Button
                        to={item.path}
                        header
                        active={active === item.name}
                        onClick={() => {
                            setActive(item.name);
                        }}
                    >
                        <FontAwesomeIcon icon={item.icon} />
                        <p className={cx('name')}>{item.name}</p>
                    </Button>
                </span>
            ))}
        </>
    );
}

export default SideBar;
