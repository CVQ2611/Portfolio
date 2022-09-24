import Container from '~/Layouts/ContainerLayout/container';
import classNames from 'classnames/bind';
import style from './Contact.module.scss';
import { user, infos, socials } from '~/Data/data';
import NamePage from '~/Component/NamePage/namePage';
import AboutInfo from '~/Component/AboutInfo/aboutInfo';
import PropType from 'prop-types';
const cx = classNames.bind(style);

function ContactPage({ name }) {
    return (
        <div className={cx('wrapper')}>
            <Container>
                <NamePage data={user.contact} name={name} />
                <div className={cx('content')}>
                    <div className={cx('header')}>Get In Touch</div>
                    <p className={cx('text')}>
                        Sed eleifend sed nibh nec fringilla. Donec eu cursus sem, vitae tristique ante. Cras pretium
                        rutrum egestas. Integer ultrices libero sed justo vehicula, eget tincidunt tortor tempus.
                    </p>
                    <AboutInfo infos={infos} socials={socials} />
                </div>
            </Container>
        </div>
    );
}

ContactPage.propType = {
    name: PropType.string,
};

export default ContactPage;
