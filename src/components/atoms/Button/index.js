import { useContext } from 'react';
import PropTypes from 'prop-types'; //

import { Context } from '@/src/stores/main.js';

import { StyledButton } from './ButtonStyles';

export default function Button({ children, url }) {
	const [state] = useContext(Context);

	return (
		<StyledButton darkMode={state.darkMode} href={url} >
			{children}
		</StyledButton>
	);
}

Button.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	darkMode: PropTypes.bool.isRequired,
	url: PropTypes.string.isRequired
};