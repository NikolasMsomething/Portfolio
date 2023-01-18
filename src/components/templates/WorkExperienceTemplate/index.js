import { useContext } from 'react';

import DigitalOcean from '@/src/components/atoms/SvgComponents/DigitalOcean';
import Tagflix from '@/src/components/atoms/SvgComponents/Tagflix';
import { Context } from '@/src/stores/main.js';
import { colors } from '@/src/styles/util';

import Button from '../../atoms/Button';
import Card from '../../atoms/Card';
import Floral from '../../atoms/SvgComponents/Floral';
import { StyledCardContainer } from '../templateStyles';

import { StyledExperienceBio } from './WorkExperienceTemplateStyles';

export default function WorkExperienceTemplate() {
	const [state] = useContext(Context);

	const cards = [
		{
			title: 'DigitalOcean',
			text: 'DigitalOcean Inc. is a cloud computing vendor headquartered in New York City with data centers worldwide that offers an infrastructure as a service (IaaS) platform for software developers. DigitalOcean is popular with open source developers and competes with Amazon Web Services (AWS).',
			ImageComponent: DigitalOcean,
			width: 100,
			footer: ['Spearheaded crucial transitional efforts from Gatsby to Next.js for marketing and community sites serving millions of customers monthly', 'Built, owned, and delivered multiple large scale projects ranging from tooling to brand redesigns', 'Collaborated with digital experience designers and stakeholders to transform ideas to scalable reusable solutions']
		},
		{
			title: 'Tagflix',
			text: 'Tagflix makes it easy for consumers to discover your brand and products in the videos they love to watch. By simply revealing brand & product associations within video, viewers get a natural marketing experience that unlocks the value of video for your brand.',
			ImageComponent: Tagflix,
			footer: ['Raised codebase testing coverage up from nonexistent to 80% coverage', 'Troubleshooted and remedied identified issues with the main product prior to software deployment', 'Reviewed project specifications and devised solutions for use across multiple web applications with Javascript, React, and Redux']
		},
	];

	return (
		<>
			<StyledExperienceBio darkMode={state.darkMode}>
				<div>
					<h1>Experience</h1>
					<p>
            I have experience in creating scalable web applications that are consumed by millions a month.
            Below you will find the companies I work(ed) for and my accomplishments with them.
					</p>
					<Button url='/contact'>
            Contact me
					</Button>
				</div>
				<Floral fill={state.darkMode ? colors.yellow : colors.main} />
			</StyledExperienceBio>
			<StyledCardContainer>
				{cards.map(card => <Card key={card.title} footer={card.footer} width={card.width} ImageComponent={card.ImageComponent} title={card.title}>{card.text}</Card>)}
			</StyledCardContainer>
		</>

	);
}
