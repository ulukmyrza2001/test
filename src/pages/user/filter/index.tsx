import React, { useEffect } from 'react'
import styles from './Filter.module.css'

import { ServiceCard } from '../../../components/Cards/ServiceCard/ServiceCard'
import { ContainerSlider } from '../../../components/ContainersSliders/ContainerSlider'
import { Filterlayout } from '../../../components/Filter/FilterLayout/FilterLayout'
import { Container } from '../../../styles/ContainerStyle/Container'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getBrancheFindById } from '../../../store/features/branch-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { BiHomeAlt } from 'react-icons/bi'
import { BreadCrumbs } from '../../../components/UI/BreadCrumbs/BreadCrumbs'

export const FilterPage = () => {
	const { branchFindById, isLoadingBranch } = useSelector(
		(state: any) => state.branch,
	)
	const { id } = useParams()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getBrancheFindById({ branchId: id }) as never as AnyAction)
	}, [])

	const BREAD_CRUMBS_INNER_FILTER_PAGE = [
		{
			name: <BiHomeAlt fontSize={26} color='#31a010' />,
			to: '/',
			isLoading: isLoadingBranch,
			path: 1,
		},
		{
			name: 'Парикмахерские услуги',
			to: `/filter/${id}`,
			isLoading: isLoadingBranch,
			path: 1,
		},
	]

	return (
		<Container
			sx={{
				paddingTop: '20px',
			}}
		>
			<BreadCrumbs paths={BREAD_CRUMBS_INNER_FILTER_PAGE} />
			<div className={styles.wrapper}>
				<Filterlayout />
				<div className={styles.inner_wrapper}>
					<span>135 результатов</span>
					<ContainerSlider
						dots={false}
						infinite={true}
						speed={400}
						slidesToShow={4}
						slidesToScroll={1}
						swipeToSlide={true}
						autoplay={false}
						pauseOnHover={true}
						arrowAndprev={true}
						typeButton={true}
						variableWidth={true}
					>
						<ServiceCard />
					</ContainerSlider>
				</div>
			</div>
		</Container>
	)
}
