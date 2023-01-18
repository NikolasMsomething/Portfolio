import React from 'react';
import { useContext } from 'react';
import Link from 'next/link';

import { Context } from '@/src/stores/main.js';
import { colors } from '@/src/styles/util';

import Github from '../../atoms/SvgComponents/Github';
import LinkedIn from '../../atoms/SvgComponents/Linkedin';
import Mail from '../../atoms/SvgComponents/Mail';
import { StyledTemplateContainer } from '../templateStyles';

import { StyledContactContainer } from './ContactTemplateStyles';

export default function ContactTemplate() {
	const [state] = useContext(Context);

	return (
		<StyledTemplateContainer>
			<StyledContactContainer>
				<Link href='https://www.linkedin.com/in/nikolas-melgarejo/'>
					<LinkedIn pathFill={state.darkMode ? colors.black : colors.beige} fill={state.darkMode ? colors.yellow : colors.main} />
				</Link>
				<Link href='https://github.com/NikolasMsomething/'>
					<Github pathFill={state.darkMode ? colors.black : colors.beige} fill={state.darkMode ? colors.yellow : colors.main} />
				</Link>
				<Link href='#'
					onClick={(e) => {
						window.location.href = 'mailto:nikolasmlgrj@gmail.com';
						e.preventDefault();
					}}>
					<Mail pathFill={state.darkMode ? colors.black : colors.beige} fill={state.darkMode ? colors.yellow : colors.main} />
				</Link>
			</StyledContactContainer>
		</StyledTemplateContainer>

	);
} 
