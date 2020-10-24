import {css} from 'styled-components';
import {darken} from 'polished';

export const Comments = css`
    display: flex;
    flex-direction: column;
    padding: 0px 20px;
    
    > h3 {
        text-align: center;
    }
    
    > .filter-input {
        padding: 5px;
        margin: 2px 0px 10px 0px;
    }
    
    
    > .load-previous {
        cursor: ${({allCommentsLoaded}) => allCommentsLoaded ? 'not-allowed' : 'pointer'};
        border: 1px solid #b5b5b5;
        padding: 5px;
        text-align: center;
        background-color: #eee;
        border-radius: 5px;
        transition: background-color 300ms ease-in;
        
        &:hover {
            background-color: ${darken(0.1, '#eee')};
        }
    }
`;
