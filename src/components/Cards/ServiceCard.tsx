'use client'

import { styled } from 'styled-components'
import { IconButton } from '@mui/material'
import ContentLoader from 'react-content-loader'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import GradeIcon from '@mui/icons-material/Grade'

interface IServiceCard {
  width?: string
  height?: string
  borderradius?: string
  typecolor?: string
  namecolor?: string
  locationcolor?: string
  ratingcolor?: string
  isloading?: boolean
}
export const ServiceCard = (props: IServiceCard) => {
  const { isloading, ...restProps } = props
  return (
    <StyleCard {...restProps}>
      {isloading === true ? (
        <StyleSkeleton viewBox="0 0 500 280" height={350} width={400}>
          <rect x="3" y="3" rx="10" ry="10" width="400" height="180" />
          <rect x="6" y="190" rx="0" ry="0" width="400" height="20" />
          <rect x="4" y="215" rx="0" ry="0" width="400" height="20" />
          <rect x="4" y="242" rx="0" ry="0" width="400" height="20" />
        </StyleSkeleton>
      ) : (
        <StyleInnerContain>
          <IconButton className="like">
            <BookmarkIcon />
          </IconButton>
          <StyleImgContainner>
            <img
              src="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/07/29184719/Cover-20.png"
              alt="AMG"
            />
          </StyleImgContainner>
          <StyleInfo {...restProps}>
            <StyleNaming {...restProps}>
              <h4>Барбершоп</h4>
              <h3>Garage</h3>
              <p>Байтик Баатыра 84</p>
            </StyleNaming>

            <StyleStatus {...restProps}>
              <h3>
                <GradeIcon className="Icon" sx={{ color: 'goldenrod' }} />
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
  border-radius: 12px;
`

const StyleInnerContain = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`

const StyleCard = styled.div<IServiceCard>`
  width: ${({ width }) => width || '400px'};
  height: ${({ height }) => height || '270px'};
  border-radius: ${({ borderradius }) => borderradius || '6px'};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  transition: 0.6s;
  padding: 12px;
  .like {
    position: absolute;
    top: 5%;
    right: 5%;
    z-index: 4;
    color: #33a011;
    background-color: whitesmoke;

    backdrop-filter: blur(20px);
    width: 30px;
    height: 30px;
    border-radius: 4px;
  }
  .like:hover {
    box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.1);
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.1);
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
    color: ${({ typecolor }) => typecolor || '#33a011'};
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
    color: ${({ ratingcolor }) => ratingcolor || 'black'};
    & .icon {
      color: goldenrod;
    }
  }
`
