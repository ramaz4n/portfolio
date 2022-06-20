import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Menu.module.scss"

function Menu(props) {
	return (
		<nav>
			<ul className={styles.menu}>
				<li><Link className={styles.menu__item} to="/">Home</Link></li>
				<li><Link className={styles.menu__item} to="/skills">Skills</Link></li>
				<li><Link className={styles.menu__item} to="/works">Works</Link></li>
				<li><Link className={styles.menu__item} to="/contact">Contact</Link></li>
			</ul>
		</nav>
	);
}

export default Menu;