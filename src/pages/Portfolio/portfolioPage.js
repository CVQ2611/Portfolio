import classNames from 'classnames/bind';
import NamePage from '~/Component/NamePage/namePage';
import Container from '~/Layouts/ContainerLayout/container';
import { myWork, user } from '~/Data/data';
import style from './Portfolio.module.scss';
import Project from '~/Component/Project/project';
import PropType from 'prop-types';
const cx = classNames.bind(style);
function PortfolioPage({ name }) {
    return (
        <div className={cx('wrapper')}>
            <Container>
                <NamePage data={user.portfolio} name={name} />
                <div className={cx('content')}>
                    {myWork.map((work) => (
                        <div className={cx('project')} key={work.id}>
                            <Project data={work} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
PortfolioPage.propType = {
    name: PropType.string.isRequired,
};

export default PortfolioPage;
