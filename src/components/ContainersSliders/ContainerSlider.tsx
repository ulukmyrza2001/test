import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ContainerSlider.css'

//dots - Внизу показывает на каком Slider
//infinte - Slider работает бесконечно
//speed - Скорость прокрутки Slider
//slidesToShow - На экране выходить сколько вы дали
//slidesToScroll - Количество прокрутки
//swipeToSlide - Включить перетаскивание/пролистывание независимо от `slidesToScroll`
//initialSlide - Первоначальное slider
//autoplay - Авто Slider
//autoplaySpeed - Скорость авто Slider
//pauseOnHover - Остоновит через Hover Slider работает при autoplay
//arrowAndprev - Показывает кнопки
//typeButton - изменяет места кнопки
//variableWidth - auto width or custom width

function SampleNextArrow(props: any) {
	const { onClick, typeButton } = props
	return (
		<div
			className={
				typeButton
					? 'slider_button_true_next'
					: 'slider_button_false_next'
			}
			onClick={onClick}>
			<NavigateNextIcon />
		</div>
	)
}

function SamplePrevArrow(props: any) {
	const { onClick, typeButton } = props
	return (
		<div
			className={
				typeButton
					? 'slider_button_true_prev'
					: 'slider_button_false_prev'
			}
			onClick={onClick}>
			<NavigateNextIcon />
		</div>
	)
}

function AppendDots(props: any) {
	return (
		<div className='container_dots'>
			{props.dots.map((item: any) => {
				return (
					<div
						onClick={item.props.children.props.onClick}
						key={item.key}
						className={
							item.props.className === 'slick-active'
								? 'dots_true'
								: 'dots_false'
						}
					/>
				)
			})}
		</div>
	)
}

export const ContainerSlider = ({
	children,
	...props
}: {
	children: React.ReactNode
	dots: boolean
	infinite: boolean
	speed: number
	slidesToShow: number
	slidesToScroll: number
	initialSlide?: number
	autoplay: boolean
	autoplaySpeed?: number
	pauseOnHover?: boolean
	arrowAndprev: boolean
	typeButton: boolean
	swipeToSlide: boolean
	variableWidth: boolean
	label?: string
}) => {
	const [screenWidth, setScreenWidth] = useState(1000)

	useEffect(() => {
		function handleResize() {
			const width =
				window.innerWidth ||
				document.documentElement.clientWidth ||
				document.body.clientWidth
			setScreenWidth(width)
		}
		window.addEventListener('resize', handleResize)
		handleResize()
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const settings = {
		dots: props.dots,
		infinite: props.infinite,
		speed: props.speed,
		slidesToShow: props.slidesToShow,
		slidesToScroll: props.slidesToScroll,
		initialSlide: props.initialSlide || 0,
		autoplay: props.autoplay,
		autoplaySpeed: props.autoplaySpeed,
		pauseOnHover: props.pauseOnHover,
		swipeToSlide: props.swipeToSlide,
		variableWidth: props.variableWidth,
		accessibility: true,
		nextArrow:
			props.arrowAndprev && !props.typeButton ? (
				screenWidth > 600 ? (
					<SampleNextArrow typeButton={props.typeButton} />
				) : undefined
			) : (
				<SampleNextArrow typeButton={props.typeButton} />
			),
		prevArrow:
			props.arrowAndprev && !props.typeButton ? (
				screenWidth > 600 ? (
					<SamplePrevArrow typeButton={props.typeButton} />
				) : undefined
			) : (
				<SamplePrevArrow typeButton={props.typeButton} />
			),
		appendDots: (dots: any) => <AppendDots dots={dots} />,
	}
	return (
		<div className='container_slider'>
			{props.typeButton && (
				<span className='header_title'>{props.label}</span>
			)}
			<Slider {...settings}>{React.Children.toArray(children)}</Slider>
		</div>
	)
}
