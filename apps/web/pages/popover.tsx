import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Popover } from '@reactour/popover'
import { Mask } from '@reactour/mask'
import { useRect, useIntersectionObserver } from '@reactour/utils'
import { CSSObject } from '@emotion/react'
import { useMousePosition } from '../hooks'

export default function Docs() {
  return (
    <div>
      <StaticPopover />
      <hr />
      <CenterPopover />
      <hr />
      <DynamicPopoverPosition />
      <hr />
      <AttachingDOMElem />
      <hr />
      <MultiplePopovers />
      <hr />
      <CustomPopoverStyles />
      <hr />
      <CombinedWithMask />
    </div>
  )
}

const initialSizes = {
  width: 100,
  height: 100,
  top: 100,
  left: 0,
  right: 0,
  bottom: 0,
  x: 0,
  y: 0,
}

function StaticPopover() {
  const [isOpen, setIsOpen] = useState(false)
  const sizes = initialSizes
  return (
    <>
      <button onClick={() => setIsOpen((o) => !o)}>
        {isOpen ? 'Hide' : 'Show'} Popover
      </button>
      {isOpen ? (
        <Popover sizes={sizes}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            volutpat quam eu mauris euismod imperdiet.
          </p>
          <button onClick={() => setIsOpen(false)}>Hide me</button>
        </Popover>
      ) : null}
    </>
  )
}

function CenterPopover() {
  const [isOpen, setIsOpen] = useState(false)
  const sizes = {
    ...initialSizes,
    width: 0,
    height: 0,
  }
  return (
    <>
      <button onClick={() => setIsOpen((o) => !o)}>
        {isOpen ? 'Hide' : 'Show'} Popover
      </button>
      {isOpen ? (
        <Popover sizes={sizes} position="center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            volutpat quam eu mauris euismod imperdiet.
          </p>
          <button onClick={() => setIsOpen(false)}>Hide me</button>
        </Popover>
      ) : null}
    </>
  )
}

function DynamicPopoverPosition() {
  const [isOpen, setIsOpen] = useState(false)
  const { x, y } = useMousePosition()
  return (
    <>
      <button onClick={() => setIsOpen((o) => !o)}>
        {isOpen ? 'Hide' : 'Show'} Popover
      </button>
      {isOpen ? (
        <Popover
          sizes={{
            ...initialSizes,
            top: y,
            bottom: y,
            left: x,
            right: x,
          }}
          position="right"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            volutpat quam eu mauris euismod imperdiet.
          </p>
        </Popover>
      ) : null}
    </>
  )
}

function AttachingDOMElem() {
  const [isOpen, setIsOpen] = useState(false)
  const [updater, setUpdater] = useState<number[]>([])
  const ref = useRef(null)
  const sizes = useRect(ref, updater)

  useEffect(() => {
    const udt = () => setUpdater([])
    window.addEventListener('scroll', udt)
    return () => window.removeEventListener('scroll', udt)
  }, [])

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris ante.
        Fusce at ante nunc. Maecenas ut leo eu erat porta fermentum.
      </p>
      <motion.div
        ref={ref}
        drag
        onDragEnd={(event, info) => setUpdater([info.point.x, info.point.y])}
        style={{
          width: 230,
          height: 230,
          border: '2px solid #5ae',
          background: 'white',
          padding: 10,
          borderRadius: 10,
          textAlign: 'center',
          fontSize: '.7em',
        }}
      >
        Element followed by a Popover. Drag me!
        <hr style={{ border: 0, borderBottom: '1px solid rgba(0,0,0,.3)' }} />
        <button onClick={() => setIsOpen((o) => !o)}>
          {isOpen ? 'Hide' : 'Show'} Popover
        </button>
      </motion.div>
      {isOpen ? (
        <Popover sizes={sizes} position="right">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            volutpat quam eu mauris euismod imperdiet.
          </p>
        </Popover>
      ) : null}
    </>
  )
}

function MultiplePopovers() {
  const [isOpen, setIsOpen] = useState(false)
  const [updater, setUpdater] = useState<number[]>([])
  const ref = useRef(null)
  const sizes = useRect(ref, updater)

  useEffect(() => {
    const udt = () => setUpdater([])
    window.addEventListener('scroll', udt)
    return () => window.removeEventListener('scroll', udt)
  }, [])

  return (
    <>
      <button
        onClick={() => setIsOpen((o) => !o)}
        style={{ marginBottom: '1em' }}
      >
        {isOpen ? 'Hide' : 'Show'} Popovers
      </button>{' '}
      <br />
      <div style={{ margin: '0 auto', width: 100 }} ref={ref}>
        Lorem ipsum dolor sit amet.
      </div>
      {isOpen ? (
        <>
          <Popover sizes={sizes} position="top">
            Lorem
          </Popover>
          <Popover sizes={sizes} position="left">
            ipsum
          </Popover>
          <Popover sizes={sizes} position="bottom">
            dolor
          </Popover>
          <Popover sizes={sizes} position="right">
            <button onClick={() => setIsOpen(false)}>Hide Popovers</button>
          </Popover>
        </>
      ) : null}
    </>
  )
}

const opositeSide = {
  top: 'bottom',
  bottom: 'top',
  right: 'left',
  left: 'right',
}

function doArrow(
  position: 'top' | 'right' | 'bottom' | 'left' | 'custom',
  verticalAlign: 'top' | 'bottom',
  horizontalAlign: 'left' | 'right'
): CSSObject {
  if (!position || position === 'custom') {
    return {}
  }

  const width = 16
  const height = 12
  const color = 'white'
  const isVertical = position === 'top' || position === 'bottom'
  const spaceFromSide = 10

  const obj = {
    [`--rtp-arrow-${
      isVertical ? opositeSide[horizontalAlign] : verticalAlign
    }`]: height + spaceFromSide + 'px',
    [`--rtp-arrow-${opositeSide[position]}`]: -height + 2 + 'px',
    [`--rtp-arrow-border-${isVertical ? 'left' : 'top'}`]: `${
      width / 2
    }px solid transparent`,
    [`--rtp-arrow-border-${isVertical ? 'right' : 'bottom'}`]: `${
      width / 2
    }px solid transparent`,
    [`--rtp-arrow-border-${position}`]: `${height}px solid ${color}`,
  }
  return obj
}

function CustomPopoverStyles() {
  const [isOpen, setIsOpen] = useState(false)
  const [updater, setUpdater] = useState<number[]>([])
  const ref = useRef(null)
  const sizes = useRect(ref, updater)

  useEffect(() => {
    const udt = () => setUpdater([])
    window.addEventListener('scroll', udt)
    return () => window.removeEventListener('scroll', udt)
  }, [])

  const styles = {
    popover: (base: any, state: any) => {
      return {
        ...base,
        borderRadius: 10,
        ...doArrow(state.position, state.verticalAlign, state.horizontalAlign),
      }
    },
  }

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris ante.
        Fusce at ante nunc. Maecenas ut leo eu erat porta fermentum.
      </p>
      <motion.div
        ref={ref}
        drag
        onDragEnd={(event, info) => setUpdater([info.point.x, info.point.y])}
        style={{
          width: 250,
          height: 'auto',
          border: '2px solid #5ae',
          background: 'white',
          padding: 10,
          borderRadius: 10,
          textAlign: 'center',
          fontSize: '.7em',
        }}
      >
        Element followed by a Popover. Drag me!
        <hr style={{ border: 0, borderBottom: '1px solid rgba(0,0,0,.3)' }} />
        <button onClick={() => setIsOpen((o) => !o)}>
          {isOpen ? 'Hide' : 'Show'} Popover
        </button>
      </motion.div>
      {isOpen ? (
        <Popover sizes={sizes} styles={styles}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            volutpat quam eu mauris euismod imperdiet.
          </p>
        </Popover>
      ) : null}
    </>
  )
}

function CombinedWithMask() {
  const [isOpen, setIsOpen] = useState(false)
  const [updater, setUpdater] = useState<number[]>([])
  const ref = useRef(null)
  const sizes = useRect(ref, updater)

  useEffect(() => {
    const udt = () => setUpdater([])
    window.addEventListener('scroll', udt)
    return () => window.removeEventListener('scroll', udt)
  }, [])

  const wrapperRef = useRef(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = entry && !!entry.isIntersecting

  return (
    <div ref={wrapperRef}>
      <button onClick={() => setIsOpen((o) => !o)}>
        {isOpen ? 'Hide' : 'Show'} Popover
      </button>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        volutpat quam eu mauris euismod imperdiet. Nullam elementum fermentum
        neque a placerat. Vivamus sed dui nisi. Phasellus vel dolor interdum,
        accumsan eros ut, rutrum dolor. Etiam in leo urna. Vestibulum maximus
        vitae urna at congue. Vivamus lectus nisi, pellentesque at orci a,
        tempor lobortis orci.{' '}
        <span ref={ref} style={{ color: '#5ae' }}>
          Praesent non lorem erat.
        </span>{' '}
        Ut augue massa, aliquam in bibendum sed, euismod vitae magna. Nulla sit
        amet sodales augue. Curabitur in nulla in magna luctus porta et sit amet
        dolor. Pellentesque a magna enim. Pellentesque malesuada egestas urna,
        et pulvinar lorem viverra suscipit. Duis sit amet mauris ante. Fusce at
        ante nunc. Maecenas ut leo eu erat porta fermentum.
      </p>
      <AnimatePresence>
        {isOpen && isVisible ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'relative', zIndex: 99999 }}
          >
            <Mask
              sizes={sizes}
              styles={{ maskWrapper: (base) => ({ ...base, zIndex: 99999 }) }}
              onClick={() => {
                setIsOpen(false)
              }}
            />
            <Popover sizes={sizes}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                volutpat quam eu mauris euismod imperdiet.
              </p>
            </Popover>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
