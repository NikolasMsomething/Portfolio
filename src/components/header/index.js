import { useContext } from 'react';

import { Context } from '@/src/stores/main.js';

import ToggleDarkMode from '../atoms/ToggleDarkMode';

import { StyledHeader } from './HeaderStyles';

export default function Header() {
	const [state] = useContext(Context);

	return (
		<StyledHeader darkMode={state.darkMode}>
			<h2>nm</h2>
			<ToggleDarkMode />
		</StyledHeader>
	);
}
