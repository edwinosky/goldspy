import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import './style.css'
import discord from '../assets/discord.svg'
import whatsapp from '../assets/whatsapp.png'
import telegram from '../assets/telegram.png'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#651FFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className='text-[#651FFF]'>GoldSpy</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Ofrecemos servicios de espionaje <br className='sm:block hidden' />
            ...para WhatsApp y redes sociales
          </p>
        </div>

        <div className="flex flex-row flex-wrap gap-5 z-10">
          <div onClick={() => window.open("https://api.whatsapp.com/send/?phone=573022102471&text=Hola+me+interesa&type=phone_number&app_absent=0", "_blank")}>
              <img src={whatsapp} className="w-20" />
          </div>
          <div onClick={() => window.open("https://t.me/MasterHackServices", "_blank")}>
            <img src={telegram} className="w-20" />
          </div>
          <div onClick={() => window.open("https://discord.gg/VWC8b7a", "_blank")}>
            <img src={discord} className="w-20" />
          </div>
        </div>

      </div>
      <br></br>
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;