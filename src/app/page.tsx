import HeroSection from "./_components/ui/heroSection";
import ReviewPage from "./_components/ui/review/page";
import Link from "next/link";
import Image from "next/image";
import ContactPage from "./_components/contact/page";
import FooterPage from "./_components/footer/page";
import SliderPage from "./_components/slider/page";

export default function Home() {
  return (
    <>
      <div className="w-full md:h-full h-auto overflow-x-hidden">
        <HeroSection />
        <div className="w-full py-4 md:h-screen h-auto bg-white text-black flex justify-center items-center flex-col">
          <SliderPage />
        </div>
        <div className="w-full flex md:justify-evenly justify-center md:flex-row flex-col items-center md:h-auto md:py-6 py-4 h-auto">
          <div className=" md:w-[350px] md:height-[450px] w-[350px] h-[450px] overflow-hidden rounded-md">
            <img
              className="w-full h-full object-cover transition-all duration-300 ease-in hover:scale-110"
              src="https://img.freepik.com/free-photo/high-angle-woman-working-as-engineer_23-2150290086.jpg?t=st=1726714308~exp=1726717908~hmac=ef1eacb3cfc13c5c2bb3c9a25987418d506d51cee1746d27390dd369112a0b26&w=360"
              width={300}
              height={450}
              alt="contractor image"
            />
          </div>
          <div className="flex flex-col gap-6 md:w-1/2 w-full md:px-0 px-4 md:py-0 py-4">
            <h2 className="text-2xl font-bold ">
              Explore the best solutions for your business.
            </h2>
            <p className="m-0">
              Whether your team needs fast and accurate takeoff tools to
              complete more bids or easy-to-use field collaboration and project
              management tools to finish on time and budget, We has you covered.
            </p>
            <Link
              href="/enquiry"
              className="px-4 py-3 bg-yellow-400 font-bold text-sm text-black text-center rounded-md w-[180px]"
            >
              Get Started
            </Link>
            <div className="flex flex-col gap-0">
              <details className="px-4 py-4 border-b-2 border-[#d8d8d8]">
                <summary className="font-semibold">Sub Contractor</summary>
                <p>
                  Win more profitable work with fast, accurate takeoffs &
                  estimates, and build smarter with best-in-class field tools.
                </p>
              </details>
              <details className="px-4 py-4 border-b-2 border-[#d8d8d8]">
                <summary className="font-semibold">General Contractor</summary>
                <p>
                  Easily ballpark takeoffs for all trades and centralize
                  documents, records & plans among all your subs & stakeholders.
                </p>
              </details>
              <details className="px-4 py-4 border-b-2 border-[#d8d8d8]">
                <summary className="font-semibold">
                  Supplier/Distributor
                </summary>
                <p>
                  Offer accurate, complimentary takeoffs for contractors using
                  your pricing catalogs for value-added service.
                </p>
              </details>
            </div>
          </div>
        </div>
        <div className="w-full md:h-screen h-auto bg-slate-100 text-black flex flex-col justify-center items-center md:py-0 py-6 md:px-4 px-4">
          <div className="md:py-6 py-3">
            <h1 className="text-4xl text-align text-wrap">
              Learn how we can meet your construction tech needs.
            </h1>
          </div>
          <div className="w-full flex md:justify-evenly justify-center md:flex-row flex-col items-center">
            <div className="w-auto flex flex-col gap-4 p-6">
              <Image src={"/tools.png"} width="200" height="200" alt="Tools" />
              <h3 className="text-2xl font-semibold text-yellow-500">
                Takeoff & Estimating
              </h3>
              <p className="md:w-auto text-wrap whitespace-normal w-full md:pr-4 pr-0">
                Comprehensive takeoff & estimating solution empowering you to
                win more work by bidding more in less time.
              </p>
            </div>
            <div className="w-auto flex flex-col gap-4 p-6">
              <Image
                src={"/project.png"}
                width="200"
                height="200"
                alt="Tools"
              />
              <h3 className="text-2xl font-semibold text-yellow-500">
                Field & Project Management
              </h3>
              <p className="md:w-auto text-wrap whitespace-normal w-full md:pr-4 pr-0">
                Construction management app connecting crews to each other & the
                back office with lightning-fast responsiveness.
              </p>
            </div>
            <div className="w-auto flex flex-col gap-4 p-6">
              <Image
                src={"/construction.png"}
                width="200"
                height="200"
                alt="Tools"
              />
              <h3 className="text-2xl font-semibold text-yellow-500">
                Property & Facility Operations
              </h3>
              <p className="md:w-auto text-wrap whitespace-normal w-full md:pr-4 pr-0">
                Centralized hub for easy plan access & document management,
                enabling smoother maintenance workflows.
              </p>
            </div>
          </div>
        </div>

        {/* <ReviewPage /> */}
        <section className="w-full md:h-screen h-auto md:block">
          <ReviewPage />
        </section>
        <ContactPage />
        <FooterPage />
      </div>
    </>
  );
}
