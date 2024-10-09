import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assests/Header/Header_Logo.png';
import { FaAlignJustify, FaTimes } from 'react-icons/fa';
import React, { useState, useEffect, useRef } from 'react';
import { Dropdown, Button } from "flowbite-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();


    const [user, setUser] = useState({
        username: "",
        name: ""
    });

    const handleClick = () => setMenuOpen(prevMenuOpen => !prevMenuOpen);

    const handleOutsideClick = (event) => {
        if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
        if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick); //??
        };
    }, [menuOpen, isOpen]);

    const toggleMenu = (event) => {
        event.stopPropagation(); // Ngăn chặn sự kiện truyền lên các phần tử cha
        setIsOpen(prev => !prev);
    };


    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('users'));

        if (items) {
            toast.success("Login success");
            setUser(items);
        }
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    }
    return (
        <>
            <ToastContainer />
            <header className='max-w-screen-2xl font-poppins mx-auto'>
                <div className='max-w-[1188px] mx-auto flex pl-[20px] pr-[24px] justify-between pt-[41px]'>
                    <div>
                        <img className='max-lg:w-[100%]' src={logo} alt="abc" />
                    </div>
                    <div ref={menuRef} className={`pt-[17px] absolute max-lg:left-0 max-lg:w-full max-lg:bg-gray-100 max-lg:shadow-lg max-lg:transition-all max-lg:duration-300 ${menuOpen ? 'top-[0px]' : '-top-[600px]'} lg:static`}>
                        <ul onClick={() => setMenuOpen(false)} className='flex gap-[45px] max-lg:flex-col max-lg:w-[100%]'>
                            <li className='max-lg:w-[100%] max-lg:text-center max-lg:pt-[50px] group relative flex justify-center max-lg:max-h-[300px] max-lg:border-b max-lg:border-gray-300 max-lg:pb-2'>
                                <button onClick={toggleMenu} className='no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B] whitespace-nowrap cursor-pointer'>
                                    Home +
                                </button>
                                <div className={`absolute left-1/2 max-lg:left-2/3 transform -translate-x-1/2 mt-2 w-[150px] bg-white rounded-md shadow-lg transition-opacity duration-300 ${isOpen ? 'block' : 'hidden'} max-lg:z-10`}>
                                    <ul>
                                        <li>
                                            <Link to='/homemain' className='block px-4 py-2 text-base text-[#8B8B8B] hover:bg-[#FF64AE] hover:text-white rounded-md'>
                                                Home1
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/home' className='block px-4 py-2 text-base text-[#8B8B8B] hover:bg-[#FF64AE] hover:text-white rounded-md'>
                                                Home2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/team' className='block px-4 py-2 text-base text-[#8B8B8B] hover:bg-[#FF64AE] hover:text-white rounded-md'>
                                                Team
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>


                            <li className="max-lg:w-[100%] max-lg:text-center max-lg:border-b max-lg:border-gray-300 max-lg:pb-2">
                                <Link to='/about' className='max-lg:my-1 max-lg:mx-2 no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B] -ml-[6px]'>About</Link>
                            </li>
                            <li className="max-lg:w-[100%] max-lg:text-center max-lg:border-b max-lg:border-gray-300 max-lg:pb-2">
                                <Link to='/service' className='max-lg:my-1 max-lg:mx-2 no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B]'>Service</Link>
                            </li>
                            <li className="max-lg:w-[100%] max-lg:text-center max-lg:border-b max-lg:border-gray-300 max-lg:pb-2">
                                <Link to='/gallery' className='max-lg:my-1 max-lg:mx-2 no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B]'>Gallery</Link>
                            </li>
                            <li className="max-lg:w-[100%] max-lg:text-center max-lg:border-b max-lg:border-gray-300 max-lg:pb-2">
                                <Link to='/blog' className='max-lg:my-1 max-lg:mx-2 no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B]'>Blog</Link>
                            </li>
                            <li className='pl-[8px] pt-[1px] max-lg:w-[100%] max-lg:text-center max-lg:pb-[50px] max-lg:border-b max-lg:border-gray-300 max-lg:pb-2'>
                                <Link to='/contact' className='py-3.5 px-10 bg-[#FF64AE] rounded-full text-white text-base tracking-[1.6px] font-semibold'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='text-[25px] lg:hidden cursor-pointer pt-[18px]' onClick={handleClick}>
                        {menuOpen ? <FaTimes /> : <FaAlignJustify />}
                    </div>

                    <div>
                        <Dropdown label="Dropdown button" dismissOnClick={false}>
                            {user && <>
                                <Dropdown.Item>{user.name}</Dropdown.Item>
                                <Dropdown.Item>{user.username}</Dropdown.Item>
                                <Dropdown.Item></Dropdown.Item>
                                <Dropdown.Item><Button onClick={handleLogout} color="gray">Logout</Button></Dropdown.Item>
                            </>}
                        </Dropdown>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;

