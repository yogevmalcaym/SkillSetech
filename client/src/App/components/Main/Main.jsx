import React, {useEffect, useState, useCallback} from 'react';
import * as styles from './styles';
import styled from 'styled-components';
import CommentForm from "./components/CommentForm/CommentForm";
import classNames from 'classnames';
import Comments from "./components/Comments/Comments";
import * as helper from './helper';

export default styled(({className}) => {

    const [commentsData, setCommentsData] = useState([]);
    const [commentsQueryIndex, setCommentsQueryIndex] = useState(1);
    const [allCommentsLoaded, setAllCommentsLoaded] = useState(false);
    const [isAddingNewComment, setIsAddingNewComment] = useState(false);
    const [isGettingComments, setIsGettingComments] = useState(false);

    // Get the initial comments.
    useEffect(() => {
        getComments();
    }, []);

    const [commentsAddedCount, setCommentsAddedCount] = useState(0);

    const addNewComment = useCallback(async ({commentData}) => {
        setIsAddingNewComment(true);
        const {newCommentData} = await helper.addNewComment(commentData) || {};
        if (newCommentData) {
            setCommentsData([newCommentData, ...commentsData]);
            setCommentsAddedCount(commentsAddedCount + 1);
        }
        setIsAddingNewComment(false);
    }, [commentsData, setCommentsData, commentsAddedCount, setCommentsAddedCount]);

    const getComments = useCallback(async () => {
        setIsGettingComments(true);
        const {comments} = await helper.getComments(commentsQueryIndex, commentsAddedCount) || {};
        if (comments) {
            if (comments.length < 10) setAllCommentsLoaded(true);
            setCommentsQueryIndex(commentsQueryIndex + 1);
            setCommentsData(commentsData.concat(comments));
        }
        setIsGettingComments(false);
    }, [commentsData, setCommentsData, setCommentsQueryIndex, commentsQueryIndex, setAllCommentsLoaded, commentsAddedCount]);

    return <div {...{className: classNames(className, "main")}}>
        <CommentForm {...{addNewComment, isLoading: isAddingNewComment}}/>
        <Comments {...{data: commentsData, getNextComments: getComments, allCommentsLoaded, isLoading: isGettingComments}}/>
    </div>

})`${styles.Main}`;
