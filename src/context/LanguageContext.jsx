import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const translations = {
  th: {
    // Navigation
    nav: {
      home: 'หน้าแรก',
      about: 'เกี่ยวกับเรา',
      menu: 'เมนู',
      contact: 'ติดต่อสั่งซื้อ',
    },
    // Home page
    home: {
      badge: '✨ แป้งหมั่นโถวสูตรคุณแม่',
      title: 'Twin Burger',
      subtitle: 'หมั่นโถวเบอร์เกอร์ แป้งหมั่นโถวสูตรคุณแม่',
      description: 'รับจัด Snack Box • Meal Box • Catering และ Food Support ศิลปิน อร่อย อิ่ม คุ้มค่า ส่งตรงถึงที่!',
      viewMenu: 'ดูเมนูทั้งหมด',
      orderNow: 'สั่งเลย',
      servicesTitle: 'What We Do',
      servicesSubtitle: 'บริการจัดเลี้ยงครบวงจร',
      servicesDescription: 'ไม่ว่าจะเป็นงานเล็กหรืองานใหญ่ เราพร้อมเสิร์ฟความอร่อยถึงที่!',
      servicesEyebrow: 'บริการของเรา',
      whyUsTitle: 'Why Twin Burger?',
      whyUsSubtitle: 'ทำไมต้องเลือก Twin Burger',
      whyUsEyebrow: 'ทำไมต้องเลือกเรา',
      ctaTitle: 'Order Now',
      ctaSubtitle: 'สั่งเลยวันนี้!',
      ctaButton: 'ติดต่อสั่งซื้อ',
    },
    // Services
    services: {
      snackBox: {
        title: 'Snack Box',
        titleThai: 'สแน็คบ็อกซ์',
        price: 'เริ่มต้น 80 บาท',
        description: 'ชุดของว่างพร้อมทาน เหมาะสำหรับงานประชุม สัมมนา งานออกบูธ หรืองานเลี้ยงเล็กๆ',
      },
      mealBox: {
        title: 'Meal Box',
        titleThai: 'ชุดข้าวกล่อง',
        price: 'เริ่มต้น 159 บาท',
        description: 'เซ็ตอาหารจัดเต็ม อิ่มอร่อยครบทุกมื้อ มีให้เลือกหลากหลายเมนู',
      },
      catering: {
        title: 'Catering',
        titleThai: 'จัดเลี้ยงนอกสถานที่',
        price: 'ติดต่อสอบถาม',
        description: 'บริการจัดเลี้ยงนอกสถานที่ งานแต่ง งานเปิดตัว งานบริษัท พร้อมทีมงานมืออาชีพ',
      },
      foodSupport: {
        title: 'Food Support',
        titleThai: 'ฟู้ดซัพพอร์ตศิลปิน',
        price: 'ติดต่อสอบถาม',
        description: 'สนับสนุนอาหารศิลปิน กองถ่าย คอนเสิร์ต และอีเวนต์พิเศษ พร้อมจัดเซ็ตถ่ายรูป',
      },
    },
    // Features
    features: [
      'อร่อย สะอาด วัตถุดิบคุณภาพ',
      'มีให้เลือกหลากหลายเมนู',
      'ออกใบกำกับภาษี/บิลเงินสดได้',
      'จัดส่งตรงเวลา',
      'ทำได้สูงสุด 1,000 กล่อง/วัน',
      'มีความรับผิดชอบ ไม่ทิ้งงาน',
    ],
    // About page
    about: {
      title: 'Twin Burger',
      subtitle: 'หมั่นโถวเบอร์เกอร์ แป้งหมั่นโถวสูตรคุณแม่',
      p1: 'Twin Burger เกิดจากความรักในการทำอาหารและความต้องการที่จะสร้างสรรค์เมนูใหม่ๆ ที่แตกต่าง จึงนำหมั่นโถวสูตรคุณแม่มาเป็นขนมปังเบอร์เกอร์ ได้รสชาตินุ่มนวลแบบใหม่ที่ไม่เหมือนใคร!',
      p2: 'เราเริ่มต้นจากครัวเล็กๆ ด้วยใจรักและความตั้งใจ วันนี้เราพร้อมให้บริการทั้ง Snack Box, Meal Box, Catering และ Food Support สำหรับงานศิลปิน กองถ่าย และอีเวนต์ต่างๆ',
      p3: '✨ แป้งหมั่นโถวสูตรคุณแม่ ที่คุณต้องลอง!',
      stats: {
        orders: 'ออเดอร์ต่อเดือน',
        events: 'งานจัดเลี้ยง',
        support: 'Food Support',
        rating: 'รีวิวเฉลี่ย',
      },
      whyTitle: 'Why Twin Burger?',
      whySubtitle: 'ทำไมต้อง Twin Burger',
      whyEyebrow: 'ทำไมต้องเลือกเรา',
      values: {
        fresh: { title: 'Fresh Ingredients', subtitle: 'วัตถุดิบสดใหม่', desc: 'เราใช้วัตถุดิบคุณภาพดี สดใหม่ทุกวัน เพื่อความอร่อยที่ดีที่สุด' },
        homemade: { title: 'Homemade Recipe', subtitle: 'สูตรคุณแม่', desc: 'แป้งหมั่นโถวสูตรคุณแม่ ทำสดใหม่ทุกวัน นุ่มหอมไม่เหมือนใคร' },
        delivery: { title: 'Fast Delivery', subtitle: 'ส่งตรงเวลา', desc: 'บริการจัดส่งตรงเวลา ถึงที่หมายตามนัด ไม่ต้องรอนาน' },
        value: { title: 'Best Value', subtitle: 'คุ้มค่าทุกบาท', desc: 'ราคาเป็นมิตร อิ่มอร่อยคุ้มค่า เหมาะกับทุกงบประมาณ' },
      },
      foodSupportTitle: 'Food Support',
      foodSupportSubtitle: 'ฟู้ดซัพพอร์ตศิลปิน',
      foodSupportDesc: 'รับจัดอาหารสนับสนุนศิลปิน กองถ่าย คอนเสิร์ต แฟนมีตติ้ง และอีเวนต์พิเศษต่างๆ พร้อมจัดเป็นเซ็ตสวยงาม ถ่ายรูปลงโซเชียลได้เลย!',
      foodSupportFeatures: '✨ รับทำป้ายชื่อศิลปิน • จัดเซ็ตถ่ายรูป • ห่อของขวัญพิเศษ',
    },
    // Menu page
    menu: {
      title: 'Our Menu',
      subtitle: 'เมนูและแพ็คเกจ',
      eyebrow: 'เมนูของเรา',
      description: 'เลือกแพ็คเกจที่เหมาะกับงานของคุณ หรือสั่งเมนูเดี่ยวก็ได้!',
      whyTitle: 'Why Twin Burger?',
      whySubtitle: 'ทำไมต้องเลือก Twin Burger',
      whyEyebrow: 'ทำไมต้องเลือกเรา',
      alacarteTitle: 'À La Carte',
      alacarteSubtitle: 'สั่งเมนูเดี่ยว',
      alacarteEyebrow: 'เมนูเดี่ยว',
      noteTitle: 'หมายเหตุ',
      notes: [
        'ราคาอาจมีการเปลี่ยนแปลงตามวัตถุดิบ',
        'สั่งขั้นต่ำ 30 กล่องสำหรับ Snack Box / Meal Box',
        'กรุณาสั่งล่วงหน้าอย่างน้อย 3 วัน',
        'สอบถามเมนูพิเศษหรือปรับเปลี่ยนได้',
        'ออกใบกำกับภาษี หรือ บิลเงินสดได้',
      ],
      ctaTitle: 'Order Now',
      ctaSubtitle: 'สั่งเลยวันนี้!',
      ctaButton: 'ติดต่อสั่งซื้อ',
      badges: {
        popular: 'ยอดนิยม',
        value: 'อิ่มคุ้ม',
        large: 'งานใหญ่',
        special: 'พิเศษ',
      },
      packages: {
        snackBox: {
          subtitle: 'สแน็คบ็อกซ์ และงานออกนอกสถานที่',
          desc: 'ชุดของว่างพร้อมทาน เหมาะสำหรับงานประชุม สัมมนา งานออกบูธ หรืองานเลี้ยงเล็กๆ',
          price: 'เริ่มต้น 80 บาท',
          items: ['อาหารคาว/หวาน/ผลไม้', 'เครื่องดื่ม', 'บรรจุภัณฑ์สวยงาม', 'ออกใบกำกับภาษีได้'],
        },
        mealBox: {
          subtitle: 'ชุดข้าวกล่อง',
          desc: 'เซ็ตอาหารจัดเต็ม อิ่มอร่อยครบมื้อ มีให้เลือกหลากหลายเมนู ทั้งอาหารคาว หวาน และผลไม้',
          price: 'เริ่มต้น 159 บาท/ชุด',
          items: ['อาหารคาว หวาน ผลไม้', 'เครื่องดื่ม', 'ออกใบกำกับภาษี/บิลเงินสดได้', 'บรรจุภัณฑ์พรีเมียม'],
        },
        catering: {
          subtitle: 'จัดเลี้ยงนอกสถานที่',
          desc: 'บริการจัดเลี้ยงนอกสถานที่ งานแต่งงาน งานเปิดตัว งานบริษัท พร้อมพนักงานมืออาชีพ',
          price: 'ติดต่อสอบถาม',
          items: ['เมนูตามต้องการ', 'พนักงานเสิร์ฟมืออาชีพ', 'อุปกรณ์จัดเลี้ยง', 'รองรับได้ถึง 1,000 กล่อง/วัน'],
        },
        foodSupport: {
          subtitle: 'ฟู้ดซัพพอร์ตศิลปิน',
          desc: 'สนับสนุนอาหารศิลปิน กองถ่าย คอนเสิร์ต แฟนมีตติ้ง พร้อมจัดเซ็ตถ่ายรูป',
          price: 'ติดต่อสอบถาม',
          items: ['เซ็ตอาหารตามงบ', 'ป้ายชื่อศิลปิน', 'จัดเซ็ตถ่ายรูป', 'ห่อของขวัญพิเศษ'],
        },
      },
    },
    // Contact page
    contact: {
      title: 'Order Now',
      subtitle: 'สั่งซื้อเลย!',
      description: 'พร้อมให้บริการ Snack Box, Meal Box, Catering และ Food Support ติดต่อสอบถามได้เลยค่ะ ยินดีให้บริการ!',
      hours: 'เปิดรับออเดอร์ทุกวัน 09:00 - 20:00 น.',
      serviceArea: 'พื้นที่ให้บริการ',
      serviceAreaDesc: 'กรุงเทพฯ และปริมณฑล',
      serviceAreaNote: '(ค่าส่งคิดตามระยะทาง)',
      capacity: 'กำลังการผลิต',
      capacityDesc: 'สามารถทำได้สูงสุด',
      capacityAmount: '1,000 กล่องต่อวัน',
    },
    // Footer
    footer: {
      copyright: '© 2024 Twin Burger | หมั่นโถวเบอร์เกอร์ แป้งหมั่นโถวสูตรคุณแม่',
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      menu: 'Menu',
      contact: 'Order',
    },
    // Home page
    home: {
      badge: "✨ Mom's Mantou Recipe",
      title: 'Twin Burger',
      subtitle: "Mantou Burger with Mom's Original Recipe",
      description: 'We offer Snack Box • Meal Box • Catering and Artist Food Support. Delicious, filling, great value - delivered to you!',
      viewMenu: 'View Menu',
      orderNow: 'Order Now',
      servicesTitle: 'What We Do',
      servicesSubtitle: 'Complete Catering Services',
      servicesDescription: "Whether it's a small gathering or a big event, we're ready to serve deliciousness to you!",
      servicesEyebrow: 'Our Services',
      whyUsTitle: 'Why Twin Burger?',
      whyUsSubtitle: 'Why Choose Twin Burger',
      whyUsEyebrow: 'Why Choose Us',
      ctaTitle: 'Order Now',
      ctaSubtitle: 'Order Today!',
      ctaButton: 'Contact Us',
    },
    // Services
    services: {
      snackBox: {
        title: 'Snack Box',
        titleThai: 'Snack Box',
        price: 'From ฿80',
        description: 'Ready-to-eat snack sets, perfect for meetings, seminars, booths, or small parties.',
      },
      mealBox: {
        title: 'Meal Box',
        titleThai: 'Meal Box',
        price: 'From ฿159',
        description: 'Complete meal sets with variety of menu options for every taste.',
      },
      catering: {
        title: 'Catering',
        titleThai: 'Catering Service',
        price: 'Contact Us',
        description: 'Off-site catering for weddings, launches, corporate events with professional staff.',
      },
      foodSupport: {
        title: 'Food Support',
        titleThai: 'Artist Food Support',
        price: 'Contact Us',
        description: 'Food support for artists, film crews, concerts, and special events with photo-ready setups.',
      },
    },
    // Features
    features: [
      'Delicious, clean, quality ingredients',
      'Wide variety of menu options',
      'Tax invoice / cash receipt available',
      'On-time delivery',
      'Up to 1,000 boxes per day',
      'Reliable and responsible service',
    ],
    // About page
    about: {
      title: 'Twin Burger',
      subtitle: "Mantou Burger with Mom's Original Recipe",
      p1: "Twin Burger was born from a love of cooking and the desire to create something different. We use Mom's original mantou recipe as burger buns, creating a uniquely soft and delicious experience!",
      p2: "We started from a small kitchen with passion and dedication. Today, we're ready to serve Snack Box, Meal Box, Catering, and Food Support for artists, film crews, and various events.",
      p3: "✨ Mom's Mantou Recipe - You have to try it!",
      stats: {
        orders: 'Orders/Month',
        events: 'Catering Events',
        support: 'Food Support',
        rating: 'Average Rating',
      },
      whyTitle: 'Why Twin Burger?',
      whySubtitle: 'Why Choose Twin Burger',
      whyEyebrow: 'Why Choose Us',
      values: {
        fresh: { title: 'Fresh Ingredients', subtitle: 'Fresh Daily', desc: 'We use quality ingredients, fresh every day for the best taste.' },
        homemade: { title: 'Homemade Recipe', subtitle: "Mom's Recipe", desc: "Mom's mantou recipe, freshly made daily - soft and aromatic like no other." },
        delivery: { title: 'Fast Delivery', subtitle: 'On-Time Delivery', desc: 'Punctual delivery service, arriving as scheduled - no long waits.' },
        value: { title: 'Best Value', subtitle: 'Value for Money', desc: 'Friendly prices, delicious and satisfying - suitable for every budget.' },
      },
      foodSupportTitle: 'Food Support',
      foodSupportSubtitle: 'Artist Food Support',
      foodSupportDesc: 'We provide food support for artists, film crews, concerts, fan meetings, and special events with beautiful photo-ready setups!',
      foodSupportFeatures: '✨ Custom name cards • Photo setup • Special gift wrapping',
    },
    // Menu page
    menu: {
      title: 'Our Menu',
      subtitle: 'Menu & Packages',
      eyebrow: 'Our Menu',
      description: 'Choose the package that suits your event, or order à la carte!',
      whyTitle: 'Why Twin Burger?',
      whySubtitle: 'Why Choose Twin Burger',
      whyEyebrow: 'Why Choose Us',
      alacarteTitle: 'À La Carte',
      alacarteSubtitle: 'Individual Items',
      alacarteEyebrow: 'Single Items',
      noteTitle: 'Notes',
      notes: [
        'Prices may vary based on ingredients',
        'Minimum 30 boxes for Snack Box / Meal Box',
        'Please order at least 3 days in advance',
        'Special menu requests available',
        'Tax invoice or cash receipt available',
      ],
      ctaTitle: 'Order Now',
      ctaSubtitle: 'Order Today!',
      ctaButton: 'Contact Us',
      badges: {
        popular: 'Popular',
        value: 'Best Value',
        large: 'Large Events',
        special: 'Special',
      },
      packages: {
        snackBox: {
          subtitle: 'Snack Box & Outside Events',
          desc: 'Ready-to-eat snack sets, perfect for meetings, seminars, booths, or small parties.',
          price: 'From ฿80',
          items: ['Savory/Sweet/Fruits', 'Beverages', 'Beautiful packaging', 'Tax invoice available'],
        },
        mealBox: {
          subtitle: 'Meal Box Set',
          desc: 'Complete meal sets with variety of savory dishes, desserts, and fruits.',
          price: 'From ฿159/set',
          items: ['Savory, dessert, fruits', 'Beverages', 'Tax invoice/receipt available', 'Premium packaging'],
        },
        catering: {
          subtitle: 'Off-site Catering',
          desc: 'Off-site catering for weddings, launches, corporate events with professional staff.',
          price: 'Contact Us',
          items: ['Custom menu', 'Professional servers', 'Catering equipment', 'Up to 1,000 boxes/day'],
        },
        foodSupport: {
          subtitle: 'Artist Food Support',
          desc: 'Food support for artists, film crews, concerts, fan meetings with photo setups.',
          price: 'Contact Us',
          items: ['Budget-friendly sets', 'Artist name cards', 'Photo setup', 'Special gift wrapping'],
        },
      },
    },
    // Contact page
    contact: {
      title: 'Order Now',
      subtitle: 'Place Your Order!',
      description: 'Ready to serve Snack Box, Meal Box, Catering, and Food Support. Contact us anytime!',
      hours: 'Open daily 09:00 - 20:00',
      serviceArea: 'Service Area',
      serviceAreaDesc: 'Bangkok & Vicinity',
      serviceAreaNote: '(Delivery fee based on distance)',
      capacity: 'Production Capacity',
      capacityDesc: 'Up to',
      capacityAmount: '1,000 boxes per day',
    },
    // Footer
    footer: {
      copyright: "© 2024 Twin Burger | Mantou Burger with Mom's Recipe",
    },
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'th'
    }
    return 'th'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
  }, [language])

  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'th' ? 'en' : 'th')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
