import React from 'react';
import styles from './WorksItem.module.scss'

function WorksItem({title, info, url, link}) {
	return (
		<>
			<a href={link} target="_blank">
				<div className={styles.worksItem}>
					<img className={styles.worksItem__img} src={url} alt="#" />
					<div className={styles.worksItem__textWrap}>
						<h4 className={styles.worksItem__title}>{title}</h4>
						<p className={styles.worksItem__info}>{info}</p>
					</div>
				</div>
			</a>
		</>
	);
}

export default WorksItem;