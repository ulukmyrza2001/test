import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import styled from 'styled-components'

//dots - Внизу показывает на каком Slider
//infinte - Slider работает бесконечно
//speed - Скорость прокрутки Slider
//slidesToShow - На экране выходить сколько вы дали
//slidesToScroll - Количество прокрутки
//initialSlide - Первоначальное slider
//autoplay - Авто Slider
//autoplaySpeed - Скорость авто Slider
//pauseOnHover - Остоновит через Hover Slider работает при autoplay
//arrowAndprev - Показывает кнопки
//typeButton - изменяет места кнопки

function SampleNextArrow(props: any) {
  const { onClick, typeButton } = props
  return (
    <StyledContainerNextArrow onClick={onClick} $typeButton={typeButton}>
      <NavigateNextIcon />
    </StyledContainerNextArrow>
  )
}

function SamplePrevArrow(props: any) {
  const { onClick, typeButton } = props
  return (
    <StyledContainerPrevArrow onClick={onClick} $typeButton={typeButton}>
      <NavigateNextIcon />
    </StyledContainerPrevArrow>
  )
}

function AppendDots(props: any) {
  return (
    <StyledContainerDots>
      {props.dots.map((item: any) => {
        return (
          <StyledContainerAppendDots
            onClick={item.props.children.props.onClick}
            key={item.key}
            $active={item.props.className}
          />
        )
      })}
    </StyledContainerDots>
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
}) => {
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
    nextArrow: props.arrowAndprev && <SampleNextArrow typeButton={props.typeButton} />,
    prevArrow: props.arrowAndprev && <SamplePrevArrow typeButton={props.typeButton} />,
    appendDots: (dots: any) => <AppendDots dots={dots} />
  }
  return (
    <StyledContainerSlider>
      <Slider {...settings}>{React.Children.toArray(children)}</Slider>
    </StyledContainerSlider>
  )
}

const StyledContainerSlider = styled.div`
  width: 100%;
`
const StyledContainerNextArrow = styled.div<{ $typeButton: boolean }>`
  margin: 0 20px;
  position: absolute;
  top: ${({ $typeButton }) => ($typeButton ? '0' : '')};
  left: calc(100% - 50px);
  width: 28px;
  height: 28px;
  border: 1px solid #acacac;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
  &:hover {
    border: 1.5px solid #acacac;
    box-shadow: 0px 0px 4px 1px #acacac;
  }
`
const StyledContainerPrevArrow = styled.div<{ $typeButton: boolean }>`
  margin: 0 -20px;
  position: relative;
  top: ${({ $typeButton }) => ($typeButton ? '0' : '')};
  left: ${({ $typeButton }) => ($typeButton ? 'calc(100% - 50px)' : '-10px')};
  margin-bottom: 5px;
  width: 28px;
  height: 28px;
  border: 1px solid #acacac;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: rotate(180deg);
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
  &:hover {
    border: 1.5px solid #acacac;
    box-shadow: 0px 0px 4px 1px #acacac;
  }
`
const StyledContainerDots = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
`
const StyledContainerAppendDots = styled.div<{ $active: string }>`
  width: 6px;
  height: ${({ $active }) => ($active === 'slick-active' ? '26px' : '16px')};
  background-color: ${({ $active }) => ($active === 'slick-active' ? '#3A10E5' : '#3A10E533')};
  border-radius: 20px;
  transition: 300ms;
`
