import PropTypes from 'prop-types';

export default function Tagflix({ fill }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="132"
			height="45"
			viewBox="0 0 132 45"
		>
			<path
				fill={fill}
				fillRule="evenodd"
				d="M4.564 17.312h-.822C1.46 17.312 0 16.314 0 14.05c0-2.268 1.46-3.263 3.742-3.263h.822V6.162c0-2.037 1.459-3.671 3.558-3.671 2.101 0 3.56 1.634 3.56 3.671v4.624h1.964c2.28 0 3.741.995 3.741 3.263 0 2.265-1.46 3.263-3.74 3.263h-1.965V31.5c0 2.039-1.459 3.67-3.56 3.67-2.1 0-3.558-1.631-3.558-3.67V17.312zm18.846 5.531c0-3.263 1.734-5.982 4.883-5.982 3.15 0 4.884 2.719 4.884 5.982 0 3.263-1.735 5.982-4.884 5.982-3.15 0-4.883-2.719-4.883-5.982zm16.884-8.658c0-2.041-1.46-3.673-3.559-3.673-1.734 0-2.83 1.18-3.332 2.268-1.596-1.95-3.422-2.72-6.115-2.72-6.207 0-10.997 5.667-10.997 12.783 0 7.113 4.79 12.78 10.997 12.78 2.693 0 4.519-.772 6.115-2.719.502 1.087 1.598 2.265 3.332 2.265 2.099 0 3.56-1.631 3.56-3.67V14.185zm13.051 2.676c3.15 0 4.882 2.719 4.882 5.982 0 3.44-1.733 6.073-4.882 6.073-3.15 0-4.884-2.632-4.884-6.073 0-3.263 1.735-5.982 4.884-5.982zm12.001-2.676c0-2.041-1.46-3.673-3.56-3.673-1.733 0-2.829 1.18-3.329 2.268-1.599-1.95-3.422-2.72-6.116-2.72-6.207 0-10.998 5.667-10.998 12.783 0 6.39 3.423 12.326 10.315 12.326 2.372 0 4.927-.547 6.479-2.719h.09c0 3.944-1.506 6.254-5.932 6.254-4.153 0-5.477-2.083-7.529-2.083-1.416 0-2.965 1.493-2.965 3.08 0 3.855 6.936 5.258 10.63 5.258 6.984 0 12.915-3.399 12.915-12.42V14.185zm19.36 17.314c0 2.039 1.462 3.67 3.56 3.67 2.1 0 3.56-1.631 3.56-3.67V3.67c0-2.038-1.46-3.67-3.56-3.67-2.098 0-3.56 1.632-3.56 3.67V31.5zm-13.887 0c0 2.039 1.459 3.67 3.56 3.67 2.098 0 3.559-1.631 3.559-3.67V17.312H79.9c2.28 0 3.741-.998 3.741-3.263 0-2.268-1.46-3.263-3.741-3.263h-1.962v-1.95c0-1.811.546-2.312 1.64-2.312 2.24 0 3.378-1.041 3.378-3.26C82.956.587 80.4 0 78.21 0c-4.379 0-7.391 3.309-7.391 7.614v3.172h-.823c-2.28 0-3.74.995-3.74 3.263 0 2.265 1.46 3.263 3.74 3.263h.823V31.5zm23.852 0c0 2.039 1.46 3.67 3.56 3.67 2.098 0 3.56-1.631 3.56-3.67V14.185c0-2.041-1.462-3.673-3.56-3.673-2.1 0-3.56 1.632-3.56 3.673v17.314zM98.231 0c-2.326 0-4.246 1.856-4.246 4.211 0 2.36 1.92 4.219 4.246 4.219 2.328 0 4.243-1.859 4.243-4.219 0-2.355-1.915-4.211-4.243-4.211zm6.115 28.597c-.594.68-1.417 1.542-1.417 3.039 0 2.174 1.688 3.533 3.652 3.533 1.505 0 2.328-.861 3.148-1.814l4.975-5.756 4.974 5.756c.821.953 1.644 1.814 3.149 1.814 1.963 0 3.65-1.36 3.65-3.533 0-1.497-.821-2.36-1.414-3.039l-6.07-6.39 3.697-3.899c2.055-2.174 2.738-2.852 2.738-4.123 0-2.268-1.735-3.673-3.424-3.673-1.642 0-2.463.41-3.514 1.725l-3.786 4.667-3.788-4.667c-1.05-1.314-1.872-1.725-3.513-1.725-1.69 0-3.423 1.405-3.423 3.673 0 1.271.683 1.95 2.738 4.123l3.696 3.9-6.068 6.39zm21.685-14.967a2.88 2.88 0 012.89-2.871 2.88 2.88 0 012.891 2.87 2.88 2.88 0 01-2.89 2.872 2.88 2.88 0 01-2.89-2.871zm5.127 0c0-1.254-1.023-2.268-2.236-2.268-1.214 0-2.236 1.014-2.236 2.268 0 1.253 1.022 2.268 2.236 2.268 1.213 0 2.236-1.015 2.236-2.268zm-2.9.277v1.134c0 .159-.087.254-.263.254-.175 0-.263-.095-.263-.254v-2.847c0-.119.056-.166.184-.166h1.054c.798 0 1.205.23 1.205.943 0 .62-.367.857-.822.912l.71 1.08a.47.47 0 01.08.197c0 .087-.16.135-.295.135-.16 0-.24-.048-.32-.174l-.758-1.214h-.511zm.608-.475c.407 0 .782-.032.782-.5 0-.397-.39-.428-.734-.428h-.655v.928h.607z"
			></path>
		</svg>
	);
}

Tagflix.propTypes = {
	fill: PropTypes.string.isRequired
};