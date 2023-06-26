'use client'

import React from 'react'
import { styled } from 'styled-components'
import GradeIcon from '@mui/icons-material/Grade'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import ContentLoader from 'react-content-loader'

interface IreviewCard {
  isloading: boolean
}

export const ReviewCard = (props: IreviewCard) => {
  return (
    <>
      {props.isloading === true ? (
        <ContentLoader
          speed={2}
          width={400}
          height={460}
          viewBox="0 0 400 460"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          {...props}
        >
          <circle cx="161" cy="46" r="26" />
          <rect x="98" y="85" rx="2" ry="2" width="136" height="20" />
          <rect x="67" y="118" rx="2" ry="2" width="196" height="14" />
          <rect x="12" y="157" rx="0" ry="0" width="135" height="11" />
          <rect x="10" y="184" rx="0" ry="0" width="331" height="132" />
          <rect x="11" y="330" rx="0" ry="0" width="222" height="11" />
        </ContentLoader>
      ) : (
        <StyleWrapper>
          <StyleTopSide>
            <div className="avatar">
              <img src="https://img.freepik.com/free-icon/user_318-644325.jpg" alt="avatar" />
            </div>
            <h4>Name</h4>
            <h5>Specialist</h5>
          </StyleTopSide>
          <StyleMainSide>
            <div>
              <span>
                Оценка: 4.7
                <GradeIcon sx={{ width: '20px', height: '20px', color: 'goldenrod' }} />
              </span>
            </div>
          </StyleMainSide>
          <StyleDownSide>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta obcaecati eaque minus
              temporibus in voluptatibus cum quaerat sed unde! Blanditiis, consectetur accusamus
              molestiae quaerat explicabo corrupti id itaque impedit odio?
            </p>
            <span>
              Геннера
              <FiberManualRecordIcon sx={{ width: '10px', height: '10px' }} /> 2 часа назад, в 12:30
            </span>
          </StyleDownSide>
        </StyleWrapper>
      )}
    </>
  )
}

const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 350px;
  border: 1px solid silver;
  border-radius: 8px;
  padding: 25px 20px;
  gap: 20px;
`
const StyleTopSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  h4 {
    font-size: 16px;
    font-weight: 500;
  }
  h5 {
    font-size: 12px;
    font-weight: 400;
    color: #c6c3bc;
  }
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
`

const StyleMainSide = styled.div`
  width: 100%;
  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 15px;
    color: #191818;
  }
`

const StyleDownSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  p {
    font-size: 15px;
    font-weight: 400;
    overflow: hidden;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    font-size: 13px;
    color: gray;
  }
`
