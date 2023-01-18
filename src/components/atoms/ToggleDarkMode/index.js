import { useContext } from 'react';

import { Context } from '@/src/stores/main.js';

import { StyledDarkModeToggle } from './ToggleDarkModeStyles.js';

export default function ToggleDarkMode() {
	const [state, dispatch] = useContext(Context);

	const toggleDarkMode = () => {
		dispatch({ type: 'toggle' });
	};

	return (
		<StyledDarkModeToggle
			checked={state.darkMode}
			onChange={toggleDarkMode}
			size={30}
		/>
	);
}
