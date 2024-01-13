import UnsplashImage from "@/src/api/UnsplashImage";
import Image from "next/image";
import Link from "next/link";
import evolution from "../public/assets/evolution.png";
import chat from "../public/assets/chat.png";
import app from "../public/assets/app.png";
import logo from "../public/assets/logo.png";

export default function Home() {
  const teamMembers = [
    {
      name: "Titus",
      role: "Founder",
      imageUrl: "/assets/Ihwagi-Titus.jpeg",
    },
    {
      name: "Muna",
      role: "Co-Founder",
      imageUrl: "/assets/Muna-Said.jpeg",
    },
    {
      name: "Titus",
      role: "Founder",
      imageUrl: "/assets/Ihwagi-Titus.jpeg",
    },
    {
      name: "Muna",
      role: "Co-Founder",
      imageUrl: "/assets/Muna-Said.jpeg",
    },
    {
      name: "Titus",
      role: "Founder",
      imageUrl: "/assets/Ihwagi-Titus.jpeg",
    },
    {
      name: "Muna",
      role: "Co-Founder",
      imageUrl: "/assets/Muna-Said.jpeg",
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
  return (
    <>
      <main className="flex min-h-screen flex-col p-5 gap-3 ">
        {/* Nav bar */}
        <div className="flex flex-row justify-between m-3">
          <div className=" flex flex-row gap-2 items-center justify-center">
            {/* Logo */}
            <Link href="/" legacyBehavior>
              <a>
                <div className="flex items-center">
                  <Image
                    src={logo}
                    alt="BunnieABC"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" legacyBehavior>
              <a className="hover:text-blue-500">Home</a>
            </Link>

            <Link href="/blog" legacyBehavior>
              <a className=" font-bold bg-gray-200 hover:bg-blue-200 rounded p-2 px-5 py-1">
                Blog
              </a>
            </Link>
          </div>
        </div>
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
            <button className=" mx-auto sm:ml-0 flex items-center mt-4 justify-center rounded px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 active:scale-90 transition-transform duration-300">
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
        <div className="flex flex-col">
          <h2 className="pb-2 sm:pb-3 text-center text-3xl font-bold">
            Meet The Core Team
          </h2>
          <div className="flex overflow-x-auto justify-center gap-4">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </main>
      <footer className="pt-3 px-5">
        <div>
          <Link href="/" legacyBehavior>
            <a>
              <div className="flex items-center">
                <Image
                  src={logo}
                  alt="BunnieABC Logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
            </a>
          </Link>
          <p>Bunnie-LLC</p>
          <small>Software Company</small>
        </div>
        <div></div>
      </footer>
    </>
  );
}

// Co-Founders of Bunnie Abc card

const TeamCard = ({ name, role, imageUrl }) => {
  return (
    <div style={{ flex: "0 0 auto", marginRight: "10px", textAlign: "center" }}>
      <Image src={imageUrl} alt={name} width={200} height={200} />
      <div className="mt-5">
        <div className="font-bold">{name}</div>
        <p className="italic">{role}</p>
      </div>
    </div>
  );
};
