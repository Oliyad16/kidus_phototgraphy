/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Photo, GearItem, JournalPost, Testimonial } from './types';

// Import our custom generated high-resolution assets
import portraitImg from './assets/images/gallery_portrait_fashion_1783798549546.jpg';
import weddingImg from './assets/images/gallery_wedding_candid_1783798561544.jpg';
import landscapeImg from './assets/images/gallery_landscape_sunset_1783798572056.jpg';
import streetImg from './assets/images/gallery_street_neon_1783798583672.jpg';

export const photos: Photo[] = [
  {
    id: 'p1',
    title: 'Warm Sunbeams & Editorial Grace',
    category: 'portraits',
    url: portraitImg,
    location: 'Studio Loft, New York',
    date: 'June 2026',
    backstory: 'This shoot focused entirely on capturing natural light sculpting. By utilizing a simple reflector and allowing the midday sun to filter through industrial windows, we captured the model\'s calm, expressive elegance. It highlights the power of simplicity in portraiture.',
    exif: {
      camera: 'Sony Alpha 7R V',
      lens: 'Sony FE 85mm f/1.2 GM',
      focalLength: '85mm',
      aperture: 'f/1.4',
      shutterSpeed: '1/320s',
      iso: 100,
    },
    featured: true,
  },
  {
    id: 'p2',
    title: 'Golden Hour Laughs',
    category: 'weddings',
    url: weddingImg,
    location: 'Tuscany Olive Grove, Italy',
    date: 'May 2026',
    backstory: 'During a quiet walk between the ceremony and dinner, the couple shared a spontaneous, heartfelt laugh. This moment was completely unposed—capturing the true spirit of their connection under the warm, dappled light of the Tuscan olive canopy. A wedding is a story told in glances.',
    exif: {
      camera: 'Sony Alpha 7R V',
      lens: 'Sony FE 50mm f/1.2 GM',
      focalLength: '50mm',
      aperture: 'f/1.2',
      shutterSpeed: '1/800s',
      iso: 50,
    },
    featured: true,
  },
  {
    id: 'p3',
    title: 'Alpine Mirror of Mount Fitz Roy',
    category: 'landscapes',
    url: landscapeImg,
    location: 'Patagonia, Argentina',
    date: 'March 2026',
    backstory: 'After a four-hour nocturnal hike, I reached this secluded alpine lake just as the peak of Mount Fitz Roy was painted pink by the first morning light. The wind died down for a brief 30 seconds, allowing for this pristine, glass-like reflection that mirrors the raw majesty of Patagonia.',
    exif: {
      camera: 'Sony Alpha 7R V',
      lens: 'Sony FE 16-35mm f/2.8 GM II',
      focalLength: '18mm',
      aperture: 'f/8.0',
      shutterSpeed: '2.5s',
      iso: 100,
    },
    featured: true,
  },
  {
    id: 'p4',
    title: 'Rainy Night in Neon Shibuya',
    category: 'street',
    url: streetImg,
    location: 'Shibuya, Tokyo',
    date: 'April 2026',
    backstory: 'A sudden spring shower emptied the streets of Tokyo, creating a glowing mirror on the tarmac. This single stroller beneath a transparent umbrella walking past a flickering ramen stall captured the elegant, melancholic visual rhythm of nocturnal city life, contrasting cold rain with warm neon.',
    exif: {
      camera: 'Sony Alpha 7CR',
      lens: 'Sony FE 35mm f/1.4 GM',
      focalLength: '35mm',
      aperture: 'f/1.8',
      shutterSpeed: '1/160s',
      iso: 800,
    },
    featured: true,
  },
  {
    id: 'p5',
    title: 'Ethereal Studio Contrast',
    category: 'portraits',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
    location: 'Brooklyn Arts District, NY',
    date: 'January 2026',
    backstory: 'An exploration of soft shadows and bold color styling. We played with cyan-tinted hair styling and rich, deep shadows to create an image that feels high-fashion, yet emotionally expressive and calm.',
    exif: {
      camera: 'Sony Alpha 7R V',
      lens: 'Sony FE 135mm f/1.8 GM',
      focalLength: '135mm',
      aperture: 'f/2.0',
      shutterSpeed: '1/250s',
      iso: 125,
    },
  },
  {
    id: 'p6',
    title: 'Into the Emerald Valley',
    category: 'landscapes',
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop',
    location: 'Yosemite National Park, USA',
    date: 'October 2025',
    backstory: 'A thick autumn fog rolling through the valley floor. Standing at Tunnel View, the rising sun began to burst through the mist, illuminating the trees in a brilliant emerald glow. Nature is the ultimate artist.',
    exif: {
      camera: 'Sony Alpha 7R V',
      lens: 'Sony FE 24-70mm f/2.8 GM II',
      focalLength: '70mm',
      aperture: 'f/5.6',
      shutterSpeed: '1/125s',
      iso: 100,
    },
  },
  {
    id: 'p7',
    title: 'The Secret Vows',
    category: 'weddings',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    location: 'Amalfi Coast, Italy',
    date: 'September 2025',
    backstory: 'Captured at the edge of a cliff overlooking the Tyrrhenian Sea. The soft coastal breeze caught the bride\'s veil just as they held hands. It was a serene moment where the roaring ocean in the background became a quiet whisper.',
    exif: {
      camera: 'Sony Alpha 7R V',
      lens: 'Sony FE 85mm f/1.2 GM',
      focalLength: '85mm',
      aperture: 'f/1.2',
      shutterSpeed: '1/1200s',
      iso: 100,
    },
  },
  {
    id: 'p8',
    title: 'Midnight Diner Whispers',
    category: 'street',
    url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop',
    location: 'SoHo, Manhattan',
    date: 'November 2025',
    backstory: 'Peeking through the foggy window of a timeless corner diner at 2:00 AM. The warm glow of the interior contrasted with the freezing city street outside. It represents the quiet, lonely, yet beautiful corners of the metropolis.',
    exif: {
      camera: 'Sony Alpha 7CR',
      lens: 'Sony FE 50mm f/1.2 GM',
      focalLength: '50mm',
      aperture: 'f/2.0',
      shutterSpeed: '1/125s',
      iso: 1600,
    },
  },
  {
    id: 'p9',
    title: 'Vulnerability in Monochrome',
    category: 'portraits',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
    location: 'Studio Loft, New York',
    date: 'February 2026',
    backstory: 'Stripping away color allows the soul and form to speak clearly. Using single key light from a softbox, we focused entirely on the shadows mapping the contours of the face, capturing a deeply honest moment of personal vulnerability.',
    exif: {
      camera: 'Sony Alpha 7R V',
      lens: 'Sony FE 85mm f/1.2 GM',
      focalLength: '85mm',
      aperture: 'f/1.8',
      shutterSpeed: '1/200s',
      iso: 100,
    },
  },
  {
    id: 'p10',
    title: 'Ethereal Bouquet Prep',
    category: 'weddings',
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
    location: 'Parisian Chateau, France',
    date: 'April 2026',
    backstory: 'A classic framing of the delicate final touches during a bride\'s wedding prep. The gorgeous sunlight stream highlights the hand-tied silk ribbons and intricate embroidery of the dress, emphasizing the romantic details of the day.',
    exif: {
      camera: 'Sony Alpha 7R V',
      lens: 'Sony FE 90mm f/2.8 Macro G',
      focalLength: '90mm',
      aperture: 'f/2.8',
      shutterSpeed: '1/160s',
      iso: 200,
    },
  },
  {
    id: 'p11',
    title: 'Frozen Peaks of the Alps',
    category: 'landscapes',
    url: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1200&auto=format&fit=crop',
    location: 'Zermatt, Switzerland',
    date: 'January 2026',
    backstory: 'Shot from a hovering helicopter during a freezing winter sunrise. The sheer geometry of the snow ridges on the Matterhorn is beautiful yet intimidating. The composition guides the eye straight to the sharp, sunlit peak.',
    exif: {
      camera: 'Sony Alpha 7R V',
      lens: 'Sony FE 24-70mm f/2.8 GM II',
      focalLength: '45mm',
      aperture: 'f/5.6',
      shutterSpeed: '1/1600s',
      iso: 250,
    },
  },
  {
    id: 'p12',
    title: 'Chasing Golden Walks',
    category: 'street',
    url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop',
    location: 'Lisbon Streets, Portugal',
    date: 'May 2025',
    backstory: 'The late afternoon sun casting long, dramatic silhouettes onto Lisbon\'s traditional calcada cobblestones. A lone walker crosses a strip of golden light, creating a high-contrast graphic image full of movement and life.',
    exif: {
      camera: 'Sony Alpha 7CR',
      lens: 'Sony FE 35mm f/1.4 GM',
      focalLength: '35mm',
      aperture: 'f/4.0',
      shutterSpeed: '1/500s',
      iso: 100,
    },
  }
];

export const gearBag: GearItem[] = [
  {
    id: 'g1',
    category: 'body',
    name: 'Sony Alpha 7R V',
    description: 'High-resolution full-frame monster used for weddings, fine-art landscape, and high-fashion editorial work.',
    specs: ['61.0 Megapixels', '8-stop in-body stabilization', 'Real-time AI subject tracking autofocus', 'Dual card slots'],
  },
  {
    id: 'g2',
    category: 'body',
    name: 'Sony Alpha 7CR',
    description: 'Ultra-compact high-resolution full-frame camera. My perfect choice for covert, lightweight street photography.',
    specs: ['61.0 Megapixels', 'Extremely lightweight (515g)', 'Dedicated AI processing unit'],
  },
  {
    id: 'g3',
    category: 'lens',
    name: 'Sony FE 85mm f/1.2 GM',
    description: 'The holy grail of portraiture. Delivers legendary tack-sharp details and butter-smooth out-of-focus bokeh.',
    specs: ['Unrivaled portraits', 'Four XD linear autofocus motors', 'Exceptional resolution across the frame'],
  },
  {
    id: 'g4',
    category: 'lens',
    name: 'Sony FE 35mm f/1.4 GM',
    description: 'My favorite street lens. Highly versatile focal range with excellent low light capabilities.',
    specs: ['Classic documentary perspective', 'Extremely compact and fast', 'f/1.4 low-light dream'],
  },
  {
    id: 'g5',
    category: 'lens',
    name: 'Sony FE 24-70mm f/2.8 GM II',
    description: 'The workhorse. Covers everything from wide landscapes to close-up wedding candids with prime-like sharpness.',
    specs: ['Next-generation build', 'Constant f/2.8 zoom', 'Lightweight professional standard'],
  },
  {
    id: 'g6',
    category: 'drone',
    name: 'DJI Mavic 3 Pro',
    description: 'Aerial tri-camera drone used for sweeping overhead landscape viewpoints and high-end wedding films.',
    specs: ['Hasselblad primary camera', 'Medium and long telephoto lenses', '43-minute flight time'],
  }
];

export const journalPosts: JournalPost[] = [
  {
    id: 'j1',
    title: 'The Art of Patient Light',
    summary: 'How waiting for three hours in the freezing wind of the Argentinian Andes taught me the value of intentional compositions.',
    content: `Landscape photography is often described as an exercise in patience, but until you are standing at the base of Mount Fitz Roy in Argentinian Patagonia at 4:30 AM, watching your toes go numb, that definition remains purely academic.

On this particular shoot, my goal was simple yet incredibly difficult: capture the first beam of morning light striking the peak of the mountain, with a perfectly calm, mirror-like reflection in the alpine pool below. 

I set up my tripod, locked in my Sony A7R V with the 16-35mm wide lens, and waited. The wind was relentless, churning up small waves on the pool's surface that ruined any hopes of a clean reflection.

Around 6:45 AM, the sky began to transition from indigo to deep magenta. Just as the peak glowed with a soft, peach-like pink, the wind suddenly halted—as if the mountains themselves had held their breath. I triggered the remote shutter. A 2.5-second exposure. The glass-like alpine mirror was captured.

This shoot reminded me that photography is a collaboration with nature. We do not command the elements; we simply show up, prepare our craft, and wait with respect for the earth to open its curtains.`,
    coverImage: landscapeImg,
    date: 'March 14, 2026',
    location: 'Patagonia, Argentina',
    readTime: '4 min read',
  },
  {
    id: 'j2',
    title: 'Documenting Love without the Clutter',
    summary: 'Redefining the wedding portfolio from over-posed checklists to elegant, raw, candid human interactions.',
    content: `For decades, wedding photography has been plagued by standard, rigid posing guides. Tilt your head, place your hand precisely here, look into the horizon, fake a smile. 

While these styles satisfy standard registries, they strip away the most beautiful part of a wedding: the spontaneous, chaotic, gorgeous reality of love.

My approach with couples like Arthur and Claire in Tuscany is to become a silent storyteller. During a quiet transition block, they escaped into the olive groves to catch their breath. I followed from a safe distance with my 85mm portrait lens, which allowed me to stay unobtrusive.

As they began recalling a silly toast from a groomsman, both erupted into completely unposed, deep, visceral laughter. The golden sunset rays pierced right through the olive leaves, wrapping them in a natural, painterly rim of light.

That single candid frame became their absolute favorite of the entire gallery. It holds an emotional resonance that a staged, posed portrait can never hope to replicate. It captures a feeling, not just an appearance.`,
    coverImage: weddingImg,
    date: 'May 22, 2026',
    location: 'Tuscany, Italy',
    readTime: '3 min read',
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Arthur & Claire De-Luca',
    role: 'Wedding Clients',
    content: 'Working with Kidus was the best decision of our wedding. He is entirely invisible when he needs to be, capturing the most emotional, candid moments, but has a wonderful, calming presence when guiding us. Our photos look like editorial film stills.',
  },
  {
    id: 't2',
    name: 'Seraphina Vance',
    role: 'Fashion Model / Creative Director',
    content: 'Kidus understands natural light like no other photographer I have shot with. He captures angles and textures that highlight the garments while keeping the focus on the model’s character. A pristine, simplistic, yet powerful vision.',
  },
  {
    id: 't3',
    name: 'Julian Carter',
    role: 'Creative Director, Slate Magazine',
    content: 'We commissioned Kidus for a series of urban street essays in Tokyo. His ability to frame the chaotic modern metropolis into balanced, graphic minimalist compositions is outstanding. Highly professional, responsive, and deeply artistic.',
  }
];
