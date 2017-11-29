/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * header function
 *
 * Headers provide a consistent start to pages.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]

/**
 * All theme options
 *
 * @type {Object}
 */
const themes = {
	light: '',
	alt: 'au-header--alt',
	dark: 'au-header--dark',
	altdark: 'au-header--altdark',
};

/**
 * DEFAULT
 * The header component
 *
 * @param  {string}  title    - The title of the header
 * @param  {string}  level    - The tag level (<h1/> <h2/> etc), default: '1'
 * @param  {string}  subline  - An optional subline, optional
 * @param  {boolean} hero     - The hero option, optional
 * @param  {string}  theme    - Optional theme that can be either: light dark, optional
 * @param  {node}    children - The inside of this section
 */
const Header = ({ title, level, subline, hero, theme, children }) => {
	const HeadingTag = `h${ level }`;

	return (
		<div className={`au-header${ hero ? ' au-header--hero' : '' } ${ theme ? themes[ theme ] : themes.light }`} role="banner">
			<HeadingTag className="au-header-heading">{ title }</HeadingTag>
			{ subline && <span className="au-header-subline">{ subline }</span> }
			{ children }
		</div>
	);
};

Header.propTypes = {
	title: PropTypes.node.isRequired,
	level: PropTypes.oneOf([ '1', '2', '3', '4', '5', '6' ]).isRequired,
	subline: PropTypes.node,
	hero: PropTypes.bool,
	theme: PropTypes.oneOf([ 'light', 'alt', 'dark', 'altdark' ]),
	children: PropTypes.node,
};

Header.defaultProps = {
	level: '1',
};

export default Header;
