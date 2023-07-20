import React from 'react'
import styles from './About.module.css'
import { Container } from '../../../../styles/ContainerStyle/Container'
import BackAboutImg from '../../../../assets/image/BackgroundAbout.jpg'
import FrontAboutImg from '../../../../assets/image/frontAbout.jpg'
import IconAboutBeauty from '../../../../assets/icons/IconAboutBeauty.svg'
import IconAboutBeauty1 from '../../../../assets/icons/IconAboutBeauty1.svg'
import IconAboutBeauty2 from '../../../../assets/icons/IconAboutBeauty2.svg'

export const AboutContent = () => {
	return (
		<Container
			backColor={{
				margin: '70px 0',
				background:
					'linear-gradient(180deg,#cda582 0%,rgba(205, 165, 130, 0) 100%)',
			}}
		>
			<div className={styles.wrapper}>
				<div className={styles.wrapper_texts}>
					<span className='title'>About Us</span>
					<h2 className={styles.titles_branch}>
						The Beauty is about being Comfortable in your own skin!
					</h2>
					<p>
						There are many variations of passages of Lorem Ipsum
						available, but the majority have suffered alteration in
						some form, buying to injected humour, or randomised
						words which don't look even many desktop publishing
						packages.
					</p>
					<div className={styles.wrapper_services_branch}>
						<div className={styles.card_ser}>
							<img src={IconAboutBeauty} alt='' />
							<p>
								Beauty <br /> Experts
							</p>
						</div>
						<div className={styles.card_ser}>
							<img src={IconAboutBeauty1} alt='' />
							<p>
								Great <br /> Services
							</p>
						</div>
						<div className={styles.card_ser}>
							<img src={IconAboutBeauty2} alt='' />
							<p>
								100% <br /> Genuine
							</p>
						</div>
					</div>
				</div>
				<div className={styles.wrapper_imgs}>
					<img
						className={styles.frontIMG}
						src={FrontAboutImg}
						alt=''
					/>

					<img className={styles.back} src={BackAboutImg} alt='' />
				</div>
			</div>
		</Container>
	)
}
