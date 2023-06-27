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
  .slick-track {
    display: flex;
    gap: 10px;
  }
`
const StyledContainerNextArrow = styled.div<{ $typeButton: boolean }>`
  margin: 0 20px;
  position: absolute;
  top: ${({ $typeButton }) => ($typeButton ? '0' : '40%')};
  left: ${({ $typeButton }) => ($typeButton ? 'calc(100% - 50px)' : 'calc(100% - 15px)')};
  transform: ${({ $typeButton }) => ($typeButton ? '' : 'translateY(-50%)')};
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
  margin: ${({ $typeButton }) => ($typeButton ? '5px -20px' : '0')};
  position: ${({ $typeButton }) => ($typeButton ? 'relative' : 'absolute')};
  top: ${({ $typeButton }) => ($typeButton ? '0' : '40%')};
  left: ${({ $typeButton }) => ($typeButton ? 'calc(100% - 50px)' : '-35px')};
  transform: ${({ $typeButton }) =>
    $typeButton ? 'rotate(180deg)' : 'translateY(-50%) rotate(180deg);'};
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
  background-color: ${({ $active }) => ($active === 'slick-active' ? 'gray' : '#acacac')};
  border-radius: 20px;
  transition: 300ms;
`
