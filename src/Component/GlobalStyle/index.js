import './GlobalStyle.scss';
import PropType from 'prop-types';

function GlobalStyle({ children }) {
    return children;
}

GlobalStyle.propType = {
    children: PropType.node,
};

export default GlobalStyle;
