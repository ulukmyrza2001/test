import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@mui/material'
import { ThreeDots } from 'react-loader-spinner'
import style from './BreadCrumbs.module.css'

export function BreadCrumbs({ paths }: any) {
	return (
		<Breadcrumbs
			aria-label='breadcrumbs'
			separator='/'
			className={style.breadcrumbs}>
			{paths.map((path: any, index: number) => {
				const lastIndex = index === paths.length - 1
				return lastIndex ? (
					<div key={path.path} className={style.titlecontainer}>
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
						<a className={style.navlink}>
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
						</a>
					</Link>
				)
			})}
		</Breadcrumbs>
	)
}
