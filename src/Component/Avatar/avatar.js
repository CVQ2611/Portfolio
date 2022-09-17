import classNames from 'classnames/bind';
import React from 'react';
import style from './Avatar.module.scss';

const cx = classNames.bind(style);

class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
        };
        this.image = React.createRef();
    }

    _onMouseMove = (e) => {
        const width = this.image.current.clientWidth;
        const heigh = this.image.current.clientHeight;
        // console.log(this.image.current.clientWidth);
        const _oX = e.nativeEvent.offsetX * -1;
        const _oY = e.nativeEvent.offsetY;
        // console.log(_oX, _oY);
        this.setState({
            x: (_oY - width / 2) / 3.6,
            y: (_oX + heigh / 2) / 3.6,
        });
    };

    _onMouseOut = () => {
        this.setState({
            x: 0,
            y: 0,
        });
    };

    render() {
        const { x, y } = this.state;
        const transForm = {
            transform: `perspective(300px) rotateX(${x}deg) rotateY(${y}deg) scale3d(1,1,1)`,
            transition: 'all linear 0.1s',
        };
        return (
            <div className={cx('wrapper')}>
                <img
                    className={cx('image')}
                    ref={this.image}
                    alt="avatar"
                    src="https://itnavi.com.vn/theme-port/unique-vcard/images/photo.png"
                    onMouseMove={this._onMouseMove}
                    onMouseOut={this._onMouseOut}
                    style={transForm}
                />
            </div>
        );
    }
}

export default Avatar;
