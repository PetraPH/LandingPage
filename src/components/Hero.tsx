import { Button } from "@/components/ui/button"

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-no-repeat hero-bg"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/messengerapptask/image/upload/v1749147024/petracc_ph/hero_hsigwj.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-950/90 to-yellow-950/60"></div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-2">
          <img
            src="https://res.cloudinary.com/messengerapptask/image/upload/v1749146964/petracc_ph/logo_p9huue.png"
            className="w-28 h-28 mx-auto block"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Welcome to
          <span className="block text-yellow-300">Petra Christian Centre</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
          Building an ever-growing JESUS community globally through love,
          family, and completeness
        </p>

        <div className="flex gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("about")}
            className="bg-slate-950 border border-solid border-slate-950 text-white max-w-max hover:border-yellow-300 hover:bg-yellow-300 hover:text-slate-950 text-sm px-4 sm:px-8 py-3 md:text-lg"
          >
            Learn About Us
          </Button>
          <Button
            onClick={() => scrollToSection("family-moments")}
            variant="outline"
            className="border-white max-w-max text-white bg-transparent hover:bg-yellow-300 hover:border-yellow-300 hover:text-slate-950 text-sm px-4 sm:px-8 py-3 md:text-lg"
          >
            See Our Family
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
