// This file will store all reusable data for the website.

export const founders = [
    {
      name: 'Kartikey',
      title: 'Lead Developer & Co-Founder',
      description: 'Kartikey, the lead developer and co-founder, is the architect of Espresso Hosting. With a passion for technology and a commitment to excellence, Kartikey leads the development team, ensuring that our platform is not only functional but also user-friendly and optimized for performance.',
      image: 'https://cdn.discordapp.com/avatars/1048721304599150672/709177960108af4b9001a68d50c15e8d.webp?size=1024',
      icon: 'Code',
      link: "null"
    },
    {
      name: 'Krishna',
      title: 'VPS Manager & Investor & Founder',
      description: 'As our dedicated VPS manager and key investor, Krishna plays a vital role in overseeing our server infrastructure and business growth. His strategic investments and expertise in managing virtual private servers ensure our hosting services maintain the highest standards of reliability and performance.',
      image: 'https://i.pinimg.com/736x/fa/b2/ad/fab2ad62c80bf1a7b2da5aeb229e5ee9.jpg?size=1024',
      icon: 'Database'
    },
    {
      name: 'Divyanshu',
      title: 'Lead Developer & Founder',
      description: 'A backend virtuoso and the architectural mastermind of Espresso Hosting. Divyanshu, the lead developer and founder, specializes in building robust server infrastructures and optimizing database performance, ensuring our platform operates with maximum efficiency and scalability.',
      image: 'https://cdn.discordapp.com/avatars/1268498855083638828/a_63b1c5a96e89ad160d89a4140d040cf7?size=1024',
      icon: 'Code'
    }
  ];

  export const homePagePlans = [
    {
      name: 'The Single Shot',
      tokens: 3,
      priceRs: 180,
      features: [
        '4 GB RAM',
        '2vcore',
        '10gb nvme',
        'DDoS Protection',
        '24/7 Support (Discord)'
      ],
      icon: 'Coffee',
      code: 'mc_1'
    },
    {
      name: 'The Double Shot',
      tokens: 5,
      priceRs: 300,
      features: [
        '6 GB RAM',
        '3vcore',
        '15gb nvme',
        'DDoS Protection',
        '24/7 Priority Support'
      ],
      icon: 'CoffeeIcon',
      popular: true,
      code: 'mc_2'
    },
    {
      name: 'The Latte',
      tokens: 8,
      priceRs: 480,
      features: [
        '8 GB RAM',
        '4vcore',
        '20 GB SSD',
        'DDoS Protection',
        '24/7 VIP Support'
      ],
      icon: 'Coffee',
      code:'mc_3'
    },
    {
      name: 'The Americano',
      tokens: 11,
      priceRs: 660,
      features: [
        '12 GB RAM',
        '6vcore',
        '30gb nvme',
        'DDoS Protection',
        '24/7 VIP Support'
      ],
      icon: 'Coffee',
      code:'mc_4'
    }]
  
  export const gameCategories = [
    {
      name: 'Minecraft',
      plans: [
        {
          name: 'The Single Shot',
          tokens: 3,
          priceRs: 180,
          features: [
            '4 GB RAM',
            '2vcore',
            '10gb nvme',
            'DDoS Protection',
            '24/7 Support (Discord)'
          ],
          icon: 'Coffee',
          code: 'mc_1'
        },
        {
          name: 'The Double Shot',
          tokens: 5,
          priceRs: 300,
          features: [
            '6 GB RAM',
            '3vcore',
            '15gb nvme',
            'DDoS Protection',
            '24/7 Priority Support'
          ],
          icon: 'CoffeeIcon',
          popular: true,
          code: 'mc_2'
        },
        {
          name: 'The Latte',
          tokens: 8,
          priceRs: 480,
          features: [
            '8 GB RAM',
            '4vcore',
            '20 GB SSD',
            'DDoS Protection',
            '24/7 VIP Support'
          ],
          icon: 'Coffee',
          code:'mc_3'
        },
        {
          name: 'The Americano',
          tokens: 11,
          priceRs: 660,
          features: [
            '12 GB RAM',
            '6vcore',
            '30gb nvme',
            'DDoS Protection',
            '24/7 VIP Support'
          ],
          icon: 'Coffee',
          code:'mc_4'
        },
        {
          name: 'The Frappuccino',
          tokens: 13,
          priceRs: 780,
          features: [
            '16 GB RAM',
            '6vcore',
            '40gb nvme',
            'DDoS Protection',
            '24/7 VIP Support'
          ],
          icon: 'Coffee',
          code:'mc_5'
        }
      ]
    },
    {
      name: 'Discord Bot (Python)',
      plans: [
        {
          name: 'Espresso Shot',
          tokens: 1,
          priceRs: 60,
          features: [
            '1 GB RAM',
            '1 vCPU',
            '10GB SSD',
            '99.5% Uptime',
            'Community Support'
          ],
          icon: 'CoffeeIcon',
          code:'pybot_1'
        },
        {
          name: 'Cappuccino',
          tokens: 2,
          priceRs: 120,
          features: [
            '2 GB RAM',
            '1 vCPU',
            '20GB SSD',
            '99.5% Uptime',
            'Email Support'
          ],
          icon: 'CoffeeIcon',
          popular: true,
          code:'pybot_2'
        },
        {
          name: 'Mocha Latte',
          tokens: 4,
          priceRs: 240,
          features: [
            '4 GB RAM',
            '2 vCPU',
            '40GB SSD',
            '99.5% Uptime',
            'Priority Support'
          ],
          icon: 'CoffeeIcon',
          code:'pybot_3'
        }
      ]
    },
    {
      name: 'Discord Bot (TypeScript)',
      plans: [
        {
          name: 'Macchiato',
          tokens: 1,
          priceRs: 60,
          features: [
            '1 GB RAM',
            '1 vCPU',
            '10GB SSD',
            'Node.js 20+',
            '99.5% Uptime',
            'Community Support'
          ],
          icon: 'CoffeeIcon',
          code:'tsbot_1'
        },
        {
          name: 'Flat White',
          tokens: 2,
          priceRs: 120,
          features: [
            '2 GB RAM',
            '1 vCPU',
            '20GB SSD',
            'Node.js 20+',
            '99.5% Uptime',
            'Email Support &#40;matei@espressohost.xyz or dm on discord devmatei&#41;'
          ],
          icon: 'CoffeeIcon',
          popular: true,
          code:'tsbot_2'
        },
        {
          name: 'Affogato',
          tokens: 4,
          priceRs: 240,
          features: [
            '3 GB RAM',
            '2 vCPU',
            '30GB SSD',
            'Node.js 20+',
            '99.5% Uptime',
            'Priority Support'
          ],
          icon: 'CoffeeIcon',
          code:'tsbot_3'
        }
      ]
    }
  ];
  
  export const features = [
    {
      icon: 'Zap',
      title: 'Lightning-Fast Performance',
      description: 'Experience minimal latency with our powerful servers optimized for gaming.'
    },
    {
      icon: 'Globe',
      title: 'European Infrastructure',
      description: 'Strategically located servers across Europe for optimal connectivity.'
    },
    {
      icon: 'Layers',
      title: 'Easy Management',
      description: 'User-friendly control panel for effortless server management.'
    },
    {
      icon: 'Headphones',
      title: 'Dedicated Support',
      description: '24/7 responsive customer support to assist you whenever needed.'
    },
    {
      icon: 'Shield',
      title: 'DDoS Protection',
      description: 'Advanced protection against DDoS attacks keeps your server secure.'
    },
    {
      icon: 'Cpu',
      title: 'Scalable Resources',
      description: 'Easily upgrade your plan as your community grows.'
    }
  ];
  