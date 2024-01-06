import UnsplashImage from "@/src/api/UnsplashImage";
import Image from "next/image";
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
  return (
    <>
      <main className="flex min-h-screen flex-col p-5 gap-3 ">
        {/* Nav bar */}
        <div className="flex flex-row justify-between m-3">
          <div className=" flex flex-row gap-2">
            {/* Logo */}
            <p>Logo</p>
            <h2>Bunnie Abc</h2>
          </div>
          <div>
            <ul className="flex flex-row justify-between gap-3 ">
              <li>Home</li>
              <li>Products</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        {/* Header */}
        <div className=" flex flex-col-reverse p-4 sm:flex-row gap-4 items-start mt-10 sm:p-8  lg:justify-around">
          <div>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mt-8 sm:leading-[5rem]">
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
        <div>
          <h2 className="text-center text-2xl font-bold text-gray-800">
            Let Your Customers Know You Mean Business
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-2 ">
          <div className="flex-1 flex flex-col items-center justify-center p-3 gap-2">
            {/* Icon */}
            <h2>Experience the Evolution</h2>
            <p className="text-center">
              Start with the simplicity of user-friendly web apps, tailored to
              your needs.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-3 gap-2">
            {/* Icon */}
            <h2>Web App Expertise</h2>
            <p className="text-center">
              Unlock the potential of your business with our web app development
              service.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-3 gap-2">
            {/* Icon */}
            <h2>AI-Powered Customer Care</h2>
            <p className="text-center">
              Move beyond the basics. Elevate your customer interactions with
              AI-powered solutions from our partners.
            </p>
          </div>
        </div>

        <div className="w-full bg-black p-7 mx-0">
          <h2 className="text-white">BunnieAbc</h2>
          <h3 className="text-white">Nrb, KE</h3>
        </div>
        <div className="flex flex-col">
          <h2 className="pb-2">Meet the team</h2>
          <div className="flex overflow-x-auto justify-center gap-4">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </main>
      <footer>
        <h1>
          {/* className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black" */}
          {/* Bunnie Abc */}
          <div>
            <span className="text-4xl">Bunnie</span>
            <span className="text-4xl">Abc</span>
          </div>
        </h1>
        <div>
          <p>Garden Estates, Valley View</p>
          <a href="/blog">Blog</a>
        </div>
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
