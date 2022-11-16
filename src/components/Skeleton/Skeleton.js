import React from 'react'

import styles from './Skeleton.module.scss'

/**
 * Skeleton sidebar - stateless presentational component
 * @return {object} An object of children element
 */
export function SkeletonSidebar() {
  return (
    <div data-testid='skeleton-sidebar' className={styles.sidebarSkeleton}>
      <div className={styles.item}>
        <div className={styles.circle} />

        <div className={styles.line} />
      </div>

      <div className={styles.item}>
        <div className={styles.circle} />

        <div className={styles.line} />
      </div>

      <div className={styles.item}>
        <div className={styles.circle} />

        <div className={styles.line} />
      </div>

      <div className={styles.item}>
        <div className={styles.circle} />

        <div className={styles.line} />
      </div>

      <div className={styles.item}>
        <div className={styles.circle} />

        <div className={styles.line} />
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
    <div data-testid='skeleton-drawer' className={styles.drawerSkeleton}>
      <div className={styles.item}>
        <div>
          <div className={styles.circle} />
        </div>

        <div className={styles.line} />

        <div className={styles.line} />
      </div>

      <div className={styles.item}>
        <div>
          <div className={styles.circle} />
        </div>

        <div className={styles.line} />

        <div className={styles.line} />
      </div>

      <div className={styles.item}>
        <div>
          <div className={styles.circle} />
        </div>

        <div className={styles.line} />

        <div className={styles.line} />
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
    <div data-testid='skeleton-line' className={styles.skeleton}>
      <div className={styles.line} />
    </div>
  )
}

/**
 * Skeleton circle - stateless presentational component
 * @return {object} An object of children element
 */
export function SkeletonCircle() {
  return (
    <div data-testid='skeleton-circle' className={styles.skeleton}>
      <div className={styles.circle} />
    </div>
  )
}
