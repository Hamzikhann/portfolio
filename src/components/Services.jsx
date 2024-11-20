import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tilt } from "react-tilt";
import { Modal, Button } from "flowbite-react";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import "./Services.css";

const ServiceCard = ({ title, icon, description, onClick }) => {
  return (
    <Tilt className="w-[250px] my-10 ml-5">
      <div
        onClick={onClick}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] z-50"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-4 min-h-[280px] cursor-pointer flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-20 h-20 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  );
};

const Services = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentService, setCurrentService] = useState({});

  const handleOpenModal = (service) => {
    setCurrentService(service);
    setOpenModal(true);
  };

  const sliderSettings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1144,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 943,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 677,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2 className={styles.sectionHeadText}>Our Services</h2>

      {/* First Row */}
      <Slider {...sliderSettings} className="mt-10 bg-blue-50">
        {services.slice(0, 8).map((service, index) => (
          <ServiceCard
            key={service.title}
            {...service}
            onClick={() => handleOpenModal(service)}
          />
        ))}
      </Slider>

      {/* Second Row */}
      <Slider {...sliderSettings} className="bg-[#050816]">
        {services.slice(8).map((service, index) => (
          <ServiceCard
            key={service.title}
            {...service}
            onClick={() => handleOpenModal(service)}
          />
        ))}
      </Slider>

      {/* Modal */}
      <Modal show={openModal} size="7xl" onClose={() => setOpenModal(false)}>
        <Modal.Header>{currentService.title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <div className="bg-gray-300 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold text-black mb-2">
                About the Service:
              </h2>
              <p className="text-lg leading-relaxed text-black">
                {currentService.description || "Service details coming soon..."}
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SectionWrapper(Services, "services");
