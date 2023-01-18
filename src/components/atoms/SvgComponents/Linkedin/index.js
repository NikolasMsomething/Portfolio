import PropTypes from 'prop-types';
function LinkedIn({ fill, pathFill }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill={pathFill}
			viewBox="0 0 512 512"
		>
			<rect width="512" height="512" fill={fill} rx="15%"></rect>
			<circle cx="142" cy="138" r="37"></circle>
			<path stroke={pathFill} strokeWidth="66" d="M244 194v198M142 194v198"></path>
			<path d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32"></path>
		</svg>
	);
}

export default LinkedIn;



LinkedIn.propTypes = {
	fill: PropTypes.string.isRequired,
	pathFill: PropTypes.string.isRequired
};