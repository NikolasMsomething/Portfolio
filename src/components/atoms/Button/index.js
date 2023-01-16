import PropTypes from 'prop-types'; //

import { StyledButton } from './ButtonStyles';

export default function Button({ darkMode, children, url }) {
	return (
		<StyledButton darkMode={darkMode} href={url} >
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