import React from "react";
import { useNavigate } from "react-router-dom";

const cardsData = [
  {
    img: "ServicesPage/Vector.png",
    title: "Flight Bookings",
    description:
      "Find the best flight deals to destinations around the world. We handle bookings, re-scheduling, and exclusive offers.",
  },
  {
    img: "ServicesPage/Vector (1).png",
    title: "Hotel Reservations",
    description:
      "Choose from handpicked hotels and resorts that fit your style and budget. We ensure comfort, safety, and convenience wherever you go.",
  },
  {
    img: "ServicesPage/Vector (2).png",
    title: "Visa Assistance",
    description:
      "We simplify the visa process by guiding you through documents, requirements, and applications — hassle-free travel guaranteed.",
  },
  {
    img: "ServicesPage/Vector (3).png",
    title: "Custom Travel Plans",
    description:
      "Get personalized itineraries designed around your interests — adventure, luxury, or relaxation.",
  },
  {
    img: "ServicesPage/mdi_airport.png",
    title: "Airport Transfers",
    description:
      "Reliable pickups and drop-offs so you start and end your trip stress-free. From solo travelers to groups, we’ve got you covered.",
  },
];

const Card = ({ card, onClick }) => (
  <div className="bg-white p-5 rounded-2xl flex flex-col justify-between items-center text-center shadow-md min-h-[300px] md:w-[280px]">
    <img src={card.img} alt={card.title} className="mb-4 w-14 h-14 object-contain" />
    <h3 className="text-lg font-semibold text-[#2B2B2B] mb-2">{card.title}</h3>
    <p className="text-[#4A4A4A] text-sm mb-4">{card.description}</p>

    <button
      onClick={onClick}
      className="bg-[#F49C0B] text-white py-2 px-4 rounded-lg text-sm"
    >
      Contact Us for Service
    </button>
  </div>
);

const Cards = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#FFF8F3] py-12 px-4 md:px-8">
      {/* Row 1 - 3 Cards */}
<div className="flex flex-wrap justify-center gap-6 mb-8">
  {cardsData.slice(0, 3).map((card, index) => (
    <Card
      key={index}
      card={card}
      onClick={() => {
        if (index === 0) navigate("/dubai-transfers");
        if (index === 2) navigate("/visa");
      }}
    />
  ))}
</div>


      {/* Row 2 - 2 Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {cardsData.slice(3, 5).map((card, index) => (
          <Card key={index} card={card} onClick={() => {}} />
        ))}
      </div>
    </section>
  );
};

export default Cards;
