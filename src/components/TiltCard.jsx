
import { useRef } from 'react'

export default function TiltCard({ children }) {
  const cardRef = useRef(null)

  function handleMouseMove(event) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
    }
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateY = ((x - centerX) / centerX) * 3
    const rotateX = ((centerY - y) / centerY) * 3

    card.style.transform =
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  function handleMouseLeave() {
    if (!cardRef.current) return

    cardRef.current.style.transform =
      'perspective(1200px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div
      ref={cardRef}
      className="tilt-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
