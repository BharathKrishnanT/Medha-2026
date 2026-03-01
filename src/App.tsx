/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  IdCard, 
  CheckSquare, 
  Shirt, 
  ClipboardList, 
  Utensils, 
  Award, 
  AlertTriangle,
  Clock,
  CheckCircle2,
  FileText,
  Users,
  Music,
  Navigation,
  ExternalLink,
  Mic2,
  XCircle,
  Bus
} from 'lucide-react';
import { motion } from 'motion/react';

const Section = ({ title, icon: Icon, children, className = "" }: { title: string, icon: any, children: React.ReactNode, className?: string }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden ${className}`}
  >
    <div className="p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
          <Icon size={24} strokeWidth={2} />
        </div>
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      </div>
      <div className="text-slate-600 leading-relaxed">
        {children}
      </div>
    </div>
  </motion.section>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 mb-3 last:mb-0">
    <div className="mt-1.5 min-w-1.5 h-1.5 rounded-full bg-indigo-500" />
    <span>{children}</span>
  </li>
);

const TimeBlock = ({ label, time, date }: { label: string, time: string, date?: string }) => (
  <div className="flex flex-col p-4 bg-slate-50 rounded-xl border border-slate-100">
    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">{label}</span>
    <div className="flex flex-col">
      <span className="font-mono text-lg font-medium text-slate-900">{time}</span>
      {date && <span className="text-sm text-slate-500">{date}</span>}
    </div>
  </div>
);

const LiveMap = () => {
  const [activeRoute, setActiveRoute] = useState<'route1' | 'route2'>('route1');

  // Using Paramathi Velur as the destination based on "Namakkal to Velur to College"
  // and Karur/Namakkal as start points.
  const getMapSrc = () => {
    if (activeRoute === 'route1') {
      // Karur -> Velur
      return "https://maps.google.com/maps?saddr=Karur&daddr=Paramathi+Velur&output=embed";
    } else {
      // Namakkal -> Velur
      return "https://maps.google.com/maps?saddr=Namakkal&daddr=Paramathi+Velur&output=embed";
    }
  };

  return (
    <div className="bg-slate-100 rounded-xl overflow-hidden border border-slate-200 relative h-80 sm:h-96 w-full mb-6">
       {/* Map UI controls */}
       <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          <button
            onClick={() => setActiveRoute('route1')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg shadow-sm transition-all border ${activeRoute === 'route1' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
          >
            Route 1: Karur
          </button>
          <button
            onClick={() => setActiveRoute('route2')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg shadow-sm transition-all border ${activeRoute === 'route2' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
          >
            Route 2: Namakkal
          </button>
       </div>

       <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={getMapSrc()}
        title="Live Google Map"
        className="w-full h-full"
       ></iframe>
       
       <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-2 text-center text-[10px] text-slate-500 border-t border-slate-200">
         * Map shows general route direction. Use the links below for precise navigation.
       </div>
    </div>
  )
}

const Logo = () => (
  <div className="flex items-baseline tracking-tighter select-none">
    <span className="text-3xl md:text-5xl font-bold text-slate-800">MULTI</span>
    <span className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-violet-600 to-fuchsia-500">VERSE</span>
    <span className="text-3xl md:text-5xl font-bold text-violet-600">'26</span>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 mb-12"
        >
          <div className="flex justify-center mb-2">
            <Logo />
          </div>
          
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium border border-violet-200">
            AAROH • National Level 30-Hour Hackathon
          </div>
          
          <h1 className="text-2xl md:text-3xl font-medium text-slate-600 tracking-tight">
            Location & Route Details
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            MKCE Karur
          </p>
        </motion.header>













        {/* Route Details */}
        <Section title="Route Details" icon={Navigation}>
          <p className="mb-4 text-slate-600">
            Participants traveling from different locations may use the following Google Maps routes:
          </p>
          
          <LiveMap />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href="https://maps.app.goo.gl/pMawDgs5gv4ueRZBA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-slate-50 hover:bg-violet-50 border border-slate-200 hover:border-violet-200 rounded-xl transition-colors group"
            >
              <div className="p-2 bg-white rounded-lg shadow-sm text-slate-400 group-hover:text-violet-500 transition-colors">
                <MapPin size={20} />
              </div>
              <div className="flex-1">
                <span className="block text-xs font-semibold uppercase text-slate-400 group-hover:text-violet-400">Route 1</span>
                <span className="font-medium text-slate-900 group-hover:text-violet-900">From Karur</span>
              </div>
              <ExternalLink size={16} className="text-slate-300 group-hover:text-violet-400" />
            </a>

            <a 
              href="https://maps.app.goo.gl/74q59SriBdWVL1WR6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-slate-50 hover:bg-violet-50 border border-slate-200 hover:border-violet-200 rounded-xl transition-colors group"
            >
              <div className="p-2 bg-white rounded-lg shadow-sm text-slate-400 group-hover:text-violet-500 transition-colors">
                <MapPin size={20} />
              </div>
              <div className="flex-1">
                <span className="block text-xs font-semibold uppercase text-slate-400 group-hover:text-violet-400">Route 2</span>
                <span className="font-medium text-slate-900 group-hover:text-violet-900">Namakkal → Velur</span>
              </div>
              <ExternalLink size={16} className="text-slate-300 group-hover:text-violet-400" />
            </a>
          </div>
          <div className="mt-4 flex gap-2 items-start text-sm text-slate-500">
            <Clock size={16} className="mt-0.5 shrink-0"/>
            <p>Start early to ensure arrival before 8:30 AM. Check traffic conditions in advance.</p>
          </div>
        </Section>

        {/* Bus Details */}
        <Section title="Bus Details" icon={Bus}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-violet-200 transition-colors">
              <div className="p-2 bg-violet-100 text-violet-600 rounded-lg shrink-0">
                <Bus size={20} />
              </div>
              <div>
                <p className="font-medium text-slate-900">Bus No. 1</p>
                <p className="text-sm text-slate-600">Board from Karur Old Bus Stand</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-violet-200 transition-colors">
              <div className="p-2 bg-violet-100 text-violet-600 rounded-lg shrink-0">
                <Bus size={20} />
              </div>
              <div>
                <p className="font-medium text-slate-900">Salem / Velur Bound Buses</p>
                <p className="text-sm text-slate-600">Board any bus towards Salem or Velur from Karur New Bus Stand</p>
              </div>
            </div>
          </div>
        </Section>

        <footer className="text-center text-slate-400 text-sm py-8">
          <p>© 2026 Aaroh Event Committee. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}
