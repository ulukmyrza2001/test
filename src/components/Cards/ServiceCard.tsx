'use client'

import { styled } from 'styled-components'
import { IconButton } from '@mui/material'
import ContentLoader from 'react-content-loader'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import GradeIcon from '@mui/icons-material/Grade'

interface IServiceCard {
  width?: string
  height?: string
  borderradius?: string
  typecolor?: string
  namecolor?: string
  locationcolor?: string
  ratingcolor?: string
  isLoading: boolean
}
export const ServiceCard = (props: IServiceCard) => {
  return (
    <StyleCard {...props}>
      {props.isLoading === true ? (
        <StyleSkeleton viewBox="0 0 500 280" height={350} width={400}>
          <rect x="3" y="3" rx="10" ry="10" width="400" height="180" />
          <rect x="6" y="190" rx="0" ry="0" width="400" height="20" />
          <rect x="4" y="215" rx="0" ry="0" width="400" height="20" />
          <rect x="4" y="242" rx="0" ry="0" width="400" height="20" />
        </StyleSkeleton>
      ) : (
        <StyleInnerContain>
          <IconButton className="like">
            <FavoriteBorderIcon />
          </IconButton>
          <StyleImgContainner>
            <img
              src="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/07/29184719/Cover-20.png"
              alt="AMG"
            />
          </StyleImgContainner>
          <StyleInfo {...props}>
            <StyleNaming {...props}>
              <h4>Барбершоп</h4>
              <h3>Garage</h3>
              <p>Байтик Баатыра 84</p>
            </StyleNaming>

            <StyleStatus {...props}>
              <h3>
                <GradeIcon />
                4.7
              </h3>
              <p>1000 сом</p>
            </StyleStatus>
          </StyleInfo>
        </StyleInnerContain>
      )}
    </StyleCard>
  )
}

const StyleSkeleton = styled(ContentLoader)`
  width: 100%;
  height: 100%;
  border-radius: 6px;
`

const StyleInnerContain = styled.div`
  width: 100%;
  height: 100%;
`

const StyleCard = styled.div<IServiceCard>`
  width: ${({ width }) => width || '400px'};
  height: ${({ height }) => height || '350px'};
  border-radius: ${({ borderradius }) => borderradius || '6px'};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 6px;
  .like {
    position: absolute;
    top: 3%;
    right: 3%;
    z-index: 4;
    color: #b84141;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`
const StyleImgContainner = styled.div`
  width: 100%;
  height: 60%;
  overflow: hidden;
  border-radius: 6px;
  img {
    width: 100%;
    object-fit: fill;
    transition: 0.6s;
  }
`
const StyleInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
`
const StyleNaming = styled.div<IServiceCard>`
  h4 {
    color: ${({ typecolor }) => typecolor || 'goldenrod'};
    font-weight: 500;
  }
  h3 {
    color: ${({ namecolor }) => namecolor || 'black'};
    font-weight: 600;
  }
  p {
    color: ${({ locationcolor }) => locationcolor || 'gray'};
  }
`

const StyleStatus = styled.div<IServiceCard>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h3 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${({ ratingcolor }) => ratingcolor || 'goldenrod'};
  }
`
