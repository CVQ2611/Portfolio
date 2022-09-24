import classNames from 'classnames/bind';
import style from './Home.module.scss';
import { skills } from '~/Data/data.js';
import { useEffect, useState, useRef } from 'react';
const cx = classNames.bind(style);

function HomePage() {
    // animation for slider
    const [index, setIndex] = useState(0);
    const lengths = skills.length;
    // console.log(index);
    const timeOutRef = useRef(null);
    // console.log(timeOutRef.current);

    function resetTimeOut() {
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current);
        }
    }

    useEffect(() => {
        resetTimeOut();
        timeOutRef.current = setTimeout(() => {
            setIndex((preIndex) => {
                //eslint-disable-next-line
                if (preIndex === lengths - 1) {
                    return 0;
                } else return preIndex + 1;
            });
        }, 3000);
        return () => {
            resetTimeOut();
        };
    }, [index]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('content-animate')}>
                    <h1 className={cx('user-name')}>Alex Smith</h1>
                    {skills.map((skill) => (
                        <span
                            key={skill.id}
                            style={skill.id === index + 1 ? { display: 'block' } : { display: 'none' }}
                            className={cx('user-skill')}
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
