import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { link3 } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { allProjects } from "../constants";
import { Modal, Button } from "flowbite-react";

const ProjectCard = ({
  index,
  name,
  description,
  image,
  source_code_link,
  client,
  challenge,
  solution,
  outcome,
  impact
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full  rounded-2xl"
          />

          {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
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
          </div> */}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 mb-5 text-secondary text-base line-limit-5">
            {description}
          </p>
          <button
            onClick={() => setOpenModal(true)}
            className="mt-3 bg-purple-600 border border-purple-600 border-solid text-white px-4 py-2 rounded-lg transition hover:bg-purple-700 hover:border-purple-800"
          >
            Learn More
          </button>
        </div>
      </div>
      <Modal show={openModal} size="7xl" onClose={() => setOpenModal(false)}>
        <Modal.Header>{name}</Modal.Header>
        <Modal.Body>
          <div className="space-y-8">
            <div className="bg-gray-300 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold text-black mb-2">
                About The Client:
              </h2>
              <p className="text-lg leading-relaxed text-black">{client}</p>
            </div>

            <div className="bg-purple-800 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold text-white mb-2">
                The Challenge:
              </h2>
              <p className="text-lg leading-relaxed text-gray-200">
                {challenge}
              </p>
            </div>

            <div className="bg-gray-300 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold text-black mb-2">
                Our Solution:
              </h2>
              <p className="text-lg leading-relaxed text-black">{solution}</p>
            </div>

            <div className="bg-gray-300 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold text-black mb-2">
                OutComes:
              </h2>
              <p className="text-lg leading-relaxed text-black">{outcome}</p>
            </div>
            <div className="bg-gray-300 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold text-black mb-2">
                Impact:
              </h2>
              <p className="text-lg leading-relaxed text-black">{impact}</p>
            </div>
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
  const [openModalofProjects, setOpenModalProjects] = useState(false);

  const navigate = useNavigate();
  const onProjectDetail = () => {
    navigate("/detail");
  };
  return (
    <>
      <div className="pt-28" id="projects">
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

      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <div>
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          </div>
        ))}
        <div className="w-full flex justify-center">
          <button
            onClick={() => setOpenModalProjects(true)}
            className="mt-3 bg-purple-600 border border-purple-600 border-solid text-white px-4 py-2 rounded-lg transition hover:bg-purple-700 hover:border-purple-800"
          >
            Open All Projects
          </button>
        </div>

        <Modal
          show={openModalofProjects}
          size="7xl"
          onClose={() => setOpenModalProjects(false)}
        >
          <Modal.Header>All Projects</Modal.Header>
          <Modal.Body>
            <div className="flex flex-wrap">
              {allProjects.map((project, index) => (
                <div className="m-2 p-2">
                  <ProjectCard
                    key={`project-${index}`}
                    index={index}
                    {...project}
                  />
                </div>
              ))}
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
						<Button color="gray" onClick={() => setOpenModalProjects(false)}>
							Close
						</Button>
					</Modal.Footer> */}
        </Modal>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
