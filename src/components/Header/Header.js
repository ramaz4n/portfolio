import React from 'react';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';
import Menu from '../Menu/Menu';


function Header(props) {
	return (
		<div className={styles.header}>
			<Logo/>
			<Menu/>
		</div>
	);
}

export default Header;