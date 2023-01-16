import { useContext } from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Context } from '@/src/stores/main.js';

import { StyledToggleWrapper } from './ToggleDarkModeStyles.js';

export default function ToggleDarkMode() {
	const [, dispatch] = useContext(Context);

	const toggleDarkMode = () => {
		dispatch({ type: 'toggle' });
	};

	return (
		<StyledToggleWrapper>
			<input onClick={toggleDarkMode} type="checkbox" className="checkbox" id="checkbox" />
			<label htmlFor="checkbox" className="label">
				<FontAwesomeIcon className='fas fa-moon' icon={faMoon} />
				<FontAwesomeIcon className='fas fa-sun' icon={faSun} />
				<div className='ball' />
			</label>
		</StyledToggleWrapper>
	);
}
