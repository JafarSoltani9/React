function BlogItem(props) {
    return (
        <div className="col-4">
            <div className="blog-box">
                <div className="blog-img">
                    <img src={props.blogImage} alt={props.blogTitle} className="img-fluid" />
                </div>
                <div className="blog-content">
                    <h3 className="blog-title">{props.blogTitle}</h3>
                    <p className="blog-desc">{props.blogDescription}</p>
                </div>
                <div className="blog-footer">
                    <div className="post-author">
                        <p className="author">{props.blogAuthor}</p>
                    </div>
                    <div className="post-date">
                        <span className="bi bi-clock"></span> {props.blogTime} min
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogItem;
