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
        image: "team/ac1.jpg",
        email: "siddheshdawange12@gmail.com",
        instagram: "https://instagram.com/siddhesh_30",
      },
      {
        id: "4",
        name: "Krushna Bankar",
        image: "team/ac2.jpg",
        email: "",
        instagram: "",
      }
    ],
  },
  {
    id: "design",
    title: "Design",
    people: [
      {
        id: "5",
        name: "Harshal Neharkar",
        image: "team/d1.jpg",
        email: "neharkarharshal25@gmail.com",
        instagram: "https://instagram.com/harshal_neharkar",
      },
      {
        id: "6",
        name: "Rohit Chavan",
        image: "team/d2.jpg",
        email: "chavanrs23.comp@coeptech.ac.in",
        instagram: "https://www.instagram.com/its_rohit_chavan05",
      },
      {
        id: "7",
        name: "Aashutosh Gudnawar",
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
        id: "8",
        name: "Kadam Abhinav Ramesh",
        image: "team/esm1.jpg",
        email: "kadamar23.mech@coeptech.ac.in",
        instagram: "https://instagram.com/abhinav.kadam47",
      },
      {
        id: "9",
        name: "Harsh Khandare",
        image: "team/esm2.jpg",
        email: "khandareha23.mech@coeptech.ac.in",
        instagram: "https://instagram.com/harshkhandare09",
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    people: [
      {
        id: "10",
        name: "Archit Shelar",
        image: "team/i1.jpg",
        email: "architshelar6@gmail.com",
        instagram: "https://instagram.com/fr.archit_shelar",
      },
      {
        id: "11",
        name: "Yash Ekhande",
        image: "team/i2.jpg",
        email: "ekhandeys23.comp@coeptech.ac.in",
        instagram: "https://instagram.com/michtohyashhh",
      }
    ],
  },
  {
    id: "vfx",
    title: "VFX",
    people: [
      {
        id: "12",
        name: "Pruthviraj Govind Chavan",
        image: "team/vfx1.jpg",
        email: "chavanpg23.elec@coeptech.ac.in",
        instagram: "https://www.instagram.com/pruthvirajchavan2005",
      },
      {
        id: "13",
        name: "Rupesh Sanap",
        image: "team/vfx2.jpg",
        email: "sanapstories@gmail.com",
        instagram: "https://instagram.com/sanapstories",
      },
      {
        id: "14",
        name: "Gourav Dhavane",
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
        id: "15",
        name: "Tanushree Gangurde",
        image: "team/m1.jpg",
        email: "gangurdetanushree@gmail.com",
        instagram: "https://instagram.com/tanu_shreee08",
      },
      {
        id: "16",
        name: "Janhavi Chemate",
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
        id: "17",
        name: "Sanket Jagdale",
        image: "team/p1.jpg",
        email: "sanketjagdale9850@gmail.com",
        instagram: "https://instagram.com/sanket_jagdale_05",
      },
      {
        id: "18",
        name: "Advay Harde",
        image: "team/p2.jpg",
        email: "advayharde26@gmail.com",
        instagram: "https://instagram.com/advayyharde",
      },
    ],
  },
  {
    id: "refreshment",
    title: "Refreshment",
    people: [
      {
        id: "19",
        name: "Prem Lokhande",
        image: "team/r1.jpg",
        email: "lokhandepv23.mech@coeptech.ac.in",
        instagram: "",
      },
      {
        id: "20",
        name: "Sarthak Godge",
        image: "team/r2.jpg",
        email: "",
        instagram: "",
      },
      {
        id: "21",
        name: "Siddhesh Nanaware",
        image: "team/r3.jpg",
        email: "sdnanaware10@gmail.com",
        instagram: "https://instagram.com/siddhesh_1009",
      },
    ],
  },
  {
    id: "sponsorship",
    title: "Sponsorship",
    people: [
      {
        id: "22",
        name: "Mruganksha Kudake",
        image: "team/s1.jpg",
        email: "kudakemv23.comp@coeptech.ac.in",
        instagram: "",
      },
      {
        id: "23",
        name: "Nidhi Gohel",
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
        id: "24",
        name: "Shrawan kolekar",
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
        id: "25",
        name: "Aarya Sontakke",
        image: "team/a1.jpg",
        email: "aaryasontakke.0103@gmail.com",
        instagram: "https://instagram.com/r.ya.underscore",
      },
    ],
  },
  {
    id: "safety",
    title: "Safety",
    people: [
      {
        id: "26",
        name: "Sanskruti Mane",
        image: "team/sf1.jpg",
        email: "manesv23.civil@coeptech.ac.in",
        instagram: "https://instagram.com/sanskruti_010",
      },
      {
        id: "27",
        name: "Pratik Jadhav",
        image: "team/sf2.jpg",
        email: "pratik108jadhav108@gmail.com",
        instagram: "https://instagram.com/pratikjadhav.108",
      },
    ],
  },
  {
    id: "decor",
    title: "Decor",
    people: [
      {
        id: "28",
        name: "Sangram Chavan",
        image: "team/dc1.jpg",
        email: "",
        instagram: "",
      },
    ],
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-400 mb-4">
            Our Team
          </p>
          <h2 className="text-5xl md:text-6xl font-serif text-base-content">
            The 98th Core
          </h2>
        </header>

        <div className="space-y-24 flex flex-col items-center w-full">
          {teamData.map((dept) => (
            <div key={dept.id} className="w-full flex flex-col items-center">
              <div className="flex items-center justify-center gap-6 mb-12 w-full max-w-5xl">
                <div className="h-[1px] flex-grow bg-stone-300"></div>
                <h3 className="text-xl font-serif italic bg-base-200 whitespace-nowrap uppercase tracking-widest">
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
                      <h4 className="text-lg font-serif text-base-content leading-tight uppercase">
                        {p.name}
                      </h4>

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
