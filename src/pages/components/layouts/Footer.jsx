const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-14 pb-8 shadow-inner border-t-4 border-orange-500">

      <div className="container mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-14">
          
          <div>
            <div className="flex items-start space-x-5 mb-6">
              <img
                src="/images/logo.png"
                alt="Government Logo"
                className="w-28 h-28 object-contain"
              />

              <div className="mt-1">
                <p className="text-[15px] font-semibold text-orange-400 mb-1">
                  अरुणाचल प्रदेश सरकार
                </p>
                <p className="text-sm font-bold uppercase tracking-wide">
                  Department of Industries
                </p>
                <p className="text-xs text-gray-400">
                  Government of Arunachal Pradesh
                </p>
              </div>
            </div>

            <div className="space-y-2 text-sm text-gray-300">
              <p><strong className="text-orange-400">Phone:</strong> +91-XXXX-XXXXXX</p>
              <p><strong className="text-orange-400">Email:</strong> industries[at]arunachal[dot]gov[dot]in</p>
              <p><strong className="text-orange-400">Location:</strong> Itanagar, Arunachal Pradesh</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-xl text-orange-400 border-b border-gray-700 inline-block pb-1">
              IMPORTANT LINKS
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              
              <ul className="space-y-3 text-sm">
                {["Archive", "Terms & Conditions", "FAQ", "Help"].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="flex items-center text-gray-300 hover:text-orange-400 transition-all"
                    >
                      <i className="fas fa-chevron-right text-xs mr-2"></i>{item}
                    </a>
                  </li>
                ))}
              </ul>

              <ul className="space-y-3 text-sm">
                {["Disclaimer", "Feedback", "Contact Us", "Website Policy"].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="flex items-center text-gray-300 hover:text-orange-400 transition-all"
                    >
                      <i className="fas fa-chevron-right text-xs mr-2"></i>{item}
                    </a>
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Government of Arunachal Pradesh, Department of Industries.
              <br className="md:hidden" /> All Rights Reserved.
            </p>

            <div className="flex space-x-6">
              {[
                { src: "/images/social media/Facebook-logo.png", alt: "Facebook" },
                { src: "/images/social media/x logo.png", alt: "X" },
                { src: "/images/social media/Instagram_icon.png", alt: "Instagram" }
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:scale-110 transition-transform"
                >
                  <img
                    className="w-10 h-10"
                    src={icon.src}
                    alt={icon.alt}
                  />
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
