import { useContext } from 'react';
import PropTypes from 'prop-types'; //

import { Context } from '@/src/stores/main.js';

import { StyledContainer, StyledSection } from '../atoms/Section/SectionStyles';
import Header from '../header';
import Navigation from '../navigation';

export default function DefaultLayout({ children }) {

	const [state] = useContext(Context);

	return (
		<StyledSection darkMode={state.darkMode}>
			<StyledContainer>
				<Header />
				{children}
				<Navigation />
			</StyledContainer>
		</StyledSection>
	);
}

DefaultLayout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};