import PropTypes from 'prop-types'; //

import { Store } from '../stores/main';

import '@/src/styles/globals.css';
import '@/src/styles/font.css';

export default function App({ Component, pageProps }) {
	return <Store>
		<Component {...pageProps} />
	</Store>;
}

App.propTypes = {
	Component: PropTypes.Component.isRequired,
	pageProps: PropTypes.object.isRequired
};