import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFeedbackMaster } from '../../../../store/features/feedback-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { useParams } from 'react-router-dom'

export const Rewievs = () => {
	const { feedbackDataMaster } = useSelector((state: any) => state.feedback)

	const dispatch = useDispatch()
	const { masterID } = useParams()

	useEffect(() => {
		dispatch(getFeedbackMaster({ masterID }) as unknown as AnyAction)
	}, [])

	return (
		<div>
			<span>Rewievs</span>
		</div>
	)
}
