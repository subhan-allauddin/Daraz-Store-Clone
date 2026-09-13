'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Menu, Moon, Search, ShoppingBag, X } from 'lucide-react'

const slides = [
  ['https://icms-image.slatic.net/images/ims-web/e26c2493-254f-48b9-9809-2c8b27fe177c.jpg', 'Special offers'],
  ['https://icms-image.slatic.net/images/ims-web/5d91e9ac-d5d4-4fe0-9b78-913fb1209611.jpg', 'New arrivals'],
  ['https://icms-image.slatic.net/images/ims-web/50e67e52-2f88-4f12-8049-875cf855364e.jpg', 'Everyday objects'],
  ['https://icms-image.slatic.net/images/ims-web/d7616278-b51c-46e4-a2fa-430544700b2e.jpg', 'The fashion edit'],
]

const products = [
  ['Kitchen Shopping Basket', 'Durable storage for everyday rituals', 'Rs 77', 'https://static-01.daraz.pk/p/708410c25a831ec2411924f8dfafb07d.jpg'],
  ['Student Lunch Box', 'A considered companion for busy days', 'Rs 141', 'https://static-01.daraz.pk/p/efae367e257e9d1edd305bfdff65ed89.jpg'],
  ['Premium Item', 'High-quality objects, quietly useful', 'Rs 1,444', 'https://static-01.daraz.pk/p/12037d40ec57450eb42aaa0018fdfe24.jpg'],
  ['Designer Suit', 'Tailored presence for special occasions', 'Rs 1,899', 'https://static-01.daraz.pk/p/1032df98668d2c4431371a080fd6d05f.jpg'],
  ['Fashion Accessory', 'The finishing touch to your uniform', 'Rs 655', 'https://static-01.daraz.pk/p/90daeba01323853c6ba55f5baefefd2b.jpg'],
  ['Abbott Health Product', 'Wellness essentials for a better routine', 'Rs 2,505', 'https://static-01.daraz.pk/p/5c786508cacb08c61c2b988a2afa4d61.jpg'],
  ['Home Essential', 'Small details that make a house yours', 'Rs 699', 'https://static-01.daraz.pk/p/0bee290dee340ce09891cfedb579fcbd.jpg'],
  ['Quality Item', 'Made for the rhythm of daily life', 'Rs 599', 'https://static-01.daraz.pk/p/981c7514769ccd16d570f681967e773b.jpg'],
]

export default function HomePage() {
  const [slide, setSlide] = useState(0)
  const [cart, setCart] = useState(0)
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % slides.length), 5000)
    return () => window.clearInterval(timer)
  }, [])

  const visibleProducts = products.filter(([name, description]) => `${name} ${description}`.toLowerCase().includes(query.toLowerCase()))

  return (
    <main className="min-h-screen bg-[#0b0a10] text-[#f5f1ea]">
      <nav className="sticky top-0 z-20 border-b border-white/10 bg-[#0b0a10]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-[-0.05em]"><Moon className="text-[#a78bfa]" size={19} />Midnight Thread</Link>
          <button aria-label="Toggle menu" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          <div className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col border-b border-white/10 bg-[#0b0a10] px-5 py-4 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}>
            <Link className="py-2 text-sm text-[#f5f1ea]" href="/">Home</Link><Link className="py-2 text-sm text-[#a8a3b2] hover:text-[#f5f1ea]" href="/about">About us</Link><a className="py-2 text-sm text-[#a8a3b2] hover:text-[#f5f1ea]" href="#contact">Contact</a>
          </div>
          <div className="hidden items-center gap-3 sm:flex"><div className="flex items-center gap-2 border-b border-white/20 pb-1"><Search size={16} className="text-[#a8a3b2]" /><input aria-label="Search products" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products" className="w-32 bg-transparent text-sm outline-none placeholder:text-[#777281]" /></div><button aria-label="Shopping bag" className="relative"><ShoppingBag size={19} /><span className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-[#a78bfa] text-[10px] text-[#0b0a10]">{cart}</span></button></div>
        </div>
      </nav>

      <section className="relative h-[min(68vh,620px)] overflow-hidden bg-[#07070b]">
        <Image src={slides[slide][0]} alt={slides[slide][1]} fill priority className="object-cover brightness-[.52] saturate-[.7]" />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#0b0a10] via-transparent to-transparent"><div className="mx-auto w-full max-w-[1180px] px-5 pb-12 lg:px-8"><p className="mb-3 text-xs uppercase tracking-[.25em] text-[#a78bfa]">The edit / 2026</p><h1 className="max-w-xl text-4xl font-bold tracking-[-.06em] sm:text-6xl">Objects with presence.</h1><p className="mt-4 max-w-md text-sm text-[#d2cdd8]">Curated essentials for a life lived after dark.</p></div></div>
        <button aria-label="Previous slide" onClick={() => setSlide((slide - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 rounded-full border border-white/20 p-2"><ChevronLeft size={18} /></button><button aria-label="Next slide" onClick={() => setSlide((slide + 1) % slides.length)} className="absolute right-4 top-1/2 rounded-full border border-white/20 p-2"><ChevronRight size={18} /></button>
        <div className="absolute bottom-6 right-5 flex gap-2 lg:right-8">{slides.map((_, index) => <button key={index} aria-label={`Go to slide ${index + 1}`} onClick={() => setSlide(index)} className={`h-0.5 w-6 ${index === slide ? 'bg-[#a78bfa]' : 'bg-white/40'}`} />)}</div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8"><div className="mb-10 flex items-end justify-between gap-4"><div><p className="mb-2 text-xs uppercase tracking-[.2em] text-[#a78bfa]">The edit</p><h2 className="text-3xl font-bold tracking-[-.05em]">Quietly essential.</h2></div><span className="text-sm text-[#a8a3b2]">{visibleProducts.length} objects</span></div><div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{visibleProducts.map(([name, description, price, image]) => <article key={name} className="group overflow-hidden border border-white/10 bg-[#14131b] transition hover:-translate-y-1 hover:border-[#a78bfa]/50"><div className="relative h-64 overflow-hidden bg-[#1b1923]"><Image src={image} alt={name} fill className="object-cover grayscale-[.15] transition duration-500 group-hover:scale-105 group-hover:grayscale-0" /></div><div className="flex min-h-44 flex-col p-5"><h3 className="font-semibold">{name}</h3><p className="mt-2 flex-1 text-sm text-[#a8a3b2]">{description}</p><div className="mt-5 flex items-center justify-between"><span className="font-bold text-[#a78bfa]">{price}</span><button onClick={() => setCart((count) => count + 1)} className="flex items-center gap-2 bg-[#a78bfa] px-3 py-2 text-xs font-bold text-[#0b0a10] transition hover:bg-[#c4b5fd]">Add to cart <ArrowRight size={14} /></button></div></div></article>)}</div></section>

      <footer id="contact" className="border-t border-white/10 bg-[#07070b] px-5 py-14 lg:px-8"><div className="mx-auto grid max-w-[1180px] gap-10 sm:grid-cols-3"><div><p className="mb-4 font-bold">Midnight Thread</p><p className="max-w-xs text-sm leading-7 text-[#a8a3b2]">A considered collection of useful, beautiful things for every hour.</p></div><div><h3 className="mb-4 text-sm font-semibold">Customer care</h3><div className="flex flex-col gap-2 text-sm text-[#a8a3b2]"><a href="#contact">Help centre</a><a href="#contact">Returns & refunds</a><a href="#contact">Contact us</a></div></div><div><h3 className="mb-4 text-sm font-semibold">Stay in the loop</h3><p className="mb-3 text-sm text-[#a8a3b2]">New objects, once in a while.</p><div className="flex border-b border-white/20 pb-2"><input aria-label="Email address" placeholder="Your email address" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#777281]" /><button className="text-[#a78bfa]" aria-label="Subscribe"><ArrowRight size={18} /></button></div></div></div><div className="mx-auto mt-12 max-w-[1180px] border-t border-white/10 pt-5 text-xs text-[#777281]">© 2026 Midnight Thread. All rights reserved.</div></footer>
    </main>
  )
}
