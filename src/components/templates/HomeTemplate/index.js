import { useContext } from 'react';

import Button from '@/src/components/atoms/Button';
// import dream from '@/src/assets/images/rose.svg';
// import doSvg from '@/src/assets/images/do.svg';
// import Image from 'next/image';
import Rose from '@/src/components/atoms/SvgComponents/Rose';
import { Context } from '@/src/stores/main.js';
// import DigitalOcean from '@/src/components/atoms/SvgComponents/DigitalOcean';
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
				<h1>NIK MELGAREJO</h1>
				<p>
					Ever since I was young I always looked to become a top contender in whatever I loved doing.
					I wanted to become a strong fighting game player, an excellent tinkerer,
					and the funniest guy around. As I got older I found a new passion that brings
					challenge and critical thinking. I believe programming brings the best out of me
					and I&apos;m ever grateful for that.
				</p>
				<br />
				<p>
					I am currently a Full-Stack Web Developer
					available to the NYC/Philadelphia area. Nowadays you&apos;ll
					see me studying hard and practicing to keep myself sharp.
					Find me in a coffee shop near you!
				</p>
				<Button darkMode={state.darkMode} url='/'>
					My work experience
				</Button>
			</StyledAboutInformation>
		</StyledTemplateContainer>
	);
}
