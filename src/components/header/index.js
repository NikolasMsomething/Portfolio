import { useContext } from 'react';

import { Context } from '@/src/stores/main.js';

import ToggleDarkMode from '../atoms/ToggleDarkMode';

import { StyledHeader } from './HeaderStyles';

export default function Header() {
	const [state] = useContext(Context);

	return (
		<StyledHeader darkMode={state.darkMode}>
			<ToggleDarkMode />
			<p>nikolasmsomething</p>
		</StyledHeader>
	);
}
