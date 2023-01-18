import { useContext } from 'react';

import Button from '@/src/components/atoms/Button';
import Rose from '@/src/components/atoms/SvgComponents/Rose';
import { Context } from '@/src/stores/main.js';
import { colors } from '@/src/styles/util/index';

import { StyledTemplateContainer } from '../templateStyles';

import { StyledAboutInformation } from './HomeTemplateStyles';

export default function HomeTemplate() {
	const [state] = useContext(Context);

	return (
		<StyledTemplateContainer>
			<Rose fill={state.darkMode ? colors.yellow : colors.main} />
			<StyledAboutInformation darkMode={state.darkMode}>
				<h1>SOFTWARE ENGINEER</h1>
				<h1>NIKOLAS MELGAREJO</h1>
				<p>
					Ever since I was young I always looked to become great in whatever I enjoyed doing.
					Fighting games, card games, and Rubik&lsquo;s
					cubing is where I poured most of my heart into.
					As I got older it became clear what field I wanted to explore. Being a Software Engineer brings out
					the same challenge I yearned for when I was just a kid. It allows me to re-experience that feeling you get when you solve a problem after throwing yourself into it for hours. Programming is my dream job.</p>
				<br />
				<p>
					I am currently a Full-Stack Web Developer
					available to the NYC/Philadelphia area looking mostly for Remote work.
				</p>
				<Button url='/work-experience'>
					Work Experience
				</Button>
			</StyledAboutInformation>
		</StyledTemplateContainer>
	);
}
