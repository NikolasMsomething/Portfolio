import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types'; //

const initialState = {
	darkMode: false
};

export const Context = createContext(initialState); // <- initialize Context using initialState

export const Store = ({ children }) => {
	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
		case 'toggle':
			return { darkMode: !state.darkMode };

		default:
			return state;
		}
	}, initialState);

	return (
		<Context.Provider value={[state, dispatch]}> {/* <- this value is gonna be Global state */}
			{children}
		</Context.Provider>
	);
};

Store.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
};