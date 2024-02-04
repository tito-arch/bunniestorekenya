"use client";

import Image from "next/image";
import Link from "next/link";
import evolution from "../public/assets/evolution.png";
import chat from "../public/assets/chat.png";
import app from "../public/assets/app.png";
import { FaStackOverflow } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { SlDocs } from "react-icons/sl";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Carousel
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Leads from "@/components/leads";

export default function Home() {
  const teamMembers = [
    {
      name: "Shadrack",
      role: "Technical Lead",
      imageUrl: "/assets/Mwangi-Shadrack.jpeg",
      githubUrl: "https://github.com/shadrackmwangi",
      linkedInUrl: "https://linkedin.com/in/shadrack-mwangi-55a8b1b2",
      xUrl: "",
    },
    {
      name: "Titus",
      role: "Head of Product Design",
      imageUrl: "/assets/Ihwagi-Titus.jpeg",
      githubUrl: "https://github.com/tito-arch",
      // stackOverflowUrl:
      //   "https://stackoverflow.com/users/14888787/ethical-hacker",
      linkedInUrl: "https://www.linkedin.com/in/ihwagi/",
      personalPage: "https://tito-arch.github.io/",
    },
    {
      name: "Muna",
      role: "Co-Founder",
      imageUrl: "/assets/Muna-Said.jpeg",
      githubUrl: "https://github.com/Munanom",
      stackOverflowUrl: "",
      linkedInUrl: "https://www.linkedin.com/in/muna-numan-495a37219/",
      xUrl: "",
    },
    {
      name: "Brenda",
      role: "Brand Manager",
      imageUrl: "/assets/Bree-Cropped.jpeg",
      githubUrl: "",
      stackOverflowUrl: "",
      linkedInUrl: "",
      xUrl: "",
    },
    {
      name: "Peter",
      role: "Frontend Developer",
      imageUrl: "/",
      githubUrl: "https://github.com/p3t3rkamau",
      stackOverflowUrl: "",
      linkedInUrl: "",
      xUrl: "",
    },
  ];

  const gradientStyle = {
    backgroundImage: "linear-gradient(to right, silver, black)",
    color: "transparent",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    fontWeight: "bold",
    fontSize: "2rem",
  };

  const scrollToLeads = () => {
    const leadsFormSection = document.getElementById("leads-form");

    if (leadsFormSection) {
      leadsFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <main className="flex min-h-screen flex-col p-5 gap-3 ">
        {/* Nav bar */}

        {/* Header */}
        <div style={gradientStyle} className="flex justify-center items-center">
          <p> Welcome to BunnieAbC</p>
        </div>
        <div className=" flex flex-col-reverse p-4 sm:flex-row gap-4 items-start mt-10 sm:p-8  lg:justify-around ">
          <div>
            <h1 className="text-4xl sm:text-5xl  font-bold text-gray-800 mt-8 sm:leading-[5rem]">
              Building scalable Apps for <br /> Small, Medium &amp; <br />
              Large Enterprises
            </h1>
            <p>We are pushing the advent of businesses to the web </p>
            <button
              onClick={scrollToLeads}
              className=" mx-auto sm:ml-0 flex items-center mt-4 justify-center rounded px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 active:scale-90 transition-transform duration-300"
            >
              Learn More
            </button>
          </div>
          <div className="mx:auto sm:mr-0">
            <Image
              src="/assets/next-v2.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
        {/* center div */}
        <div className="flex flex-col items-center p-2 my-3">
          <p className="sm:text-center text-2xl w-full sm:w-3/4 font-bold  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 sm:text-4xl">
            From crafting simple and intuitive web applications to sophisticated
            AI-powered customer care integrations, we redefine your digital
            presence.
          </p>
        </div>
        <hr />
        <div>
          <h2 className="text-center text-2xl font-bold text-gray-800">
            Let Your Customers Know You Mean Business
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-4 py-2">
          <div className="flex-1 flex flex-col items-center justify-center p-3 gap-2 border-2 rounded-lg border-gray-300 hover:border-pink-300 py-3 transform transition-transform duration-300 ease-in-out hover:-translate-y-1">
            {/* Image */}
            <Image src={evolution} alt="Evolution" width={100} height={100} />

            {/* Text */}
            <h2 className="mt-4 text-2xl font-bold text-gray-800">
              Experience the Evolution
            </h2>
            <p className="text-center border-b-0 border-t border-r border-l rounded-lg border-gray-300 py-3">
              Start with the simplicity of user-friendly web apps, tailored to
              your needs.
            </p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-3 gap-2  border-2 rounded-lg border-gray-300 hover:border-pink-300 py-3 transform transition-transform duration-300 ease-in-out hover:-translate-y-1">
            {/* Image */}
            <Image src={app} alt="Web App Expertise" width={100} height={100} />

            {/* Text */}
            <h2 className="mt-4 text-2xl font-bold text-gray-800">
              Web App Expertise
            </h2>
            <p className="text-center border-b-0 border-t border-r border-l rounded-lg border-gray-300 py-3">
              Unlock the potential of your business with our web app development
              service.
            </p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-3 gap-2  border-2 rounded-lg border-gray-300 hover:border-pink-300 py-3 transform transition-transform duration-300 ease-in-out hover:-translate-y-1">
            {/* Image */}
            <Image
              src={chat}
              alt="AI-Powered Customer Care"
              width={100}
              height={100}
            />

            {/* Text */}
            <h2 className="mt-4 text-2xl font-bold text-gray-800 ">
              AI-Powered Customer Care
            </h2>
            <p className="text-center border-b-0 border-t border-r border-l rounded-lg border-gray-300 py-3">
              Move beyond the basics. Elevate your customer interactions with
              AI-powered solutions from our partners.
            </p>
          </div>
        </div>

        <div className="w-full p-7 mx-0 bg-gradient-to-r from-black via-#C0C0C0 to-white">
          <h2 style={gradientStyle}>BunnieAbc</h2>
          <h3 style={gradientStyle}>Nrb, KE</h3>
        </div>
        {/* Accordion */}
        <div className="px-2" id="faq">
          <p className="text-center text-lg font-bold">
            Frequently Asked Questions
          </p>
          <Accordion type="single" collapsible className="sm:w-3/4 mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Can you redesign an existing website?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! We offer website redesign services to enhance the
                look, functionality, and user experience of existing websites.
                Contact us with details about your current site, and we can
                discuss the possibilities for improvement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Do you provide ongoing maintenance and support services?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer ongoing maintenance and support packages to ensure
                that your website remains secure, up-to-date, and optimized. Our
                team is available for troubleshooting, updates, and enhancements
                as needed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How can I request a quote for my project?
              </AccordionTrigger>
              <AccordionContent>
                To request a quote, please visit our Contact page or fill out
                the{" "}
                <a
                  href="#lead-form"
                  style={{
                    borderBottom: "4px solid green",
                  }}
                >
                  inquiry form below
                </a>
                . Provide as much detail as possible about your project, and our
                team will get back to you promptly with a customized quote.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What is the typical timeline for completing a web development
                project?
              </AccordionTrigger>
              <AccordionContent>
                Project timelines vary based on the complexity and scope of the
                project. We will provide you with a detailed project timeline
                during the initial consultation phase, outlining key milestones
                and deadlines.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What technologies do you specialize in?
              </AccordionTrigger>
              <AccordionContent>
                Next Js, React Js, Node Js, Express Js,Python, MongoDB,
                Firebase,
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex flex-col">
          <h2 className="pb-2 sm:pb-3 text-center text-3xl font-bold">
            Meet The Core Team
          </h2>
          <div className="hidden sm:mx-5 mx-auto md:flex overflow-x-auto justify-center gap-4 bg-gradient-to-r from-white via-transparent to-white py-6">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
          {/* New component */}

          <Carousel className="w-3/4 mx-auto max-w-sm sm:hidden">
            <CarouselContent className="-ml-1 mx-auto">
              {teamMembers.map((member, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <TeamCard {...member} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <Leads id="leads-form" />
      </main>
    </>
  );
}

// Co-Founders of Bunnie Abc card

const TeamCard = ({
  name,
  role,
  imageUrl,
  githubUrl,
  stackOverflowUrl,
  linkedInUrl,
  xUrl,
  personalPage,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mx-auto">
      <div className="relative mb-4 flex mx-auto">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={name}
            width={200}
            height={200}
            className="rounded-full"
          />
        )}
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="italic text-gray-600">{role}</p>
      </div>
      <div className="mt-4 flex justify-center">
        {stackOverflowUrl && (
          <a href={stackOverflowUrl} target="_blank">
            <FaStackOverflow size={24} />
          </a>
        )}
        {xUrl && (
          <a
            href="#"
            target="_blank"
            className="text-blue-500 hover:text-blue-700 mx-2"
          >
            <BsTwitterX size={24} />
          </a>
        )}
        {linkedInUrl && (
          <a
            href={linkedInUrl}
            target="_blank"
            className="text-blue-500 hover:text-blue-700 mx-2"
          >
            <FaLinkedin size={24} />
          </a>
        )}
        {personalPage && (
          <a
            href={personalPage}
            target="_blank"
            className="text-blue-500 hover:text-blue-700 mx-2"
          >
            <SlDocs size={24} />
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            className="text-black hover:text-blue-700 mx-2"
          >
            <FaGithub size={24} />
          </a>
        )}
      </div>
    </div>
  );
};
