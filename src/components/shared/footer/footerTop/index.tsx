import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="bg-[#fff] p-10">
            <div data-aos="fade-up" className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10'>

                <div>
                    <h2 className="text-2xl font-bold"><span className="text-[#fd3d57]">RAF</span>CART</h2>
                    <p className='my-3 text-sm text-justify'>Lorem ipsum, or lipsum as it is sometimes  kno wn, is dummy text used in laying out  print, gra phic or web designs the passage.</p>
                    <h4 className='my-3 text-md text-black font-bold'>NEWSLETTER</h4>
                    <div className="flex w-full max-w-sm items-center">
                        <Input className='border border-[#fd3d57] placeholder:text-sm' type="email" placeholder="Enter email ..." />
                        <Button className='bg-[#fd3d57]' type="submit">Subscribe</Button>
                    </div>
                </div>

                <div>
                    <h4 className='text-md font-bold mt-2 mb-4'>MY ACCOUNT</h4>
                    <ul>
                        <li className='my-3 text-sm'>Orders</li>
                        <li className='my-3 text-sm'>Wishlist</li>
                        <li className='my-3 text-sm'>Track Order</li>
                        <li className='my-3 text-sm'>Manage Account</li>
                        <li className='my-3 text-sm'>Return Order</li>
                    </ul>
                </div>

                <div>
                    <h4 className='text-md font-bold mt-2 mb-4'>INFORMATION</h4>
                    <ul>
                        <li className='my-3 text-sm hover:underline hover:text-purple-700'><Link href='/about-us'>About Us</Link></li>
                        <li className='my-3 text-sm'>Return Policy</li>
                        <li className='my-3 text-sm'>Terms & condition</li>
                        <li className='my-3 text-sm hover:underline hover:text-purple-700'><Link href='/faq'>FAQ</Link></li>
                        <li className='my-3 text-sm hover:underline hover:text-purple-700'><Link href='/contact-us'>Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                <h4 className='text-md font-bold mt-2 mb-4'>CONTACT</h4>
                <ul>
                    <li className="flex gap-2 justify-start items-start my-3 text-sm">
                        <span className="mt-1"><FaMapMarkerAlt /></span>
                        <p className='text-justify'>Mohakhali, Dhaka, Bangladesh</p>
                    </li>
                    <li className="flex gap-2 justify-start items-start my-3 text-sm">
                        <span className="mt-1"><FaPhoneAlt /></span>
                        <p>+880 1310391739</p>
                    </li>
                    <li className="flex gap-2 justify-start items-start my-3 text-sm">
                        <span className="mt-1"><CiMail /></span>
                        <p>roy754712@gmail.com</p>
                    </li>
                </ul>
                <div className="flex gap-2">
                    <span className='p-2 bg-[#1773ea] text-white rounded-full cursor-pointer'><FaFacebookF /></span>
                    <span className='p-2 bg-[#d53982] text-white rounded-full cursor-pointer'><CiInstagram /></span>
                    <span className='p-2 bg-[#25d366] text-white rounded-full cursor-pointer'><FaWhatsapp /></span>
                    <span className='p-2 bg-[#0077b5] text-white rounded-full cursor-pointer'><FaLinkedin /></span>
                    
                </div>
            </div>

        </div>
        </div >
    );
};

export default Footer;