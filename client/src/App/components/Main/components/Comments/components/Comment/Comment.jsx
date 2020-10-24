import React, {useMemo} from "react";
import styled from 'styled-components';
import {GAVATAR_BASE_URL} from "@globals/constants";
import md5 from "md5";
import * as styles from './styles';
import classNames from 'classnames';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import * as constants from './constants';

const popover = ({email}) => <Popover>
    <Popover.Title>{constants.POPOVER_TITLE}</Popover.Title>
    <Popover.Content>{email}</Popover.Content>
</Popover>;

export default styled(({className, email, text}) => {
    // builds the avatar url from gavatar's avatar base url and the email HASH.
    const avatarUrl = useMemo(() => GAVATAR_BASE_URL + md5(email), [email]);

    return <div {...{className: classNames(className, "comment")}}>
        <OverlayTrigger {...{trigger: 'click', placement: 'right', overlay: popover({email})}}>
            <img {...{className: 'avatar', alt: 'Avatar', src: avatarUrl}}/>
        </OverlayTrigger>
        <div {...{className: "content"}}>
            <span {...{className: 'email'}}>{email}</span>
            <p {...{className: 'text'}}>{text}</p>
        </div>
    </div>
})`${styles.Comment}`;
