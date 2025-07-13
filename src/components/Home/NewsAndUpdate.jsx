import RecentPost from './RecentPost'
import FeaturedPost from './FeaturedPost'

const NewsAndUpdate = () => {
  return (
         <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest News & Updates
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with latest tax and regulatory changes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Recent Posts */}
            <RecentPost />

            {/* Featured Posts */}
            <FeaturedPost />
          </div>
        </div>
      </div>
  )
}

export default NewsAndUpdate