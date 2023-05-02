import { BaseComponentTypes } from '@/types'
import React from 'react'

export default function Layout({children, className}: BaseComponentTypes) {
  return (
    <div className={`w-full h-full inline-block z-0 dark:bg-dark bg-light p-32 ${className}`}>
        {children}
    </div>
  )
}
