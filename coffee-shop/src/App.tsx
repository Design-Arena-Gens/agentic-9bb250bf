import './App.css'
import { Coffee, Clock, MapPin, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

function App() {
  const menuItems = [
    { name: 'Espresso', price: '$3.50', description: 'Rich and bold Italian-style coffee' },
    { name: 'Cappuccino', price: '$4.50', description: 'Espresso with steamed milk and foam' },
    { name: 'Latte', price: '$4.75', description: 'Smooth espresso with steamed milk' },
    { name: 'Americano', price: '$3.75', description: 'Espresso with hot water' },
    { name: 'Mocha', price: '$5.25', description: 'Espresso with chocolate and milk' },
    { name: 'Cold Brew', price: '$4.25', description: 'Smooth cold-steeped coffee' },
  ]

  const reviews = [
    { name: 'Sarah M.', rating: 5, text: 'Best coffee in town! The atmosphere is perfect for working.' },
    { name: 'John D.', rating: 5, text: 'Amazing latte art and friendly baristas. Highly recommend!' },
    { name: 'Emma L.', rating: 5, text: 'Cozy spot with excellent coffee. My favorite place to relax.' },
  ]

  return (
    <div className="min-h-screen bg-amber-50">
      <nav className="bg-amber-900 text-white py-4 px-6 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <Coffee size={32} />
            <span>Brew Haven</span>
          </div>
          <div className="hidden md:flex gap-8 text-lg">
            <a href="#home" className="hover:text-amber-200 transition-colors">Home</a>
            <a href="#menu" className="hover:text-amber-200 transition-colors">Menu</a>
            <a href="#about" className="hover:text-amber-200 transition-colors">About</a>
            <a href="#contact" className="hover:text-amber-200 transition-colors">Contact</a>
          </div>
          <Button className="bg-amber-600 hover:bg-amber-700">Order Now</Button>
        </div>
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1600&q=80)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Welcome to Brew Haven</h1>
          <p className="text-2xl md:text-3xl mb-8">Your Daily Dose of Perfection</p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-xl px-8 py-6">
            Explore Our Menu
          </Button>
        </div>
      </section>

      <section id="menu" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-amber-900">Our Menu</h2>
          <p className="text-center text-gray-600 text-xl mb-12">Crafted with love, served with care</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-amber-900">{item.name}</h3>
                    <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-amber-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 text-amber-900">Our Story</h2>
            <p className="text-xl text-gray-700 mb-6">
              Since 2015, Brew Haven has been serving the finest artisanal coffee to our community. 
              We source our beans from sustainable farms around the world and roast them in-house 
              to ensure the perfect flavor in every cup.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              Our passion for coffee goes beyond just brewing. We believe in creating a warm, 
              welcoming space where people can connect, work, and relax.
            </p>
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center gap-3">
                <Clock className="text-amber-600" size={28} />
                <span className="text-lg">Mon-Fri: 7AM - 8PM | Sat-Sun: 8AM - 9PM</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-amber-600" size={28} />
                <span className="text-lg">123 Coffee Street, Downtown</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&q=80" 
              alt="Coffee preparation"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80" 
              alt="Coffee latte art"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80" 
              alt="Coffee cups"
              className="rounded-lg shadow-lg w-full h-64 object-cover col-span-2"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-amber-900">What Our Customers Say</h2>
          <p className="text-center text-gray-600 text-xl mb-12">Don't just take our word for it</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="fill-amber-400 text-amber-400" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <p className="font-bold text-amber-900">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Visit Us Today</h2>
          <p className="text-2xl mb-8">Experience the perfect cup of coffee</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-amber-900 hover:bg-amber-100 text-xl px-8 py-6">
              Get Directions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-amber-800 text-xl px-8 py-6">
              Call Us: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-amber-950 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-2xl font-bold mb-4">
            <Coffee size={28} />
            <span>Brew Haven</span>
          </div>
          <p className="text-amber-200">© 2024 Brew Haven. All rights reserved.</p>
          <p className="text-amber-300 mt-2">Crafted with passion, served with love</p>
        </div>
      </footer>
    </div>
  )
}

export default App
