import styles from './About.module.css'
import Img1 from '../../../../assets/image/imgBarber2.png'
import { Container } from '../../../../styles/ContainerStyle/Container'
import Map from '../../../../assets/image/map.png'
import { motion } from 'framer-motion'
import { GiCoffeeCup, GiWaterBottle } from 'react-icons/gi'
import { SiPlaystation } from 'react-icons/si'

export const AboutContent = () => {
	const cardAnimate = {
		hidden: {
			x: -100,
			opacity: 0,
		},
		visible: (custom: any) => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.2 },
		}),
	}

	const icon = {
		hidden: {
			opacity: 0,
			pathLength: 0,
			fill: 'rgba(255, 255, 255, 0)',
		},
		visible: {
			opacity: 1,
			pathLength: 1,
			fill: 'rgba(255, 255, 255, 1)',
		},
	}

	return (
		<Container backColor={{ backgroundColor: 'black' }}>
			<div className={styles.wrapper_about}>
				<div className={styles.wrapper_img_about}>
					<img src={Img1} alt="IMG" />
				</div>
				<div className={styles.wrapper_map}>
					<p className="title" style={{ color: 'white' }}>
						Где мы находимся
					</p>
					<div>
						<img src={Map} alt="" />
					</div>
				</div>
			</div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				id="experiance"
				className={styles.exper}
			>
				<div className={styles.exper_wrapper}>
					<div className={styles.exp_left}>
						<motion.div
							variants={cardAnimate}
							custom={1}
							className={styles.exp_text_wrapper}
						>
							<h2 className={styles.h2}>MARSHAL BARBERSHOP</h2>
							<h5 className={styles.h5}>МЕСТО ТВОЕГО СТИЛЯ</h5>
							<span className={styles.exp_span}></span>
							<p className={styles.p}>
								Барбершоп Маршал был основан в 2016 году.
							</p>
							<p className={styles.p}>
								Основная цель: создать комфортное место для мужчин.
							</p>
							<p className={styles.p}>
								Миссия: оказывать профессиональные услуги барберинга по
								оптимальной цене.
							</p>
							<p className={styles.p}>
								Наша атмосфера создана под мужской настрой и характер.
							</p>
						</motion.div>
						<div className={styles.exp_additional_wrapper}>
							<motion.div
								variants={cardAnimate}
								custom={1}
								className={styles.exp_icon}
							>
								<GiCoffeeCup size={100} />
								<span className={styles.span}>БЕСПЛАТНЫЙ КОФЕ И ЧАЙ</span>
							</motion.div>
							<motion.div
								variants={cardAnimate}
								custom={2}
								className={styles.exp_icon}
							>
								<SiPlaystation size={100} />
								<span className={styles.span}>БЕСПЛАТНЫЙ PLAYSTATION</span>
							</motion.div>
							<motion.div
								variants={cardAnimate}
								custom={3}
								className={styles.exp_icon}
							>
								<GiWaterBottle size={100} />
								<span className={styles.span}>НАПИТКИ И ЭНЕРГЕТИКИ</span>
							</motion.div>
						</div>
					</div>
					<div className={styles.exp_right}>
						<img
							src="https://static.tildacdn.com/tild3065-3330-4261-a237-393566616436/_18.jpg"
							alt="ava"
							className={styles.exp_right_img}
						/>
					</div>
				</div>
			</motion.div>
		</Container>
	)
}
