import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Menu,
  X,
  ArrowRight,
  Check,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import "./App.css";
import React, { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import logo from "@/assets/studio-raysn.png";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentClient, setCurrentClient] = useState(0);
  const heroSlides = [
    {
      background:
        "https://assets.bizclikmedia.net/1200/3bfb2eafbde1b75aaf548f9187f17392:5a622545b277485240a6c78666c7a566/gettyimages-1475998284.jpg",
      title: "Database & Cloud Management Services",
      subtitle:
        "Our reliable and dedicated team of professionals are happy to support and ensure an effective solution to all your end requirements.",
    },
    {
      background:
        "https://www.shutterstock.com/image-vector/cloud-storage-downloading-isometric-digital-600nw-1991000333.jpg",
      title: "Cloud Infrastructure Solutions",
      subtitle:
        "Transform your business with our comprehensive cloud management and database optimization services.",
    },
    {
      background:
        "https://www.future-processing.com/blog/wp-content/uploads/2024/11/DevOps-automation-cover.jpg",
      title: "DevOps & Automation",
      subtitle:
        "Streamline your operations with our professional DevOps and cloud automation solutions.",
    },
  ];

  const services = [
    {
      title: "Database Managed Services",
      image:
        "https://static.vecteezy.com/system/resources/previews/012/446/667/non_2x/computer-database-analysis-vector.jpg",
      description: "Comprehensive database management solutions",
    },
    {
      title: "Cloud Managed Services",
      image:
        "https://img.freepik.com/premium-vector/business-cloud-computing-2d-vector_175634-28915.jpg",
      description: "Complete cloud infrastructure management",
    },
    {
      title: "DevOps Managed Services",
      image:
        "https://devon.nl/wp-content/uploads/2021/04/about-image-devops-consult_devops.png",
      description: "Continuous integration and deployment",
    },
    {
      title: "Database and Cloud SaaS",
      image:
        "https://static.vecteezy.com/system/resources/previews/006/946/001/non_2x/saas-cloud-software-on-computers-database-illustration-for-web-banner-infographics-mobile-software-as-service-or-on-demand-internet-and-software-vector.jpg",
      description: "Software as a Service solutions",
    },
  ];

  const projects = [
    {
      title: "Database Optimization & Consolidation",
      image:
        "https://quixy.com/wp-content/uploads/2022/08/Consolidation-of-Data.png",
    },
    {
      title: "Cloud Cost Optimization",
      image:
        "https://www.prosperops.com/wp-content/uploads/2025/02/Cloud-Cost-Management-Key-Components-Challenges-and-Best-Practices.jpg",
    },
    {
      title: "Disaster Recovery",
      image:
        "https://www.starwindsoftware.com/blog/wp-content/uploads/2023/10/word-image-21.png",
    },
  ];

  const businessTypes = [
    {
      title: "Startup",
      image:
        "https://www.indiafilings.com/learn/wp-content/uploads/2023/02/What-is-a-startup-business.jpg",
      description: "Innovative solutions for growing businesses",
    },
    {
      title: "Small & Medium Business",
      image: "https://possibleworks.com/wp-content/uploads/2020/05/SMB.jpg",
      description: "Scalable solutions for SMB growth",
    },
    {
      title: "Large Enterprise",
      image:
        "https://www.ioppolo.com.au/wp-content/uploads/2022/10/Ioppolo-and-Associates-Business-Software-solutions-Large-Businesses.jpg",
      description: "Enterprise-grade solutions",
    },
  ];

  const testimonials = [
    {
      name: "Kapil Mittal",
      position: "Partner - VIM Global",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
      quote:
        "We are grateful for such professional services that TechTrainingNow team offered to my business. Excellent tech support from your is really appreciated throughout working on my database and cloud management project.",
    },
    {
      name: "Vikas Kapoor",
      position: "IT Business Head - Precision Pyramid",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
      quote:
        "TechTrainingNow is offering valued professional support since we engaged TechTrainingNow team to manage our database tasks, we've been able to relax about database activity and performance. Good work by team with positive attitude.",
    },
  ];

  const clientLogos = [
    "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  ];

  const benefits = [
    "The entire IT team will be supported with the managed cloud solutions that will keep their cloud smoothly running.",
    "With a cloud-based strategy, businesses will be able to reduce capital expenses and will enjoy quantifiable savings compared to on-premise solutions.",
    "By making use of economies of scale, companies can future-proof them and ensure the growth of their IT environment along with their business.",
    "With a roadmap of cloud adoption and planned implementation, companies can eliminate the IT planning hassle.",
    "With our professional and reliable data and cloud-managed services, businesses are guaranteed reliable security and disaster recovery solutions.",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentClient(
        (prev) => (prev + 1) % Math.ceil(clientLogos.length / 4)
      );
    }, 3000);
    return () => clearInterval(timer);
  }, [clientLogos.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img
                src={logo}
                alt="TechTrainingNow Logo"
                className="h-8 w-auto"
              />
              <h1 className="text-white text-2xl font-bold">
                Tech Training Now
              </h1>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#"
                className="text-white hover:text-orange-500 transition-colors"
              >
                Home
              </a>
              <div className="relative group">
                <a
                  href="#services"
                  className="text-white hover:text-orange-500 transition-colors flex items-center"
                >
                  Our Services
                </a>
              </div>
              <div className="relative group">
                <a
                  href="#projects"
                  className="text-white hover:text-orange-500 transition-colors flex items-center"
                >
                  Projects
                </a>
              </div>
              <a
                href="#about"
                className="text-white hover:text-orange-500 transition-colors"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="text-white hover:text-orange-500 transition-colors"
              >
                Contact Us
              </a>
            </nav>

            <button
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-4">
              <a
                href="#"
                className="block text-white hover:text-orange-500 transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="block text-white hover:text-orange-500 transition-colors"
              >
                Our Services
              </a>
              <a
                href="#projects"
                className="block text-white hover:text-orange-500 transition-colors"
              >
                Projects
              </a>
              <a
                href="#about"
                className="block text-white hover:text-orange-500 transition-colors"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="block text-white hover:text-orange-500 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Request Call Back Tab */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40">
        <div className="bg-orange-500 text-white px-4 py-8 transform rotate-90 origin-bottom-right cursor-pointer hover:bg-orange-600 transition-colors">
          <span className="text-sm font-medium whitespace-nowrap">
            Request Call Back
          </span>
        </div>
      </div>

      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${slide.background}')`,
              }}
            />
            <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
              <div className="max-w-4xl text-center mx-auto text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                  {slide.subtitle}
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 rounded text-white px-8 py-3 text-lg font-medium">
                  Know More
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-orange-500" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div id="services" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              15+ Years of Experience in Database and Cloud Services
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Custom solutions to all your requirements, well supported by a
              dedicated team of professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                    READ MORE <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Projects Section */}
          <div id="projects" className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Our Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                TechTrainingNow – Your All-in-One IT Partner offering a Variety
                of IT Tasks
              </h3>
              <p className="text-gray-600 mb-4">
                TechTrainingNow is a IT company offering database and
                cloud-managed services that include complete management and
                control of the client's database and cloud platforms like
                maintenance, optimization, and migration.
              </p>
              <a
                href="#"
                className="text-orange-500 hover:text-orange-600 font-medium"
              >
                Read More
              </a>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Cloud Management Services
              </h3>
              <p className="text-gray-600 mb-4">
                TechTrainingNow, a cloud-managed service provider, helps
                businesses design, build, and manage comprehensive cloud
                solutions. Internal IT teams of companies often lack the skills
                to monitor and maintain a dynamic cloud environment and hence
                depend on a partner like...
              </p>
              <a
                href="#"
                className="text-orange-500 hover:text-orange-600 font-medium"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Database Management Services
              </h3>
              <p className="text-gray-600 mb-4">
                Managing a database on your own is a complex task but this task
                can be simplified by availing the most comprehensive database
                management service from TechTrainingNow to keep business
                operations running as planned.
              </p>
              <a
                href="#"
                className="text-orange-500 hover:text-orange-600 font-medium"
              >
                Read More
              </a>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Hybrid Cloud Managed Services
              </h3>
              <p className="text-gray-600 mb-4">
                TechTrainingNow managed hybrid cloud solutions allow companies
                to regain control of their cloud and clamp down on unnecessary
                costs. To thrive in this ever-changing world,
              </p>
              <a
                href="#"
                className="text-orange-500 hover:text-orange-600 font-medium"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Benefits Section */}
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Transform your Business with TechTrainingNow Cloud and Data
            Management Services
          </h3>
          <p className="text-xl text-gray-600 mb-12 text-center">
            While working with TechTrainingNow, businesses will discover the
            cloud benefits in the following ways:
          </p>
          <div className="flex flex-col justify-center items-center ">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              We Are Happy To
            </h2>
            <p className="text-xl text-gray-600">
              Provide Services and Solutions to
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessTypes.map((type, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <img
                      src={type.image || "/placeholder.svg"}
                      alt={type.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {type.title}
                  </h3>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    READ MORE <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              What People Says About Us
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <button
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="flex-1 mx-8">
                <div className="text-center">
                  <div className="mb-6">
                    <img
                      src={
                        testimonials[currentTestimonial].image ||
                        "/placeholder.svg"
                      }
                      alt={testimonials[currentTestimonial].name}
                      className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    <h4 className="text-xl font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonial].position}
                    </p>
                  </div>
                  <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                </div>
              </div>

              <button
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) => (prev + 1) % testimonials.length
                  )
                }
                className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? "bg-orange-500"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Client Logos Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Our Happy Clients
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentClient * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(clientLogos.length / 4) }).map(
                (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                      {clientLogos
                        .slice(slideIndex * 4, (slideIndex + 1) * 4)
                        .map((logo, index) => (
                          <div key={index} className="flex justify-center">
                            <img
                              src={logo || "/placeholder.svg"}
                              alt={`Client ${slideIndex * 4 + index + 1}`}
                              className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(clientLogos.length / 4) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentClient(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentClient ? "bg-orange-500" : "bg-gray-300"
                    }`}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section> */}

      <section id="contact" className="py-20 relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://storage.googleapis.com/website-production/uploads/2017/11/people-based-marketing.jpg')`,
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We Provide the Best Solution with great team efforts
          </h2>
          <p className="text-xl mb-8">We are happy to help you</p>
          <div className="max-w-4xl mx-auto">
            <form className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Input
                placeholder="Name"
                className="bg-gray-50 border-gray-600 text-black placeholder-black"
              />
              <Input
                placeholder="Email Address"
                type="email"
                className="bg-gray-50 border-gray-600 text-black placeholder-black"
              />
              <Input
                placeholder="Phone Number"
                type="tel"
                className="bg-gray-50 border-gray-600 text-black placeholder-black"
              />
              <Input
                placeholder="Website"
                className="bg-gray-50 border-gray-600 text-black placeholder-black"
              />
            </form>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium">
            Contact Us
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Follow Us */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-blue-800 p-3 rounded-full hover:bg-blue-900 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
              <p className="text-gray-300 mb-4">
                Subscribe to our Newsletters right now and get special offers
              </p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <button className="bg-orange-500 hover:bg-orange-600 ml-2 p-2 rounded">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
              <div className="space-y-3 text-gray-300">
                <p>
                  <strong>Address:</strong>Town- Mithapur,Devbhumi
                  Dwarka,Gujarat,361345
                </p>
                <p>
                  <strong>Email:</strong> dola@TechTrainingNow.com
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} TechTrainingNow Private Limited.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
