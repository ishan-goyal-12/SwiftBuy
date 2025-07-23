import React from 'react'
const AboutPage = () => {

  const teamMembers = [
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "CEO & Founder",
      bio: "Serial entrepreneur with 15+ years in e-commerce and retail technology.",
      photo: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg"
    },
    {
      id: 2,
      name: "Sarah Kim",
      role: "Head of Product",
      bio: "Product strategist focused on creating seamless shopping experiences.",
      photo: "https://images.pexels.com/photos/32701041/pexels-photo-32701041.jpeg"
    },
    {
      id: 3,
      name: "David Chen",
      role: "CTO",
      bio: "Technology leader specializing in scalable e-commerce platforms.",
      photo: "https://images.pexels.com/photos/32710091/pexels-photo-32710091.jpeg"
    },
    {
      id: 4,
      name: "Maria Garcia",
      role: "Head of Marketing",
      bio: "Digital marketing expert passionate about connecting deals with customers.",
      photo: "https://images.pexels.com/photos/32673414/pexels-photo-32673414.jpeg"
    }
  ]

  return (
    <div>
      
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About SwiftBuy
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're revolutionizing online shopping with lightning-fast deals and unbeatable prices.
            Our mission is to make premium products accessible to everyone through limited-time flash sales.
          </p>
        </div>
      </div>

      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2025, SwiftBuy started with a simple idea: everyone deserves access to quality products
              at affordable prices. What began as a small team of entrepreneurs has grown into a leading flash sale
              platform, serving millions of customers worldwide. We've facilitated over 100 million rupees in savings
              for our customers and partnered with thousands of brands to bring exclusive deals directly to your doorstep.
            </p>
          </div>
        </div>
      </div>

      
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="mr-3 scale-150">🎯</div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600">
                To democratize access to premium products by creating a marketplace where
                limited-time deals meet unlimited value. We believe everyone should have
                the opportunity to purchase quality goods at prices that won't break the bank.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="mr-3 scale-150">🌟</div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600">
                To become the world's most trusted flash sale platform, where customers
                discover amazing deals daily and brands connect with engaged audiences
                through time-sensitive, value-driven commerce experiences.
              </p>     </div>
          </div>
        </div>
      </div>

      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="mr-3 scale-150">👥</div>
              <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            </div>
            <p className="text-lg text-gray-600">
              The passionate individuals behind SwiftBuy's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center bg-white rounded-lg p-6 shadow-md">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-red-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">20K+</div>
              <div className="text-lg">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5K+</div>
              <div className="text-lg">Daily Deals</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$100M+</div>
              <div className="text-lg">Total Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Brand Partners</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage