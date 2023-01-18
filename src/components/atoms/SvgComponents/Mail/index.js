import PropTypes from 'prop-types';

function Mail({ fill, pathFill }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
		>
			<rect width="512" height="512" fill={fill} rx="15%"></rect>
			<rect width="356" height="256" x="78" y="128" fill={pathFill} rx="8%"></rect>
			<path
				fill="none"
				stroke={fill}
				strokeWidth="20"
				d="M434 128L269 292c-7 8-19 8-26 0L78 128m0 256l129-128m227 128L305 256"
			></path>
		</svg>
	);
}

export default Mail;

Mail.propTypes = {
	fill: PropTypes.string.isRequired,
	pathFill: PropTypes.string.isRequired
};