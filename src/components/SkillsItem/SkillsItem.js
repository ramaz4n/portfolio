import React, { useState } from 'react';
import styles from './SkillsItem.module.scss'
import arrow from '../../Images/arrow.png'

function SkillsItem({name, description, imgLink}) {

	const [isDescription, setIsDescription] = useState(false)

	const handleClick = () =>{
		setIsDescription(!isDescription)
	}

	return (
		<li className={styles.skillsItem} onClick={handleClick}>
			<div className={styles.skillsItem__main}>
				<div className={styles.skillsItem__name}>
					<img className={styles.skillsItem__img} src={imgLink} alt="img" /> 
					<span>{name}</span>
				</div>
				<img className={isDescription? styles.skillsItem__arrow_top : styles.skillsItem__arrow }  src={arrow} alt="arrow" />
			</div>
			<div className={isDescription? styles.skillsItem__description: styles.displayNone}>
				<p>{description}</p>
			</div>
		</li>
	);
}

export default SkillsItem;