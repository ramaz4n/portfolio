import React from 'react';
import styles from './Home.module.scss'
import my from '../../Images/my.jpg'


function Home(props) {
	return (
		<>
			<div className={styles.home}>
				<div className={styles.home__img}>
					<img src={my} alt="I" />
				</div>	

				<div className={styles.home__about}>
					<h1 className={styles.home__title}>Hi, I'm Ramazan</h1>
					<p>Frontend developer from Kazan. I am interested in website development and everything related to it.</p>
					<p>I study at Kazan Federal University</p>
					<p>And i am 22</p>
				</div>
				
			</div>
		</>
	);
}

export default Home;