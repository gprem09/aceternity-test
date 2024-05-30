import React from 'react';
import { Navbar } from '../components/navbar';
import { LampDemo } from '../components/hero';
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LampDemo />
    </div>
  );
}
