import React from 'react'
import Image from 'next/image'
import { BiComment } from 'react-icons/bi'
import Link from 'next/link'

const BlogPost = () => {
  const blogPosts = [
    {
      id: 1,
      image: '/bur1.png',
      date: '10 February 2022',
      title: 'The Mexixan Burger.',
      comments: 4
    },
    {
      id: 2,
      image: '/pizza1.png',
      date: '10 February 2022',
      title: 'The Italian Pizza',
      comments: 5
    },
    {
      id: 3,
      image: '/tacos2.png',
      date: '10 February 2022',
      title: 'Mexican Creamy Tacos',
      comments: 3
    }
  ]

  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-[#FF9F0D] font-great-vibes text-3xl mb-4">
            Blog Post
          </h3>
          <h2 className="text-[#FF9F0D] text-6xl font-bold">
            La<span className="text-white">test News & Blog</span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer border-2 border-white">
              {/* Image Container */}
              <div className="relative h-[300px] mb-6 overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between text-[#FF9F0D]">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-2">
                    <BiComment />
                    <span>{post.comments}</span>
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold group-hover:text-[#FF9F0D] transition-colors">
                 <Link href='/blog'> {post.title} </Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPost 