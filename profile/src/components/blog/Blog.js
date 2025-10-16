import './Blog.css'
import BlogItem from './BlogItem'
import blog1Image from '../../assets/images/post-1.jpg'
import blog2Image from '../../assets/images/post-2.jpg'
import blog3Image from '../../assets/images/post-3.jpg'
function Blog (){
    const blogs = [
        {
            blogImage: blog1Image,
            blogTitle: 'Naturel',
            blogDescription: 'Explore the beauty and tranquility of nature through our blog. From breathtaking landscapes to the delicate intricacies of wildlife, we delve into the wonders of the natural world. Join us as we share inspiring stories, stunning photography, and insightful tips on how to appreciate and preserve the environment around us. Discover the peace and inspiration that nature has to offer.',
            blogAuthor: 'Jafar Soltani',
            blogTime: 5
        },
        {
            blogImage: blog2Image,
            blogTitle: 'Food',
            blogDescription: 'Dive into the world of culinary delights with our food blog. Whether you’re a seasoned chef or a kitchen novice, we provide delicious recipes, cooking tips, and food trends to satisfy your taste buds. From gourmet dishes to quick and easy meals, explore the flavors and traditions of different cuisines. Join us on a gastronomic journey and discover the joy of cooking and eating great food.',
            blogAuthor: 'Jafar Soltani',
            blogTime: 10
        },
        {
            blogImage: blog3Image,
            blogTitle: 'Working',
            blogDescription: 'Stay informed and motivated with our blog dedicated to the world of work. We cover topics ranging from productivity tips and career advice to the latest trends in remote work and workplace culture. Whether you are looking to advance your career, improve your work-life balance, or stay updated on industry developments, our blog offers valuable insights and practical advice to help you thrive in your professional life.',
            blogAuthor: 'Jafar Soltani',
            blogTime: 15
        },
    ]
    return (
        <section id="blog">
    <div className="container">
      <div className="section-info">
        <h2 className="section-title">BLOG</h2>
      </div>
      <div className="row">
        <BlogItem {...blogs[0]}/>
        <BlogItem {...blogs[1]}/>
        <BlogItem {...blogs[2]}/>
      </div>
    </div>
  </section>
    )

}

export default Blog