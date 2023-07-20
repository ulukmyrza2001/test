import { useEffect, useState } from 'react'
import {
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowUp,
} from 'react-icons/md'
import styles from './style.module.css'

interface SLIDER_DATA {
	data: [
		{
			id: number
			title: string
			price?: number | string
			description: string
			img: string
		}
	]
}

export const Slider = ({ data }: any) => {
	const [amount, setAmount] = useState<number>(0)
	const [cord, setCord] = useState<number | null>(100)
	const [size, setSize] = useState<any>()

	useEffect(() => {
		setCord(amount * 500)
		setSize(data.length * 500)
	}, [amount])

	const lengthFix = data.length - 1

	return (
		<div id="slider" className={styles.slider}>
			<div className={styles.slider_wrapper}>
				<div className={styles.Sleft}>
					<div
						className={styles.title_container}
						style={{ height: `${size}px` }}
					>
						{data?.reverse().map((title: any) => (
							<div
								className={styles.title_wrapper}
								style={{
									transition: 'all 0.5s',
									transform: `translateY(${cord}px)`,
								}}
								key={title.id}
							>
								<h5 style={{ color: 'white' }} className={styles.h5}>
									{title.title}{' '}
									<span className={styles.span} style={{ color: 'gold' }}>
										{title.price} сом
									</span>
									<p style={{ color: 'silver' }} className={styles.p}>
										{title.description}
									</p>
								</h5>
							</div>
						))}
					</div>
				</div>
				<div className={styles.Sright}>
					<div className={styles.img_container} style={{ height: `${size}px` }}>
						{data.reverse().map((img: any) => (
							<div
								className={styles.img_wrapper}
								key={img.id}
								style={{
									transition: 'all 0.5s',
									transform: `translateY(-${cord}px)`,
								}}
							>
								<img src={img.img} alt="image" className={styles.img} />
							</div>
						))}
					</div>
				</div>
				<div className={styles.navigation}>
					<button
						className={styles.btn}
						onClick={() => setAmount(amount > lengthFix - 1 ? 0 : amount + 1)}
					>
						<MdOutlineKeyboardArrowUp size={50} className={styles.icon} />
					</button>
					<button
						className={styles.btn}
						onClick={() => setAmount(amount <= 0 ? lengthFix : amount - 1)}
					>
						<MdOutlineKeyboardArrowDown size={50} className={styles.icon} />
					</button>
				</div>
			</div>
		</div>
	)
}
