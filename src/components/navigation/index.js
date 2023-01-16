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
					<Link href="/about">A - ABOUT ME</Link>
				</li>
				<li>
					<Link href="/blog/hello-world">W - WORK EXPERIENCE</Link>
				</li>
				<li>
					<Link href="/blog/hello-world">P - PROJECTS</Link>
				</li>
				<li>
					<Link href="/blog/hello-world">C - CONTACT</Link>
				</li>
			</ul>
		</StyledNav>
	);
}
