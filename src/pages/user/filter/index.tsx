import { useEffect } from 'react'
import styles from './Filter.module.css'
import { Filterlayout } from '../../../components/Filter/FilterLayout/FilterLayout'
import { Container } from '../../../styles/ContainerStyle/Container'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getBranchesInnerByID } from '../../../store/features/branch-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { BiHomeAlt } from 'react-icons/bi'
import { BreadCrumbs } from '../../../components/UI/BreadCrumbs/BreadCrumbs'
import { getSingleCategoryServiceSelect } from '../../../store/features/category-service'

export const FilterPage = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const { branchInnerData, isLoadingBranch } = useSelector(
		(state: any) => state.branch,
	)

	const { categorySingleServiceSelectData, isLoadingCategoryService } =
		useSelector((state: any) => state.categoryService)

	useEffect(() => {
		dispatch(
			getBranchesInnerByID({
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
					<p className={styles.info_lenght}>
						{branchInnerData?.length} результатов
					</p>
					<div className={styles.wrapper_cards}>
						{branchInnerData?.map((item: any) => (
							<div className={styles.card} key={item.branchId}>
								<div className={styles.wrapper_img}>
									<img src={item.image} alt='brach-img' />
								</div>
								<div className={styles.wrapper_info}>
									<div className={styles.card_inner_header}>
										<div className={styles.wrapper_name}>
											<h2 className='title'>
												{item.companyName}
											</h2>
											<p className='text'>
												{item.address}
											</p>
										</div>
										<Link
											className={styles.navigate_inner}
											to={`/${item.categoryType}/${item.branchId}`}
										>
											Next
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</Container>
	)
}
