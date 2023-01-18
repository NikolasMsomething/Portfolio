import { useContext } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

import { Context } from '@/src/stores/main.js';
import { colors } from '@/src/styles/util';

import { StyledCard, StyledCardBody, StyledCardFooter, StyledCardHeader, StyledCardTitle } from './CardStyles';

export default function Card({ title, children, ImageComponent, width, footer }) {
	const [state] = useContext(Context);

	return (
		<StyledCard darkMode={state.darkMode}>
			<StyledCardHeader width={width} darkMode={state.darkMode}>
				<ImageComponent fill={state.darkMode ? colors.yellow : colors.main} />
				<StyledCardTitle darkMode={state.darkMode}>{title}</StyledCardTitle>
			</StyledCardHeader>
			<StyledCardBody darkMode={state.darkMode}>
				<p>{children}</p>
			</StyledCardBody>
			<StyledCardFooter darkMode={state.darkMode}>
				{footer.map(text => <li key={text}>{text}</li>)}
			</StyledCardFooter>
		</StyledCard>
	);
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	ImageComponent: PropTypes.element.isRequired,
	width: PropTypes.number,
	footer: PropTypes.array.isRequired,
};