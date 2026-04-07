import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🏜️</span>
              <span className="text-xl font-bold">Red Desert Wiki</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your comprehensive guide to the world of Red Desert.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-xl">📱</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-xl">🐦</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-xl">📘</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/news" className="text-gray-400 hover:text-white transition-colors">News</Link></li>
              <li><Link href="/guides" className="text-gray-400 hover:text-white transition-colors">Guides</Link></li>
              <li><Link href="/community" className="text-gray-400 hover:text-white transition-colors">Community</Link></li>
              <li><Link href="/database" className="text-gray-400 hover:text-white transition-colors">Database</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Guides</h3>
            <ul className="space-y-2">
              <li><Link href="/guides/newbie" className="text-gray-400 hover:text-white transition-colors">Newbie Guide</Link></li>
              <li><Link href="/guides/pvp" className="text-gray-400 hover:text-white transition-colors">PVP Guide</Link></li>
              <li><Link href="/guides/crafting" className="text-gray-400 hover:text-white transition-colors">Crafting Guide</Link></li>
              <li><Link href="/guides/dungeon" className="text-gray-400 hover:text-white transition-colors">Dungeon Guide</Link></li>
              <li><Link href="/guides/mount" className="text-gray-400 hover:text-white transition-colors">Mount Guide</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2026 Red Desert Wiki. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}