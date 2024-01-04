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
        <div className="flex flex-col gap-4 items-center mt-10 bg-edeffe">
          <h1 className="text-4xl font-bold text-gray-800">
            Building scalable solutions for Large &amp; Small &amp; Medium
            Enterprises
          </h1>
          <h2>Let&#39;s ship your product faster and better</h2>
          <p>The cost effective way to stand out and nuture leads</p>
        </div>
        {/* center div */}
        <div className="flex flex-col items-center p-2 ">
          <p>
            From crafting simple and intuitive web applications to sophisticated
            AI-powered customer care, we redefine your digital presence.
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
