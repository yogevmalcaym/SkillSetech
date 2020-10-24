import {css} from 'styled-components';
import {isMobile} from '@globals/styles/helper';
import {darken} from 'polished';

export const CommentFormWrapper = css`
    display: flex;
    flex-direction: column;
    background-color: #eee;
    border-radius: 7px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 4px 2px #b5b5b5;
    ${isMobile(css`
        border-radius: 0px;
        box-shadow: 0px 0px 8px 1px #b5b5b5;
    `)};
    
    
    
    > h3 {
        text-align: center;
    }
    
    > .comment-form{
        display: flex;
        flex-direction: column;
        
        > * {
            padding: 5px;
        }
        
        > .message {
            margin: 10px 0px;
        }
        
        > .submit-button {
            align-self: center;
            width: 220px;
            border-radius: 5px;
            background-color: #57a8ef;
            transition: background-color 200ms ease-in;
            cursor: ${({isLoading}) => isLoading ? 'progress' : 'pointer'};  
                          
            &:hover {
                background-color: ${darken(0.1, '#57a8ef')};
            }
        }
    }
`;
