import './services.scss'
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from 'react-scroll-motion'

const Services = () => {
  const ZoomInScrollOut = batch(StickyIn(), ZoomIn())
  const FadeUp = batch(Fade(), Move(), Sticky())
  const Spin = (cycle) => ({
    in: {
      style: {
        transform: (p) => `rotate(${p * 360 * cycle}deg)`,
      },
    },
    out: {
      style: {
        transform: (p) => `rotate(${p * -360 * cycle}deg)`,
      },
    },
  })

  return (
    <div className="scroll-container">
      <ScrollContainer>
        <ScrollPage>
          <div className="empty">
            <span></span>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div className="scroll-1">
            <Animator
              animation={batch(
                MoveIn(400, 100),
                Sticky(),
                ZoomOut(),
                MoveOut(-600, -1000)
              )}
            >
              <span style={{ fontSize: '50px' }}>Let's take a scroll 👇</span>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div className="scroll-2">
            <Animator animation={ZoomInScrollOut}>
              <span style={{ fontSize: '60px' }}>
                Dynamic AV Programming ✨
              </span>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div className="scroll-3">
            <Animator animation={batch(Sticky(), Fade(), Spin(1))}>
              <span style={{ fontSize: '40px' }}>
                Modern User Interfaces ⛅️
              </span>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div
            className="scroll-4"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <span style={{ fontSize: '40px' }}>
              <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
              <Animator animation={MoveIn(1000, 0)}>
                Nice to meet you 🙋🏻
              </Animator>
              - Code-Distillers -
              <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
            </span>
          </div>
        </ScrollPage>
      </ScrollContainer>
    </div>
  )
}

export default Services
