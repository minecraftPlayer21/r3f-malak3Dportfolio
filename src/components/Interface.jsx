import { ValidationError, useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";

const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;

  return (
    <Section mobileTop>
      <div className="flex flex-col items-center text-center px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <br />
          <span className="text-indigo-400">Malak Khalifa</span>
        </motion.h1>

        <motion.div
          className="bg-black/30 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-8 max-w-2xl w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
            I am an ECE student passionate about technology, creativity, and building fun projects!
          </p>
        </motion.div>

        <motion.button
          onClick={() => window.open("https://aboutme-mk.netlify.app/", "_blank")}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-8 rounded-2xl shadow-lg transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Explore More
        </motion.button>
      </div>
    </Section>
  );
};

/*
const skills = [
  {
    title: "Threejs / React Three Fiber",
    level: 80,
  },
  {
    title: "React / React Native",
    level: 90,
  },
  {
    title: "Nodejs",
    level: 90,
  },
  {
    title: "Typescript",
    level: 60,
  },
  {
    title: "3D Modeling",
    level: 40,
  },
];
const languages = [
  {
    title: "🇫🇷 French",
    level: 100,
  },
  {
    title: "🇺🇸 English",
    level: 80,
  },
  {
    title: "🇯🇵 Japanese",
    level: 20,
  },
];
*/

const SkillsSection = () => {
  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <h2 className="text-4xl md:text-6xl font-extrabold text-center text-white mb-12 tracking-tight">
          Skills
        </h2>

        <div className="grid gap-12 md:grid-cols-2 text-gray-100 text-lg md:text-xl max-w-6xl mx-auto px-4">
          <div>
            <h3 className="font-bold text-indigo-300 text-2xl mb-3">Languages</h3>
            <p className="leading-relaxed">Java, JavaScript, Python, HTML5, CSS, TypeScript, C++, C, MATLAB</p>
          </div>

          <div>
            <h3 className="font-bold text-indigo-300 text-2xl mb-3">Tools & Frameworks</h3>
            <p className="leading-relaxed">React, Angular, Node.js, TensorFlow, MongoDB, Express, Git</p>
          </div>

          <div>
            <h3 className="font-bold text-indigo-300 text-2xl mb-3">3D & Interactive Development</h3>
            <p className="leading-relaxed">React Three Fiber, Blender, Three.js, 3D Portfolio Development</p>
          </div>

          <div>
            <h3 className="font-bold text-indigo-300 text-2xl mb-3">AI & Computer Vision</h3>
            <p className="leading-relaxed">OpenCV, cvzone, NumPy, MQTT, Hand Gesture Detection, Gesture-Controlled Interfaces</p>
          </div>

          <div>
            <h3 className="font-bold text-indigo-300 text-2xl mb-3">IoT & Embedded Systems</h3>
            <p className="leading-relaxed">ESP32/ESP8266, Arduino, Arduino IDE, MQTT Communication</p>
          </div>

          <div>
            <h3 className="font-bold text-indigo-300 text-2xl mb-3">Other</h3>
            <p className="leading-relaxed">Frontend | Backend | Full-Stack | English, French, Arabic – Professional Proficiency or Above</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

/*
const SkillsSection = () => {
  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <h2
          className="text-3xl md:text-5xl font-bold"
          style={{ color: "#333" }}
        >
          Skills
        </h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-full md:w-64" key={index}>
              <motion.h3
                className="text-lg md:text-xl font-bold"
                style={{ color: "#333" }}
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-pink-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <h2
          className="text-3xl md:text-5xl font-bold mt-10"
          style={{ color: "#333" }}
        >
          Languages
        </h2>
        <div className="mt-8 space-y-4">
          {languages.map((lng, index) => (
            <div className="w-full md:w-64" key={index}>
              <motion.h3
                className="text-lg md:text-xl font-bold"
                style={{ color: "#333" }}
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 2 + index * 0.2,
                    },
                  },
                }}
              >
                {lng.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-pink-600 rounded-full" // Slightly darker pink for contrast
                  style={{ width: `${lng.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};
*/
const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-center justify-center">
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mjkbbjgl");
  return (
    <Section>
      <h2 className="text-3xl md:text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
        {state.succeeded ? (
          <p className="text-gray-900 text-center">Thanks for your message !</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label for="name" className="font-medium text-gray-900 block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label
              for="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label
              for="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              errors={state.errors}
            />
            <button
              disabled={state.submitting}
              className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 "
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </Section>
  );
};
