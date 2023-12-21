import UnsplashImage from "@/src/api/UnsplashImage";
export default function Home() {
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
        <div className="flex flex-col gap-4 items-center mt-10 ">
          <h1 className="text-4xl font-bold text-gray-800">
            Building scalable solutions for Large &amp; Small &amp; Medium
            Enterprises
          </h1>
          <div>
            <h1>Techy Patterns</h1>
            <UnsplashImage query="pattern" />
          </div>
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
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-col items-center justify-center p-3 gap-2">
            {/* Icon */}
            <h2>Experience the Evolution</h2>
            <p className="text-center">
              Start with the simplicity of user-friendly web apps, tailored to
              your needs. As your business grows, seamlessly transition to the
              sophistication of AI-powered customer care, providing unparalleled
              support and engagement.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-3 gap-2">
            {/* Icon */}
            <h2>Web App Expertise</h2>
            <p className="text-center">
              Unlock the potential of your business with our web app development
              services. Our solutions begin with simplicity and scale up to the
              complexity of AI-driven customer care, ensuring a seamless and
              future-ready digital experience.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-3 gap-2">
            {/* Icon */}
            <h2>AI-Powered Customer Care</h2>
            <p className="text-center">
              Move beyond the basics. Elevate your customer interactions with
              our AI-powered solutions. From handling routine queries to
              delivering personalized assistance, we transform customer care
              into a strategic asset for your business
            </p>
          </div>
        </div>
        <div className="w-full bg-black p-7">
          <h2 className="text-white">BunnieAbc</h2>
          <h3 className="text-white">Nrb, KE</h3>
        </div>
        <div className="skew-y-1/2 bg-gray-200 p-8 mt-5">
          <h2>Meet the team</h2>
          <div>
            <section>
              {/* 
              <Image
                    src="/images/1.jpg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  /> 
                  */}
              <h3>Name</h3>
              <p>Head of Product Design</p>
            </section>
            <article>{/* Some random quote */}</article>
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
          <div>
            <p>Garden Estates, Valley View</p>
            <a href="/blog">Blog</a>
          </div>
        </h1>
      </footer>
    </>
  );
}
