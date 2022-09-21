import Container from '~/Layouts/ContainerLayout/container';
import classNames from 'classnames/bind';
import style from './AboutMe.module.scss';
import { user } from '~/Data/data';
import Avatar from '~/Component/Avatar/avatar';
const cx = classNames.bind(style);

function AboutMePage({ name }) {
    return (
        <>
            <Container>
                <div className={cx('header')}>
                    <span className={cx('section')}>
                        <span className={cx('name')}>{name}</span>
                        <span className={cx('slogan')}>{user.slogan}</span>
                    </span>
                </div>

                <div className={cx('content')}>
                    <div className={cx('avatar')}>
                        <Avatar />
                    </div>

                    <div className={cx('desc')}>
                        <div className={cx('title')}>I am Web Designer @ Company.com</div>
                        <div className={cx('text')}>
                            Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero,
                            facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam, pellentesque enim
                            ac, faucibus tortor. Nulla odio nibh, cursus sit amet urna id, dignissim euismod augue.
                            <br />
                            Duis sollicitudin, libero porttitor rutrum ultrices, turpis lorem fermentum justo, quis
                            ornare augue tortor non est. Class aptent taciti sociosqu ad litora torquent per conubia
                            nostra, per inceptos himenaeos.
                        </div>
                    </div>

                    <div className={cx('info')}></div>
                </div>
            </Container>
        </>
    );
}

export default AboutMePage;
