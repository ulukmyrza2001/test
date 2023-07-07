import styles from './BreadCrumbs.module.css'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@mui/material'
import { ThreeDots } from 'react-loader-spinner'

export function BreadCrumbs({ paths }: any) {
	return (
		<Breadcrumbs
			aria-label='breadcrumbs'
			separator='/'
			className={styles.breadcrumbs}>
			{paths.map((path: any, index: number) => {
				const lastIndex = index === paths.length - 1
				return lastIndex ? (
					<div key={path.path} className={styles.wrapper_title}>
						{path.isLoading ? (
							<ThreeDots
								height='30'
								width='30'
								radius='9'
								color='gray'
								ariaLabel='three-dots-loading'
								visible={true}
							/>
						) : (
							path.name
						)}
					</div>
				) : (
					<Link key={path.path} to={path.to}>
						<span className={styles.navlink}>
							{path.isLoading ? (
								<ThreeDots
									height='30'
									width='30'
									radius='9'
									color='gray'
									ariaLabel='three-dots-loading'
									visible={true}
								/>
							) : (
								path.name
							)}
						</span>
					</Link>
				)
			})}
		</Breadcrumbs>
	)
}
