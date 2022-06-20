import React from 'react';
import styles from './Logo.module.scss';
import {Link} from 'react-router-dom'

function Logo(props) {
	return (

			<Link to={"/"} className={styles.logo}>
				<span>Ramazan</span>
				<span>&gt;&gt;</span>
				<span>frontend developer</span>
			</Link>

	);
}

export default Logo;