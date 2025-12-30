"use client";

import Section from "./Section";
import Image from "next/image";
import { Mail, Instagram } from "lucide-react";

const teamData = [
  {
    "id": "regatta-secretary",
    "title": "REGATTA SECRETARY",
    "people": [
      { "id": "1", "name": "YUVRAJ FULSOUNDAR", "position": "Secretary", "image": "team/rs.jpg", "email": "fulsoundaryp23.elec@coeptech.ac.in", "instagram": "https://www.instagram.com/yuvrajfulsoundar" }
    ]
  },
  {
    "id": "regatta-chief-coordinator",
    "title": "Regatta Chief Coordinator",
    "people": [
      { "id": "2", "name": "Mangesh Patil", "position": "Chief Coordinator", "image": "team/rcc.jpg", "email": "patilmangeshguruling03@gmail.com", "instagram": "https://instagram.com/mangeshpatil03" }
    ]
  },
  {
    "id": "accounts",
    "title": "Account and Documentation",
    "people": [
      { "id": "3", "name": "Siddhesh Dawange", "position": "Account and Documentation", "image": "team/ac1.jpg", "email": "siddheshdawange12@gmail.com", "instagram": "https://instagram.com/siddhesh_30" }
    ]
  },
  {
    "id": "design",
    "title": "Design",
    "people": [
      { "id": "4", "name": "Harshal Neharkar", "position": "Design", "image": "team/d1.jpg", "email": "neharkarharshal25@gmail.com", "instagram": "https://instagram.com/harshal_neharkar" },
      { "id": "5", "name": "Rohit Chavan", "position": "Design", "image": "team/d2.jpg", "email": "chavanrs23.comp@coeptech.ac.in", "instagram": "https://www.instagram.com/its_rohit_chavan05" },
      { "id": "6", "name": "Aashutosh Gudnawar", "position": "Design", "image": "team/d3.jpg", "email": "gudnawaraa23.instru@coeptech.ac.in", "instagram": "https://instagram.com/_ashu.g_" }
    ]
  },
  {
    "id": "esm",
    "title": "ESM",
    "people": [
      { "id": "6", "name": "Kadam Abhinav Ramesh", "position": "ESM", "image": "team/esm1.jpg", "email": "kadamar23.mech@coeptech.ac.in", "instagram": "https://instagram.com/abhinav.kadam47" },
      { "id": "7", "name": "Harsh Khandare", "position": "ESM", "image": "team/esm2.jpg", "email": "khandareha23.mech@coeptech.ac.in", "instagram": "https://instagram.com/harshkhandare09" }
    ]
  },
  {
    "id": "vfx",
    "title": "VFX",
    "people": [
      { "id": "8", "name": "Pruthviraj Govind Chavan", "position": "VFX", "image": "team/vfx1.jpg", "email": "chavanpg23.elec@coeptech.ac.in", "instagram": "https://www.instagram.com/pruthvirajchavan2005" },
      { "id": "9", "name": "Rupesh Sanap", "position": "VFX", "image": "team/vfx2.jpg", "email": "sanapstories@gmail.com", "instagram": "https://instagram.com/sanapstories" }
    ]
  },
  {
    "id": "media",
    "title": "Media",
    "people": [
      { "id": "10", "name": "Tanushree Gangurde", "position": "Media", "image": "team/m1.jpg", "email": "gangurdetanushree@gmail.com", "instagram": "https://instagram.com/tanu_shreee08" },
      { "id": "11", "name": "Janhavi Chemate", "position": "Media", "image": "team/m2.jpg", "email": "Chematejs23.plan@coeptech.ac.in", "instagram": "https://instagram.com/janhavii_.fr" }
    ]
  }
];

export default function TeamSection() {
  return (
    <Section id="team" className="py-12 pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <header className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight">
            Meet Our Team
          </h2>
        </header>

        <div className="space-y-24">
          {teamData.map((dept) => (
            <div key={dept.id}>
              <div className="grid gap-x-8 gap-y-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center justify-items-center">
                {dept.people.map((p) => (
                  <article key={p.id} className="flex flex-col items-center w-full max-w-[280px]">
                    
                    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 280px"
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-500 hover:scale-105"
                        unoptimized
                      />
                    </div>

                    <div className="mt-6 text-center space-y-1">
                      <h3 className="text-lg font-medium text-gray-900 tracking-tight">
                        {p.name}
                      </h3>
                      <p className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold">
                        {p.position}
                      </p>
                    </div>

                    <div className="mt-5 flex gap-3">
                      {p.email && (
                        <a href={`mailto:${p.email}`} className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-black hover:bg-gray-100 transition-all border border-gray-100">
                          <Mail size={15} strokeWidth={1.5} />
                        </a>
                      )}
                      {p.instagram && (
                        <a href={p.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-black hover:bg-gray-100 transition-all border border-gray-100">
                          <Instagram size={15} strokeWidth={1.5} />
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}