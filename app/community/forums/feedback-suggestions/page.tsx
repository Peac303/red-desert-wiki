'use client'

import Link from 'next/link'
import Sidebar from '../../../components/Sidebar'

export default function FeedbackSuggestionsPage() {
  // Simulated forum posts data
  const posts = [
    {
      id: 1,
      title: 'Suggestion: Mount Customization',
      author: 'MountLover',
      date: '2026-03-19',
      replies: 67,
      views: 1456,
      lastReply: '2 hours ago',
      lastReplyAuthor: 'DevTeam'
    },
    {
      id: 2,
      title: 'Feedback: Combat System Improvements',
      author: 'CombatCritic',
      date: '2026-03-18',
      replies: 89,
      views: 1876,
      lastReply: '4 hours ago',
      lastReplyAuthor: 'GameDesigner'
    },
    {
      id: 3,
      title: 'Suggestion: More Endgame Content',
      author: 'EndgamePlayer',
      date: '2026-03-17',
      replies: 102,
      views: 2134,
      lastReply: '6 hours ago',
      lastReplyAuthor: 'ContentManager'
    },
    {
      id: 4,
      title: 'Feedback: UI/UX Improvements',
      author: 'UIExpert',
      date: '2026-03-16',
      replies: 54,
      views: 1234,
      lastReply: '8 hours ago',
      lastReplyAuthor: 'UXDesigner'
    },
    {
      id: 5,
      title: 'Suggestion: Cross-server Events',
      author: 'EventEnthusiast',
      date: '2026-03-15',
      replies: 43,
      views: 987,
      lastReply: '10 hours ago',
      lastReplyAuthor: 'EventCoordinator'
    }
  ]

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
                <li>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-ash-medium mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <Link href="/community/forums" className="text-rust-dark hover:text-desert-gold transition-colors">
                      Forums
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-ash-medium mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-ash-medium">
                      Feedback & Suggestions
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Forum Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold text-rust-dark font-adventure">
                Feedback & Suggestions
              </h1>
              <button className="bg-desert-gold text-ash-dark px-6 py-3 rounded-lg font-medium hover:bg-desert-amber transition-all duration-300 shadow-md hover:shadow-lg">
                New Topic
              </button>
            </div>
            
            {/* Forum Posts Table */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-desert-sand/30 overflow-hidden">
              <table className="w-full">
                <thead className="bg-desert-gold/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-rust-dark">
                      Topic
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-rust-dark hidden md:table-cell">
                      Author
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-rust-dark hidden lg:table-cell">
                      Replies
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-rust-dark hidden lg:table-cell">
                      Views
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-rust-dark">
                      Last Reply
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-desert-sand/30">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-desert-sand/10 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Link href={`/community/forums/feedback-suggestions/${post.id}`} className="font-medium text-rust-dark hover:text-desert-gold transition-colors">
                            {post.title}
                          </Link>
                        </div>
                        <div className="text-xs text-ash-medium mt-1">
                          Posted by {post.author} on {post.date}
                        </div>
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        <span className="text-ash-dark">{post.author}</span>
                      </td>
                      <td className="px-6 py-4 hidden lg:table-cell">
                        <span className="text-ash-dark">{post.replies}</span>
                      </td>
                      <td className="px-6 py-4 hidden lg:table-cell">
                        <span className="text-ash-dark">{post.views}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-ash-dark">{post.lastReply}</div>
                        <div className="text-xs text-ash-medium">by {post.lastReplyAuthor}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <a href="#" className="px-4 py-2 border border-desert-sand/30 bg-white text-ash-dark hover:bg-desert-sand/10 transition-colors">
                  Previous
                </a>
                <a href="#" className="px-4 py-2 border-t border-b border-r border-desert-sand/30 bg-desert-gold text-ash-dark">
                  1
                </a>
                <a href="#" className="px-4 py-2 border-t border-b border-r border-desert-sand/30 bg-white text-ash-dark hover:bg-desert-sand/10 transition-colors">
                  2
                </a>
                <a href="#" className="px-4 py-2 border-t border-b border-r border-desert-sand/30 bg-white text-ash-dark hover:bg-desert-sand/10 transition-colors">
                  3
                </a>
                <a href="#" className="px-4 py-2 border border-desert-sand/30 bg-white text-ash-dark hover:bg-desert-sand/10 transition-colors">
                  Next
                </a>
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