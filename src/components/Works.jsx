import React from "react";
import Tilt from "react-tilt";
import { color, motion } from "framer-motion";

import { styles } from "../styles";
import { logomini } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Curve } from "three";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_self")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={logomini}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>PORQUE DEBO HACERLO???</p>
        <h2 className={`${styles.sectionHeadText}`}>Cualquier razón es valida</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Supervisa silenciosamente todas las conversaciones que tienen tus hijos, pareja, amigos o empleados, accede a su ubicación en tiempo real, fotos, videos, 
          registro de llamadas y cualquier tipo de información que maneje desde su teléfono inteligente. Lo mejor de todo es que ya no necesitas 
          descargar programas o llenar tu computador de virus, tampoco necesitas ir a esas paginas llenas de publicidad y que te mantienen horas haciendo encuestas para nada. <br></br>
          Solo debes de ponerte en contacto con uno de nuestros asesores autorizados, podrás hacerlo a traves de 
          <a href="https://api.whatsapp.com/send/?phone=573022102471&text=Hola+me+interesa&type=phone_number&app_absent=0" target="_blank"> WhatsApp </a> 
          o por <a href="#contact">Correo Electrónico</a> en una comunicación cifrada 
          de extremo a extremo para que mantengas tu privacidad. <br></br>
          Ofrecemos un servicio completamente seguro, serio y garantizado, al mismo tiempo que es discreto y confidencial.
          Trabajamos para cualquier país de Latinoamérica o Estados Unidos
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
