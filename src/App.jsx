const featuredProducts = [
  {
    name: 'Calathea',
    price: '$89',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Monstera',
    price: '$45',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Palm',
    price: '$67',
    image:
      'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80',
  },
]

const latestPosts = [
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1446071103084-c257b5f70672?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80',
]

const gallery = [
  'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1444392061186-9fc38f84f726?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80',
]

const categories = [
  {
    title: 'Plants',
    image:
      'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Fashion',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Home',
    image:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=700&q=80',
  },
]

function App() {
  return (
    <div className="page">
      <header className="top-header">
        <div className="badge">Take 10% Off New Arrivals</div>
        <div className="brand-row">
          <button aria-label="menu" className="icon-button">≡</button>
          <div className="brand">Dutch Growers</div>
          <div className="header-actions">
            <button aria-label="search" className="icon-button">⌕</button>
            <button aria-label="cart" className="icon-button">◔</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Seasonal Edit</p>
            <h1>Fall Trends</h1>
            <a href="#featured">Shop now</a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80"
            alt="Woman holding flowers"
          />
          <article className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80"
              alt="Portrait"
            />
            <div>
              <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</p>
              <button>Read more</button>
            </div>
          </article>
        </section>

        <section id="featured" className="section">
          <div className="section-head">
            <h2>Featured</h2>
            <span>New · Sale · Plants</span>
          </div>
          <div className="featured-grid">
            {featuredProducts.map((product) => (
              <article key={product.name} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="latest">
          <div className="section-head light">
            <h2>The Latest</h2>
            <span>Stories from our greenhouse and studio</span>
          </div>
          <div className="latest-grid">
            {latestPosts.map((photo, idx) => (
              <img key={photo + idx} src={photo} alt="Latest collection" />
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Shop By Category</h2>
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

        <section className="follow">
          <h2>Follow Us On Social</h2>
          <div className="gallery-grid">
            {gallery.map((photo, idx) => (
              <img key={photo + idx} src={photo} alt="Social post" />
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <h4>Shop</h4>
          <a href="#">Plants</a>
          <a href="#">Accessories</a>
          <a href="#">Seasonal</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Journal</a>
          <a href="#">Contact</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">FAQ</a>
        </div>
      </footer>
    </div>
  )
}

export default App
