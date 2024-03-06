import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { link3 } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { Modal, Button } from "flowbite-react";

const ProjectCard = ({ index, name, description, image, source_code_link }) => {
  const [openModal, setOpenModal] = useState(false);
  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    } else {
      return text;
    }
  };

  return (
    <div>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full  rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={link3}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] line-limit-5">
            {description}
          </p>
          <Button
            onClick={() => setOpenModal(true)}
            style={{
              backgroundColor: "transparent",
              border: "none",
              margin: 0,
              padding: 0,
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
      <Modal show={openModal} size="6xl" onClose={() => setOpenModal(false)}>
        <Modal.Header>{name}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them. The European Union’s General Data
              Protection Regulation (G.D.P.R.) goes into effect on May 25 and is
              meant to ensure a common set of data rights in the European Union.
              It requires organizations to notify users as soon as possible of
              high-risk data breaches that could personally affect them. The
              European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them. The European Union’s General Data
              Protection Regulation (G.D.P.R.) goes into effect on May 25 and is
              meant to ensure a common set of data rights in the European Union.
              It requires organizations to notify users as soon as possible of
              high-risk data breaches that could personally affect them. The
              European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them. The European Union’s General Data
              Protection Regulation (G.D.P.R.) goes into effect on May 25 and is
              meant to ensure a common set of data rights in the European Union.
              It requires organizations to notify users as soon as possible of
              high-risk data breaches that could personally affect them. The
              European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them. The European Union’s General Data
              Protection Regulation (G.D.P.R.) goes into effect on May 25 and is
              meant to ensure a common set of data rights in the European Union.
              It requires organizations to notify users as soon as possible of
              high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const Works = () => {
  const navigate = useNavigate();
  const onProjectDetail = () => {
    navigate("/detail");
  };
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>Our work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases our expertise, creativity, and dedication
          to excellence. It reflects our ability to solve complex problems, work
          with different technologies, and manage projects effectively. we're
          dedicated to driving innovation and achieving unparalleled results for
          our clients.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <div>
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
