import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoCD from '../../../assets/Logo-Code-Distillers/LogoOnly.png'
import './main.logo.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoCD}
        alt="Code-Distillers Logo"
      />

      <svg
        width="400pt"
        height="376.53pt"
        version="1.0"
        viewBox="0 0 400 376.53"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="svg-container" fill="none">
          <path
            ref={outlineLogoRef}
            d="M275.27,115.35v-3.69c0-15.75.08-31.5-.12-47.25a6,6,0,0,0-2.8-4.39,155.64,155.64,0,0,0-49.58-22.4,204,204,0,0,0-31.53-5.75,157.83,157.83,0,0,0-39.54.94C144.45,34,144,33.85,144,38q0,118.79,0,237.55c0,1.13.2,2.25.31,3.48h61.3V96.2c2.95.52,5.33.61,7,1.29,11,4.57,21.58,9.36,30,15.6,15,11.14,25.66,23.53,32.79,36.92,16.81,31.53,18.05,63.4,4.41,95.34-8.44,19.76-22.33,38.1-48.24,52.68-3.53,2-4.79,4.08-4.76,6.88.19,18.7.1,37.39.1,56.08v4.46c4.63-1.44,8.69-2.46,12.28-3.87a181.87,181.87,0,0,0,40.33-21.82A169.56,169.56,0,0,0,319.08,300c16.94-23.84,26.37-48.73,29.77-74.35,4.72-35.58-.54-70.6-19.43-104.77-3.06-5.54-2.92-5.56-13-5.56Zm-156.7-75c-8.6,3.64-16.67,6.44-23.43,10C80.61,58.1,67.8,66.78,57.22,76.45a170.75,170.75,0,0,0-38.5,50.61c-14.85,30-20,60.67-16.84,91.82a165.32,165.32,0,0,0,27.43,76.61A166.12,166.12,0,0,0,88.06,350a195.91,195.91,0,0,0,25.36,11.92c10.07,3.89,20.76,7.33,33.1,8.62,8.75.92,17.32,2.5,26.12,3.19s17-1.15,25.48-2c7.48-.73,7.46-2.84,7.44-6-.11-17.64-.05-35.28-.05-52.92v-4.05c-4.15,1.05-7.24,2.23-10.61,2.61-27.3,3.06-51.66-.22-72.21-11.38-17.41-9.46-29.83-20.87-39-33.45a107.74,107.74,0,0,1-21-60A106.2,106.2,0,0,1,72.57,157c8.22-18,21.78-34.42,42.94-48.67a6.15,6.15,0,0,0,2.92-4.3c.31-6.71.14-13.43.14-20.15ZM393.68,63.21V1H330.76V57.38H292.4v46.73h47.82V63.21ZM270.08,4.05c0,11.56,0,22.77,0,34,0,1.83,1.49,2.27,4.42,2.24,8.59-.08,17.19-.2,25.76,0,5.27.15,7-.78,6.92-3.85-.29-9.75-.1-19.51-.11-29.26,0-1-.15-2-.24-3.14Z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
