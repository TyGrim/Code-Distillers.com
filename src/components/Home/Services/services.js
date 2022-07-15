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
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())
  const FadeUp = batch(Fade(), Move(), Sticky())
  return (
    <div className="scroll-container">
      <ScrollContainer>
        <ScrollPage>
          <div className="empty"></div>
        </ScrollPage>
        <ScrollPage>
          <div className="scroll-1">
            <Animator
              animation={batch(
                MoveIn(400, 100),
                Sticky(),
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
                {' '}
                Dynamic AV Programming ✨
              </span>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div className="scroll-3">
            <Animator animation={FadeUp}>
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
              <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div className="scroll-end">
            <Animator animation={batch(Fade(), Sticky())}>
              <span style={{ fontSize: '40px' }}>Done</span>
              <br />
              <span style={{ fontSize: '30px' }}>
                There's FadeAnimation, MoveAnimation, StickyAnimation,
                ZoomAnimation
              </span>
            </Animator>
          </div>
        </ScrollPage>
      </ScrollContainer>
    </div>
  )
}

export default Services
