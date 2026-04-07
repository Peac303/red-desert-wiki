'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Sidebar() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    guides: true,
    database: true,
    community: true
  })

  const toggleExpand = (key: string) => {
    setExpanded(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="w-64 bg-earth-beige/90 backdrop-blur-sm border-r border-desert-sand/30 h-screen fixed left-0 top-16 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-xl font-bold font-adventure text-rust-dark mb-6 text-center">
          Red Desert Wiki
        </h2>
        
        {/* Main Navigation */}
        <nav className="space-y-4">
          <Link 
            href="/" 
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-desert-gold/20 text-rust-dark font-medium hover:bg-desert-gold/30 transition-colors"
          >
            <span className="text-xl">🏠</span>
            <span>Home</span>
          </Link>
          
          <Link 
            href="/news" 
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-rust-dark font-medium hover:bg-desert-gold/20 transition-colors"
          >
            <span className="text-xl">📰</span>
            <span>News</span>
          </Link>
          
          {/* Guides Section */}
          <div>
            <button 
              onClick={() => toggleExpand('guides')}
              className="flex items-center justify-between w-full px-4 py-2 rounded-lg text-rust-dark font-medium hover:bg-desert-gold/20 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">📚</span>
                <span>Guides</span>
              </div>
              <span className={`transition-transform ${expanded.guides ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            
            {expanded.guides && (
              <div className="ml-8 mt-2 space-y-2">
                <Link 
                  href="/guides/class-guides" 
                  className="block px-4 py-2 rounded-lg text-ash-medium hover:bg-desert-gold/10 transition-colors"
                  title="Detailed guides for each character class, including ability builds and playstyles. [Source: Pearl Abyss]"
                >
                  Class Guides
                </Link>
                <Link 
                  href="/guides/dungeon-strategies" 
                  className="block px-4 py-2 rounded-lg text-ash-medium hover:bg-desert-gold/10 transition-colors"
                  title="Comprehensive strategies for dungeon encounters and boss fights. [Source: Pearl Abyss]"
                >
                  Dungeon Strategies
                </Link>
                <Link 
                  href="/guides/resource-maps" 
                  className="block px-4 py-2 rounded-lg text-ash-medium hover:bg-desert-gold/10 transition-colors"
                  title="Interactive maps showing resource locations and gathering points. [Source: Pearl Abyss]"
                >
                  Resource Maps
                </Link>
                <Link 
                  href="/guides/combat-guide" 
                  className="block px-4 py-2 rounded-lg text-ash-medium hover:bg-desert-gold/10 transition-colors"
                  title="Master the action combat system with combo guides and skill progression. [Source: Pearl Abyss]"
                >
                  Combat Guide
                </Link>
              </div>
            )}
          </div>
          
          {/* Database Section */}
          <div>
            <button 
              onClick={() => toggleExpand('database')}
              className="flex items-center justify-between w-full px-4 py-2 rounded-lg text-rust-dark font-medium hover:bg-desert-gold/20 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">📖</span>
                <span>Database</span>
              </div>
              <span className={`transition-transform ${expanded.database ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            
            {expanded.database && (
              <div className="ml-8 mt-2 space-y-2">
                <Link 
                  href="/database/characters" 
                  className="block px-4 py-2 rounded-lg text-ash-medium hover:bg-desert-gold/10 transition-colors"
                  title="Detailed information on all character classes, including attributes and skills. [Source: Pearl Abyss]"
                >
                  Characters
                </Link>
                <Link 
                  href="/database/weapons" 
                  className="block px-4 py-2 rounded-lg text-ash-medium hover:bg-desert-gold/10 transition-colors"
                  title="Comprehensive database of weapons, including damage formulas and stats. [Source: Pearl Abyss]"
                >
                  Weapons
                </Link>
                <Link 
                  href="/database/maps" 
                  className="block px-4 py-2 rounded-lg text-ash-medium hover:bg-desert-gold/10 transition-colors"
                  title="Interactive maps with coordinates for all locations and resource nodes. [Source: Pearl Abyss]"
                >
                  Maps
                </Link>
                <Link 
                  href="/database/items" 
                  className="block px-4 py-2 rounded-lg text-ash-medium hover:bg-desert-gold/10 transition-colors"
                  title="Complete catalog of items, including equipment and crafting materials. [Source: Pearl Abyss]"
                >
                  Items
                </Link>
              </div>
            )}
          </div>
          
          {/* Community Section */}
          <div>
            <button 
              onClick={() => toggleExpand('community')}
              className="flex items-center justify-between w-full px-4 py-2 rounded-lg text-rust-dark font-medium hover:bg-desert-gold/20 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">💬</span>
                <span>Community</span>
              </div>
              <span className={`transition-transform ${expanded.community ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            
            {expanded.community && (
              <div className="ml-8 mt-2 space-y-2">
                <Link 
                  href="/community/forums" 
                  className="block px-4 py-2 rounded-lg text-ash-medium hover:bg-desert-gold/10 transition-colors"
                  title="Official community hub for strategy discussions and player interactions. [Source: Pearl Abyss]"
                >
                  Forums
                </Link>
                <Link 
                  href="/community/leaderboards" 
                  className="block px-4 py-2 rounded-lg text-ash-medium hover:bg-desert-gold/10 transition-colors"
                  title="Compete with other players and climb the ranks in PVP and PVE. [Source: Pearl Abyss]"
                >
                  Leaderboards
                </Link>
                <Link 
                  href="/community/media" 
                  className="block px-4 py-2 rounded-lg text-ash-medium hover:bg-desert-gold/10 transition-colors"
                  title="Share screenshots, videos, and fan art with the community. [Source: Pearl Abyss]"
                >
                  Media
                </Link>
              </div>
            )}
          </div>
        </nav>
        
        {/* Footer */}
        <div className="mt-12 pt-4 border-t border-desert-sand/30">
          <p className="text-center text-ash-medium text-sm">
            © 2026 Red Desert Wiki
          </p>
          <p className="text-center text-ash-medium text-xs mt-2">
            All information based on Pearl Abyss official sources
          </p>
        </div>
      </div>
    </div>
  )
}