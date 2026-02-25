const navItems = ['About Us', 'Plants & Pots', 'Plant Care', 'Home & Lifestyle', 'Fashion']

const featuredProducts = [
  {
    name: 'Mini dress from rustic fabric',
    priceTop: '$149',
    priceBottom: '.00',
    meta: '10 Colours',
    image:
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Mini dress from rustic fabric',
    priceTop: '$149',
    priceBottom: '.00',
    meta: '10 Colours',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Mini dress from rustic fabric',
    priceTop: '$149',
    priceBottom: '.00',
    meta: '10 Colours',
    image:
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Mini dress from rustic fabric',
    priceTop: '$149',
    priceBottom: '.00',
    meta: '10 Colours',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
]

const latestCards = [
  {
    title: '5 Shrub Cocktails you need to try this spring!',
    meta: 'Blog | Home',
    image:
      'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=80',
    wide: true,
  },
  {
    title: '7 Spring/Summer Fashion Trends You Need To Know!',
    meta: 'Blog | Fashion',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: "Valentine's Day Bundles",
    meta: 'Perfect for a night in <3',
    image:
      'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&w=900&q=80',
    tall: true,
  },
  {
    title: 'Winter FAQs',
    meta: 'FAQ | Garden',
    image:
      'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Gift Cards!',
    meta: 'Shop now',
    image:
      'https://images.unsplash.com/photo-1463320898484-cdee8141c787?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Mounting a Staghorn Fern',
    meta: 'Video | Garden',
    image:
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80',
  },
]

const categories = [
  {
    title: 'Plants',
    image:
      'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Fashion',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Flowers',
    image:
      'https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=1000&q=80',
  },
]

const socialGrid = [
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80',
]

function App() {
  return (
    <div className="page">
      <header className="top-header">
        <div className="utility-row shell-pad">
          <div className="utility-group">
            <span>My Account</span>
            <span>Inspiration Hub</span>
          </div>
          <div className="logo">Dutch Growers</div>
          <div className="utility-group utility-right">
            <span>Wish List</span>
            <span>Cart (1)</span>
          </div>
        </div>

        <div className="search-row shell-pad">
          <input type="text" placeholder="What can we help you find?" aria-label="search" />
        </div>

        <nav className="menu-row shell-pad">
          {navItems.map((item) => (
            <a key={item} href="#">
              {item}
            </a>
          ))}
        </nav>

        <button className="mobile-menu" aria-label="Open menu">
          ☰
        </button>
      </header>

      <main>
        <section className="hero">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=2200&q=90"
            alt="Fall hero"
          />
          <div className="hero-copy shell-pad">
            <h1>Fall Trends</h1>
            <a href="#featured">Shop now →</a>
          </div>
          <div className="hero-controls">
            <div>
              <strong>01</strong>
              <span>/04</span>
            </div>
            <div className="hero-arrows">
              <button aria-label="Previous slide">‹</button>
              <button aria-label="Next slide">›</button>
            </div>
          </div>
        </section>

        <section className="intro shell-pad">
          <div className="intro-copy">
            <h2>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</h2>
            <div className="squiggle">〰〰〰</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat dolor id arcu
              ullamcorper, nec vehicula risus tristique. Nunc semper neque orci. Suspendisse potenti.
            </p>
            <button>Learn more</button>
          </div>
          <div className="intro-photo-wrap">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"
              alt="Friends looking at phone"
            />
          </div>
        </section>

        <section id="featured" className="featured shell-pad">
          <div className="section-head">
            <h2>Featured</h2>
            <div className="section-actions">
              <span>All</span>
              <span>New</span>
              <span>Staff Picks</span>
              <span>Popular</span>
              <button aria-label="Previous featured">←</button>
              <button aria-label="Next featured">→</button>
            </div>
          </div>
          <div className="featured-grid">
            {featuredProducts.map((product, idx) => (
              <article key={`${product.name}-${idx}`} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3 className={idx === 0 || idx === 2 ? 'strong' : ''}>{product.name}</h3>
                <p className="price-top">{product.priceTop}</p>
                <p className="price-bottom">{product.priceBottom}</p>
                <p className="meta">{product.meta}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="latest-wrap">
          <div className="latest-head shell-pad">
            <h2>The Latest</h2>
            <p>Expertly curated trends, advice & tips to help you succeed!</p>
          </div>
          <div className="latest-grid shell-pad">
            {latestCards.map((item) => (
              <article
                key={item.title}
                className={`latest-card${item.wide ? ' wide' : ''}${item.tall ? ' tall' : ''}`}
              >
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.meta}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="category shell-pad">
          <div className="section-head">
            <h2>Shop By Category</h2>
            <div className="category-arrow">→</div>
          </div>
          <div className="category-grid">
            {categories.map((item) => (
              <article key={item.title} className="category-card">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="trust shell-pad">
          <article>
            <h4>Secure Payment</h4>
            <p>Complies with all major credit cards</p>
          </article>
          <article>
            <h4>100% Canadian</h4>
            <p>Local & family owned</p>
          </article>
          <article>
            <h4>Easy Returns & Exchanges</h4>
            <p>Up to 30 days from purchase</p>
          </article>
        </section>

        <section className="social">
          <div className="social-head shell-pad">
            <h2>Follow Us On Social</h2>
            <div className="social-icons">
              <span>f</span>
              <span>t</span>
              <span>▶</span>
              <span>in</span>
            </div>
          </div>
          <div className="social-grid">
            {socialGrid.map((image, idx) => (
              <img key={`${image}-${idx}`} src={image} alt="Social post" />
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer shell-pad">
        <div>
          <h5>Company</h5>
          <a href="#">Monday-Saturday 9:30am-6pm</a>
          <a href="#">Thursday 9:30am-8pm</a>
          <a href="#">Sunday 10am-5pm</a>
          <a href="#">Statutory Holidays 11am-5pm</a>
          <a href="#">1818 Central Avenue</a>
          <a href="#">Saskatoon, SK S7N 2Z9</a>
          <a href="#">306.249.1222</a>
          <a href="#">Email info@dutchgrowers.com</a>
        </div>
        <div>
          <h5>Categories</h5>
          <a href="#">Make & Take Classes</a>
          <a href="#">Gift Cards</a>
          <a href="#">Plants</a>
          <a href="#">Plant Care</a>
          <a href="#">Planters</a>
          <a href="#">Fashion</a>
          <a href="#">Home</a>
        </div>
        <div>
          <h5>Company</h5>
          <a href="#">Store Location</a>
          <a href="#">Careers</a>
          <a href="#">About Us</a>
          <a href="#">Shipping & Returns</a>
          <a href="#">Customer Support</a>
          <a href="#">COVID-19 Update</a>
          <a href="#">Fall FAQs</a>
        </div>
        <div>
          <h5>Company</h5>
          <a href="#">Make & Take Classes</a>
          <a href="#">Gift Cards</a>
          <a href="#">Plants</a>
          <a href="#">Plant Care</a>
          <a href="#">Planters</a>
          <a href="#">Fashion</a>
          <a href="#">Home</a>
        </div>
      </footer>
    </div>
  )
}

export default App
