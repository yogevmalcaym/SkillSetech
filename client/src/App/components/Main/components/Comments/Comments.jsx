import React, {useState, useCallback, useMemo, memo} from 'react';
import classNames from 'classnames';
import * as styles from './styles';
import styled from 'styled-components';
import * as constants from './constants'
import Comment from './components/Comment/Comment';
import {Loader} from '@common-components';

export default styled(memo(({className, data = [], getNextComments, allCommentsLoaded, isLoading}) => {
    const [filterText, setFilterText] = useState("");
    const onChange = useCallback(e => setFilterText(e.target.value), [setFilterText]);

    // Filters the data by the filterText variable and the emails.
    const filteredData = useMemo(() =>
            data.filter(({email}) => email.includes(filterText.toLowerCase()))
        , [data, filterText]);

    const comments = useMemo(() =>
            filteredData.map(({_id: id, email, text}) =>
                <Comment {...{email, text, key: id}}/>
            )
        , [filteredData]);

    // Handles all the content that relates to the comments loading.
    // There is three states - loading/click-to-load/no-more-to-load.
    const commentsLoadings = useMemo(() =>
            isLoading ?
                <Loader/> :
                <div {...{
                    className: 'load-previous',
                    onClick: allCommentsLoaded ? null : getNextComments
                }}>{allCommentsLoaded ? constants.NOTHING_TO_LOAD : constants.LOAD_PREVIOUS}</div>
        , [allCommentsLoaded, getNextComments, isLoading]);

    return <div {...{className: classNames(className, 'comments')}}>
        <h3>{constants.HEADING}</h3>
        <input {...{
            className: "filter-input",
            value: filterText,
            onChange,
            placeholder: constants.FILTER_PLACEHOLDER
        }}/>
        {comments}
        {commentsLoadings}
    </div>
}))`${styles.Comments}`;
