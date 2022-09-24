import classNames from 'classnames/bind';
import NamePage from '~/Component/NamePage/namePage';
import Container from '~/Layouts/ContainerLayout/container';
import style from './Resume.module.scss';
import { codingSkills, designSkills, educations, experiences, user } from '~/Data/data';
import Button from '~/Component/Button/button';
import ResumItem from '~/Component/ResumItem/resumeitem';
import CharItem from '~/Component/Char/char';
import PropType from 'prop-types';
const cx = classNames.bind(style);
function ResumePage({ name }) {
    return (
        <div className={cx('wrapper')}>
            <Container>
                <NamePage data={user.resume} name={name} />
                <div className={cx('content')}>
                    <div className={cx('education')}>
                        <div className={cx('edu-header')}>Education</div>
                        {educations.map((education) => (
                            <ResumItem key={education.id} item={education} />
                        ))}
                    </div>
                    <div className={cx('experience')}>
                        <div className={cx('edu-header')}>Experience</div>
                        {experiences.map((experience) => (
                            <ResumItem key={experience.id} item={experience} />
                        ))}
                    </div>
                    <div className={cx('char')}>
                        <div className={cx('design-skill')}>
                            <div className={cx('edu-header')}>Design Skills</div>
                            {designSkills.map((designSkill) => (
                                <CharItem key={designSkill.id} item={designSkill} />
                            ))}
                        </div>
                        <div className={cx('coding-skill')}>
                            <div className={cx('edu-header')}>Coding Skills</div>
                            {codingSkills.map((codingSkill) => (
                                <CharItem key={codingSkill.id} item={codingSkill} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={cx('button-download')}>
                    <Button boder download>
                        Download CV
                    </Button>
                </div>
            </Container>
        </div>
    );
}

ResumePage.propType = {
    name: PropType.string.isRequired,
};
export default ResumePage;
