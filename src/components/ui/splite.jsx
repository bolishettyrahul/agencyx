'use client'

import { Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

/**
 * SplineScene — lazy-loads a Spline 3-D scene with a minimal spinner fallback.
 * @param {string}  scene     - Spline scene URL (.splinecode)
 * @param {string} [className]
 */
export function SplineScene({ scene, className }) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="spline-loader" />
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  )
}
