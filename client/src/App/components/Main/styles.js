import {css} from 'styled-components';
import {isMobile} from '@globals/styles/helper';

export const Main = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 50px;
    ${isMobile(css`
        padding: 0px;
    `)};
    
    > div {
        width: 60%;
        
        ${isMobile(css`
            width: 100%;
        `)};
    }
    
`;
