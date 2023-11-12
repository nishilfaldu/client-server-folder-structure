import { BiDollar, BiSupport } from "react-icons/bi";
import { FcPrivacy } from "react-icons/fc";
import { FiGlobe } from "react-icons/fi";



export function Footer() {
  return(
    <footer className="hidden w-full min-[990px]:block">
      <div className="bg-white box-border border-solid border-neutral-200 border-l-0 border-r-0 border-b-0 border-t-[1px] w-full p-4">
        <div className="flex justify-between">
          <div className="flex flex-wrap">
            <span className="inline-block">© 2023 7West, Inc.</span>
            <span>
              <ol className="inline list-none">
                <li className="inline-block">
                  <a href="/terms" className="text-black no-underline mr-4 hover:underline md:mr-6">Terms</a>
                </li>
                <li className="inline-block">
                  <a href="/sitemap" className="text-black no-underline mr-4 hover:underline md:mr-6">Sitemap</a>
                </li>
                <li className="inline-block">
                  <a href="/privary" className="text-black no-underline mr-4 hover:underline md:mr-6">Privacy</a>
                </li>
                <li className="inline-block justify-center items-center">
                  <a href="/terms" className="text-black no-underline mr-4 hover:underline md:mr-6">
                    Your Privacy Choices <FcPrivacy />
                  </a>
                </li>
              </ol>
            </span>
          </div>
          <div>
            <button className="bg-white border-none text-sm cursor-pointer font-semibold">
              <span className="flex items-center gap-x-1">
                <FiGlobe/>
                <span className="hover:underline">English (US)</span>
              </span>
            </button>
            <button className="bg-white border-none text-sm cursor-pointer font-semibold">
              <span className="flex items-center gap-x-1">
                <BiDollar/>
                <span className="hover:underline">USD</span>
              </span>
            </button>
            <button className="bg-white border-none text-sm cursor-pointer font-semibold">
              <span className="flex items-center gap-x-1">
                <BiSupport/>
                <span className="hover:underline">Support and resouces</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
