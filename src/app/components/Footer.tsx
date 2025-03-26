import Link from "next/link";
import FAQAccordion from "./FaqAccordion";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <div className={`${styles.container} ${styles.upper}`}>
        <h2>
          <strong>
            Custom Vinyl Banner: High Quality Printing and Eye-Catching Designs
          </strong>
        </h2>
        <p>
          BannerBuzz offers cost-effective, personalized vinyl banners in
          various standard and custom sizes. These lightweight, durable, and
          weather-resistant banners elevate your brand or celebrations in both
          indoor and outdoor spaces. Choose from a variety of customization
          options, including size and design choices, and enjoy high-quality
          printing available for both single and double-sided formats to meet
          your unique needs.
        </p>
        <p>
          For product launches, campaigns, event promotions, celebrations, and
          more, leverage the power of vinyl banners to make a lasting impact in
          diverse settings. We are offering wide range of&nbsp;{" "}
          <Link href="https://www.bannerbuzz.com/custom-vinyl-banners/p">
            custom vinyl banner.
          </Link>
        </p>
        <h2>
          <strong>Why Choose us for Exceptional Vinyl Banners?</strong>
        </h2>
        <ul>
          <li>
            <b>Easy to Customize:</b> Bring your vision to life with our
            HD-quality{" "}
            <Link href="https://www.bannerbuzz.com/custom-vinyl-banners/p">
              custom banner
            </Link>{" "}
            printing. Select from ready-to-use designs or upload your own for a
            personalized touch.
          </li>
          <li>
            <b>Built to Last:</b> Made from high-quality PVC flex and advanced
            printing technology, the vinyl banners can endure various outdoor
            elements, ensuring longevity and consistent visibility.
          </li>
          <li>
            <b>Enhanced Durability Options:</b> Choose lamination for added
            abrasion resistance and longevity. Optional wind flaps prevent
            damage in gusty areas, while metal grommets keep edges sturdy
            against tight ropes or cords.
          </li>
          <li>
            <b>Simple Installation:</b> Simplify installation with accessories
            like zip ties, nylon rope, wall brackets and more.
          </li>
          <li>
            <b>Avail Bulk Discounts:</b> Enjoy bulk discounts for larger orders,
            making vinyl banners a cost-effective choice for any occasion,
            personal celebration or promotional event.
          </li>
          <li>
            <b>Easy to Maintain:</b> Maintenance is simple and straightforward;
            just dampen a soft piece of cloth with water and give your banner a
            good wipe.
          </li>
        </ul>
        <h2>
          <strong>
            Application and Use Cases: Enhance Every Event with Vinyl Banners
          </strong>
        </h2>
        <ul>
          <li>
            <b>Trade Shows:</b> Be the star of exhibitions, grabbing attention
            effortlessly.
          </li>
          <li>
            <b>Storefront Displays:</b> Make heads turn and customers flock to
            your business.
          </li>
          <li>
            <b>Special Events:</b> Set the mood and promote your occasion in
            style.
          </li>
          <li>
            <b>Product Launches:</b> Unveil new products with banners that
            demand attention.
          </li>
          <li>
            <b>Grand Openings:</b> Shout out your business debut loud and proud.
          </li>
          <li>
            <b>Sales Promotions:</b> Tempt customers with irresistible deals
            showcased boldly.
          </li>
          <li>
            <b>Community Gatherings:</b> Spread the word effectively about local
            events.
          </li>
          <li>
            <b>Informational Signage:</b> Keep everyone informed with clear and
            concise banners.
          </li>
          <li>
            <b>Protest or Advocacy:</b> Amplify your message and ignite change
            effectively.
          </li>
          <li>
            <b>Celebrations:</b> Add a personal touch to birthdays, weddings,
            and more with vibrant banners.
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <FAQAccordion />
        <div className={styles.newsLetterSection}>
          <div className={styles.container}>
            <p>
              Subscribe to Our Newsletter and Get 20% OFF
              <span>Your First Order + Free Super Saver Shipping*</span>
            </p>
            <input type="text" />
            <button>Submit</button>
          </div>
        </div>
        <div className={styles.footerNav}>
          <div className={styles.footerNavBox}>
            <div className={styles.contactDetailsBox}>
              <div className={styles.panelTitle}>
                <h6>Get In Touch</h6>
              </div>
              <div>
                <div>
                  <div className={styles.contactInfoBox}>
                    <Link href="tel:800-580-4489">
                      <span className="footerSprite phone"></span>
                      <p>
                        800-580-4489<span> Need to talk? We’re here 24x7.</span>
                      </p>
                    </Link>
                  </div>
                  <div className={styles.contactInfoBox}>
                    <Link href="/contact-us">
                      <span></span>
                      <p>
                        {" "}
                        Write to us
                        <span>
                          For your questions, we’re just an email away.
                        </span>
                      </p>
                    </Link>
                  </div>
                  <div className={styles.contactInfoBox}>
                    <Link href="/faqs">
                      <span></span>
                      <p>
                        Need help?<span>Find your answers.</span>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.shortLinkBox}>
              <div className={styles.panelTitle}>
                <h6>Category</h6>
              </div>
              <div className="panel-collapse collapse is-open">
                <div className="panel-content">
                  <ul>
                    <li>
                      <Link href="/banners">Custom Banners</Link>
                    </li>
                    <li>
                      <Link href="/vinyl-banners">Vinyl Banners</Link>
                    </li>
                    <li>
                      <Link href="/banner-stands">Banner Stand</Link>
                    </li>
                    <li>
                      <Link href="/step-repeat-displays">
                        Step &amp; Repeat Displays
                      </Link>
                    </li>
                    <li>
                      <Link href="/canopy-tents">Canopy Tents</Link>
                    </li>
                    <li>
                      <Link href="/neon-signs">Neon Signs</Link>
                    </li>
                    <li>
                      <Link href="/flags">Custom Flags</Link>
                    </li>
                    <li>
                      <Link href="/asset-tags">Asset Tags</Link>
                    </li>
                    <li>
                      <Link href="/business-cards">Business Cards</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.shortLinkBox}>
              <div className={styles.panelTitle}>
                <h6>Information</h6>
              </div>
              <div>
                <div>
                  <ul>
                    <li>
                      <Link href="/orderstatus">Order Tracking</Link>
                    </li>
                    <li>
                      <Link href="/wallet">BannerBuzz Wallet</Link>
                    </li>
                    <li>
                      <Link href="/country/finland">
                        International Shipping
                      </Link>
                    </li>
                    <li>
                      <Link href="/reviews">Customer Reviews</Link>
                    </li>
                    <li>
                      <Link href="/coupons">Special Offers</Link>
                    </li>
                    <li>
                      <Link href="/sitemap">Sitemap</Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.bannerbuzz.com/blog/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/brand/index.pdf" target="_blank">
                        Buzz Catalog
                      </Link>
                    </li>
                    <li>
                      <Link href="/free-charity-banner">
                        Banners for a Cause
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.shortLinkBox}>
              <div className={styles.panelTitle}>
                <h6>Customer Service</h6>
              </div>
              <div>
                <div>
                  <ul>
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact us</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/terms-and-conditions">Terms of Use</Link>
                    </li>
                    <li>
                      <Link href="/bannerbuzz-affiliate-program">
                        Affiliate Program
                      </Link>
                    </li>
                    <li>
                      <Link href="/local">Areas of Service</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.shortLinkBox}>
              <div className={styles.panelTitle}>
                <h6>Help Station</h6>
              </div>
              <div>
                <div>
                  <ul>
                    <li>
                      <Link href="/faqs">FAQs</Link>
                    </li>
                    <li>
                      <Link href="/return-policy">Return Policy</Link>
                    </li>
                    <li>
                      <Link href="/faqs#FreeDesignProofs">
                        Free Design Proofs
                      </Link>
                    </li>
                    <li>
                      <Link href="/faqs#shipping">Shipping</Link>
                    </li>
                    <li>
                      <Link href="/sample-kit/p">Sample Kit</Link>
                    </li>
                    <li>
                      <Link href="/vectorization/p">Vectorization</Link>
                    </li>
                    <li>
                      <Link href="/quickrfq">Instant Quote</Link>
                    </li>
                    <li>
                      <Link
                        href="https://business.bannerbuzz.com"
                        target="_blank"
                      >
                        Business Inquiries
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
