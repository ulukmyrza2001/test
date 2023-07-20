import { BarberCard } from '../../../../components/Cards/BarberCard'
import styles from './caruselmaster.module.css'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

export const CaruselMaster = () => {
	const Workers = [
		{
			id: 1,
			img: 'https://static.tildacdn.com/tild6134-3361-4735-a630-383937316238/9.jpg',
			name: 'Элеонора',
			position: 'frontend',
			skill: 'Тренер и профессиональный Lady Barber',
			skill1: 'Стрижки любой сложности',
			skill2: 'Подбор индивидуального стиля',
			skill3: 'Подбор индивидуальной формы бороды',
			skill4: 'Опасное бритьё любой сложности',
			skill5: 'Чистка лица (Black mask)',
			skill6: 'Удаление волос горячим воском',
		},
		{
			id: 2,
			img: 'https://static.tildacdn.com/tild6664-6131-4666-b663-303165613835/3.png',
			name: 'Музафар',
			position: 'backend',
			skill: 'Стрижки любой сложности',
			skill1: 'Подбор индивидуального стиля',
			skill2: 'Подбор индивидуальной формы бороды',
			skill3: 'Опасное бритьё любой сложности',
			skill4: 'Чистка лица (Black mask)',
			skill5: '-Удаление волос горячим воском',
		},
		{
			id: 3,
			img: 'https://static.tildacdn.com/tild3535-3563-4833-b635-326633623531/8.jpg',
			name: 'Тахмина',
			position: 'fluter',
			skill: 'Стрижки любой сложности',
			skill1: 'Подбор индивидуального стиля',
			skill2: 'Подбор индивидуальной формы бороды',
			skill3: 'Опасное бритьё любой сложности',
			skill4: '-Удаление волос горячим воском',
		},
	]

	const items = [
		Workers.map((el: any) => (
			<div key={el.id}>
				<BarberCard {...el} />
			</div>
		)),
	]

	const responsive = {
		0: { items: 1 },
		530: { items: 2 },
		930: { items: 3 },
	}

	return (
		<div className={styles.carusel_wrapper}>
			<AliceCarousel
				autoPlay
				autoPlayInterval={3000}
				infinite
				mouseTracking
				items={items}
				responsive={responsive}
			>
				{Workers.map((el: any) => (
					<BarberCard {...el} key={el.id} />
				))}
			</AliceCarousel>
		</div>
	)
}
