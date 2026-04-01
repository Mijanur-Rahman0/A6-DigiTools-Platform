import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral text-base-content">
      <div className="footer sm:footer-horizontal bg-neutral text-neutral-content p-20">
        <nav className="">
          <h1 className="text-4xl font-bold mb-2">DigiTools</h1>
          <p>
            Premium digital tools for creators,
            <br /> professionals, and businesses. Work smarter <br /> with our
            suite of powerful tools.
          </p>
        </nav>
        <nav className="">
          <h6 className="footer-title font-medium text-xl">Product</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Templates</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav>
          <h6 className="footer-title font-medium text-xl">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
        </nav>
        <nav>
          <h6 className="footer-title font-medium text-xl">Resources</h6>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Community</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title font-medium text-xl">Social Links</h6>
          <div className="flex gap-1">
            <div className="relative">
              <p className="w-7 h-7 bg-white rounded-full"></p>
              <a href="">
                <i class="fa-brands fa-instagram absolute text-black top-1.5 left-1.5 "></i>
              </a>
            </div>
            <div className="relative">
              <p className="w-7 h-7 bg-white rounded-full"></p>
              <a href="">
                <i class="fa-brands fa-facebook absolute text-black top-1.5 left-1.5 "></i>
              </a>
            </div>
            <div className="relative">
              <p className="w-7 h-7 bg-white rounded-full"></p>
              <a href="">
                <i class="fa-brands fa-x-twitter absolute text-black top-1.5 left-1.5 "></i>
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div className="bg-neutral max-w-350 mx-auto">
        <div className="flex justify-between gap-10  bg-neutral text-base-content p-4">
          <aside>
            <p>
              &copy; {new Date().getFullYear()} Digitools. All rights reserved.
            </p>
          </aside>
          <div className="flex gap-4">
            <a href="">Privacy Policy </a>
            <a href="">Terms of Service</a>
            <a href="">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
