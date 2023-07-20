import styles from './OurWork.module.css'
import BackSliderImg from '../../../../assets/image/barberSlide.svg'
import { Container } from '../../../../styles/ContainerStyle/Container'
import { PiDotsNineBold } from 'react-icons/pi'
import { useState } from 'react'
import { SwipeableDrawer } from '@mui/material'
import { IoIosArrowBack } from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import { PhotoAlbum } from 'react-photo-album'

export const OurWorkContent = () => {
	const photos = [
		{
			src: 'https://www.nastol.com.ua/pic/202102/1600x900/nastol.com.ua-448036.jpg',
			width: 1600,
			height: 900,
		},
		{
			src: 'https://images.wallpapersden.com/image/download/landscape-pixel-art_bGhnaGeUmZqaraWkpJRtZWWta2Vl.jpg',
			width: 800,
			height: 600,
		},
		{
			src: 'https://look.com.ua/pic/201511/800x600/look.com.ua-138211.jpg',
			width: 800,
			height: 600,
		},
		{
			src: 'https://oboinastol.net/katalog_kartinok/tom09/017/skachat_oboi_1600x900.jpg',
			width: 1600,
			height: 900,
		},
		{
			src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCoJsWT4JLcz5eLzSxCKeyQ3TMqry5HfK6Jw&usqp=CAU',
			width: 800,
			height: 600,
		},
		{
			src: 'https://a-static.besthdwallpaper.com/beautiful-sunrise-at-the-lake-wallpaper-800x600-6228_17.jpg',
			width: 800,
			height: 600,
		},
		{
			src: 'https://images.wallpaperscraft.ru/image/single/gory_krasivo_nebo_87742_800x600.jpg',
			width: 800,
			height: 600,
		},
		{
			src: 'https://oboinastol.net/katalog_kartinok/tom17/024/skachat_oboi_1600x900.jpg',
			width: 1600,
			height: 900,
		},
		{
			src: 'https://images.wallpaperscraft.ru/image/single/more_zakat_nebo_81854_800x600.jpg',
			width: 800,
			height: 600,
		},
		{
			src: 'https://images.wallpaperscraft.ru/image/single/oblaka_nebo_krasivyj_174226_800x600.jpg',
			width: 800,
			height: 600,
		},
		{
			src: 'https://images.wallpaperscraft.ru/image/single/pejzazh_noch_temnyj_157145_1600x900.jpg',
			width: 1600,
			height: 900,
		},
		{
			src: 'https://images.wallpaperscraft.ru/image/single/zima_zhivotnye_art_129250_1600x900.jpg',
			width: 1600,
			height: 900,
		},
		{
			src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ6Uww7vYzlRyxPQqaY9Vxx82UA3kNAMPMQ&usqp=CAU',
			width: 1600,
			height: 900,
		},
	]

	const [galleryModal, setGalleryModal] = useState(false)
	return (
		<Container
			backColor={{
				backgroundImage: `url(${BackSliderImg})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				padding: '2rem',
				minHeight: '400px',
			}}
		>
			<SwipeableDrawer
				anchor="bottom"
				open={galleryModal}
				onClose={() => setGalleryModal(false)}
				onOpen={() => setGalleryModal(true)}
			>
				<div className={styles.modal}>
					<div className={styles.modal_header}>
						<button
							className={styles.close_modal}
							onClick={() => setGalleryModal(false)}
						>
							<IoIosArrowBack size={30} />
						</button>
						<div className={styles.modal_actions}>
							<button className={styles.modal_btn}>
								{<BiLinkExternal size={20} />} Поделиться
							</button>
							<button className={styles.modal_btn}>
								{<AiOutlineHeart size={20} />} Сохранить
							</button>
						</div>
					</div>
					<div className={styles.photo_wrapper}>
						<PhotoAlbum layout="rows" photos={photos} />
					</div>
				</div>
			</SwipeableDrawer>
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '50px',
				}}
			>
				<p className={styles.title}>НАШИ РАБОТЫ</p>
				<div className={styles.gallery_wrapper}>
					<div className={styles.left} onClick={() => setGalleryModal(true)}>
						<img
							src="https://i.pinimg.com/originals/71/9e/80/719e80760999b4c355a723224120eb07.png"
							alt="alt"
							className={styles.main_img}
						/>
					</div>
					<div className={styles.right}>
						<div
							className={styles.img_container}
							onClick={() => setGalleryModal(true)}
						>
							<img
								src="https://s1.1zoom.me/b5050/596/Evening_Forests_Mountains_Firewatch_Campo_Santo_549147_1920x1080.jpg"
								alt="alt"
								className={styles.img}
							/>
						</div>
						<div
							className={styles.img_container}
							onClick={() => setGalleryModal(true)}
						>
							<img
								src="https://preview.redd.it/mountain-1920x1080-v0-ghbmrbnbhba81.png?width=1080&crop=smart&auto=webp&s=425aeca1a4c82c60343035cef0bbcd4447769a02"
								alt="alt"
								className={styles.img}
							/>
						</div>
						<div
							className={styles.img_container}
							onClick={() => setGalleryModal(true)}
						>
							<img
								src="https://preview.redd.it/1920x1080-sky-v0-gyt2a9oo1p981.jpg?width=1080&crop=smart&auto=webp&s=f48b7b5664f4b4c2faa0c9ed075bcef0e6c65fe1"
								alt="alt"
								className={styles.img}
							/>
						</div>
						<div
							className={styles.img_container}
							onClick={() => setGalleryModal(true)}
						>
							<img
								src="https://preview.redd.it/cyber-tokyo-2045-3840x2160-v0-5354imjk6mcb1.jpg?width=1080&crop=smart&auto=webp&s=a48c674952cf402503032de2a87246f311378cc7"
								alt="alt"
								className={styles.img}
							/>
						</div>
					</div>
					<button className={styles.btn} onClick={() => setGalleryModal(true)}>
						{<PiDotsNineBold size={18} />}
						показать все фото
					</button>
				</div>
			</div>
			{/* <ContainerSlider
				dots={false}
				infinite={true}
				speed={400}
				slidesToShow={2}
				slidesToScroll={1}
				swipeToSlide={true}
				autoplay={false}
				pauseOnHover={true}
				arrowAndprev={true}
				typeButton={true}
				variableWidth={true}
			>
				<div className={styles.slide_card}>
					<img src={SlideIMG} />
				</div>
				<div className={styles.slide_card}>
					<img src={SlideIMG1} />
				</div>
				<div className={styles.slide_card}>
					<img src={SlideIMG2} />
				</div>
				<div className={styles.slide_card}>
					<img src={SlideIMG3} />
				</div>
				<div className={styles.slide_card}>
					<img src={SlideIMG3} />
				</div>
				<div className={styles.slide_card}>
					<img src={SlideIMG3} />
				</div>
			</ContainerSlider> */}
		</Container>
	)
}
