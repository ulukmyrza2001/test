import styles from './Banner.module.css'
import { Container } from '../../styles/ContainerStyle/Container'
import BannerIMG from '../../assets/image/banner.jpg'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { BsGeoAlt } from 'react-icons/bs'
import { useState } from 'react'
import { SearchModal } from './search-modal'
import { GeoModal } from './goe-modal'

export const Banner = () => {
	const [showSearchModal, setSearchShowModal] = useState(false)
	const [showGeoModal, setShowGeoModal] = useState(false)

	const showSearchModalHandler = () => {
		setSearchShowModal(true)
	}
	const showGeoModalHandler = () => {
		setShowGeoModal(true)
	}
	const hideSearchModalHandler = () => {
		setSearchShowModal(false)
	}
	const hideGeoModalHandler = () => {
		setShowGeoModal(false)
	}

	return (
		<Container>
			<div className={styles.wrapper}>
				<div className={styles.block_1}>
					<h2 className='title' style={{ fontSize: '30px' }}>
						Сервис онлайн бронирования в сфере красоты и здоровья.
					</h2>
					<p>Сегодня 7639 женщин меняют прическу</p>
				</div>
				<div className={styles.block_2}>
					<img src={BannerIMG} alt='banner' />
				</div>
				<div className={styles.wrapper_input}>
					<div className={styles.input}>
						<div
							className={styles.search_input}
							onClick={showSearchModalHandler}
						>
							<HiOutlineMagnifyingGlass />
							<span>Book your services...</span>
						</div>
						<SearchModal
							active={showSearchModal}
							hideHandler={hideSearchModalHandler}
						/>
						<GeoModal
							active={showGeoModal}
							hideHandler={hideGeoModalHandler}
						/>
						<hr />
						<div
							className={styles.search_input}
							onClick={showGeoModalHandler}
						>
							<BsGeoAlt />
							<span>Bishkek, Baitik Batyr Street</span>
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}
