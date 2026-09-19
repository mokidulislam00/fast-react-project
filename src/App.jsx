import { useEffect, useState } from "react";
import collegeImage1 from "./assets/clg-night.jpg";
import collegeImage2 from "./assets/clg-day.jpg";
import classroomImage from "./assets/1000077280.jpg";
import MyImage from "./assets/my-pic.jpg";
import myImage2 from "./assets/1000076113.jpg";

import {
  Menu,
  X,
  GraduationCap,
  BookOpen,
  Users,
  Award,
  CalendarDays,
  MapPin,
  Phone,
  Mail,
  Search,
  ArrowRight,
  ChevronRight,
  Clock,
  Bell,
  Moon,
  Sun,
  ExternalLink,
  Send,
  CheckCircle,
  XCircle,
  Building2,
  Library,
  UserRound,
  ScrollText,
  Image as ImageIcon,
  Heart,
} from "lucide-react";


// ============================================================
// DATA
// ============================================================

const notices = [
  {
    id: 1,
    title: "HSC Examination Form Fill-up Notice",
    date: "15 September 2026",
    category: "Examination",
    description:
      "All concerned HSC students are requested to complete their examination form fill-up within the announced deadline.",
  },
  {
    id: 2,
    title: "Admission Information for New Students",
    date: "10 September 2026",
    category: "Admission",
    description:
      "Admission-related information, required documents and important dates are available from the college administration.",
  },
  {
    id: 3,
    title: "College Cultural Program 2026",
    date: "05 September 2026",
    category: "Event",
    description:
      "The annual cultural program will be organized at the college auditorium. Students are requested to register with their respective departments.",
  },
  {
    id: 4,
    title: "Class Routine Updated",
    date: "01 September 2026",
    category: "Academic",
    description:
      "The latest class routine has been published. Students should check their department notice board for detailed schedules.",
  },
  {
    id: 5,
    title: "Library Membership Registration",
    date: "28 August 2026",
    category: "General",
    description:
      "Students can register for library membership by submitting the required information to the college library.",
  },
];

const departments = [
  {
    name: "Bangla",
    icon: "বাংলা",
    description:
      "Study of Bengali language, literature, culture and history.",
  },
  {
    name: "English",
    icon: "EN",
    description:
      "Language, literature, communication and academic English.",
  },
  {
    name: "Physics",
    icon: "PHY",
    description:
      "Fundamental concepts of physics with theoretical and practical learning.",
  },
  {
    name: "Chemistry",
    icon: "CHE",
    description:
      "Chemical sciences with laboratory-based academic activities.",
  },
  {
    name: "Mathematics",
    icon: "MATH",
    description:
      "Mathematical concepts, problem solving and analytical skills.",
  },
  {
    name: "Accounting",
    icon: "ACC",
    description:
      "Accounting principles, financial management and business studies.",
  },
];

const teachers = [
  {
    name: "AHMED LABIB",
    designation: "Professor",
    department: "Department of Philosophy",
    image: MyImage,
  },
  {
    name: "Dr. Nusrat Jahan",
    designation: "Associate Professor",
    department: "Department of English",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Dr. Ahmed Hasan",
    designation: "Professor",
    department: "Department of Physics",
    image:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=500&q=80",
  },
];

const gallery = [
  {
    title: "College Campus",
    image: collegeImage1,
  },
  {
    title: "College Beauty",
    image: collegeImage2,
  },
  {
    title: "Classroom",
    image: classroomImage,
  },
  {
    title: "Students",
    image: myImage2,
  },
];


// ============================================================
// CUSTOM ANIMATED CURSOR
// ============================================================

function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;

      if (
        target.closest(
          "button, a, input, textarea, select, [role='button']"
        )
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor-dot"
        style={{
          left: position.x,
          top: position.y,
        }}
      />

      <div
        className={`custom-cursor-circle ${
          isHovering ? "cursor-hover" : ""
        }`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  );
}


// ============================================================
// NAVBAR
// ============================================================

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    ["Home", "home"],
    ["About", "about"],
    ["Academics", "academics"],
    ["Notices", "notices"],
    ["Teachers", "teachers"],
    ["Gallery", "gallery"],
    ["Contact", "contact"],
  ];

  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => handleNav("home")}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-700 text-white flex items-center justify-center shadow-lg">
              <GraduationCap size={28} />
            </div>

            <div className="text-left">
              <h1 className="font-bold text-lg text-slate-900 dark:text-white">
                BM College
              </h1>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Barishal
              </p>
            </div>
          </button>


          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-7">

            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400 transition"
              >
                {label}
              </button>
            ))}

          </nav>


          {/* Right buttons */}
          <div className="flex items-center gap-2">

            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={19} /> : <Moon size={19} />}
            </button>


            <button
              onClick={() => handleNav("admission")}
              className="hidden sm:flex bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition shadow-md"
            >
              Admission
            </button>


            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>

          </div>

        </div>


        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden py-5 border-t border-slate-200 dark:border-slate-800">

            <div className="flex flex-col gap-2">

              {navItems.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => handleNav(id)}
                  className="text-left px-4 py-3 rounded-lg hover:bg-teal-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                >
                  {label}
                </button>
              ))}

              <button
                onClick={() => handleNav("admission")}
                className="mt-2 bg-teal-700 text-white py-3 rounded-lg font-semibold"
              >
                Apply for Admission
              </button>

            </div>

          </div>
        )}

      </div>
    </header>
  );
}


// ============================================================
// HERO
// ============================================================

function Hero() {

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="pt-20 min-h-[450px] bg-linear-to-br from-teal-950 via-teal-800 to-cyan-800 text-white hero-pattern flex items-center"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">

          {/* Text */}
          <div className="fade-up">

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-400/10 border border-green-600 rounded-full mb-6">

              <span className="w-2 h-2 bg-cyan-600 rounded-full animate-pulse" />

              <span className="text-sm text-blue-500 font-semibold">
                Welcome to BM College, Barishal
              </span>

            </div>


            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-green-700">
              Knowledge.
              <br />

              <span className="text-purple-700">
                Character.
              </span>

              <br />

              Excellence.
            </h2>


            <p className="mt-6 text-lg text-green-700 max-w-xl leading-relaxed">
              A modern educational platform for students, teachers and
              guardians of BM College, Barishal.
            </p>


            <div className="mt-8 flex flex-wrap gap-4">

              <button
                onClick={() => goTo("admission")}
                className="group bg-white text-teal-800 px-7 py-3.5 rounded-full font-bold hover:bg-green-300 transition shadow-xl"
              >
                Apply for Admission

                <ArrowRight
                  className="inline ml-2 group-hover:translate-x-1 transition"
                  size={18}
                />
              </button>


              <button
                onClick={() => goTo("about")}
                className="px-7 py-3.5 rounded-full font-bold border border-white/30 hover:bg-green-700 transition bg-green-900"
              >
                Explore College
              </button>

            </div>


            <div className="mt-12 grid grid-cols-3 gap-5 max-w-lg">

              <div>
                <p className="text-3xl font-bold text-blue-500">130+</p>
                <p className="text-sm text-green-800 font-bold">
                  Years of Legacy
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-blue-500">50+</p>
                <p className="text-sm text-green-800 font-bold">
                  Departments
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-blue-500">10K+</p>
                <p className="text-sm text-green-800 font-bold">
                  Students
                </p>
              </div>

            </div>

          </div>


          {/* Hero card */}
          <div className="block">

            <div className="relative float-animation">

              <div className="absolute -inset-5 bg-cyan-400/20 rounded-[3rem] blur-2xl" />

              <div className="relative rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl">

                <img
                  src="https://cdn.moumachi.com.bd/listings/2019-04/14921/images/original/20246-9511_govt-bm-college-lake.png"
                  alt="BM College Barishal campus"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-black/80 to-transparent">

                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                      <Building2 />
                    </div>

                    <div>
                      <p className="font-bold">
                        BM College
                      </p>

                      <p className="text-sm text-white/70">
                        Barishal, Bangladesh
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


// ============================================================
// ABOUT
// ============================================================

function About() {

  const stats = [
    {
      icon: <Users />,
      number: "10,000+",
      label: "Students",
    },
    {
      icon: <UserRound />,
      number: "300+",
      label: "Teachers",
    },
    {
      icon: <BookOpen />,
      number: "50+",
      label: "Departments",
    },
    {
      icon: <Award />,
      number: "130+",
      label: "Years Legacy",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-950"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-teal-700 dark:text-teal-400 font-bold uppercase tracking-widest text-sm">
              About Our College
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-900 dark:text-white">
              Building the future through education
            </h2>

            <p className="mt-6 text-slate-600 dark:text-slate-400 leading-8">
              BM College is an important educational institution in
              Barishal. The college has a long academic tradition and
              provides students with opportunities to develop knowledge,
              skills and character.
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-8">
              Our goal is to create an environment where students can
              learn, explore new ideas and prepare themselves for higher
              education and professional life.
            </p>


            <button
              onClick={() =>
                document.getElementById("academics")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="mt-8 inline-flex items-center gap-2 text-teal-700 dark:text-teal-400 font-bold hover:gap-3 transition-all"
            >
              Explore Academics
              <ArrowRight size={18} />
            </button>

          </div>


          <div className="grid grid-cols-2 gap-5">

            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-7 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:-translate-y-1 transition shadow-sm"
              >

                <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex items-center justify-center">
                  {stat.icon}
                </div>

                <p className="mt-5 text-3xl font-black text-slate-900 dark:text-white">
                  {stat.number}
                </p>

                <p className="mt-1 text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}


// ============================================================
// ACADEMICS
// ============================================================

function Academics() {

  return (
    <section
      id="academics"
      className="py-24 bg-slate-200 dark:bg-slate-900"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto lg:max-w-3xl">

          <p className="text-teal-700 dark:text-teal-400 font-bold uppercase tracking-widest text-sm">
            Academics
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-900 dark:text-white">
            Explore our academic departments
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Discover academic opportunities and build your future
            through quality education.
          </p>

        </div>


        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {departments.map((department) => (

            <div
              key={department.name}
              className="group bg-white dark:bg-slate-950 p-7 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-teal-800 hover:shadow-xl transition-all duration-300"
            >

              <div className="w-14 h-14 rounded-2xl bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex items-center justify-center font-black text-sm">
                {department.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                {department.name}
              </h3>

              <p className="mt-3 text-slate-500 dark:text-slate-400 leading-7">
                {department.description}
              </p>

              <button
                className="mt-5 flex items-center gap-2 text-teal-700 dark:text-teal-400 font-semibold group-hover:gap-3 transition-all"
                onClick={() =>
                  alert(`${department.name} department selected.`)
                }
              >
                Learn More
                <ChevronRight size={17} />
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}


// ============================================================
// NOTICE BOARD
// ============================================================

function Notices({ onNoticeClick }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Examination",
    "Admission",
    "Event",
    "Academic",
    "General",
  ];

  const filteredNotices = notices.filter((notice) => {

    const matchesSearch =
      notice.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All" || notice.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section
      id="notices"
      className="py-24 bg-white dark:bg-slate-950"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

          <div>

            <p className="text-teal-700 dark:text-teal-400 font-bold uppercase tracking-widest text-sm">
              Notice Board
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-900 dark:text-white">
              Latest college notices
            </h2>

          </div>


          {/* Search */}
          <div className="relative w-full lg:w-80">

            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search notices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-teal-500"
            />

          </div>

        </div>


        {/* Categories */}
        <div className="mt-8 flex gap-2 flex-wrap">

          {categories.map((item) => (

            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                category === item
                  ? "bg-teal-700 text-white"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-green-200"
              }`}
            >
              {item}
            </button>

          ))}

        </div>


        {/* Notices */}
        <div className="mt-10 grid lg:grid-cols-2 gap-5">

          {filteredNotices.length > 0 ? (

            filteredNotices.map((notice) => (

              <button
                key={notice.id}
                onClick={() => onNoticeClick(notice)}
                className="text-left p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-teal-300 dark:hover:border-teal-800 hover:shadow-lg transition bg-white dark:bg-slate-950"
              >

                <div className="flex gap-5">

                  <div className="shrink-0 w-14 h-14 rounded-xl bg-green-300 dark:bg-green-950 text-green-700 dark:text-green-800 flex flex-col items-center justify-center">

                    <Bell size={18} />

                  </div>


                  <div className="flex-1">

                    <div className="flex flex-wrap items-center gap-2">

                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-green-300 dark:bg-green-950 text-green-700 dark:text-green-400">
                        {notice.category}
                      </span>

                      <span className="text-xs text-slate-400">
                        {notice.date}
                      </span>

                    </div>

                    <h3 className="mt-3 font-bold text-lg text-slate-900 dark:text-white">
                      {notice.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                      {notice.description}
                    </p>

                  </div>

                  <ChevronRight
                    size={20}
                    className="text-slate-600 shrink-0"
                  />

                </div>

              </button>

            ))

          ) : (

            <div className="lg:col-span-2 py-16 text-center">

              <Search className="mx-auto text-slate-300" size={40} />

              <p className="mt-4 text-slate-500">
                No notices found.
              </p>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}


// ============================================================
// TEACHERS
// ============================================================

function Teachers() {

  return (
    <section
      id="teachers"
      className="py-24 bg-slate-50 dark:bg-slate-900"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center">

          <p className="text-teal-700 dark:text-teal-400 font-bold uppercase tracking-widest text-sm">
            Our Faculty
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-900 dark:text-white">
            Meet our teachers
          </h2>

        </div>


        <div className="mt-14 grid md:grid-cols-3 gap-7">

          {teachers.map((teacher) => (

            <div
              key={teacher.name}
              className="bg-white dark:bg-slate-950 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-xl transition"
            >

              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {teacher.name}
                </h3>

                <p className="mt-1 text-teal-700 dark:text-teal-400 font-semibold">
                  {teacher.designation}
                </p>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {teacher.department}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}


// ============================================================
// GALLERY
// ============================================================

function Gallery() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="gallery"
      className="py-24 bg-white dark:bg-slate-950"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-end justify-between">

          <div>

            <p className="text-teal-700 dark:text-teal-400 font-bold uppercase tracking-widest text-sm">
              Campus Life
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-900 dark:text-white">
              College gallery
            </h2>

          </div>

          <ImageIcon
            className="hidden sm:block text-teal-700"
            size={40}
          />

        </div>


        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {gallery.map((item) => (

            <button
              key={item.title}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5]"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-left">

                <p className="text-white font-bold">
                  {item.title}
                </p>

                <p className="text-white/70 text-sm mt-1">
                  View image
                </p>

              </div>

            </button>

          ))}

        </div>

      </div>


      {/* Gallery modal */}
      {selectedImage && (

        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-5"
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white"
            >
              <X size={28} />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />

            <p className="text-white text-center mt-4 font-bold">
              {selectedImage.title}
            </p>

          </div>

        </div>

      )}

    </section>
  );
}


// ============================================================
// ADMISSION
// ============================================================

function Admission() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    group: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.group
    ) {
      return;
    }

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      group: "",
    });

  };

  return (
    <section
      id="admission"
      className="py-24 bg-slate-50 dark:bg-slate-900"
    >

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-teal-900 rounded-[2rem] overflow-hidden shadow-2xl">

          <div className="grid lg:grid-cols-2">

            <div className="p-8 sm:p-12 text-white">

              <p className="text-cyan-300 font-bold uppercase tracking-widest text-sm">
                Admissions
              </p>

              <h2 className="mt-4 text-4xl font-black">
                Start your journey with us
              </h2>

              <p className="mt-5 text-teal-100 leading-7">
                Fill out the initial admission inquiry form.
                Our administration can provide further admission
                information.
              </p>


              <div className="mt-8 space-y-5">

                <div className="flex gap-4">
                  <CheckCircle className="text-cyan-300 shrink-0" />
                  <span>Quality academic environment</span>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="text-cyan-300 shrink-0" />
                  <span>Experienced faculty members</span>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="text-cyan-300 shrink-0" />
                  <span>Student-focused activities</span>
                </div>

              </div>

            </div>


            <div className="bg-white dark:bg-slate-950 p-8 sm:p-12">

              {submitted ? (

                <div className="h-full flex flex-col items-center justify-center text-center">

                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle size={34} />
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
                    Inquiry Submitted
                  </h3>

                  <p className="mt-3 text-slate-500 dark:text-slate-400">
                    Your admission inquiry has been received
                    successfully.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-teal-700 font-bold"
                  >
                    Submit another inquiry
                  </button>

                </div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  <div>

                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-teal-500"
                    />

                  </div>


                  <div>

                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-teal-500"
                    />

                  </div>


                  <div>

                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Phone
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="01XXXXXXXXX"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-teal-500"
                    />

                  </div>


                  <div>

                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Academic Group
                    </label>

                    <select
                      name="group"
                      value={form.group}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-teal-500"
                    >

                      <option value="">
                        Select group
                      </option>

                      <option value="Science">
                        Science
                      </option>

                      <option value="Humanities">
                        Humanities
                      </option>

                      <option value="Business Studies">
                        Business Studies
                      </option>

                    </select>

                  </div>


                  <button
                    type="submit"
                    className="w-full bg-teal-700 hover:bg-teal-800 text-white py-3.5 rounded-xl font-bold transition flex items-center justify-center gap-2"
                  >
                    Submit Inquiry
                    <Send size={18} />
                  </button>

                </form>

              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


// ============================================================
// CONTACT
// ============================================================

function Contact() {

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!message.trim()) return;

    alert("Your message has been submitted successfully!");

    setMessage("");

  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-slate-950"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16">

          <div>

            <p className="text-teal-700 dark:text-teal-400 font-bold uppercase tracking-widest text-sm">
              Contact
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-900 dark:text-white">
              Get in touch
            </h2>

            <p className="mt-5 text-slate-600 dark:text-slate-400 leading-7 max-w-lg">
              Have a question about admission, academics or college
              activities? Send us a message.
            </p>


            <div className="mt-10 space-y-6">

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex items-center justify-center shrink-0">
                  <MapPin size={21} />
                </div>

                <div>
                  <p className="font-bold text-slate-900 dark:text-white">
                    Address
                  </p>

                  <p className="text-slate-500 dark:text-slate-400 mt-1">
                    Barishal, Bangladesh
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex items-center justify-center shrink-0">
                  <Phone size={21} />
                </div>

                <div>
                  <p className="font-bold text-slate-900 dark:text-white">
                    Phone
                  </p>

                  <p className="text-slate-500 dark:text-slate-400 mt-1">
                    Call: +880 1516503990
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex items-center justify-center shrink-0">
                  <Mail size={21} />
                </div>

                <div>
                  <p className="font-bold text-slate-900 dark:text-white">
                    Email
                  </p>

                  <p className="text-slate-500 dark:text-slate-400 mt-1">
                    info@bmcollege.edu.bd
                  </p>
                </div>

              </div>

            </div>

          </div>


          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
          >

            <div className="grid sm:grid-cols-2 gap-5">

              <div>

                <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                  Your Name
                </label>

                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-teal-500"
                />

              </div>


              <div>

                <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                  Email
                </label>

                <input
                  required
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-teal-500"
                />

              </div>

            </div>


            <div className="mt-5">

              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                Subject
              </label>

              <input
                required
                type="text"
                placeholder="Message subject"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-teal-500"
              />

            </div>


            <div className="mt-5">

              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                Message
              </label>

              <textarea
                required
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-teal-500 resize-none"
              />

            </div>


            <button
              type="submit"
              className="mt-5 bg-teal-700 hover:bg-teal-800 text-white px-7 py-3 rounded-xl font-bold transition flex items-center gap-2"
            >
              Send Message
              <Send size={18} />
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}


// ============================================================
// FOOTER
// ============================================================

function Footer() {

  const goHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          <div className="md:col-span-2">

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-teal-700 flex items-center justify-center">
                <GraduationCap />
              </div>

              <div>
                <p className="font-bold text-lg">
                  BM College
                </p>

                <p className="text-sm text-slate-400">
                  Barishal
                </p>
              </div>

            </div>

            <p className="mt-5 text-slate-400 max-w-md leading-7">
              A modern single-page educational website concept for
              BM College, Barishal.
            </p>


            <div className="mt-6 flex gap-3">

              <button
                onClick={() =>
                  alert("https://www.facebook.com/share/1FzWhmZvun/")
                }
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-teal-700 flex items-center justify-center transition font-bold"
                aria-label="Facebook"
              >
                f
              </button>

              <button
                onClick={() =>
                  alert("https://www.youtube.com/@bmcollegebarishal")
                }
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-teal-700 flex items-center justify-center transition font-bold"
                aria-label="YouTube"
              >
                ▶
              </button>

            </div>

          </div>


          <div>

            <h3 className="font-bold">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-400">

              <button
                onClick={goHome}
                className="block hover:text-white"
              >
                Home
              </button>

              <button
                onClick={() =>
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="block hover:text-white"
              >
                About
              </button>

              <button
                onClick={() =>
                  document.getElementById("academics")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="block hover:text-white"
              >
                Academics
              </button>

              <button
                onClick={() =>
                  document.getElementById("notices")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="block hover:text-white"
              >
                Notices
              </button>

            </div>

          </div>


          <div>

            <h3 className="font-bold">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm text-slate-400">

              <p className="flex gap-2">
                <MapPin size={17} />
                Barishal, Bangladesh
              </p>

              <p className="flex gap-2">
                <Mail size={17} />
                info@bmcollege.edu.bd
              </p>

              <p className="flex gap-2">
                <Clock size={17} />
                Office Hours: 9:00 AM - 4:00 PM
              </p>

            </div>

          </div>

        </div>


        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between gap-3 text-sm text-slate-500">

          <p>
            © 2026 BM College. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Made by Ahmed Labib <Heart size={14} />
          </p>

        </div>

      </div>

    </footer>
  );
}


// ============================================================
// NOTICE MODAL
// ============================================================

function NoticeModal({ notice, onClose }) {

  if (!notice) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-5"
      onClick={onClose}
    >

      <div
        className="w-full max-w-xl bg-white dark:bg-slate-950 rounded-3xl shadow-2xl p-7"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="flex items-start justify-between gap-5">

          <div>

            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 text-xs font-bold">
              {notice.category}
            </span>

            <h2 className="mt-4 text-2xl font-black text-slate-900 dark:text-white">
              {notice.title}
            </h2>

          </div>


          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-300"
          >
            <X size={20} />
          </button>

        </div>


        <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
          <CalendarDays size={17} />
          {notice.date}
        </div>


        <p className="mt-6 text-slate-600 dark:text-slate-400 leading-8">
          {notice.description}
        </p>


        <button
          onClick={onClose}
          className="mt-7 w-full bg-teal-700 hover:bg-teal-800 text-white py-3 rounded-xl font-bold"
        >
          Close Notice
        </button>

      </div>

    </div>
  );
}


// ============================================================
// SCROLL TO TOP
// ============================================================

function ScrollToTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-teal-700 hover:bg-teal-800 text-white shadow-xl flex items-center justify-center transition"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}


// ============================================================
// MAIN APP
// ============================================================

export default function App() {

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  const [selectedNotice, setSelectedNotice] = useState(null);


  // Dark mode
  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


  // Page title
  useEffect(() => {
    document.title = "BM College Barishal | Education & Excellence";
  }, []);


  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />

      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">

        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />


        <main>

          <Hero />

          <About />

          <Academics />

          <Notices
            onNoticeClick={setSelectedNotice}
          />

          <Teachers />

          <Gallery />

          <Admission />

          <Contact />

        </main>


        <Footer />


        <NoticeModal
          notice={selectedNotice}
          onClose={() => setSelectedNotice(null)}
        />


        <ScrollToTop />

      </div>
    </>
  );
}