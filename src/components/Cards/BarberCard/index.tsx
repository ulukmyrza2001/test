import { motion } from 'framer-motion'
import styles from './barbercard.module.css'

export const BarberCard = ({
	name,
	img,
	position,
	skill,
	skill1,
	skill2,
	skill3,
	skill4,
	skill5,
	skill6,
}: any) => {
	const cardAnimate = {
		hidden: {
			y: 100,
			opacity: 0,
		},
		visible: (custom: any) => ({
			y: 0,
			opacity: 1,
			transition: { delay: custom * 0.3 },
		}),
	}
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			variants={cardAnimate}
			custom={1}
			viewport={{ once: true }}
			className={styles.port_card}
		>
			<div className={styles.port_card_wrapper}>
				<img src={img} alt="ava" className={styles.img} />
				<motion.h5 variants={cardAnimate} custom={1.5} className={styles.h5}>
					{name}
				</motion.h5>
				<motion.h5
					variants={cardAnimate}
					custom={2}
					className={styles.position}
				>
					{position}
				</motion.h5>
				<span className={styles.red_line}></span>
				<motion.ul variants={cardAnimate} custom={4} className={styles.ul}>
					<li className={styles.li}>{skill}</li>
					{/* <li className={styles.li}>{skill1}</li>
					<li className={styles.li}>{skill2}</li>
					<li className={styles.li}>{skill3}</li>
					<li className={styles.li}>{skill4}</li>
					<li className={styles.li}>{skill5}</li>
					<li className={styles.li}>{skill6}</li> */}
				</motion.ul>
				<button className={styles.btn}>Записаться</button>
			</div>
		</motion.div>
	)
}
