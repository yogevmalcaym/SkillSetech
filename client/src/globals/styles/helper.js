import {css} from 'styled-components';

const MOBILE_MAX_WIDTH = 650;

export const isMobile = style => () => css`
    @media (max-width: ${MOBILE_MAX_WIDTH}px) {
        ${style};
    }
`;
