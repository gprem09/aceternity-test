import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-transparent p-4">
            <div className="flex items-center ml-52">
                <a href="#" className="text-white mx-5">Gnanavel Premnath</a>
                <a href="#" className="text-white mx-5">Home</a>
                <a href="#" className="text-white mx-5">About Me</a>
                <a href="#" className="text-white mx-5">Experience</a>
                <a href="#" className="text-white mx-5">Project</a>
            </div>
            <div className="flex items-center mr-52">
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
