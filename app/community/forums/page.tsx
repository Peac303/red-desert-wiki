'use client'

import Link from 'next/link'
import Sidebar from '../../components/Sidebar'

export default function ForumsPage() {
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
                      Forums
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Forums Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-rust-dark mb-12 font-adventure">
              Community Forums
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Forum Categories */}
              <div className="lg:col-span-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30 mb-8">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    Forum Categories
                  </h2>
                  
                  {/* General Discussion */}
                  <div className="border-b border-desert-sand/30 pb-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-rust-dark font-adventure">
                        General Discussion
                      </h3>
                      <span className="bg-desert-gold/20 text-desert-gold px-3 py-1 rounded-full text-xs font-medium">
                        128 topics
                      </span>
                    </div>
                    <p className="text-ash-medium mb-4">
                      Discuss general topics about Red Desert, share your experiences, and connect with other players. [Source: Pearl Abyss]
                    </p>
                    <Link 
                      href="/community/forums/general-discussion" 
                      className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                    >
                      View Topics <span>→</span>
                    </Link>
                  </div>
                  
                  {/* Strategy & Guides */}
                  <div className="border-b border-desert-sand/30 pb-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-rust-dark font-adventure">
                        Strategy & Guides
                      </h3>
                      <span className="bg-desert-gold/20 text-desert-gold px-3 py-1 rounded-full text-xs font-medium">
                        86 topics
                      </span>
                    </div>
                    <p className="text-ash-medium mb-4">
                      Share and discuss strategies, builds, and guides for Red Desert. [Source: Pearl Abyss]
                    </p>
                    <Link 
                      href="/community/forums/strategy-tips" 
                      className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                    >
                      View Topics <span>→</span>
                    </Link>
                  </div>
                  
                  {/* Guild Recruitment */}
                  <div className="border-b border-desert-sand/30 pb-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-rust-dark font-adventure">
                        Guild Recruitment
                      </h3>
                      <span className="bg-desert-gold/20 text-desert-gold px-3 py-1 rounded-full text-xs font-medium">
                        42 topics
                      </span>
                    </div>
                    <p className="text-ash-medium mb-4">
                      Recruit members for your guild or find a guild to join. [Source: Pearl Abyss]
                    </p>
                    <Link 
                      href="/community/forums/guild-recruitment" 
                      className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                    >
                      View Topics <span>→</span>
                    </Link>
                  </div>
                  
                  {/* Trading & Economy */}
                  <div className="border-b border-desert-sand/30 pb-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-rust-dark font-adventure">
                        Trading & Economy
                      </h3>
                      <span className="bg-desert-gold/20 text-desert-gold px-3 py-1 rounded-full text-xs font-medium">
                        57 topics
                      </span>
                    </div>
                    <p className="text-ash-medium mb-4">
                      Discuss trading, market trends, and economic strategies in Red Desert. [Source: Pearl Abyss]
                    </p>
                    <Link 
                      href="/community/forums/trading-economy" 
                      className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                    >
                      View Topics <span>→</span>
                    </Link>
                  </div>
                  
                  {/* Feedback & Suggestions */}
                  <div className="border-b border-desert-sand/30 pb-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-rust-dark font-adventure">
                        Feedback & Suggestions
                      </h3>
                      <span className="bg-desert-gold/20 text-desert-gold px-3 py-1 rounded-full text-xs font-medium">
                        34 topics
                      </span>
                    </div>
                    <p className="text-ash-medium mb-4">
                      Share your feedback and suggestions to help improve Red Desert. [Source: Pearl Abyss]
                    </p>
                    <Link 
                      href="/community/forums/feedback-suggestions" 
                      className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                    >
                      View Topics <span>→</span>
                    </Link>
                  </div>
                  
                  {/* Technical Support */}
                  <div className="pb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-rust-dark font-adventure">
                        Technical Support
                      </h3>
                      <span className="bg-desert-gold/20 text-desert-gold px-3 py-1 rounded-full text-xs font-medium">
                        49 topics
                      </span>
                    </div>
                    <p className="text-ash-medium mb-4">
                      Get help with technical issues and bugs in Red Desert. [Source: Pearl Abyss]
                    </p>
                    <Link 
                      href="/community/forums/technical-support" 
                      className="text-desert-gold font-medium hover:text-desert-amber transition-colors flex items-center gap-1"
                    >
                      View Topics <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Forum Stats */}
              <div className="lg:col-span-1">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30 mb-8">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    Forum Stats
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Total Members</span>
                      <span className="font-semibold text-rust-dark">12,458</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Total Topics</span>
                      <span className="font-semibold text-rust-dark">313</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Total Posts</span>
                      <span className="font-semibold text-rust-dark">1,876</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Online Now</span>
                      <span className="font-semibold text-rust-dark">247</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ash-medium">Newest Member</span>
                      <span className="font-semibold text-rust-dark">DesertWalker</span>
                    </div>
                  </div>
                </div>
                
                {/* Recent Activity */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-desert-sand/30">
                  <h2 className="text-2xl font-bold text-rust-dark mb-6 font-adventure">
                    Recent Activity
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-desert-gold pl-4 py-2">
                      <p className="text-ash-dark font-medium">New topic: Best PvP Builds for Warrior</p>
                      <p className="text-ash-medium text-sm">by DesertWarrior • 2 hours ago</p>
                    </div>
                    <div className="border-l-4 border-desert-gold pl-4 py-2">
                      <p className="text-ash-dark font-medium">New topic: Guild Recruitment - The Desert Foxes</p>
                      <p className="text-ash-medium text-sm">by FoxLeader • 4 hours ago</p>
                    </div>
                    <div className="border-l-4 border-desert-gold pl-4 py-2">
                      <p className="text-ash-dark font-medium">New post: Resource Farming Guide</p>
                      <p className="text-ash-medium text-sm">by ResourceHunter • 6 hours ago</p>
                    </div>
                    <div className="border-l-4 border-desert-gold pl-4 py-2">
                      <p className="text-ash-dark font-medium">New topic: Launch Day Expectations</p>
                      <p className="text-ash-medium text-sm">by ExcitedPlayer • 8 hours ago</p>
                    </div>
                  </div>
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