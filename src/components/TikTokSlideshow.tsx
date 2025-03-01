
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TikTokSlideshow = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 6;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Auto-advance slides every 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 10000);

    return () => clearTimeout(timer);
  }, [activeSlide]);

  return (
    <div className="slideshow-wrapper">
      <div className="slideshow-container">
        {/* Slide 1 - Warning Message */}
        <div className={`slide ${activeSlide === 0 ? 'active' : ''}`}>
          <div className="slide-content">
            <div className="pill animate-slide-up">WARNING</div>
            <h1 className="slide-title animate-slide-up">
              Don't Make This Mistake on Your Website
            </h1>
            <p className="slide-description animate-slide-up">
              Common errors that could be costing you customers and revenue
            </p>
          </div>
        </div>

        {/* Slide 2 - Common Mistake */}
        <div className={`slide ${activeSlide === 1 ? 'active' : ''}`}>
          <div className="slide-content">
            <h2 className="slide-title">Common Website Mistakes</h2>
            <div className="split-screen">
              <div className="screen-half">
                <span className="screen-icon text-red-500">✕</span>
                <span className="screen-label">Cluttered UI</span>
              </div>
              <div className="screen-half">
                <span className="screen-icon text-green-500">✓</span>
                <span className="screen-label">Clean UI</span>
              </div>
            </div>
            <p className="slide-description">
              Websites overloaded with features, animations, and clutter lead to slow load times, 
              bad UX, and high bounce rates.
            </p>
          </div>
        </div>

        {/* Slide 3 - What to Do Instead */}
        <div className={`slide ${activeSlide === 2 ? 'active' : ''}`}>
          <div className="slide-content">
            <h2 className="slide-title">What to Do Instead</h2>
            <div className="point-list">
              <div className="point-item">
                <span className="point-icon">✓</span>
                <span className="point-text">
                  Focus on clean, simple design
                </span>
              </div>
              <div className="point-item">
                <span className="point-icon">✓</span>
                <span className="point-text">
                  Optimize for fast loading times
                </span>
              </div>
              <div className="point-item">
                <span className="point-icon">✓</span>
                <span className="point-text">
                  Ensure mobile responsiveness
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 4 - Inspirational Quote */}
        <div className={`slide ${activeSlide === 3 ? 'active' : ''} bg-gradient-elegant`}>
          <div className="slide-content">
            <div className="quote animate-fade-in">
              "Simplicity is the ultimate sophistication."
            </div>
            <div className="quote-author animate-fade-in">— Leonardo da Vinci</div>
          </div>
        </div>

        {/* Slide 5 - Bonus Tip (80/20 Rule) */}
        <div className={`slide ${activeSlide === 4 ? 'active' : ''} bg-pareto-gradient`}>
          <div className="slide-content">
            <div className="pill animate-slide-up">BONUS TIP</div>
            <h2 className="slide-title">The 80/20 Rule</h2>
            
            <div className="pareto-chart">
              <div className="pareto-container">
                <div className="pareto-bar pareto-twenty">
                  <span className="pareto-value">20%</span>
                </div>
                <div className="pareto-bar pareto-eighty">
                  <span className="pareto-value">80%</span>
                </div>
              </div>
              <div className="pareto-labels">
                <div className="pareto-label">
                  <div className="pareto-dot pareto-dot-twenty"></div>
                  <span>Effort</span>
                </div>
                <div className="pareto-label">
                  <div className="pareto-dot pareto-dot-eighty"></div>
                  <span>Results</span>
                </div>
              </div>
            </div>
            
            <p className="slide-description">
              <span className="highlight-text">20%</span> of your website elements drive <span className="highlight-text">80%</span> of user engagement
            </p>
            <p className="slide-description">
              Focus on the essential elements that convert
            </p>
          </div>
        </div>

        {/* Slide 6 - Final Message with WebWind Digital Logo */}
        <div className={`slide ${activeSlide === 5 ? 'active' : ''} bg-gradient-subtle`}>
          <div className="slide-content">
            <h2 className="slide-title animate-scale-in">
              Don't Lose Customers
            </h2>
            <div className="logo-container">
              <div className="logo-circle">
                <img 
                  src="/lovable-uploads/fd824cee-5b86-4e06-9147-9861428e1738.png" 
                  alt="WebWind Digital Logo" 
                  className="logo-image"
                />
              </div>
            </div>
            <p className="slide-description animate-fade-in">
              Contact us for a custom website at an affordable price!
            </p>
            <div className="final-cta">
              Get a website that converts
            </div>
          </div>
        </div>
      </div>
      
      {/* External navigation controls */}
      <div className="external-controls">
        <button 
          className="nav-button nav-button-prev" 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          className="nav-button nav-button-next" 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TikTokSlideshow;
