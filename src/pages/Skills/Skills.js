import React from 'react';
import SkillsItem from '../../components/SkillsItem/SkillsItem';
import styles from './Skills.module.scss'
import html from '../../Images/html.webp'
import css from '../../Images/css.webp'
import sass from '../../Images/sass.webp'
import bootstrap from '../../Images/bootstrap.png'
import rest from '../../Images/rest.png'
import js from '../../Images/js.png'
import react from '../../Images/react.png'
import redux from '../../Images/redux.png'
import git from '../../Images/git.png'
import github from '../../Images/github.webp'

function Skills(props) {
	const skillsList = [
		{
			key: 1,
			imgLink: html,
			name: "html",
			description: "Стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере."
		},
		{
			key: 2,
			imgLink: css,
			name: "css",
			description: "Формальный язык описания внешнего вида документа, написанного с использованием языка разметки."
		},
		{
			key: 3,
			imgLink: sass,
			name: "sass",
			description: "Sass - это метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS-кода и упрощения файлов каскадных таблиц стилей."
		},
		{
			key: 4,
			imgLink: bootstrap,
			name: "bootstrap",
			description: "Свободный набор инструментов для создания сайтов и веб-приложений. Включает в себя HTML- и CSS-шаблоны оформления для типографики, веб-форм, кнопок, меток, блоков навигации и прочих компонентов веб-интерфейса, включая JavaScript-расширения."
		},
		{
			key: 5,
			imgLink: rest,
			name: "rest api",
			description: "Архитектурный стиль взаимодействия компонентов распределённого приложения в сети. Другими словами, REST - это набор правил того, как программисту организовать написание кода серверного приложения, чтобы все системы легко обменивались данными и приложение можно было масштабировать. "
		},
		{
			key: 6,
			imgLink: js,
			name: "java-script",
			description: "Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript."
		},
		{
			key: 7,
			imgLink: react,
			name: "react js",
			description: "React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов."
		},
		{
			key: 8,
			imgLink: redux,
			name: "redux",
			description: "Библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения. Чаще всего используется в связке с React или Angular для разработки клиентской части. "
		},
		{
			key: 9,
			imgLink: git,
			name: "git",
			description: "Распределённая система управления версиями. "
		},
		{
			key: 10,
			imgLink: github,
			name: "github",
			description: "Крупнейший веб-сервис для хостинга IT-проектов и их совместной разработки."
		},
	];
	return (
		<>
			<h2 className={styles.skills__title}>My skills</h2>
			<div className={styles.skills}>
				<ul className={styles.skills__list}>
					{
						skillsList.map(skills =>{
							return (
								<SkillsItem 
									imgLink = {skills.imgLink}
									name = {skills.name}
									description = {skills.description}
								/>
							)
						})
					}
					
				</ul>
			</div>
		</>
	);
}

export default Skills;