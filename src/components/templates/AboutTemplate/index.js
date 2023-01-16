import { useContext } from 'react';

import Button from '@/src/components/atoms/Button';
import { Context } from '@/src/stores/main.js';

import { StyledTemplateContainer } from '../templateStyles';

import { StyledAboutInformation } from './AboutTemplateStyles';

export default function AboutTemplate() {
	const [state] = useContext(Context);

	return (
		<StyledTemplateContainer>
			{/* <Image src={me.src} width={560} height={560} /> */}
			<StyledAboutInformation darkMode={state.darkMode}>
				<h1>Software Engineer</h1>
				<h1>Nik Melgarejo</h1>
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
					Hello
				</Button>
			</StyledAboutInformation>
		</StyledTemplateContainer>
	);
}
