import styles from './CreateCompany.module.css'
import { BreadCrumbs } from '../../../../components/UI/BreadCrumbs/BreadCrumbs'

export const CreateCompany = () => {
	const isLoadingCompanies = false

	const BREAD_CRUMBS_CREATE_COMPANY_PAGE = [
		{
			name: 'Компании',
			to: '/company',
			isLoading: isLoadingCompanies,
			path: 1,
		},
		{
			name: 'Создать компанию',
			to: '/company/create',
			isLoading: isLoadingCompanies,
			path: 1,
		},
	]
	return (
		<div className={styles.wrapper}>
			<BreadCrumbs paths={BREAD_CRUMBS_CREATE_COMPANY_PAGE} />
			Создать компанию
		</div>
	)
}
