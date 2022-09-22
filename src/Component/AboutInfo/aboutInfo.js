import classNames from 'classnames/bind';
import style from './AboutInfo.module.scss';
import Button from '~/Component/Button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(style);

function AboutInfo({ infos, socials }) {
    return (
        <div className={cx('info')}>
            <div className={cx('list-info')}>
                {infos.map((info) => (
                    <div className={cx('info-item')} key={info.id}>
                        <span className={cx('info-name')}>{info.method}</span>
                        <span className={cx('info-value')}>{info.value}</span>
                    </div>
                ))}
            </div>
            <div className={cx('social')}>
                {socials.map((social) => (
                    <span key={social.id} className={cx('social-item')}>
                        <Button boder href={social.url}>
                            <FontAwesomeIcon icon={social.icon} />
                        </Button>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default AboutInfo;
