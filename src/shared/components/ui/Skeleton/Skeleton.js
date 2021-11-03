import React from 'react'
import scss from './Skeleton.scss'

/**
 * Skeleton sidebar - stateless presentational component
 * @return {object} An object of children element
 */
export function SkeletonSidebar() {
  return (
    <div className={scss.sidebarSkeleton}>
      <div className={scss.item}>
        <div className={scss.circle} />

        <div className={scss.line} />
      </div>

      <div className={scss.item}>
        <div className={scss.circle} />

        <div className={scss.line} />
      </div>

      <div className={scss.item}>
        <div className={scss.circle} />

        <div className={scss.line} />
      </div>

      <div className={scss.item}>
        <div className={scss.circle} />

        <div className={scss.line} />
      </div>

      <div className={scss.item}>
        <div className={scss.circle} />

        <div className={scss.line} />
      </div>
    </div>
  )
}

/**
 * Skeleton drawer - stateless presentational component
 * @return {object} An object of children element
 */
export function SkeletonDrawer() {
  return (
    <div className={scss.drawerSkeleton}>
      <div className={scss.item}>
        <div>
          <div className={scss.circle} />
        </div>

        <div className={scss.line} />

        <div className={scss.line} />
      </div>

      <div className={scss.item}>
        <div>
          <div className={scss.circle} />
        </div>

        <div className={scss.line} />

        <div className={scss.line} />
      </div>

      <div className={scss.item}>
        <div>
          <div className={scss.circle} />
        </div>

        <div className={scss.line} />

        <div className={scss.line} />
      </div>
    </div>
  )
}

/**
 * Skeleton line - stateless presentational component
 * @return {object} An object of children element
 */
export function SkeletonLine() {
  return (
    <div className={scss.sekeleton}>
      <div className={scss.line} />
    </div>
  )
}

/**
 * Skeleton circle - stateless presentational component
 * @return {object} An object of children element
 */
export function SkeletonCircle() {
  return (
    <div className={scss.sekeleton}>
      <div className={scss.circle} />
    </div>
  )
}
