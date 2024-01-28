import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.png";

function Nav() {
  return (
    <div>
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
    </div>
  );
}

export default Nav;
