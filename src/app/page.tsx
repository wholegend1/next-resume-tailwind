"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import SEO from "./components/SEO";
import resume from "../../data/profile.json";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Education from "./components/Education";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init(); // 初始化 AOS
  }, []);
  return (
    <main className="antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5">
      <SEO title="Resume" />
      <div className="container mx-auto shadow bg-white py-5 px-10">
        <Header
          contacts={resume.contact}
          name={resume.fullname}
          role={resume.role}
        />
        <Summary data={resume.summary} />
        <div className="border-b border-neutral-300 pb-2 my-5 lg:flex">
          <div className="lg:w-2/3 lg:pr-8">
            {resume.experience && <Experience data={resume.experience} />}
            {resume.projects && <Projects data={resume.projects} />}
          </div>
          <div className="lg:w-1/3 lg:pl-8 lg:border-l lg:border-neutral-300 ">
            {resume.skills && <Skills data={resume.skills} />}
            {resume.education && <Education data={resume.education} />}
          </div>
        </div>
        <Footer social={resume.social} />
      </div>
    </main>
  );
}
