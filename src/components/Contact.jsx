import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_fcp7e0e',
        'template_9g35mfp',
        {
          from_name: form.name,
          to_name: "GoldSpy",
          from_email: form.email,
          reply_to: form.email,
          to_email: "admin@goldspy.site",
          message: form.message,
        },
        '7kTqNpHLFm8kBaPMi'
      )
      .then(
        () => {
          setLoading(false);
          alert("Tu mensaje fue enviado. Te responderemos en breves minutos");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahhh, algo salió mal. Inténtalo de nuevo o contacta usando WhatsApp");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Comunicate con nosotros de inmediato</p>
        <h3 className={styles.sectionHeadText}>CONTACTO</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>TU NOMBRE</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Cual es tu nombre?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>TU CORREO ELECTRÓNICO</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Cual es tu dirección de correo electrónico?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>MENSAJE</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Cuéntanos en que podemos ayudarte'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Enviando..." : "ENVIAR"}
          </button>

          <div id="contact-whatsapp" onClick={() => window.open("https://api.whatsapp.com/send/?phone=573022102471&text=Hola+me+interesa&type=phone_number&app_absent=0", "_blank")} className='bg-tertiary items-center rounded-xl text-white font-bold text-center shadow-md shadow-primary'>
          <span className='blue-text-gradient text-[12px]'>PUEDES CONTACTAR A TRAVES DE WHATSAPP</span>
          <p className="bg-tertiary py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary cursor-pointer">AQUÍ</p>
          {/* <img src="https://goldspy.site/logo-mini-min.png" width="20%" /> */}
            
          </div>

        </form>
        
          
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
