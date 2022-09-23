import classNames from 'classnames/bind';
import style from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
const cx = classNames.bind(style);

function Button({
    children,
    active = false,
    header = false,
    download = false,
    boder = false,
    to,
    href,
    onClick,
    mobile,
    box,
    ...passProps
}) {
    const props = { onClick, ...passProps };
    let Comp = 'button';
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        active,
        header,
        download,
        boder,
        mobile,
        box,
    });
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

Button.propType = {
    children: PropType.node,
};

export default Button;
