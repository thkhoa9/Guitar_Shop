import React from 'react'

export default function Footer() {
  return (
        <footer className="footer bg-base-200 text-base-content p-10">
    <nav>
        <h6 className="footer-title">SHOP</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Our team</a>
        <a className="link link-hover">Flagship</a>
    </nav>
    <nav>
        <h6 className="footer-title">CUSTOMER SERVICES</h6>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Services & Maintermance</a>
        <a className="link link-hover">Wholesale</a>
        <a className="link link-hover">Sell your gear</a>
        <a className="link link-hover">Shipping Policies</a>
        <a className="link link-hover">Terms of Service</a>
        <a className="link link-hover">Returns Policy</a>
        <a className="link link-hover">Privacy Policy</a>
    </nav>
    <nav>
        <h6 className="footer-title">VISIT US</h6>
        <a className="link link-hover font-medium">Store Hours</a>
        <a className="link link-hover">Monday-Sunday 10 AM -8:30 PM</a>
        <a className="link link-hover font-medium">Reverb</a>
        <a className="link link-hover">Visit our store on &nbsp;
         <a className="link link-hover font-medium">Reverb</a>
        </a>
        <a className="link link-hover font-medium">Vintage & Rare</a>
        <a className="link link-hover">Visit our store on &nbsp;
        <a className="link link-hover font-medium">Vintage & Rare</a>
        </a>
        <a className="link link-hover font-medium">Lab's Shopee</a>
        <a className="link link-hover">Visit our store on &nbsp; 
        <a className="link link-hover font-medium">Shopee</a>
        </a>
        <a className="link link-hover font-medium">Social Media</a>
        <a className="link link-hover">Facebook | Instagram | Tiktok | Youtube</a>
    </nav>
    <form>
        <h6 className="footer-title">Let's Get In Touch</h6>
        <fieldset className="form-control w-80">
        <label className="label">
            <span className="label-text">Get Latest News About Discounts & Promotions</span>
        </label>
        <div className="join">
             <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
                <svg 
                   xmlns="http://www.w3.org/2000/svg" 
                   fill="none" 
                   viewBox="0 0 24 24" 
                   stroke-width="1.5" 
                   stroke="currentColor" 
                   class="size-6"
                   >
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>

                </label>
            
        </div>
        </fieldset>
    </form>
    </footer>
  )
}
