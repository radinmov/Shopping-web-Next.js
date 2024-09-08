import React from 'react';
import DropdownFooter from '../dropdownFooter/DropdownFooter';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <DropdownFooter title="Support">
          <address className="not-italic mb-4">
            111 Bijoy sarani, Dhaka, <br />
            <Link href="/contact">
              <div className="hover:underline">Contact Us</div>
            </Link>
          </address>
          <p>+88015-88888-9999</p>
          <p><a href="mailto:exclusive@gmail.com" className="hover:underline">exclusive@gmail.com</a></p>
        </DropdownFooter>
        
        <DropdownFooter title="Account">
          <ul>
            <li className="mb-2">
              <Link href="/account">
                <div className="hover:underline">My Account</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/login">
                <div className="hover:underline">Login / Register</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/cart">
                <div className="hover:underline">Cart</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/wishlist">
                <div className="hover:underline">Wishlist</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/shop">
                <div className="hover:underline">Shop</div>
              </Link>
            </li>
          </ul>
        </DropdownFooter>

        <DropdownFooter title="Quick Link">
          <ul>
            <li className="mb-2">
              <Link href="/privacy-policy">
                <div className="hover:underline">Privacy Policy</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/terms">
                <div className="hover:underline">Terms Of Use</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/faq">
                <div className="hover:underline">FAQ</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/contact">
                <div className="hover:underline">Contact</div>
              </Link>
            </li>
          </ul>
        </DropdownFooter>
        
      </div>
      <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; Copyright Rimel 2022. All rights reserved</p>
        </div>
        <div className="flex space-x-4">
          <a href="#"><img src="data:image/png;base64,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" alt="QR Code" className="h-10" /></a>
          <a href="#"><img src="data:image/png;base64,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" alt="Google Play" className="h-10" /></a>
          <a href="#"><img src="data:image/png;base64,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" alt="App Store" className="h-10" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
