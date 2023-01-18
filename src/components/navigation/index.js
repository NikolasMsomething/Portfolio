import { useContext } from 'react';
import Link from 'next/link';

import { Context } from '@/src/stores/main.js';

import { StyledNav } from './NavigationStyles';

export default function Navigation() {
	const [state] = useContext(Context);

	return (
		<StyledNav darkMode={state.darkMode}>
			<ul>
				<li>
					<Link href="/">H - HOME</Link>
				</li>
				<li>
					<Link href="/work-experience">W - WORK EXPERIENCE</Link>
				</li>
				<li>
					<Link href="/contact">C - CONTACT</Link>
				</li>
			</ul>
		</StyledNav>
	);
}
