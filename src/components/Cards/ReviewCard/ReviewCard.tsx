'use client'

import React from 'react'
import GradeIcon from '@mui/icons-material/Grade'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import ContentLoader from 'react-content-loader'
import style from './ReviewCard.module.css'

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
        <div className={style.wrapper}>
          <div className={style.topside}>
            <div className={style.avatar}>
              <img
                className={style.img}
                src="https://img.freepik.com/free-icon/user_318-644325.jpg"
                alt="avatar"
              />
            </div>
            <h4 className={style.name}>Name</h4>
            <h5 className={style.specialist}>Specialist</h5>
          </div>
          <div className={style.mainside}>
            <span className={style.review}>
              Оценка: 4.7
              <GradeIcon sx={{ width: '20px', height: '20px', color: 'goldenrod' }} />
            </span>
          </div>
          <div className={style.downside}>
            <p className={style.comment}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta obcaecati eaque minus
              temporibus in voluptatibus cum quaerat sed unde! Blanditiis, consectetur accusamus
              molestiae quaerat explicabo corrupti id itaque impedit odio?
            </p>
            <span className={style.date}>
              Геннера
              <FiberManualRecordIcon sx={{ width: '10px', height: '10px' }} /> 2 часа назад, в 12:30
            </span>
          </div>
        </div>
      )}
    </>
  )
}
