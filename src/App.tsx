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
  XCircle
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
            Instructions to Selected Participants
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Welcome to MKCE Karur. Please read the guidelines for the 30-hour hackathon carefully.
          </p>
        </motion.header>

        {/* Critical Alert */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-violet-50 border-l-4 border-violet-500 p-6 rounded-r-xl shadow-sm flex gap-4 items-start"
        >
          <AlertTriangle className="text-violet-600 shrink-0 mt-0.5" size={24} />
          <div>
            <h3 className="font-bold text-violet-900 text-lg mb-1">Important Notice</h3>
            <p className="text-violet-800">
              All registered teams must report at the venue on time. Registration confirmation is subject to <strong>physical verification</strong> at the desk.
            </p>
          </div>
        </motion.div>

        {/* Registration & ID */}

          <Section title="Registration & ID" icon={IdCard}>
            <div className="space-y-4">
              <p>
                Verification is mandatory for entry. Please ensure you have the following ready at the registration desk:
              </p>
              <ul className="bg-white border border-slate-100 rounded-xl divide-y divide-slate-100">
                <li className="p-4 flex gap-3 items-center">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  <span className="font-medium text-slate-900">Original College ID Card</span>
                </li>
                <li className="p-4 flex gap-3 items-center">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  <span className="font-medium text-slate-900">Printed Project Abstract</span>
                </li>
              </ul>
              <p className="text-sm text-slate-500 italic mt-2">
                * All team members must be physically present for verification.
              </p>
            </div>
          </Section>

        {/* Project Abstract - Mandatory */}
        <Section title="Project Abstract (Mandatory)" icon={FileText} className="border-l-4 border-l-violet-500">
          <div className="space-y-4">
            <p className="font-medium text-slate-900">
              Each team must bring one printed (hard) copy of their Project Abstract. This will be verified during registration.
            </p>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
              <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-3">The abstract must clearly mention:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"/>Project Title</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"/>Team Members’ Names</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"/>College Name</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"/>Problem Statement</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"/>Proposed Solution</div>
              </div>
            </div>
            <p className="text-rose-600 text-sm flex items-center gap-2">
              <AlertTriangle size={16} />
              Teams failing to submit the hard copy may not be permitted for evaluation.
            </p>
          </div>
        </Section>

        {/* Mandatory Items */}
        <Section title="Items to be Brought" icon={CheckSquare}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            <ul className="space-y-3">
              <ListItem>Personal laptop with charger</ListItem>
              <ListItem>Extension board / multi-plug (compulsory)</ListItem>
              <ListItem>All necessary electronic components / hardware</ListItem>
              <ListItem>One printed copy of the Project Abstract</ListItem>
              <ListItem>Soft copy of project files (backup)</ListItem>
              <ListItem>College ID card (original)</ListItem>
            </ul>
            <ul className="space-y-3 mt-3 md:mt-0">
              <ListItem>Notebook and pen</ListItem>
              <ListItem>Mobile phone with charger</ListItem>
              <ListItem>Extra set of clothes for 2 days</ListItem>
              <ListItem>Personal medications (if applicable)</ListItem>
              <ListItem>Water bottle (recommended)</ListItem>
            </ul>
          </div>
        </Section>

        {/* Volunteer Support */}
        <Section title="Team Support & Volunteers" icon={Users}>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 space-y-4">
              <p>One volunteer will be allocated to each team to provide guidance and support.</p>
              <ul className="space-y-2">
                <li className="flex gap-2 items-start text-sm text-slate-700">
                  <CheckCircle2 size={16} className="mt-0.5 text-violet-500 shrink-0"/>
                  <span>Guide the team to the food venue as per schedule</span>
                </li>
                <li className="flex gap-2 items-start text-sm text-slate-700">
                  <CheckCircle2 size={16} className="mt-0.5 text-violet-500 shrink-0"/>
                  <span>Assist in locating the allocated hostel room</span>
                </li>
                <li className="flex gap-2 items-start text-sm text-slate-700">
                  <CheckCircle2 size={16} className="mt-0.5 text-violet-500 shrink-0"/>
                  <span>Provide basic coordination support</span>
                </li>
              </ul>
              <p className="text-sm text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
                Teams are advised to coordinate with their assigned volunteer for any venue-related assistance.
              </p>
            </div>
          </div>
        </Section>

        {/* Cultural Program */}
        <Section title="Cultural Program" icon={Music} className="bg-gradient-to-r from-violet-50 to-white border-violet-100">
          <div className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="font-bold text-violet-900 text-lg">Refreshing Culturals</h3>
                <p className="text-violet-700">Organized by the MKCE Cultural Club</p>
              </div>
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-violet-100 text-violet-800 font-mono text-sm">
                26.02.2026 • 6:00 PM - 8:30 PM
              </div>
            </div>
            
            <div className="bg-white/60 p-4 rounded-xl border border-violet-100">
              <p className="font-medium text-violet-900 mb-2 flex items-center gap-2">
                <Mic2 size={18} /> Participant Involvement
              </p>
              <p className="text-slate-600 text-sm mb-3">
                Interested participants may join the club for Singing, Dancing, Instrumental performances, etc.
              </p>
              <div className="flex gap-2 items-start text-xs text-violet-800 bg-violet-50 p-2 rounded">
                <AlertTriangle size={14} className="mt-0.5 shrink-0"/>
                <span>Must confirm participation with the organizing team/volunteer <strong>before</strong> the start of the event.</span>
              </div>
            </div>
          </div>
        </Section>

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

        {/* Guidelines & Dress Code */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Section title="Participation Guidelines" icon={ClipboardList}>
            <ul className="space-y-3">
              <ListItem>Teams must remain present throughout the 30-hour duration.</ListItem>
              <ListItem>Abstract verification will be done during registration.</ListItem>
              <ListItem>Judges’ decisions will be final and binding.</ListItem>
              <ListItem>Any misconduct or violation of event rules may lead to disqualification.</ListItem>
              <ListItem>Participants are responsible for the safety of their personal belongings.</ListItem>
            </ul>
          </Section>

          <Section title="Dress Code" icon={Shirt}>
            <p>
              Participants may wear attire of their choice. <span className="font-medium text-slate-900">Comfortable clothing is recommended</span> considering the 30-hour duration of the event.
            </p>
          </Section>
        </div>

        {/* Certification */}
        <Section title="Certification" icon={Award} className="bg-gradient-to-br from-violet-50 to-white border-violet-100">
          <div className="flex gap-4 items-start">
            <div className="flex-1">
              <p className="text-violet-900 font-medium text-lg mb-2">
                Eligibility for Certificates
              </p>
              <p className="text-violet-800/80">
                Certificates will be issued <strong>only</strong> to participants who are physically present throughout the hackathon and valedictory session.
              </p>
            </div>
            <Award className="text-violet-300 hidden sm:block" size={64} strokeWidth={1} />
          </div>
        </Section>

        <footer className="text-center text-slate-400 text-sm py-8">
          <p>© 2026 Aaroh Event Committee. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}
