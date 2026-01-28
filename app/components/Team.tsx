"use client";

import Image from "next/image";
import { Mail, Instagram } from "lucide-react";

const teamData = [
  {
    id: "regatta-secretary",
    title: "REGATTA SECRETARY",
    people: [
      {
        id: "1",
        name: "YUVRAJ FULSOUNDAR",
        position: "Secretary",
        image: "team/rs.jpg",
        email: "fulsoundaryp23.elec@coeptech.ac.in",
        instagram: "https://www.instagram.com/yuvrajfulsoundar",
      },
    ],
  },
  {
    id: "regatta-chief-coordinator",
    title: "Regatta Chief Coordinator",
    people: [
      {
        id: "2",
        name: "Mangesh Patil",
        position: "Chief Coordinator",
        image: "team/rcc.jpg",
        email: "patilmangeshguruling03@gmail.com",
        instagram: "https://instagram.com/mangeshpatil03",
      },
    ],
  },
  {
    id: "accounts",
    title: "Account and Documentation",
    people: [
      {
        id: "3",
        name: "Siddhesh Dawange",
        position: "Account and Documentation",
        image: "team/ac1.jpg",
        email: "siddheshdawange12@gmail.com",
        instagram: "https://instagram.com/siddhesh_30",
      },
    ],
  },
  {
    id: "design",
    title: "Design",
    people: [
      {
        id: "4",
        name: "Harshal Neharkar",
        position: "Design",
        image: "team/d1.jpg",
        email: "neharkarharshal25@gmail.com",
        instagram: "https://instagram.com/harshal_neharkar",
      },
      {
        id: "5",
        name: "Rohit Chavan",
        position: "Design",
        image: "team/d2.jpg",
        email: "chavanrs23.comp@coeptech.ac.in",
        instagram: "https://www.instagram.com/its_rohit_chavan05",
      },
      {
        id: "6",
        name: "Aashutosh Gudnawar",
        position: "Design",
        image: "team/d3.jpg",
        email: "gudnawaraa23.instru@coeptech.ac.in",
        instagram: "https://instagram.com/_ashu.g_",
      },
    ],
  },
  {
    id: "esm",
    title: "ESM",
    people: [
      {
        id: "6",
        name: "Kadam Abhinav Ramesh",
        position: "ESM",
        image: "team/esm1.jpg",
        email: "kadamar23.mech@coeptech.ac.in",
        instagram: "https://instagram.com/abhinav.kadam47",
      },
      {
        id: "7",
        name: "Harsh Khandare",
        position: "ESM",
        image: "team/esm2.jpg",
        email: "khandareha23.mech@coeptech.ac.in",
        instagram: "https://instagram.com/harshkhandare09",
      },
    ],
  },
  {
    id: "vfx",
    title: "VFX",
    people: [
      {
        id: "8",
        name: "Pruthviraj Govind Chavan",
        position: "VFX",
        image: "team/vfx1.jpg",
        email: "chavanpg23.elec@coeptech.ac.in",
        instagram: "https://www.instagram.com/pruthvirajchavan2005",
      },
      {
        id: "9",
        name: "Rupesh Sanap",
        position: "VFX",
        image: "team/vfx2.jpg",
        email: "sanapstories@gmail.com",
        instagram: "https://instagram.com/sanapstories",
      },
      {
        id: "10",
        name: "Gourav Dhavane",
        position: "VFX",
        image: "team/vfx3.jpg",
        email: "dhavanegg23.elec@coeptech.ac.in",
        instagram: "https://instagram.com/gordey_1010",
      },
    ],
  },
  {
    id: "media",
    title: "Media",
    people: [
      {
        id: "11",
        name: "Tanushree Gangurde",
        position: "Media",
        image: "team/m1.jpg",
        email: "gangurdetanushree@gmail.com",
        instagram: "https://instagram.com/tanu_shreee08",
      },
      {
        id: "12",
        name: "Janhavi Chemate",
        position: "Media",
        image: "team/m2.jpg",
        email: "Chematejs23.plan@coeptech.ac.in",
        instagram: "https://instagram.com/janhavii_.fr",
      },
    ],
  },
  {
    id: "purchase",
    title: "Purchase",
    people: [
      {
        id: "13",
        name: "Sanket Jagdale",
        position: "Purchase",
        image: "team/p1.jpg",
        email: "sanketjagdale9850@gmail.com",
        instagram: "https://instagram.com/sanket_jagdale_05",
      },
      {
        id: "14",
        name: "Advay Harde",
        position: "Purchase",
        image: "team/p2.jpg",
        email: "advayharde26@gmail.com",
        instagram: "https://instagram.com/advayyharde",
      },
    ],
  },
  {
    id: "sponsorship",
    title: "Sponsorship",
    people: [
      {
        id: "15",
        name: "Mruganksha Kudake",
        position: "Sponsorship",
        image: "team/s1.jpg",
        email: "kudakemv23.comp@coeptech.ac.in",
        instagram: "",
      },
      {
        id: "16",
        name: "Nidhi Gohel",
        position: "Sponsorship",
        image: "team/s2.jpg",
        email: "nidhidg23.mfg@coeptech.ac.in",
        instagram: "https://instagram.com/nidhhi.04",
      },
    ],
  },
  {
    id: "events",
    title: "Events and Races",
    people: [
      {
        id: "17",
        name: "Shrawan kolekar",
        position: "Events and Races",
        image: "team/e1.jpg",
        email: "shrawankolekar07@gmail.com",
        instagram: "https://instagram.com/Shrawan3035",
      },
    ],
  },
  {
    id: "alumni",
    title: "Alumni Outreach Group",
    people: [
      {
        id: "18",
        name: "Aarya Sontakke",
        position: "Alumni Outreach Group",
        image: "team/a1.jpg",
        email: "aaryasontakke.0103@gmail.com",
        instagram: "https://instagram.com/r.ya.underscore",
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    people: [
      {
        id: "19",
        name: "Archit Shelar",
        position: "Infrastructure",
        image: "team/i1.jpg",
        email: "architshelar6@gmail.com",
        instagram: "https://instagram.com/fr.archit_shelar",
      },
      {
        id: "20",
        name: "Pratik Jadhav",
        position: "Infrastructure",
        image: "team/i2.jpg",
        email: "pratik108jadhav108@gmail.com",
        instagram: "https://instagram.com/pratikjadhav.108",
      },
    ],
  },
  {
    id: "safety",
    title: "Safety",
    people: [
      {
        id: "21",
        name: "Sanskruti Mane",
        position: "Safety",
        image: "team/sf1.jpg",
        email: "manesv23.civil@coeptech.ac.in",
        instagram: "https://instagram.com/sanskruti_010",
      },
    ],
  },
  {
    id: "refreshment",
    title: "Refreshment",
    people: [
      {
        id: "22",
        name: "Prem Lokhande",
        position: "Refreshment",
        image: "team/r1.jpg",
        email: "lokhandepv23.mech@coeptech.ac.in",
        instagram: "",
      },
      {
        id: "23",
        name: "Siddhesh Nanaware",
        position: "Refreshment",
        image: "team/r2.jpg",
        email: "sdnanaware10@gmail.com",
        instagram: "https://instagram.com/siddhesh_1009",
      },
    ],
  },
  {
    id: "decor",
    title: "Decor",
    people: [
      {
        id: "24",
        name: "Sangram Chavan",
        position: "Decor",
        image: "team/dc1.jpg",
        email: "",
        instagram: "",
      },
    ],
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-400 mb-4">
            Official Personnel
          </p>
          <h2 className="text-5xl md:text-6xl font-serif text-stone-900">
            The 98th Core
          </h2>
        </header>

        <div className="space-y-24 flex flex-col items-center w-full">
          {teamData.map((dept) => (
            <div key={dept.id} className="w-full flex flex-col items-center">
              <div className="flex items-center justify-center gap-6 mb-12 w-full max-w-5xl">
                <div className="h-[1px] flex-grow bg-stone-300"></div>
                <h3 className="text-xl font-serif italic text-stone-700 whitespace-nowrap uppercase tracking-widest">
                  {dept.title}
                </h3>
                <div className="h-[1px] flex-grow bg-stone-300"></div>
              </div>

              <div className="flex flex-wrap justify-center gap-10 w-full">
                {dept.people.map((p) => (
                  <article
                    key={p.id}
                    className="flex flex-col items-center w-[240px]"
                  >
                    <div className="relative w-full aspect-square border border-stone-800 bg-white p-2">
                      <div className="relative w-full h-full overflow-hidden">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <h4 className="text-lg font-serif text-stone-900 leading-tight uppercase">
                        {p.name}
                      </h4>
                      <p className="text-[10px] font-bold text-stone-400 tracking-[0.2em] mt-2">
                        {p.position}
                      </p>

                      <div className="mt-4 flex justify-center gap-4">
                        {p.email && (
                          <a
                            href={`mailto:${p.email}`}
                            className="text-stone-400 hover:text-stone-900 transition-colors"
                          >
                            <Mail size={16} />
                          </a>
                        )}
                        {p.instagram && (
                          <a
                            href={p.instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="text-stone-400 hover:text-stone-900 transition-colors"
                          >
                            <Instagram size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
