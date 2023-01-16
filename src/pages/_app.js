import PropTypes from 'prop-types';

import DefaultLayout from '@/src/components/layouts/Layout';

import { Store } from '../stores/main';

import '@/src/styles/globals.css';
import '@/src/styles/font.css';

export default function App({ Component, pageProps }) {
	return <Store>
		<DefaultLayout>
			<Component {...pageProps} />
		</DefaultLayout>
	</Store>;
}

App.propTypes = {
	pageProps: PropTypes.object.isRequired,
	Component: PropTypes.any.isRequired
};