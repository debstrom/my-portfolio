import { LuUser } from "react-icons/lu";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <div
      className="md:p-22 md:pt-24 md:pb-22 md:px-40 md:h-full select-none 
    bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] 
    bg-[white] p-8 flex flex-col md:flex-row space-x-0 md:space-x-28 md:mt-0 mt-6 pt-16"
    >
      {/* LEFT SIDE */}
      <div className="w-full md:w-6/12">
        <div className="md:w-28 md:h-7 rounded-full w-20 h-5 bg-black md:px-1 space-x-3.5 mb-6 flex items-center justify-center">
          <LuUser
            className="md:inline-block text-white font-semibold relative md:left-1.5 hidden scale-50 md:scale-100"
            size={22}
          />
          <span className="text-white font-poppins text-xs md:text-xs font-normal md:font-medium">
            About me
          </span>
        </div>

        <div className="md:pt-5">
          <h1 className="md:text-5xl text-4xl md:font-medium font-semibold">
            Software <br className="md:hidden" />
            <span className="bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent">
              Developer
            </span>
          </h1>
          <hr className="md:w-44 w-32 md:mb-0 mb-4 h-3 mt-3 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]" />
        </div>

        <div className="w-full md:mt-10">
          <h1 className="font-poppins text-justify">
            I am a Software Developer. Currently with a year of experience, I
            put my time learning essentials from other fields as well. I am very
            comfortable with adapting to new software and new technologies. With
            a strong passion for innovation and a keen eye for detail, I'm
            confident in my ability to collaborate with cross-functional teams,
            drive projects forward, and deliver high-quality results.
          </h1>
        </div>

        {/* PROJECTS */}
        <div className="mt-12 font-poppins">
          <h1 className="md:text-5xl text-4xl md:font-medium font-semibold">
            Projects
          </h1>
          <hr className="md:w-44 w-32 md:mb-0 mb-4 h-3 mt-3 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]" />

          <div className="flex flex-col gap-4 mt-[50px]">
            {/* Project 1 */}
            <div className="border rounded-xl p-4 hover:shadow-sm transition w-full">
              <h3 className="font-medium text-lg">MabNest</h3>
              <p className="text-sm text-gray-600 mt-1 text-justify">
                At MabNest, we believe vision is more than just seeing
                clearly—it's a form of self-expression. We combine high-quality
                craftsmanship with modern technology to deliver premium eyewear
                directly to your door. From timeless classics to bold,
                trend-setting frames, our mission is to provide stylish,
                affordable vision solutions that help you see the world with
                confidence. The platform focuses on user-friendly navigation,
                seamless browsing experience, and accessibility while
                maintaining modern UI design standards for online shopping
                systems.
              </p>
              <a
                href="https://github.com/debstrom/eyeHub"
                className="text-sm text-purple-600 mt-2 inline-block underline"
              >
                View Project
              </a>
            </div>

            {/* Project 2 */}
            <div className="border rounded-xl p-4 hover:shadow-sm transition w-full">
              <h3 className="font-medium text-lg">SmartWasteManagement</h3>
              <p className="text-sm text-gray-600 mt-1 text-justify">
                SmartWasteManagement is a Java-based Object-Oriented Programming
                (OOP) project that efficiently sorts and manages waste materials
                using key OOP concepts such as inheritance, polymorphism,
                encapsulation, and abstraction. Different smart bins are
                designed to validate specific waste types, monitor fill levels,
                and store collected items accordingly. The system simulates
                real-world waste segregation and disposal processes, enabling
                better waste handling through automation. This project was
                collaboratively built by Debjeet Baral, Tazin Hossain, and
                Afsana Imrose to demonstrate efficient software design
                principles for environmental sustainability solutions.
              </p>
              <a
                href="https://github.com/debstrom/Java-SmartWasteManagement-System-"
                className="text-sm text-purple-600 mt-2 inline-block underline"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - CP SECTION */}
      <div className="w-full md:w-6/12 md:mt-[52px] mt-16">
        <div className="md:pt-5">
          <h1 className="md:text-5xl text-4xl md:font-medium font-semibold">
            Competitive <br className="md:hidden" />
            <span className="bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent">
              Programming
            </span>
          </h1>
          <hr className="md:w-52 w-36 h-3 mt-3 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]" />
        </div>

        <p className="font-poppins text-justify mt-10">
          I actively engage in competitive programming to strengthen my
          problem-solving and algorithmic thinking skills. I regularly practice
          Data Structures and Algorithms (DSA) on platforms like Codeforces and
          LeetCode, where I solve a wide range of problems involving arrays,
          strings, recursion, dynamic programming, greedy algorithms, graphs,
          and number theory. Competitive programming enables me to approach
          complex problems logically, write optimized and efficient code under
          time constraints, and continuously improve my analytical and debugging
          abilities. It has significantly enhanced my understanding of
          computational complexity, memory optimization, and real-world
          problem-solving techniques that are essential for technical interviews
          and software development.
        </p>

        {/* CP LINKS */}
        <div className="mt-8 flex flex-col gap-4 font-poppins w-full">
          <a
            href="https://codeforces.com/profile/DebStrom"
            target="_blank"
            className="group flex items-start md:items-center gap-4 border rounded-xl px-4 py-3 
            hover:shadow-md hover:-translate-y-1 transition w-full"
          >
            <div className="bg-blue-100 p-2 rounded-lg shrink-0">
              <SiCodeforces size={20} />
            </div>
            <div>
              <h3 className="font-medium">Codeforces</h3>
              <p className="text-sm text-gray-500">
                View my contests & ratings
              </p>
            </div>
          </a>

          <a
            href="https://leetcode.com/u/debstrom/"
            target="_blank"
            className="group flex items-start md:items-center gap-4 border rounded-xl px-4 py-3 
            hover:shadow-md hover:-translate-y-1 transition w-full"
          >
            <div className="bg-orange-100 p-2 rounded-lg shrink-0">
              <SiLeetcode size={20} />
            </div>
            <div>
              <h3 className="font-medium">LeetCode</h3>
              <p className="text-sm text-gray-500">Practice & interview prep</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
