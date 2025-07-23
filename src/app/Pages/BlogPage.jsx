import React from 'react';

function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Finding the Best SwiftBuy Deals",
      description: "Learn insider strategies to maximize your savings during flash sales and never miss out on incredible deals again.",
      author: "Sarah Johnson",
      date: "January 15, 2025",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "1. Set up deal alerts and notifications.\n2. Follow SwiftBuy on social media for flash announcements.\n3. Use the wishlist feature to track your favorite products.\n4. Compare prices before the sale starts.\n5. Check product reviews for authenticity.\n6. Shop early—best deals sell out fast.\n7. Use filters to quickly find top discounts.\n8. Stack coupons and promo codes when possible.\n9. Join the SwiftBuy newsletter for exclusive offers.\n10. Don’t hesitate—if you see a great deal, grab it!"
    },
    {
      id: 2,
      title: "The Psychology Behind Flash Sales: Why They Work",
      description: "Explore the fascinating psychology that makes flash sales so effective and how urgency drives purchasing decisions.",
      author: "Dr. Mike Chen",
      date: "January 12, 2025",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Flash sales leverage FOMO (fear of missing out) and urgency to drive quick decisions. Limited-time offers trigger a sense of scarcity, making shoppers more likely to buy. The excitement of competition and the thrill of a ticking clock can override rational hesitation, leading to impulse purchases. Understanding these psychological triggers can help you shop smarter and avoid buyer’s remorse."
    },
    {
      id: 3,
      title: "Top 5 Product Categories to Watch in Flash Sales",
      description: "Discover which product categories offer the biggest savings during flash sales and when to expect the best deals.",
      author: "Emily Davis",
      date: "January 10, 2025",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "1. Electronics: Look for deep discounts on smartphones, headphones, and smartwatches.\n2. Fashion: Apparel and accessories often feature limited-time markdowns.\n3. Home & Kitchen: Appliances and decor are popular in flash sales.\n4. Beauty: Skincare and cosmetics brands participate frequently.\n5. Sports & Outdoors: Gear and equipment are often included in seasonal sales."
    },
    {
      id: 4,
      title: "SwiftBuy Shopping: Mobile vs Desktop Experience",
      description: "Compare the pros and cons of shopping flash sales on mobile devices versus desktop computers.",
      author: "Alex Rodriguez",
      date: "January 8, 2025",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Mobile shopping offers convenience and speed, perfect for on-the-go deals. Desktop shopping provides a larger view and easier comparison of products. For flash sales, mobile apps may offer push notifications and faster checkout, while desktops excel in multitasking and research. Use both platforms to maximize your chances of snagging the best deals!"
    },
    {
      id: 5,
      title: "How to Spot Fake SwiftBuy Deals",
      description: "Learn to identify legitimate flash sales from fake promotions and protect yourself from deceptive pricing tactics.",
      author: "Maria Garcia",
      date: "January 5, 2025",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/1002655/pexels-photo-1002655.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Always check the seller's ratings and reviews. Be wary of prices that seem too good to be true. Look for secure payment options and official SwiftBuy badges. Avoid clicking on suspicious links from emails or social media. When in doubt, contact SwiftBuy support to verify the legitimacy of a deal."
    },
    {
      id: 6,
      title: "The Future of SwiftBuy: Trends to Watch",
      description: "Explore emerging trends in flash sale marketing and what shoppers can expect in the coming years.",
      author: "David Chen",
      date: "January 3, 2025",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Expect more AI-driven personalized deals, faster checkout experiences, and integration with social media platforms. Live shopping events and augmented reality previews are on the rise. Sustainability and ethical sourcing will become bigger factors in flash sales. Stay tuned for innovations that make shopping smarter and more exciting!"
    }
  ];

  return (
    <div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            SwiftBuy Blog
          </h1>
          <p className="text-xl">
            Insights, tips, and trends from the world of flash sales and smart shopping
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>

                  <div className="lg:col-span-2 p-6 lg:p-8">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {post.title}
                    </h2>

                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <div className="mr-1">🧑🏻</div>
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <div className="mr-1">🗓️</div>
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <div className="mr-1">⏱️</div>
                        {post.readTime}
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 mb-6">
                      {post.description}
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      {post.content}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated with Flash Sale Tips
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Subscribe to our newsletter for the latest flash sale strategies and exclusive deal alerts.
            </p>
            <form className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-r-lg font-medium">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;