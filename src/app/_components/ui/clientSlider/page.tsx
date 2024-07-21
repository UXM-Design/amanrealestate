import React from "react";
import Image from "next/image";
import Link from "next/link";

const clients = [
  {
    id: 1,
    client_name: "Arvind Properties",
    linkTo: "/arvindproperties",
  },
  {
    id: 2,
    client_name: "Ashawa Constructions",
    linkTo: "/ashawa",
  },
  {
    id: 3,
    client_name: "Lux Property",
    linkTo: "/lux",
  },
  {
    id: 4,
    client_name: "Adithya Birla",
    linkTo: "/adithyabirla",
  },
];

const ClientSlider = () => {
  return (
    <div className="w-full bg-gray-100 h-auto md:py-3 py-4 flex justify-evenly items-center scroll-mx-2 overflow-x-hidden ">
      {clients.map((client) => (
        <div key={client.id} className="p-3">
          <Link href={client.linkTo}>
            <h3 className="text-sm uppercase font-extrabold tracking-wide">
              {client.client_name}
            </h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ClientSlider;
