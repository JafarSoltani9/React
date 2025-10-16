import './Service.css'
import ServiceItem from './ServiceItem'
function Service () {
    const services = [
        {
            serviceIcon: 'bi bi-briefcase',
            serviceTitle: 'WEB DESIGN',
            serviceInfo: 'Web Development We build robust, scalable, and secure websites tailored to your business needs using the latest technologies. Our team ensures flawless performance across all devices and browsers, delivering high-quality solutions that enhance user experience and drive growth.',
        },
        {
            serviceIcon: 'bi bi-card-checklist',
            serviceTitle: 'WEB DEVELOPMENT',
            serviceInfo: 'We build robust, scalable, and secure websites tailored to your business needs using the latest technologies. Our team ensures flawless performance across all devices browsers, delivering high-quality solutions that enhance user experience and drive growth',
        },
        {
            serviceIcon: 'bi bi-bar-chart',
            serviceTitle: 'PHOTOGRAPHY',
            serviceInfo: ' Capture your brands essence with our professional photography services. We provide high-quality images for product photos, corporate headshots, and events. Enhance your website, social media, and marketing materials with stunning visuals that tell your story.',
        },
        {
            serviceIcon: 'bi bi-binoculars',
            serviceTitle: 'RESPONSIVE DESIGN',
            serviceInfo: ' Our responsive design services ensure your website looks and functions beautifully on any device. We prioritize user experience, making your site easy to navigate and visually appealing, boosting engagement and satisfaction.',
        },
        {
            serviceIcon: 'bi bi-brightness-high',
            serviceTitle: 'GRAPHIC DESIGN',
            serviceInfo: 'Bring your ideas to life with our creative and visually striking graphic design services. marketing materials and website graphics, we deliver high-quality designs that effectively communicate your message and align with your brand.',
        },
        {
            serviceIcon: 'bi bi-calendar4-week',
            serviceTitle: 'MARKETING SERVICES',
            serviceInfo: 'Boost your brands visibility with our comprehensive marketing services. email campaigns, and content marketing tailored to your business goals. increase engagement, and generate leads for sustainable growth and a strong online presence.',
        },

    ]
    return (
        <section id="services">
    <div className="container">
      <div className="section-info">
        <h2 className="section-title">SERVICES</h2>
      </div>
      <div className="row">
        <ServiceItem {...services[0]}/>
        <ServiceItem {...services[1]}/>
        <ServiceItem {...services[2]}/>
        <ServiceItem {...services[3]}/>
        <ServiceItem {...services[4]}/>
        <ServiceItem {...services[5]}/>
      </div>
    </div>
  </section>
    )
}

export default Service