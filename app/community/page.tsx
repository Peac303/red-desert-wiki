import Link from 'next/link'
import { Metadata } from 'next'
import Sidebar from '../components/Sidebar'

// Mock community data
const forumCategories = [
  { id: 'general-discussion', name: 'General Discussion', posts: 1250, icon: '💬' },
  { id: 'strategy-tips', name: 'Strategy & Tips', posts: 875, icon: '🎯' },
  { id: 'trading-economy', name: 'Trading & Economy', posts: 620, icon: '💰' },
  { id: 'guild-recruitment', name: 'Guild Recruitment', posts: 430, icon: '🏛️' },
  { id: 'feedback-suggestions', name: 'Feedback & Suggestions', posts: 310, icon: '📝' },
  { id: 'technical-support', name: 'Technical Support', posts: 280, icon: '🛠️' }
]

const leaderboardData = [
  { rank: 1, name: 'AlphaSlayer', level: 75, wins: 128, losses: 12, winRate: '91%', score: 3240 },
  { rank: 2, name: 'DesertQueen', level: 72, wins: 112, losses: 18, winRate: '86%', score: 2980 },
  { rank: 3, name: 'SandStorm', level: 70, wins: 95, losses: 25, winRate: '79%', score: 2750 },
  { rank: 4, name: 'OasisGuardian', level: 68, wins: 88, losses: 32, winRate: '73%', score: 2520 },
  { rank: 5, name: 'RuinsExplorer', level: 65, wins: 75, losses: 40, winRate: '65%', score: 2280 }
]

const communityMedia = [
  { id: 1, title: 'Red Desert Cinematic Trailer', type: 'Video', author: 'Official', views: '1.2M' },
  { id: 2, title: 'Mount Collection Showcase', type: 'Image', author: 'Player123', views: '45K' },
  { id: 3, title: 'PVP Tournament Highlights', type: 'Video', author: 'RedDesertTV', views: '87K' },
  { id: 4, title: 'Desert Oasis Screenshot', type: 'Image', author: 'ExplorerX', views: '23K' }
]

export const metadata: Metadata = {
  title: 'Community - Red Desert Wiki',
  description: 'Join the Red Desert community forums and leaderboards',
}

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-earth-beige via-desert-sand to-earth-tan">
      {/* Sidebar Navigation */}
      <Sidebar />

      <main className="pt-24 md:pl-64">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-starry-indigo to-starry-blue text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-adventure">
              Community
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl">
              Join the Red Desert community, participate in forums, compete on leaderboards, and share your experiences.
            </p>
          </div>
        </section>

        {/* Tabs Navigation */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-desert-sand/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              <button className="py-4 px-1 border-b-2 border-desert-gold text-desert-gold font-medium">
                Forums
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent text-ash-medium hover:text-rust-dark hover:border-desert-sand/30 transition-colors">
                Leaderboards
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent text-ash-medium hover:text-rust-dark hover:border-desert-sand/30 transition-colors">
                Media
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent text-ash-medium hover:text-rust-dark hover:border-desert-sand/30 transition-colors">
                Events
              </button>
            </div>
          </div>
        </div>

        {/* Forums Section */}
        <section className="py-12 bg-white/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-rust-dark font-adventure">
                Forums
              </h2>
              <button className="bg-desert-gold text-ash-dark px-4 py-2 rounded-lg font-medium hover:bg-desert-amber transition-colors shadow-md hover:shadow-lg">
                Create New Post
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {forumCategories.map((category) => (
                <Link 
                  key={category.id} 
                  href={`/community/forums/${category.id}`} 
                  className="group block"
                >
                  <div className="bg-earth-beige/50 rounded-2xl p-6 hover:bg-desert-sand/30 transition-colors shadow-md hover:shadow-lg border border-desert-sand/30">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{category.icon}</span>
                        <h3 className="text-lg font-semibold text-rust-dark group-hover:text-desert-gold transition-colors font-adventure">
                          {category.name}
                        </h3>
                      </div>
                      <span className="bg-desert-gold/20 text-rust-dark px-3 py-1 rounded-full text-xs font-medium">
                        {category.posts} posts
                      </span>
                    </div>
                    <div className="text-ash-medium text-sm">
                      Discuss {category.name.toLowerCase()} topics with other players
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Leaderboards Section */}
        <section className="py-12 bg-gradient-to-b from-earth-beige/50 to-desert-sand/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-rust-dark mb-8 font-adventure">
              Leaderboards
            </h2>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-desert-sand/30">
              <div className="p-6 border-b border-desert-sand/30">
                <div className="flex flex-wrap gap-4">
                  <button className="bg-desert-gold text-ash-dark px-4 py-2 rounded-lg font-medium hover:bg-desert-amber transition-colors">
                    PVP Rankings
                  </button>
                  <button className="bg-earth-beige/30 text-ash-dark px-4 py-2 rounded-lg font-medium hover:bg-desert-sand/20 transition-colors">
                    PVE Rankings
                  </button>
                  <button className="bg-earth-beige/30 text-ash-dark px-4 py-2 rounded-lg font-medium hover:bg-desert-sand/20 transition-colors">
                    Guild Rankings
                  </button>
                  <button className="bg-earth-beige/30 text-ash-dark px-4 py-2 rounded-lg font-medium hover:bg-desert-sand/20 transition-colors">
                    Level Rankings
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-earth-beige/30">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-rust-dark uppercase tracking-wider">
                        Rank
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-rust-dark uppercase tracking-wider">
                        Player
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-rust-dark uppercase tracking-wider">
                        Level
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-rust-dark uppercase tracking-wider">
                        Wins
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-rust-dark uppercase tracking-wider">
                        Losses
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-rust-dark uppercase tracking-wider">
                        Win Rate
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-rust-dark uppercase tracking-wider">
                        Score
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white/70 divide-y divide-desert-sand/30">
                    {leaderboardData.map((player, index) => (
                      <tr key={index} className={index < 3 ? 'bg-desert-gold/10' : ''}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-rust-dark">
                            {player.rank}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-rust-dark">
                              {player.name}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-ash-dark">
                            {player.level}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-ash-dark">
                            {player.wins}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-ash-dark">
                            {player.losses}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-ash-dark">
                            {player.winRate}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-rust-dark">
                            {player.score}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="p-6 border-t border-desert-sand/30 flex justify-center">
                <Link 
                  href="/community/leaderboards" 
                  className="text-desert-gold font-medium hover:text-rust-dark transition-colors flex items-center gap-1"
                >
                  View Full Leaderboards <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Media Section */}
        <section className="py-12 bg-white/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-rust-dark mb-8 font-adventure">
              Community Media
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {communityMedia.map((media) => (
                <div key={media.id} className="bg-earth-beige/50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-desert-sand/30">
                  <div className="bg-desert-gold/10 p-8 flex items-center justify-center">
                    <span className="text-5xl">{media.type === 'Video' ? '🎬' : '📷'}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${media.type === 'Video' ? 'bg-starry-blue/20 text-starry-blue' : 'bg-earth-tan/30 text-earth-tan'}`}>
                        {media.type}
                      </span>
                      <span className="text-ash-medium text-sm">
                        {media.views} views
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-rust-dark mb-2 font-adventure">
                      {media.title}
                    </h3>
                    <div className="flex items-center gap-2 text-ash-medium text-sm mb-4">
                      <span className="text-lg">👤</span>
                      <span>by {media.author}</span>
                    </div>
                    <Link 
                      href={`/community/media/${media.id}`} 
                      className="text-desert-gold font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      View {media.type} <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
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