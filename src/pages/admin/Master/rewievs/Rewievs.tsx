import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFeedbackMaster } from '../../../../store/features/feedback-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { useParams } from 'react-router-dom'
import Rating from '@mui/material/Rating'

export const Rewievs = () => {
	const { feedbackDataMaster } = useSelector((state: any) => state.feedback)

	console.log(feedbackDataMaster)

	const dispatch = useDispatch()
	const { masterID } = useParams()

	useEffect(() => {
		dispatch(getFeedbackMaster({ masterID }) as unknown as AnyAction)
	}, [])

	return (
		<div>
			<Rating
				name='text-feedback'
				readOnly
				value={1}
				size='large'
				precision={0.5}
			/>
		</div>
	)
}
