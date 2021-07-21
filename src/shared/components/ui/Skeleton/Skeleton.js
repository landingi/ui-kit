import React from 'react'
import scss from './Skeleton.scss'

/**
 * Skeleton sidebar - stateless presentational component
 * @return {object} An object of children element
 */
export const SkeletonSidebar = () => (
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

/**
 * Skeleton drawer - stateless presentational component
 * @return {object} An object of children element
 */
export const SkeletonDrawer = () => (
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

/**
 * Skeleton table - stateless presentational component
 * @return {object} An object of children element
 */
export const SkeletonTable = () => (
  <div className={scss.tableSkeleton}>
    <div className={scss.item}>
      <div className={scss.line} />

      <div className={scss.line} />

      <div className={scss.line} />
    </div>

    <div className={scss.item}>
      <div className={scss.line} />

      <div className={scss.line} />

      <div className={scss.line} />
    </div>
  </div>
)

/**
 * Skeleton line - stateless presentational component
 * @return {object} An object of children element
 */
export const SkeletonLine = () => (
  <div className={scss.sekeleton}>
    <div className={scss.line} />
  </div>
)

/**
 * Skeleton circle - stateless presentational component
 * @return {object} An object of children element
 */
export const SkeletonCircle = () => (
  <div className={scss.sekeleton}>
    <div className={scss.circle} />
  </div>
)
