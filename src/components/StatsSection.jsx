import React from 'react'
import { useLanguage } from '../hooks/useLanguage'
import statsData from '../data/stats'

const StatsSection = () => {
  const { t } = useLanguage()

  return (
    <div className="glass-premium rounded-3xl p-8 my-12">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
        {statsData.map((stat, idx) => (
          <div key={idx} className="space-y-2">
            <div className="text-3xl font-orbitron font-bold bg-gradient-to-r from-neon-cyan to-neon-violet bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-text-muted text-sm">{t(stat.label)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsSection
