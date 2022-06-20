import React from 'react';
import styles from './Works.module.scss'
import WorksItem from '../../components/WorksComponent/WorksItem/WorksItem'
import jk from '../../Images/jk.jpg'
import pravovik from '../../Images/recovery.png'
import ambient from '../../Images/ambient.jpg'
import table from '../../Images/table.jpg'
import game from '../../Images/game.jpg'
import warehouse from '../../Images/warehouse.jpg'

function Works(props) {

	let worksItem = [
		{
			id: 1,
			title: 'ЖК "Ильинские луга"',
			info: 'Сраница подбора квартиры по выбранным параметрам в жилых комплексах Москвы',
			url: jk,
			link: "https://ramaz4n.github.io/test-for-job/"
		},
		{
			id: 2,
			title: 'Pravovik',
			info: 'Верстка одностраничного адаптивного сайта',
			url: pravovik,
			link: "https://ramaz4n.github.io/Pravovik/"
		},
		{
			id: 3,
			title: 'Ambient',
			info: 'Сайт - портфолио для знакомого фотографа',
			url: ambient,
			link: "https://ramaz4n.github.io/ambient/"
		},
		{
			id: 4,
			title: 'Таблица',
			info: 'Удаление строки из таблицы а также редактирование таблицы',
			url: table,
			link: "https://ramaz4n.github.io/work_with_table/"
		},
		{
			id: 5,
			title: 'Game 2048',
			info: 'Игра "2048", написанная на JavaScript',
			url: game,
			link: "https://ramaz4n.github.io/2048/"
		},
		{
			id: 6,
			title: 'WareHouse',
			info: 'Лендинг, одностраничный, адаптивный',
			url: warehouse,
			link: "https://ramaz4n.github.io/warehouse/"
		}
	
	]
	return (
		<div className={styles.works}>
			<div className={styles.works__header}>
				<h2 className={styles.works__headerTitle}>My projects</h2>
			</div>
			<div className={styles.works__content}>
				{
					worksItem.map(item=>(
						<WorksItem
							key={item.id}
							title={item.title}
							info={item.info}
							url={item.url}
							link={item.link}
						/>
					))
				}
			</div>
		</div>
	);
}

export default Works;