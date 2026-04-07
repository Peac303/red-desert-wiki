'use client'

import Link from 'next/link'
import Sidebar from '../../components/Sidebar'

export default function LeaderboardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-earth-beige via-desert-sand to-earth-tan">
      {/* Sidebar Navigation */}
      <Sidebar />

      <main className="pt-24 md:pl-64">
        {/* Breadcrumb */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-desert-sand/30 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="text-rust-dark hover:text-desert-gold transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-ash-medium mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <Link href="/community" className="text-rust-dark hover:text-desert-gold transition-colors">
                      Community
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-ash-medium mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-ash-medium">
                      Leaderboards
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Leaderboards Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-rust-dark mb-12 font-adventure">
              Leaderboards
            </h1>
            
            {/* Tabs */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30 mb-8">
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="bg-desert-gold text-ash-dark px-6 py-2 rounded-lg font-medium">
                  PvP Rankings
                </button>
                <button className="bg-white/80 text-ash-dark px-6 py-2 rounded-lg font-medium hover:bg-desert-gold/20 transition-colors">
                  PvE Rankings
                </button>
                <button className="bg-white/80 text-ash-dark px-6 py-2 rounded-lg font-medium hover:bg-desert-gold/20 transition-colors">
                  Crafting Rankings
                </button>
                <button className="bg-white/80 text-ash-dark px-6 py-2 rounded-lg font-medium hover:bg-desert-gold/20 transition-colors">
                  Gathering Rankings
                </button>
              </div>
              
              {/* PvP Leaderboard */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-desert-sand/30">
                      <th className="border border-desert-sand/50 px-4 py-3 text-left text-rust-dark">Rank</th>
                      <th className="border border-desert-sand/50 px-4 py-3 text-left text-rust-dark">Player</th>
                      <th className="border border-desert-sand/50 px-4 py-3 text-left text-rust-dark">Class</th>
                      <th className="border border-desert-sand/50 px-4 py-3 text-left text-rust-dark">Wins</th>
                      <th className="border border-desert-sand/50 px-4 py-3 text-left text-rust-dark">Losses</th>
                      <th className="border border-desert-sand/50 px-4 py-3 text-left text-rust-dark">Win Rate</th>
                      <th className="border border-desert-sand/50 px-4 py-3 text-left text-rust-dark">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-desert-sand/10">
                      <td className="border border-desert-sand/50 px-4 py-3 font-medium">1</td>
                      <td className="border border-desert-sand/50 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-desert-gold flex items-center justify-center text-white font-bold">
                            A
                          </div>
                          <span>AlphaWarrior</span>
                        </div>
                      </td>
                      <td className="border border-desert-sand/50 px-4 py-3">Warrior</td>
                      <td className="border border-desert-sand/50 px-4 py-3">128</td>
                      <td className="border border-desert-sand/50 px-4 py-3">12</td>
                      <td className="border border-desert-sand/50 px-4 py-3">91.4%</td>
                      <td className="border border-desert-sand/50 px-4 py-3 font-medium">2450</td>
                    </tr>
                    <tr className="hover:bg-desert-sand/10">
                      <td className="border border-desert-sand/50 px-4 py-3 font-medium">2</td>
                      <td className="border border-desert-sand/50 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-desert-amber flex items-center justify-center text-white font-bold">
                            B
                          </div>
                          <span>BlazeMage</span>
                        </div>
                      </td>
                      <td className="border border-desert-sand/50 px-4 py-3">Mage</td>
                      <td className="border border-desert-sand/50 px-4 py-3">112</td>
                      <td className="border border-desert-sand/50 px-4 py-3">18</td>
                      <td className="border border-desert-sand/50 px-4 py-3">86.2%</td>
                      <td className="border border-desert-sand/50 px-4 py-3 font-medium">2380</td>
                    </tr>
                    <tr className="hover:bg-desert-sand/10">
                      <td className="border border-desert-sand/50 px-4 py-3 font-medium">3</td>
                      <td className="border border-desert-sand/50 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-rust-light flex items-center justify-center text-white font-bold">
                            C
                          </div>
                          <span>ShadowStalker</span>
                        </div>
                      </td>
                      <td className="border border-desert-sand/50 px-4 py-3">Assassin</td>
                      <td className="border border-desert-sand/50 px-4 py-3">98</td>
                      <td className="border border-desert-sand/50 px-4 py-3">22</td>
                      <td className="border border-desert-sand/50 px-4 py-3">81.7%</td>
                      <td className="border border-desert-sand/50 px-4 py-3 font-medium">2310</td>
                    </tr>
                    <tr className="hover:bg-desert-sand/10">
                      <td className="border border-desert-sand/50 px-4 py-3">4</td>
                      <td className="border border-desert-sand/50 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-ash-light flex items-center justify-center text-ash-dark font-bold">
                            D
                          </div>
                          <span>DesertArcher</span>
                        </div>
                      </td>
                      <td className="border border-desert-sand/50 px-4 py-3">Archer</td>
                      <td className="border border-desert-sand/50 px-4 py-3">87</td>
                      <td className="border border-desert-sand/50 px-4 py-3">28</td>
                      <td className="border border-desert-sand/50 px-4 py-3">75.7%</td>
                      <td className="border border-desert-sand/50 px-4 py-3">2250</td>
                    </tr>
                    <tr className="hover:bg-desert-sand/10">
                      <td className="border border-desert-sand/50 px-4 py-3">5</td>
                      <td className="border border-desert-sand/50 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-ash-light flex items-center justify-center text-ash-dark font-bold">
                            E
                          </div>
                          <span>HolyHealer</span>
                        </div>
                      </td>
                      <td className="border border-desert-sand/50 px-4 py-3">Healer</td>
                      <td className="border border-desert-sand/50 px-4 py-3">76</td>
                      <td className="border border-desert-sand/50 px-4 py-3">32</td>
                      <td className="border border-desert-sand/50 px-4 py-3">70.4%</td>
                      <td className="border border-desert-sand/50 px-4 py-3">2180</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <div className="flex gap-2">
                  <button className="bg-white/80 text-ash-dark px-4 py-2 rounded-lg font-medium hover:bg-desert-gold/20 transition-colors">
                    Previous
                  </button>
                  <button className="bg-desert-gold text-ash-dark px-4 py-2 rounded-lg font-medium">
                    1
                  </button>
                  <button className="bg-white/80 text-ash-dark px-4 py-2 rounded-lg font-medium hover:bg-desert-gold/20 transition-colors">
                    2
                  </button>
                  <button className="bg-white/80 text-ash-dark px-4 py-2 rounded-lg font-medium hover:bg-desert-gold/20 transition-colors">
                    3
                  </button>
                  <button className="bg-white/80 text-ash-dark px-4 py-2 rounded-lg font-medium hover:bg-desert-gold/20 transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </div>
            
            {/* Season Information */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30">
              <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                Season Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-earth-beige/50 rounded-xl p-6 border border-desert-sand/30">
                  <h3 className="text-lg font-semibold text-rust-dark mb-4 font-adventure">
                    Current Season
                  </h3>
                  <p className="text-ash-medium mb-2">
                    Season 1: Desert Awakening
                  </p>
                  <p className="text-ash-medium mb-2">
                    Start Date: March 19, 2026
                  </p>
                  <p className="text-ash-medium">
                    End Date: June 19, 2026
                  </p>
                </div>
                
                <div className="bg-earth-beige/50 rounded-xl p-6 border border-desert-sand/30">
                  <h3 className="text-lg font-semibold text-rust-dark mb-4 font-adventure">
                    Season Rewards
                  </h3>
                  <p className="text-ash-medium mb-2">
                    Top 1-10: Exclusive Mount
                  </p>
                  <p className="text-ash-medium mb-2">
                    Top 11-50: Seasonal Title
                  </p>
                  <p className="text-ash-medium">
                    Top 51-100: Seasonal Weapon Skin
                  </p>
                </div>
                
                <div className="bg-earth-beige/50 rounded-xl p-6 border border-desert-sand/30">
                  <h3 className="text-lg font-semibold text-rust-dark mb-4 font-adventure">
                    Season Rules
                  </h3>
                  <p className="text-ash-medium mb-2">
                    - Rankings reset each season
                  </p>
                  <p className="text-ash-medium mb-2">
                    - Only rated matches count
                  </p>
                  <p className="text-ash-medium">
                    - Minimum 10 matches to qualify
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-starry-indigo to-starry-blue text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 font-adventure text-shadow">
              Stay Updated
            </h2>
            <p className="mb-10 opacity-90 text-lg">
              Subscribe to our newsletter for the latest news, updates, and events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-ash-dark focus:outline-none focus:ring-2 focus:ring-desert-gold"
              />
              <button className="bg-desert-gold text-ash-dark px-8 py-3 rounded-lg font-medium hover:bg-desert-amber transition-all duration-300 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}