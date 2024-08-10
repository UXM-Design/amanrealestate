import BreadCrums from "@/app/_components/breadcrums/page";
import ContactPage from "@/app/_components/contact/page";
import FooterPage from "@/app/_components/footer/page";
import DetailForm from "@/app/_components/ui/detailform/page";

export default function Page({ params }: { params: { slug: string } }) {
  const breadcrumbs = [
    { href: "/", label: "Service" },
    { href: `{services/${params.slug}}`, label: `${params.slug}` },
    // Add more breadcrumb items as needed
  ];
  return (
    <>
      <section className="w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="w-full h-screen flex justify-evenly items-center overflow-y-scroll">
          <div className="flex justify-center items-start flex-col w-full md:px-14 px-2">
            <BreadCrums breadcrumbs={breadcrumbs} />
            <br />
            <h1 className="text-2xl uppercase tracking-wider font-bold">
              {params.slug}
            </h1>
            <p className="text-wrap text-base py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ea
              placeat consequuntur veritatis quod, vitae, assumenda corrupti
              accusamus mollitia facilis accusantium consequatur neque nam, quam
              quas ducimus minima tempora et porro? Porro quasi, quisquam
              consequuntur eum nulla explicabo expedita similique!
            </p>
            <p className="text-wrap text-base py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ea
              placeat consequuntur veritatis quod, vitae, assumenda corrupti
              accusamus mollitia facilis accusantium consequatur neque nam, quam
              quas ducimus minima tempora et porro? Porro quasi, quisquam
              consequuntur eum nulla explicabo expedita similique!
            </p>
            <hr />
            <ol className="text-sm space-y-2 py-3 w-full">
              <li className="w-full py-4 px-3 border-2 border-[#ececec] bg-white hover:drop-shadow-md rounded-md">
                01. Lorem ipsum dolor sit amet consectetur.
              </li>
              <li className="w-full py-4 px-3 border-2 border-[#ececec] bg-white hover:drop-shadow-md rounded-md">
                02. Lorem ipsum dolor sit amet consectetur.
              </li>
              <li className="w-full py-4 px-3 border-2 border-[#ececec] bg-white hover:drop-shadow-md rounded-md">
                03. Lorem ipsum dolor sit amet consectetur.
              </li>
            </ol>
          </div>
          <div className="flex justify-center items-center flex-col w-full">
            <DetailForm />
          </div>
        </div>
        {/* <ContactPage /> */}
        <FooterPage />
      </section>
    </>
  );
}

// return <div>My Post: {params.slug}</div>;
