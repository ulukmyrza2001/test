import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFeedbackMaster } from '../../../../../store/features/feedback-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { useParams } from 'react-router-dom'
import styles from './Rewievs.module.css'
import Avatar from '@mui/material/Avatar'
import Rating from '@mui/material/Rating'

interface feedbackDataMasterResponseProps {
	comment: string
	createdDate: string
	feedbackId: number
	images: any
	rating: number
	replyToFeedbackResponse: {
		answer: string
		representative: string
	} | null
	userResponse: {
		avatar: string
		fullName: string
		userId: number
	}
}

export const Rewievs = () => {
	const { feedbackDataMaster } = useSelector((state: any) => state.feedback)

	const [typeRewievs, setTypeRewievs] = useState(0)
	const [fullRewievs, setFullRewievs] = useState([])

	const dispatch = useDispatch()
	const { masterID } = useParams()

	//useEffect

	useEffect(() => {
		dispatch(getFeedbackMaster({ masterID }) as unknown as AnyAction)
	}, [dispatch, masterID])

	useEffect(() => {
		switch (typeRewievs) {
			case 0:
				return setFullRewievs(feedbackDataMaster?.feedbackResponses)
			case 1:
				return setFullRewievs(
					feedbackDataMaster?.feedbackResponses.filter(
						(element: feedbackDataMasterResponseProps) => {
							return element.rating > 2
						}
					)
				)
			case 2:
				return setFullRewievs(
					feedbackDataMaster?.feedbackResponses.filter(
						(element: feedbackDataMasterResponseProps) => {
							return element.rating < 2
						}
					)
				)
		}
	}, [feedbackDataMaster, typeRewievs])

	//const

	const totalRatingCard = feedbackDataMaster?.feedbackResponses?.reduce(
		(acc: number, amount: feedbackDataMasterResponseProps) => {
			return acc + amount.rating
		},
		0
	)

	const typeButton = [
		{
			name: 'Все',
			value: 0,
		},
		{
			name: 'Положительные',
			value: 1,
		},
		{
			name: 'Отрицательные',
			value: 2,
		},
	]

	return (
		<div className={styles.container_rewiev}>
			<div className={styles.card_full_rewiev}>
				<div className={styles.card_full_inside_rewiev}>
					<span>Рейтинг</span>
					<span>{totalRatingCard}&nbsp;оценки</span>
				</div>
				<Rating
					name="text-feedback"
					readOnly
					value={feedbackDataMaster?.totalRating || 0}
					size="large"
					precision={0.5}
				/>
			</div>
			<div className={styles.container_rewievs}>
				<div className={styles.container_header_rewievs}>
					{feedbackDataMaster?.feedbackResponses?.length !== 0 && (
						<div className={styles.header_rewievs_button_container}>
							{typeButton.map((item: { name: string; value: number }) => {
								return (
									<div
										key={item.value}
										onClick={() => setTypeRewievs(item.value)}
										className={
											item.value === typeRewievs
												? styles.container_header_rewievs_button_active
												: styles.container_header_rewievs_button_notactive
										}
									>
										{item.name}
									</div>
								)
							})}
						</div>
					)}
					<div className={styles.title_header_reiwievs}>
						{feedbackDataMaster?.feedbackResponses?.length} отзывов
					</div>
				</div>
				<div className={styles.rewievs_container}>
					{fullRewievs?.map((item: feedbackDataMasterResponseProps) => {
						return (
							<div>
								<div key={item.feedbackId} className={styles.rewievs_card}>
									<div className={styles.rewievs_card_header}>
										<Avatar
											alt={item.userResponse.fullName}
											src={item.userResponse.avatar}
										/>
										<span className={styles.rewievs_card_title}>
											{item.userResponse.fullName}
										</span>
									</div>
									<div className={styles.rewievs_card_main}>
										<div>{item.comment}</div>
										<div>
											<img src={item.images} alt="photo" />
										</div>
										<div></div>
									</div>

									<div
										className={
											styles.rewievs_card_header_admin
										}>
										<span
											className={
												styles.rewievs_card_title
											}>
											{
												item.replyToFeedbackResponse
													?.representative
											}
										</span>
										<Avatar alt='ADMIN' src='' />
									</div>
									<div
										className={
											styles.rewievs_card_main_admin
										}>
										<div>
											{
												item.replyToFeedbackResponse
													?.answer
											}
										</div>
									</div>
								</div>
								<div className={styles.rewievs_card_main}>
									<div>{item.comment}</div>
									<div>
										<img src={item.images} alt="photo" />
									</div>
									<div></div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
