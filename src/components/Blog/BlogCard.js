const BlogCard = ({ image, date, author, title, excerpt }) => {
  return (
    <div className="blog-card">
      <div className="blog-image">
        <img src={image || "/placeholder.svg"} alt={title} />
      </div>
      <div className="blog-content">
        <div className="blog-meta">
          <span className="date">
            <i className="fas fa-calendar-alt"></i> {date}
          </span>
          <span className="author">
            <i className="fas fa-user"></i> {author}
          </span>
        </div>
        <h3>
          <a href="#">{title}</a>
        </h3>
        <p>{excerpt}</p>
        <a href="#" className="read-more">
          Read More <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  )
}

export default BlogCard
