import React from "react";
import * as styles from './styles';
import BeatLoader from 'react-spinners/BeatLoader';

export const Loader = () => <BeatLoader{...{css: styles.Loader, size: 10}}/>;
