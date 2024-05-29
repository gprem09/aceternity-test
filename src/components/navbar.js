import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-transparent p-4">
            <div className="flex items-center">
                <a href="#" className="text-white mx-4">Gnanavel Premnath</a>
                <a href="#" className="text-white mx-4">Home</a>
                <a href="#" className="text-white mx-4">About Me</a>
                <a href="#" className="text-white mx-4">Experience</a>
                <a href="#" className="text-white mx-4">Project</a>
            </div>
            <div className="flex items-center">
                <a href="gpa21@sfu.ca" className="text-white mx-2">
                    <IoMdMail className="w-4 h-4" />
                </a>
                <a href="https://github.com/gprem09" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/gnanavel-premnath-b27a53235/" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="w-4 h-4" />
                </a>
            </div>
        </nav>
    );
}
