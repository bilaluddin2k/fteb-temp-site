import "./Blog.css"
import BlogCard from "./BlogCard"
import blog1 from "../../assets/blog-1.jpg"
import blog2 from "../../assets/blog-2.jpg"
import blog3 from "../../assets/blog-3.jpg"

const Blog = () => {
  const blogs = [
    {
      image: blog1,
      date: "May 10, 2023",
      author: "John Smith",
      title: "How IT Support Helps Your Business Growth",
      excerpt:
        "Effective IT support is crucial for business growth in today's digital landscape. Learn how it can benefit your organization.",
    },
    {
      image: blog2,
      date: "May 15, 2023",
      author: "Jane Doe",
      title: "The Importance of Cybersecurity for Small Businesses",
      excerpt:
        "Small businesses are increasingly becoming targets for cyber attacks. Find out how to protect your business.",
    },
    {
      image: blog3,
      date: "May 20, 2023",
      author: "Mike Johnson",
      title: "Cloud Computing: Benefits and Challenges",
      excerpt:
        "Cloud computing offers numerous benefits but also comes with challenges. Learn how to navigate them effectively.",
    },
  ]

  return (
    <section className="blog section">
      <div className="container">
        <div className="section-title">
          <h6>LATEST NEWS</h6>
          <h2>From Our Blog</h2>
          <p>Stay updated with the latest trends and insights in the IT industry through our regularly updated blog.</p>
        </div>

        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              date={blog.date}
              author={blog.author}
              title={blog.title}
              excerpt={blog.excerpt}
            />
          ))}
        </div>

        <div className="text-center mt-50">
          <a href="#" className="btn btn-outline">
            View All Posts <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog
