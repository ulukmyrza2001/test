import React from 'react'
import styles from './Review.module.css'
import { Container } from '../../../../styles/ContainerStyle/Container'
import { ReactComponent as ReiewIcons } from '../../../../assets/icons/“.svg'
import { ReactComponent as UserIcons } from '../../../../assets/icons/user.svg'
import { ContainerSlider } from '../../../../components/ContainersSliders/ContainerSlider'

export const ReviewContent = () => {
	return (
		<Container
			backColor={{
				backgroundColor: '#f9ece0',
			}}
		>
			<div className={styles.review}>
				<p>Отзывы</p>
				<ContainerSlider
					dots={false}
					infinite={true}
					speed={400}
					slidesToShow={3}
					slidesToScroll={1}
					swipeToSlide={true}
					autoplay={false}
					pauseOnHover={true}
					arrowAndprev={true}
					typeButton={true}
					variableWidth={true}
				>
					<div className={styles.review_card}>
						<div className={styles.wrapper_review_header}>
							<ReiewIcons />
							<span className='text'>
								Amet minim mollit non deserunt ullamco est sit
								aliqua dolor do amet sint. Velit officia
								consequat duis enim velit mollit.
							</span>
						</div>
						<div className={styles.wrapper_user_name}>
							<UserIcons />
							<p className='title'>Sarah Nimbus</p>
						</div>
					</div>
					<div className={styles.review_card}>
						<div className={styles.wrapper_review_header}>
							<ReiewIcons />
							<span className='text'>
								Amet minim mollit non deserunt ullamco est sit
								aliqua dolor do amet sint. Velit officia
								consequat duis enim velit mollit.
							</span>
						</div>
						<div className={styles.wrapper_user_name}>
							<UserIcons />
							<p className='title'>Sarah Nimbus</p>
						</div>
					</div>
					<div className={styles.review_card}>
						<div className={styles.wrapper_review_header}>
							<ReiewIcons />
							<span className='text'>
								Amet minim mollit non deserunt ullamco est sit
								aliqua dolor do amet sint. Velit officia
								consequat duis enim velit mollit.
							</span>
						</div>
						<div className={styles.wrapper_user_name}>
							<UserIcons />
							<p className='title'>Sarah Nimbus</p>
						</div>
					</div>
				</ContainerSlider>
			</div>
		</Container>
	)
}
