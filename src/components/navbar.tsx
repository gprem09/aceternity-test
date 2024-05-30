"use client";
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

export function Navbar() {
    return (
        <nav className="absolute top-0 left-0 w-full flex bg-transparent p-4 z-10">
            <div className="hidden sm:flex items-center lg:ml-36">
                <a className="text-white mx-3">Gnanavel Premnath</a>
                <a className="text-white mx-2">Home</a>
                <a className="text-white mx-2">About</a>
                <a className="text-white mx-2">Experience</a>
                <a className="text-white mx-2">Projects</a>
            </div>
            <div className="ml-auto flex items-center lg:mr-40">
                <a href="mailto:gpa21@sfu.ca" className="text-white mx-2">
                    <IoMdMail className="w-5 h-5" />
                </a>
                <a href="https://github.com/gprem09" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/gnanavel-premnath-b27a53235/" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="w-5 h-5" />
                </a>
            </div>
        </nav>
    );
}
