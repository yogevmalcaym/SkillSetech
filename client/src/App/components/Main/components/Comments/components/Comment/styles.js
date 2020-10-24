import {css} from 'styled-components';

export const Comment = css`
    display: flex;
    align-items: center;
    padding: 15px 5px;
    border-radius: 10px;
    transition: background-color 300ms ease-in;
            
    &:hover {
        background-color: #bababa;
    }
      
    > .avatar {
        cursor: pointer; 
        width: 50px;
        height: 50px;
        margin-right: 7px;
        border-radius: 5px;
    }
    
    > .content {
    
        > .email {
            font-weight: bold;
        }
        
        > .text {
            margin-top: 5px;
            margin-bottom: 0px;
        }
        
    }
`;
