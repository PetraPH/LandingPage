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
        className="absolute inset-0 bg-cover bg-no-repeat hero-bg"
        style={{
          backgroundImage: `url('/images/hero.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/40 to-yellow-500/30"></div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-2">
          <img src="/images/logo.png" className="w-28 h-28 mx-auto block" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Welcome to
          <span className="block text-yellow-300">Petra Christian Centre</span>
        </h1>

        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
          Building an ever-growing JESUS community globally through love,
          family, and completeness
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("about")}
            className="bg-slate-950 text-white hover:bg-yellow-100 hover:text-slate-950 px-8 py-3 text-lg"
          >
            Learn About Us
          </Button>
          <Button
            onClick={() => scrollToSection("family-moments")}
            variant="outline"
            className="border-white text-white bg-transparent hover:bg-yellow-100 hover:border-yellow-100 hover:text-slate-950 px-8 py-3 text-lg"
          >
            See Our Family
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
