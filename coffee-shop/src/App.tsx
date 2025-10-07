import './App.css'
import { Coffee, MapPin, Clock, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Coffee className="text-amber-700" size={32} />
            <h1 className="text-2xl font-bold text-amber-900">Brew &amp; Bean</h1>
          </div>
          <div className="hidden md:flex gap-8 text-gray-700">
            <a href="#menu" className="hover:text-amber-700 transition">Menu</a>
            <a href="#about" className="hover:text-amber-700 transition">About</a>
            <a href="#location" className="hover:text-amber-700 transition">Location</a>
            <a href="#contact" className="hover:text-amber-700 transition">Contact</a>
          </div>
          <Button className="bg-amber-700 hover:bg-amber-800">Order Now</Button>
        </nav>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="/images/ruben-ramirez-xhKG01FN2uk-unsplash.jpg" 
          alt="Cozy coffee shop interior with wooden tables and warm lighting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Your Perfect Cup Awaits</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Handcrafted coffee, cozy atmosphere, unforgettable moments</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-lg px-8">Visit Us</Button>
            <Button size="lg" variant="outline" className="bg-white text-amber-900 hover:bg-gray-100 text-lg px-8">View Menu</Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-amber-900 mb-6">Where Coffee Meets Comfort</h3>
              <p className="text-lg text-gray-700 mb-4">
                At Brew &amp; Bean, we believe that every cup of coffee tells a story. Our expert baristas carefully select and roast the finest beans from around the world to bring you an exceptional coffee experience.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether you're catching up with friends, working on your next big idea, or simply enjoying a quiet moment, our cozy space is designed to be your home away from home.
              </p>
              <Button className="bg-amber-700 hover:bg-amber-800">Learn Our Story</Button>
            </div>
            <div className="relative">
              <img 
                src="/images/pablo-merchan-montes-_Tw4vCs9C-8-unsplash.jpg" 
                alt="Beautiful latte art in a green cup with heart design on wooden table"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-amber-900 mb-4 text-center">Our Signature Drinks</h3>
          <p className="text-lg text-gray-600 mb-12 text-center">Crafted with passion, served with love</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-amber-200 hover:shadow-lg transition">
              <CardContent className="p-6">
                <Coffee className="text-amber-700 mb-4" size={48} />
                <h4 className="text-2xl font-bold text-amber-900 mb-3">Espresso</h4>
                <p className="text-gray-700 mb-4">Rich, bold, and perfectly balanced. Our signature espresso blend is roasted to perfection.</p>
                <p className="text-3xl font-bold text-amber-700">$3.50</p>
              </CardContent>
            </Card>
            
            <Card className="border-amber-200 hover:shadow-lg transition">
              <CardContent className="p-6">
                <Coffee className="text-amber-700 mb-4" size={48} />
                <h4 className="text-2xl font-bold text-amber-900 mb-3">Cappuccino</h4>
                <p className="text-gray-700 mb-4">Smooth espresso meets velvety steamed milk, topped with our signature microfoam.</p>
                <p className="text-3xl font-bold text-amber-700">$4.50</p>
              </CardContent>
            </Card>
            
            <Card className="border-amber-200 hover:shadow-lg transition">
              <CardContent className="p-6">
                <Coffee className="text-amber-700 mb-4" size={48} />
                <h4 className="text-2xl font-bold text-amber-900 mb-3">Latte</h4>
                <p className="text-gray-700 mb-4">Creamy, dreamy, and adorned with beautiful latte art by our skilled baristas.</p>
                <p className="text-3xl font-bold text-amber-700">$4.75</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-amber-700 hover:bg-amber-800">View Full Menu</Button>
          </div>
        </div>
      </section>

      <section id="location" className="py-20 px-4 bg-amber-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-amber-900 mb-12">Visit Us</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <MapPin className="text-amber-700 mb-4" size={48} />
              <h4 className="text-xl font-bold text-amber-900 mb-2">Location</h4>
              <p className="text-gray-700">123 Coffee Street<br/>Downtown, CA 90210</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Clock className="text-amber-700 mb-4" size={48} />
              <h4 className="text-xl font-bold text-amber-900 mb-2">Hours</h4>
              <p className="text-gray-700">Mon-Fri: 7am - 8pm<br/>Sat-Sun: 8am - 9pm</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Phone className="text-amber-700 mb-4" size={48} />
              <h4 className="text-xl font-bold text-amber-900 mb-2">Contact</h4>
              <p className="text-gray-700">(555) 123-4567<br/>hello@brewbean.com</p>
            </div>
          </div>
          
          <Button size="lg" className="bg-amber-700 hover:bg-amber-800">Get Directions</Button>
        </div>
      </section>

      <footer className="bg-amber-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Coffee size={32} />
            <h5 className="text-2xl font-bold">Brew &amp; Bean</h5>
          </div>
          <p className="text-amber-200 mb-6">Your perfect cup awaits. Every day.</p>
          <div className="flex gap-8 justify-center mb-8">
            <a href="#menu" className="hover:text-amber-300 transition">Menu</a>
            <a href="#about" className="hover:text-amber-300 transition">About</a>
            <a href="#location" className="hover:text-amber-300 transition">Location</a>
            <a href="#contact" className="hover:text-amber-300 transition">Contact</a>
          </div>
          <p className="text-amber-300 text-sm">© 2024 Brew &amp; Bean Coffee Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
