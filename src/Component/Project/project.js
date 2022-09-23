import { faImage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import Button from '../Button/button';
import style from './Project.module.scss';
const cx = classNames.bind(style);

function Project({ data }) {
    return (
        <>
            <div className={cx('wrapper')}>
                <Button box href={'https://github.com/CVQ2611'}>
                    <div className={cx('container')}>
                        <img src={data.src} className={cx('img')} alt={'project-img'} />
                        <div className={cx('fill')}>
                            <div className={cx('button-full-screen')}>
                                <h1 className={cx('name-project')}>{data.name}</h1>
                                <div className={cx('bottom-fill')}>
                                    <p className={cx('tools')}>{data.tool}</p>
                                    <p className={cx('icon')}>
                                        <FontAwesomeIcon icon={faImage} />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Button>
            </div>
        </>
    );
}

export default Project;
