"use client"
import React, { useState } from "react";
import { FileText, Rocket,Play, Pause, Clock, Music } from "lucide-react";
import FallingText from "./FallingText";
import Particles from './Particles';
import { motion, AnimatePresence } from "framer-motion";
import TechBadge from "./TechBadge";
import image6 from './amp.jpg';
export function BentoGridDemo() {

  // const [isPlaying, setIsPlaying] = useState(false);
  // const [activeCard, setActiveCard] = useState(null);

  // const togglePlay = () => {
  //   setIsPlaying(!isPlaying);  };
  const [isPlaying, setIsPlaying] = useState(null)

  const togglePlay = (trackId) => {
    if (isPlaying === trackId) {
      setIsPlaying(null)
    } else {
      setIsPlaying(trackId)
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-4 relative">
 

    <div className="relative z-10">
      <motion.div
         
         initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5 }}
         viewport={{ once: true }}
         whileHover={{ y: -5 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Developer & Artist Box */}
        <div
          className="md:col-span-2 rounded-xl shadow-lg  flex flex-col justify-between border border-white/10 transition-all duration-500  overflow-hidden group relative"
          style={{
            background: "linear-gradient(135deg, rgba(16, 24, 39, 0.4) 0%, rgba(59, 130, 246, 0.2) 100%)",
            backdropFilter: "blur(12px)",
          }}
         
        >
         <div className=" bg-black  flex items-center justify-center">
      <div className="w-full  bg-gradient-to-r from-zinc-900 to-black rounded-xl overflow-hidden">
      <div className=" mt-6 lg:hidden block mb-4 border-zinc-800">
              
              <div className="flex items-center gap-2 mx-5">
                <motion.span
                  className="text-teal-400 text-2xl"
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut", delay: 0.5 }}
                >
                  ✦
                </motion.span>
                <h3 className="text-2xl text-white  font-bold">Music in the backdrop</h3>
              </div>
              </div>
        <div className="grid grid-cols-12 gap-4">
          {/* Artist Info - Left Side */}
          
          <div className="col-span-12 md:col-span-4 px-6 pt-6 lg:p-6 flex lg:gap-0 gap-5 lg:flex-col">
            <div className="relative w-40 h-40 aspect-square rounded-md overflow-hidden mb-4">
              <img src="https://i.scdn.co/image/ab676161000051747a08236aa7f589f5c9acea6d" alt="Artist" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-3 left-3">
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                  VERIFIED ARTIST
                </span>
              </div>
            </div>

            <div className="mt-2 lg:text-left text-center">
              <h1 className="text-3xl font-bold text-white mb-1">PARASH</h1>
              <p className="text-zinc-400 text-sm mb-4">2,526 monthly listeners</p>

              <div className="flex space-x-3 mt-4">
              <a href="https://open.spotify.com/artist/1ScYtUsE8gkLCH7qsjWhGs"><button className="px-4 py-2 bg-green-500 text-black font-bold rounded-full hover:bg-green-400 transition-colors">
                  Play
                </button>
                </a>  
               <a href="https://open.spotify.com/artist/1ScYtUsE8gkLCH7qsjWhGs"> <button className="px-4 py-2 border border-zinc-700 text-white font-bold rounded-full hover:border-white transition-colors">
                  Follow
                </button>
                </a>
              </div>

              {/* <div className="mt-6">
                <h3 className="text-zinc-400 text-sm font-medium mb-2">About</h3>
                <p className="text-zinc-300 text-sm">
                  Artist with a unique sound blending electronic and acoustic elements. Known for captivating
                  performances and innovative production techniques.
                </p>
              </div> */}
            </div>
          </div>

          {/* Popular Tracks - Right Side */}
          <div className="col-span-12 md:col-span-8 p-6 bg-zinc-900/30">
          <div className="mt-3 mb-7 hidden lg:block border-zinc-800">
              
              <div className="flex items-center gap-2 mt-">
                <motion.span
                  className="text-teal-400 text-2xl"
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut", delay: 0.5 }}
                >
                  ✦
                </motion.span>
                <h3 className="text-2xl text-white font-bold">Music in the backdrop</h3>
              </div>
              
              </div>
            <h2 className="text-gray-400 text-xl font-bold mb-4">Popular</h2>

            <div className="grid grid-cols-1 gap-2">
              {/* Track Headers */}
              <div className="grid grid-cols-12 text-zinc-400 text-xs border-b border-zinc-800 pb-2 px-2">
                <div className="col-span-1">#</div>
                <div className="col-span-7">TITLE</div>
                <div className="col-span-3 text-right">PLAYS</div>
                
              </div>

              {/* Track 1 */}
              <div
                className={`grid grid-cols-12 items-center p-2 rounded-md ${
                  isPlaying === 1 ? "bg-zinc-700/30" : "hover:bg-zinc-800/50"
                } transition-colors duration-200 group cursor-pointer`}
                onClick={() => togglePlay(1)}
              >
                <div className="col-span-1 flex justify-center">
                  {isPlaying === 1 ? (
                    <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-green-500">
                      <Pause className="h-4 w-4" />
                    </motion.div>
                  ) : (
                    <>
                      <span className="group-hover:hidden text-zinc-400">1</span>
                      <Play className="h-4 w-4 hidden group-hover:block text-white" />
                    </>
                  )}
                </div>
                <div className="col-span-7 flex items-center space-x-3">
                  <div className="h-10 w-10 bg-zinc-800 rounded flex items-center justify-center overflow-hidden">
                    
                    <img src="https://i.scdn.co/image/ab67616d00001e02f89495f2af99f702ac7cd7a4" alt="" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Jakoruwa Moloya</p>
                    <p className="text-zinc-400 text-xs">Single</p>
                  </div>
                </div>
                <div className="col-span-3 text-right text-zinc-400 text-sm">195,210</div>
               

                {isPlaying === 1 && (
                  <div className="col-span-12 mt-2">
                    <div className="h-1 bg-zinc-700 rounded-full w-full overflow-hidden">
                      <motion.div
                        className="h-full bg-green-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "60%" }}
                        transition={{ duration: 30, ease: "linear" }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Track 2 */}
              <div
                className={`grid grid-cols-12 items-center p-2 rounded-md ${
                  isPlaying === 2 ? "bg-zinc-700/30" : "hover:bg-zinc-800/50"
                } transition-colors duration-200 group cursor-pointer`}
                onClick={() => togglePlay(2)}
              >
                <div className="col-span-1 flex justify-center">
                  {isPlaying === 2 ? (
                    <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-green-500">
                      <Pause className="h-4 w-4" />
                    </motion.div>
                  ) : (
                    <>
                      <span className="group-hover:hidden text-zinc-400">2</span>
                      <Play className="h-4 w-4 hidden group-hover:block text-white" />
                    </>
                  )}
                </div>
                <div className="col-span-7 flex items-center space-x-3">
                  <div className="h-10 w-10 bg-zinc-800 rounded overflow-hidden flex items-center justify-center">
                    
                    <img src="https://i.scdn.co/image/ab67616d00001e02ce0c370914276272afe5538c" alt="" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Bitter</p>
                    <p className="text-zinc-400 text-xs">Album · Neon Nights</p>
                  </div>
                </div>
                <div className="col-span-3 text-right text-zinc-400 text-sm">10,240</div>

                {isPlaying === 2 && (
                  <div className="col-span-12 mt-2">
                    <div className="h-1 bg-zinc-700 rounded-full w-full overflow-hidden">
                      <motion.div
                        className="h-full bg-green-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "60%" }}
                        transition={{ duration: 30, ease: "linear" }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* <div className="mt-2">
              <button className="text-zinc-400 text-xs font-medium hover:text-white transition-colors">See more</button>
            </div> */}

            
          </div>
        </div>
      </div>
    </div>
        </div>

        {/* Digital Skills Box #151f30 #151f30ad #151f304d bg-[linear-gradient(90deg,#151f304d,#151F30)] */}
        <motion.div
            className="bg-[linear-gradient(90deg,#151f304d,#151f30ad)] p-6 rounded-xl relative group overflow-hidden border border-white/10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          
          >
            <div className="absolute inset-0 bg-gradient-to-l from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex items-center gap-2 mb-4">
              <motion.span
                className="text-teal-400 text-2xl"
                animate={{ rotate: [0, 15, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut", delay: 0.5 }}
              >
                ✦
              </motion.span>
              <h3 className="text-2xl text-white font-bold">My Toolbox</h3>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              Explore the technologies and tools I use to turn my ideas into reality.
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
              {[
                { name: "React", icon: "react", delay: 0 },
                { name: "Next.js", icon: "nextjs", delay: 0.1 },
                { name: "TS", icon: "typescript", delay: 0.2 },
                { name: "Node.js", icon: "nodejs", delay: 0.3 },
                { name: "Mongo", icon: "mongodb", delay: 0.4 },
                { name: "Express", icon: "express", delay: 0.5 },
                { name: "Python", icon: "python", delay: 0.5 },
                { name: "C++", icon: "cpp", delay: 0.5 },
                { name: "Django", icon: "django", delay: 0.5 },
                { name: "HTML5", icon: "html", delay: 0.5 },
                { name: "Tailwind", icon: "css", delay: 0.5 },
                { name: "VHDL", icon: "vhdl", delay: 0.5 },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: tech.delay }}
                  viewport={{ once: true }}
                  className="z-10"
                >
                  {/* <TechBadge/> */}
                  <TechBadge name={tech.name} icon={tech.icon} />
                </motion.div>
              ))}
            </div>

          </motion.div>

        {/* Connect Box */}
        <div
          className="bg-gradient-to-br from-gray-900/80 to-purple-900/30 backdrop-blur-lg rounded-xl shadow-lg  flex flex-col justify-between border lg:h-auto h-80 border-white/10 transition-all duration-500 overflow-hidden group"
          onMouseEnter={() => setActiveCard(3)}
          onMouseLeave={() => setActiveCard(null)}
        >
            
            <h2 className='text-xs font-bold text-[1.5rem] text-zinc-100 text-center mt-6'>My Social Habitat</h2>
          <div className="relative font-mono text-gray-400 text-sm px-4 py-5  flex items-center justify-center space-x-2 group-hover:shadow-lg ">
            <Rocket className="h-5 w-5" />
            <span>Connect with me Personally</span>
          </div>
          <div class="card">
  <img
    src={image6}
    alt=""
    class="image"
  />
  <div class="heading"></div>
  <div class="icons">
    <a href="https://www.instagram.com/parash.wav/" class="instagram">
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.0459 7.5H17.0559M3.0459 12.5C3.0459 9.986 3.0459 8.73 3.3999 7.72C3.71249 6.82657 4.22237 6.01507 4.89167 5.34577C5.56096 4.67647 6.37247 4.16659 7.2659 3.854C8.2759 3.5 9.5329 3.5 12.0459 3.5C14.5599 3.5 15.8159 3.5 16.8269 3.854C17.7202 4.16648 18.5317 4.67621 19.201 5.34533C19.8702 6.01445 20.3802 6.82576 20.6929 7.719C21.0459 8.729 21.0459 9.986 21.0459 12.5C21.0459 15.014 21.0459 16.27 20.6929 17.28C20.3803 18.1734 19.8704 18.9849 19.2011 19.6542C18.5318 20.3235 17.7203 20.8334 16.8269 21.146C15.8169 21.5 14.5599 21.5 12.0469 21.5C9.5329 21.5 8.2759 21.5 7.2659 21.146C6.37268 20.8336 5.56131 20.324 4.89202 19.6551C4.22274 18.9862 3.71274 18.1751 3.3999 17.282C3.0459 16.272 3.0459 15.015 3.0459 12.501V12.5ZM15.8239 11.94C15.9033 12.4387 15.8829 12.9481 15.7641 13.4389C15.6453 13.9296 15.4304 14.392 15.1317 14.7991C14.833 15.2063 14.4566 15.5501 14.0242 15.8108C13.5917 16.0715 13.1119 16.2439 12.6124 16.318C12.1129 16.392 11.6037 16.3663 11.1142 16.2422C10.6248 16.1182 10.1648 15.8983 9.76082 15.5953C9.35688 15.2923 9.01703 14.9123 8.76095 14.4771C8.50486 14.0419 8.33762 13.5602 8.2689 13.06C8.13201 12.0635 8.39375 11.0533 8.99727 10.2487C9.6008 9.44407 10.4974 8.91002 11.4923 8.76252C12.4873 8.61503 13.5002 8.86599 14.3112 9.46091C15.1222 10.0558 15.6658 10.9467 15.8239 11.94Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </a>
    <a href="https://twitter.com/parashmusic" class="x">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.8003 3L13.5823 10.105L19.9583 19.106C20.3923 19.719 20.6083 20.025 20.5983 20.28C20.594 20.3896 20.5657 20.4969 20.5154 20.5943C20.4651 20.6917 20.3941 20.777 20.3073 20.844C20.1043 21 19.7293 21 18.9793 21H17.2903C16.8353 21 16.6083 21 16.4003 20.939C16.2168 20.8847 16.0454 20.7957 15.8953 20.677C15.7253 20.544 15.5943 20.358 15.3313 19.987L10.6813 13.421L4.64033 4.894C4.20733 4.281 3.99033 3.975 4.00033 3.72C4.00478 3.61035 4.03323 3.50302 4.08368 3.40557C4.13414 3.30812 4.20536 3.22292 4.29233 3.156C4.49433 3 4.87033 3 5.62033 3H7.30833C7.76333 3 7.99033 3 8.19733 3.061C8.38119 3.1152 8.55295 3.20414 8.70333 3.323C8.87333 3.457 9.00433 3.642 9.26733 4.013L13.5833 10.105M4.05033 21L10.6823 13.421"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </a>
    <a href="https://discord.gg/" class="discord">
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5989 6.5003H14.2919C14.3851 6.5003 14.4764 6.47427 14.5555 6.42515C14.6347 6.37603 14.6985 6.30577 14.7399 6.2223L15.4179 4.8543C15.4664 4.75358 15.5488 4.67313 15.6506 4.62706C15.7524 4.58098 15.8673 4.57222 15.9749 4.6023C16.6309 4.7903 18.0049 5.2433 19.1029 6.0003C22.9669 8.8973 22.6069 15.3903 22.5779 16.7603C22.5765 16.8444 22.5541 16.9269 22.5129 17.0003C20.5299 20.5003 17.0899 20.5003 17.0899 20.5003L15.9239 18.0743M15.9239 18.0743C16.4479 17.9163 17.0029 17.7253 17.6029 17.5003M15.9239 18.0743C13.4799 18.8093 11.7219 18.8083 9.27791 18.0733M13.5989 6.5003H10.9109C10.8179 6.50039 10.7266 6.47451 10.6475 6.42557C10.5683 6.37664 10.5044 6.30659 10.4629 6.2233L9.77991 4.8533C9.73146 4.75279 9.64925 4.6725 9.54762 4.62644C9.446 4.58038 9.33142 4.57148 9.22391 4.6013C8.56891 4.7893 7.19291 5.2433 6.09391 6.0003C2.23091 8.8973 2.59091 15.3903 2.61991 16.7603C2.62132 16.8445 2.64366 16.9269 2.68491 17.0003C4.66791 20.5003 8.10791 20.5003 8.10791 20.5003L9.27791 18.0733M9.27791 18.0733C8.75491 17.9163 8.19891 17.7253 7.59891 17.5003M10.6009 12.5003C10.6009 12.7655 10.4956 13.0199 10.308 13.2074C10.1205 13.3949 9.86612 13.5003 9.60091 13.5003C9.33569 13.5003 9.08134 13.3949 8.8938 13.2074C8.70626 13.0199 8.60091 12.7655 8.60091 12.5003C8.60091 12.2351 8.70626 11.9807 8.8938 11.7932C9.08134 11.6057 9.33569 11.5003 9.60091 11.5003C9.86612 11.5003 10.1205 11.6057 10.308 11.7932C10.4956 11.9807 10.6009 12.2351 10.6009 12.5003ZM16.6029 12.5003C16.6029 12.7655 16.4976 13.0199 16.31 13.2074C16.1225 13.3949 15.8681 13.5003 15.6029 13.5003C15.3377 13.5003 15.0833 13.3949 14.8958 13.2074C14.7083 13.0199 14.6029 12.7655 14.6029 12.5003C14.6029 12.2351 14.7083 11.9807 14.8958 11.7932C15.0833 11.6057 15.3377 11.5003 15.6029 11.5003C15.8681 11.5003 16.1225 11.6057 16.31 11.7932C16.4976 11.9807 16.6029 12.2351 16.6029 12.5003Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </a>
  </div>
          </div>

        </div>

        {/* Interactive Text Box */}
        <div
          className="md:col-span-2 font-bold text-white min-h-[18rem] rounded-xl shadow-lg p-6 border border-white/10 transition-all duration-500  overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, rgba(16, 24, 39, 0.2) 0%, rgba(88, 28, 135, 0.1) 100%)",
            backdropFilter: "blur(12px)",
          }}
          onMouseEnter={() => setActiveCard(4)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             {/* Particles Background */}
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    >
      <div className="stars"></div>
      {/* <Particles
        particleColors={["#ffffff", "#60a5fa"]}
        particleCount={200}
        particleSpread={20}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
      /> */}
    </div>
          <div>
            
          </div>
            <div className="flex fixed items-center gap-2 mb-4">
              <motion.span
                className="text-teal-400 text-2xl"
                animate={{ rotate: [0, 15, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut", delay: 0.5 }}
              >
                ✦
              </motion.span>
              <h3 className="text-2xl text-white font-bold">More Than Just Brackets and Braces</h3>
            </div>
          <FallingText
            text={`Photography Blender Cinematography Ableton Design AE Visuals  Valorant Gaming Figma Music Concerts Streams OBS`}
            highlightWords={["Blender", "Ableton", "AE", "Valorant", "Figma", "emotion","Concerts","OBS"]}
            highlightClass="highlighted"
            trigger="scroll"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.56}
           // fontSize="1.75rem"
            mouseConstraintStiffness={0.9}
            textColor=""
            highlightColor="#60a5fa"
          />
        </div>
      </motion.div>
    </div>
  </div>
  );
}