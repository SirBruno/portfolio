import React from 'react'
import styles from '../styles/ImageReel.module.scss'
import { Grid } from 'react-loader-spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image"
import inspireImg1 from '../public/4c41A6Sjvog.jpg'
import inspireImg2 from '../public/4eOTdeNPBRw.jpg'
import inspireImg3 from '../public/40KHzWGMJnY.jpg'
import inspireImg4 from '../public/1427134853.jpg'
import inspireImg5 from '../public/KaM0WN8tqBI.jpg'

export default function ImageReel() {

  let inspireImgs = [inspireImg1, inspireImg2, inspireImg3, inspireImg4, inspireImg5]
  const [currImg, setCurrImg] = React.useState(inspireImg1);
  const [loaderOn, setLoaderOn] = React.useState(false);

  function handleClick() {
    setLoaderOn(true)
    inspireImgs.indexOf(currImg) == inspireImgs.length - 1
      ? setCurrImg(inspireImgs[0])
      : setCurrImg(inspireImgs[inspireImgs.indexOf(currImg) + 1])
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Image alt="decorative image" onLoadingComplete={() => setLoaderOn(false)} placeholder="blur" src={currImg} layout='fill' objectFit='cover' quality={100} />
      <div className={styles.imgLoader}>
        <Grid
          height="120"
          width="120"
          color="#000"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={loaderOn}
        />
      </div>
      <span onClick={handleClick} className={styles.inspireMe}>
        <FontAwesomeIcon icon={faChevronRight} />Inspire me</span>
    </div>
  )
}