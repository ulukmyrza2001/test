import { useEffect } from 'react'
import styles from './Filter.module.css'
import { ServiceCard } from '../../../components/Cards/ServiceCard/ServiceCard'
import { ContainerSlider } from '../../../components/ContainersSliders/ContainerSlider'
import { Filterlayout } from '../../../components/Filter/FilterLayout/FilterLayout'
import { Container } from '../../../styles/ContainerStyle/Container'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
	getBrancheFindById,
	getBranches,
} from '../../../store/features/branch-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { BiHomeAlt } from 'react-icons/bi'
import { BreadCrumbs } from '../../../components/UI/BreadCrumbs/BreadCrumbs'
import { getSingleCategoryServiceSelect } from '../../../store/features/category-service'

export const FilterPage = () => {
	const { branchData, isLoadingBranch } = useSelector(
		(state: any) => state.branch,
	)
	const { categorySingleServiceSelectData, isLoadingCategoryService } =
		useSelector((state: any) => state.categoryService)
	const { id } = useParams()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(
			getBranches({
				categoryServiceId: id,
			}) as never as AnyAction,
		)
		dispatch(
			getSingleCategoryServiceSelect({
				cotegoryID: id,
			}) as never as AnyAction,
		)
	}, [])

	const BREAD_CRUMBS_INNER_FILTER_PAGE = [
		{
			name: <BiHomeAlt fontSize={26} color='grey' />,
			to: '/',
			isLoading: isLoadingBranch,
			path: 1,
		},
		{
			name: categorySingleServiceSelectData?.name,
			to: `/filter/${id}`,
			isLoading: isLoadingCategoryService,
			path: 1,
		},
	]
	console.log(branchData)

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
					<div className={styles.wrapper_cards}>
						{branchData?.map((item: any, index: number) => (
							<ServiceCard {...item} key={index} />
						))}
					</div>
				</div>
			</div>
		</Container>
	)
}
