import React, {useCallback, memo} from 'react';
import * as styles from './styles';
import styled from 'styled-components';
import classNames from 'classnames';
import * as constants from './constants';
import {Loader} from '@common-components';

export default styled(memo(({className, addNewComment, isLoading}) => {

        const onSubmit = useCallback((e) => {
            e.preventDefault();
            const [{value: email}, {value: text}] = e.target;

            // Validates that the form inputs are not empty.
            if (!email || !text) return alert(constants.FULFILL_ALERT);

            addNewComment({commentData: {email, text}});

        }, [addNewComment]);

        return <div {...{className: classNames(className, 'comment-form-wrapper')}}>

            <h3>{constants.HEADING}</h3>
            <form {...{className: 'comment-form', onSubmit}}>
                <input {...{type: 'email', placeholder: constants.EMAIL_PLACEHOLDER}}/>
                <textarea {...{className: 'message', placeholder: constants.MESSAGE_PLACEHOLDER}} />
                <button className='submit-button'>{isLoading ? <Loader/> : constants.BUTTON}</button>
            </form>

        </div>
    })
)`${styles.CommentFormWrapper}`;
