import Container from '~/Layouts/ContainerLayout/container';
import classNames from 'classnames/bind';
import style from './AboutMe.module.scss';
import { user, socials, infos, skills } from '~/Data/data';
import Avatar from '~/Component/Avatar/avatar';
import NamePage from '~/Component/NamePage/namePage';
import AboutInfo from '~/Component/AboutInfo/aboutInfo';
import Services from '~/Component/Services/services';
import PropType from 'prop-types';
const cx = classNames.bind(style);

function AboutMePage({ name }) {
    return (
        <div className={cx('wrapper')}>
            <Container>
                <NamePage data={user.about} name={name} />

                <div className={cx('content')}>
                    <div className={cx('avatar')}>
                        <Avatar />
                    </div>

                    <div className={cx('use-info')}>
                        <div className={cx('desc')}>
                            <div className={cx('title')}>I am Web Designer @ Company.com</div>
                            <div className={cx('text')}>
                                Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero,
                                facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam, pellentesque
                                enim ac, faucibus tortor. Nulla odio nibh, cursus sit amet urna id, dignissim euismod
                                augue.
                                <br />
                                Duis sollicitudin, libero porttitor rutrum ultrices, turpis lorem fermentum justo, quis
                                ornare augue tortor non est. Class aptent taciti sociosqu ad litora torquent per conubia
                                nostra, per inceptos himenaeos.
                            </div>
                        </div>

                        <div className={cx('contact')}>
                            <AboutInfo infos={infos} socials={socials} />
                        </div>
                    </div>
                </div>

                <div className={cx('service')}>
                    <div className={cx('service-header')}>Services</div>
                    <div className={cx('service-list')}>
                        {skills.map((service) => (
                            <div className={cx('service-item')} key={service.id}>
                                <Services data={service} />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}

AboutMePage.propType = {
    name: PropType.string.isRequired,
};

export default AboutMePage;
