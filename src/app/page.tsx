import Image from "next/image";
import NavBar from "./_components/ui/navbar/page";
import FormPage from "./_components/form/page";
import ClientSlider from "./_components/ui/clientSlider/page";
import BlogCardSlider from "./_components/ui/blog/blogcardSlider/page";
import Link from "next/link";
import { GiPolarStar } from "react-icons/gi";
import ServiceCard from "./_components/ui/servicecard/page";
import ReviewPage from "./_components/ui/review/page";
import ContactForm from "./_components/ui/contactForm/page";
import ContactPage from "@/app/_components/contact/page";
import FooterPage from "./_components/footer/page";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between bg-white">
        <section className="w-full relative hero-section md:h-screen h-auto flex md:justify-start justify-center items-center md:px-24 px-2 md:flex-nowrap flex-wrap">
          <div className="w-full flex flex-col gap-8 justify-start items-center">
            <div className="contentBox text-white flex flex-col gap-3 md:py-0 py-6">
              <span className="p-4 rounded-md w-48 bg-green-300 text-sm text-green-800">
                Super Fast Estimating
              </span>
              <h3 className="text-lg">Get your estimation in</h3>
              <h1 className="text-4xl font-semibold">5 min</h1>
              <p className="md:w-[60%] w-auto text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                officia, culpa perferendis iste aspernatur libero fugit eum
                itaque maiores asperiores saepe repellat, modi eius architecto.
                Eum repellendus ducimus facere iure temporibus doloribus.
              </p>
            </div>
            <BlogCardSlider />
          </div>

          <FormPage />
        </section>
        <ClientSlider />
        {/* about us  */}
        <section className="homeAbout w-full md:h-[80vh] min-h-screen flex justify-around items-center md:flex-nowrap flex-wrap md:px-14 px-2">
          <div className="w-full flex justify-center items-center">
            <Image
              src="/construction_one.png"
              width={300}
              height={140}
              alt="About Image"
              className="drop-shadow hover:drop-shadow-2xl sm:h-[80] md:py-0 py-6 md:hover:border-[22px] md:hover:border-none hover:border-yellow-400 hover:transition-all"
            />
          </div>
          <div className="w-full flex flex-col gap-8 md:py-0 py-6">
            <div className="w-full px-2 flex flex-col gap-3">
              <h1 className="text-4xl font-semibold">About us</h1>
              <p className="w-[90%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati illum facere soluta asperiores ad dicta atque eveniet
                quam fuga laudantium aperiam sunt rerum iusto, officiis quidem
                accusamus laborum est facilis.
              </p>
              <Link
                href={"/"}
                className="px-6 w-[140px] py-3 rounded-md bg-yellow-400 hover:bg-yellow-300 text-black md:mt-4 mt-0"
              >
                Learn More
              </Link>
            </div>
            <div className="flex w-full justify-evenly items-center py-4 border-t-2 bortder-[#878787]">
              <div className="flex flex-col justify-start gap-3 px-4 py-4 items-center">
                <GiPolarStar className="text-black text-lg" />
                <h1>Better & Faster</h1>
              </div>
              <div className="flex flex-col justify-start gap-3 px-4 py-4 items-center">
                <GiPolarStar className="text-black text-lg" />
                <h1>Win better project</h1>
              </div>
              <div className="flex flex-col justify-start gap-3 px-4 py-4 items-center">
                <GiPolarStar className="text-black text-lg" />
                <h4>Get effectent costing</h4>
              </div>
            </div>
          </div>
        </section>
        {/* why choose us */}
        <section className="w-full min-h-screen flex md:justify-between justify-center items-center md:flex-nowrap flex-wrap">
          <div className="choosebg w-full min-h-screen flex justify-center items-center flex-col">
            <div className="w-full h-screen flex flex-col gap-2 justify-center items-start md:px-14 px-4 text-white  bg-black/60">
              <h1 className="text-4xl font-bold">Quicker Estimating</h1>
              <h1 className="text-4xl font-bold">Win More</h1>
              <h1 className="text-4xl font-bold">Build Better</h1>
            </div>
          </div>
          <div className="w-full min-h-screen flex justify-center items-center flex-col text-white bg-black">
            <div className="w-[80%] flex flex-col justify-center items-start gap-3">
              <h1 className="text-4xl py-4">Why Choose Us</h1>
              <br />
              <div className="flex gap-6">
                <div className="flex flex-col gap-3">
                  <GiPolarStar className="text-lg" />
                </div>
                <div className="flex flex-col gap-31">
                  <h2 className="text-2xl">Point One</h2>
                  <p className="text-sm text-gray-500 hover:text-white py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis quisquam asperiores fuga ratione reprehenderit
                    maxime tempore nostrum aspernatur officiis rerum.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col gap-3">
                  <GiPolarStar className="text-lg" />
                </div>
                <div className="flex flex-col gap-31">
                  <h2 className="text-2xl">Point Two</h2>
                  <p className="text-sm text-gray-500 hover:text-white py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis quisquam asperiores fuga ratione reprehenderit
                    maxime tempore nostrum aspernatur officiis rerum.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col gap-3">
                  <GiPolarStar className="text-lg" />
                </div>
                <div className="flex flex-col gap-31">
                  <h2 className="text-2xl">Point Three</h2>
                  <p className="text-sm text-gray-500 hover:text-white py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis quisquam asperiores fuga ratione reprehenderit
                    maxime tempore nostrum aspernatur officiis rerum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* our services  */}
        <section className="ourservice w-full md:h-[80vh] h-auto flex md:flex-nowrap flex-wrap md:justify-evenly justify-center items-center">
          <div className="w-full flex justify-center items-center md:h-auto h-[40vh]">
            <div className="container flex flex-col gap-3 w-[60%]">
              <span className="md:px-6 px-3 md:py-3 py-2 bg-green-300 text-green-900 w-[180px] text-center rounded-full ">
                our service
              </span>
              <h2 className="md:text-4xl text-3xl">
                How we provide value <br />
                for our client
              </h2>
            </div>
          </div>
          {/* <div className="w-full">
            <ServiceCard />
          </div> */}
          <div className="w-full h-auto">
            <ServiceCard />
          </div>
        </section>
        <section className="w-full md:h-screen h-auto md:block hidden">
          <ReviewPage />
        </section>
        <ContactPage />
        <FooterPage />
      </main>
    </>
  );
}
