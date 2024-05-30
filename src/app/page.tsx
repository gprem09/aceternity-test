import React from 'react';
import { Navbar } from '../components/navbar';
import { Lamp } from '../components/hero';
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Lamp />
    </div>
  );
}
