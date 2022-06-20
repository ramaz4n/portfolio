import React from 'react';
import ContactItem from '../../components/ContactItem/ContactItem';
import styles from './Contact.module.scss'
import instagram from '../../Images/instagram.png'
import vkontakte from '../../Images/vkontakte.png'
import telegram from '../../Images/telegram.png'
import twitter from '../../Images/twitter.png'
import linkedin from '../../Images/linkedin.png'
import github from '../../Images/github.webp'

function Contact(props) {
	return (
		<div className={styles.contact}>
			<ContactItem link={'https://www.instagram.com/ramazan_abv'} name={"Instagram"} img={instagram}/>
			<ContactItem link={'https://vk.com/ram4z4n'} name={"Vkontakte"} img={vkontakte}/>
			<ContactItem link={'https://t.me/ram4z4n'} name={"Telegram"} img={telegram}/>
			<ContactItem link={'https://twitter.com/ramaz4n'} name={"Twitter"} img={twitter}/>
			<ContactItem link={'https://www.linkedin.com/in/ramazan-abdullaev-491a30241/'} name={"LinkedIn"} img={linkedin}/>
			<ContactItem link={'https://github.com/ramaz4n'} name={"GitHub"} img={github}/>
		</div>
	);
}

export default Contact;