import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h3 className="font-bold text-lg mb-2">About Us</h3>
            <p className="text-sm text-gray-400">
              Authorised Dealer of Herculese Fitness
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Contact Us</h3>
            <p className="text-sm text-gray-400">
              laxmanfitness@gmail.com <br />
              9388322422<br />
              8921135759<br />
              0487 2448030
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Visit Us</h3>
            <p className="text-sm text-gray-400">
              Opp.Valiyalukkal Temple, <br />
              P.O.Kanimangalam, <br />
              Thrissur-680027, <br />
              Kerala, India<br />
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2 text-center md:text-left">
            Our Location
          </h3>
          <iframe
            className="w-full h-64 rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7846.208892491293!2d76.20915578721866!3d10.492432129339745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f15f9e90e629%3A0xbb480ceb9c11e5fc!2sLaxman+Fitness!5e0!3m2!1sen!2sin!4v1534604625756"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
