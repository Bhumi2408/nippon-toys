"use client";
import Image from "next/image";
import { useState } from "react";
import { Download } from "lucide-react";

const TABS = [
  { key: "cricket", label: "Cricket Sets" },
  { key: "balls", label: "Balls" },
  { key: "gun", label: "Toy Guns" },
  { key: "activity", label: "Activity Toys" },
  { key: "edu", label: "Educational" },
  { key: "rings", label: "Rings & Hockey" },
  { key: "squeeze", label: "Squeeze Toys" },
  { key: "bowling", label: "Kids Bowling Set" },
  { key: "baseball", label: "Baseball & Basketball" },
];

// Two audiences, two very different intents:
// - "retail"    -> shopping for one/few pieces, sent to toysbasket.in to buy.
// - "bulk"      -> distributors / retailers / exporters wanting a quote,
//                  sent to the on-page enquiry form instead of a B2C store.
const VIEW_MODES = [
  { key: "retail", label: "Retail Buyers" },
  { key: "bulk", label: "Bulk / Distributor Enquiry" },
];

const PRODUCTS = [
  {
    cat: "cricket",
    name: "Mini Cricket Set",
    desc: "A bat, a ball, 4 wickets, 2 base & 2 bails packed in PVC pouch. Available in various sizes for ages 3 to 5 yrs.",
    price: "₹420",
    img: "/products/mini-cricket.png",
    bg: "from-brand-orange to-brand-yellow",
    url: "https://www.toysbasket.in/user/product.php?id=87",
  },
  {
    cat: "cricket",
    name: "Medium Cricket Set PVC",
    desc: "A bat, a ball, 4 wickets, 1 big base, 1 small base & 2 bails packed in a PVC pouch. Optimum for ages 3 to 5 yrs.",
    price: "₹469",
    img: "/products/medium-pvc.png",
    bg: "from-brand-orange to-brand-yellow",
    url: "https://www.toysbasket.in/user/product.php?id=88",
  },
  {
    cat: "cricket",
    name: "New Mini Cricket Set",
    desc: "A bat, a ball, 3 wickets, a base & 2 bails packed in PVC pouch. Available in various sizes for ages 3 to 5 yrs.",
    price: "₹319",
    img: "/products/new-mini.png",
    bg: "from-brand-teal to-teal-600",
    url: "https://www.toysbasket.in/user/product.php?id=81",
  },
  {
    cat: "cricket",
    name: "Baby Cricket Set",
    desc: "A bat, a ball, 3 wickets, a base & 2 bails packed in PVC pouch. Bat lengths 18 inches.",
    price: "₹225",
    img: "/products/baby-cricket-set.png",
    bg: "from-orange-300 to-brand-yellow",
    url: "https://www.toysbasket.in/user/product.php?id=80",
  },
  {
    cat: "cricket",
    name: "Mini Bat Ball (Pouch)",
    desc: "Suitable for ages 3 to 5 yrs. Aids hand-eye coordination.Bat lengths 21 inches.",
    price: "₹175",
    img: "/products/mini-ball-pouch.png",
    bg: "from-brand-navy to-brand-navySoft",
    url: "https://www.toysbasket.in/user/product.php?id=68",
  },
  {
    cat: "cricket",
    name: "Junior Bat Ball (Jali)",
    desc: "Bat lengths 23 inches. A bat and a ball wrapped in net.",
    price: "₹195",
    img: "/products/junior-bat-ball.png",
    bg: "from-brand-yellow to-orange-400",
    url: "https://www.toysbasket.in/user/product.php?id=65",
  },
  {
    cat: "cricket",
    name: "Senior Bat Ball Set (Kids 20)",
    desc: "26-inch bat, non-toxic virgin plastic · Ages 8–10",
    price: "₹299",
    img: "/products/senior-bat-ball.png",
    bg: "from-orange-400 to-brand-orangeDark",
    url: "https://www.toysbasket.in/user/product.php?id=71",
  },
  {
    cat: "cricket",
    name: "Big Bat Ball (Jali)",
    desc: "29.5-inch bat, fine-quality materials from trusted vendors",
    price: "₹442",
    img: "/products/big-bat-ball.png",
    bg: "from-emerald-400 to-brand-teal",
    url: "https://www.toysbasket.in/user/product.php?id=67",
  },
  {
    cat: "cricket",
    name: "Mini Bat Ball (Jali)",
    desc: "Bat lengths 21 inches. Suitable for ages 3 to 5 yrs.",
    price: "₹145",
    img: "/products/mini-bat-ball.png",
    bg: "from-amber-300 to-brand-yellow",
    url: "https://www.toysbasket.in/user/product.php?id=64",
  },
  {
    cat: "cricket",
    name: "Beach Cricket Set (Jumbo)",
    desc: "Bat lengths approx 32 inches. A bat, a PVC WIND ball, 3 wickets, 1 base & 2 bails packed in a kit bag.",
    price: "₹1,175",
    img: "/products/jumbo-set.png",
    bg: "from-brand-tealDark to-teal-700",
    url: "https://www.toysbasket.in/user/product.php?id=82",
  },
  {
    cat: "cricket",
    name: "Mini Cricket Set (Kit-Bag)",
    desc: "Bat lengths approx 21 inches. A bat, a ball, 4 wickets, 1 big base, 1 small base & 2 bails packed in a kit bag.",
    price: "₹452",
    img: "/products/mini-kit-bag.png",
    bg: "from-emerald-400 to-brand-teal",
    url: "https://www.toysbasket.in/user/product.php?id=78",
  },
  {
    cat: "cricket",
    name: "Senior Cricket Set (Kit-Bag)",
    desc: "Bat lengths 26 inches. A bat, a ball, 4 wickets, 1 big base, 1 small base & 2 bails packed in a kit bag along with a complimentary gift.",
    price: "₹665",
    img: "/products/senior-kit-bag.png",
    bg: "from-orange-400 to-brand-orangeDark",
    url: "https://www.toysbasket.in/user/product.php?id=79",
  },
  {
    cat: "cricket",
    name: "KIDS Cricket Set Senior",
    desc: "Bat lengths 26 inches. All Stumps and Bat comes in a designer finish. A bat, a ball, 4 wickets, 1 big base, 1 small base & 2 bails packed in a kit bag.",
    price: "₹195",
    img: "/products/kids-set.png",
    bg: "from-brand-yellow to-orange-400",
    url: "https://www.toysbasket.in/user/product.php?id=85",
  },
  // Pool Balls
  {
    cat: "balls",
    name: "Synthetic Ball",
    desc: "Replica of Actual Cricket Ball. For ages 12 yrs& above. Highly suitable for Bowling Practice.",
    price: "₹286",
    img: "/products/synthetic.png",
    bg: "from-brand-teal to-brand-tealDark",
    url: "https://www.toysbasket.in/user/product.php?id=99",
  },
  {
    cat: "balls",
    name: "Synthetic Ball - Blister",
    desc: "Replica of Actual Cricket Ball. For ages 12 yrs& above. Highly suitable for Bowling Practice.",
    price: "₹299",
    img: "/products/synthetic-blister.png",
    bg: "from-teal-400 to-brand-teal",
    url: "https://www.toysbasket.in/user/product.php?id=97",
  },
  {
    cat: "balls",
    name: "Wind Ball - Blister",
    desc: "Very Durable as it does not tears off. For ages 3 yrs& above. Best suitable for Cricket Lovers.",
    price: "₹165",
    img: "/products/wind-blister.png",
    bg: "from-teal-300 to-teal-500",
    url: "https://www.toysbasket.in/user/product.php?id=96",
  },
  // Plastic Balls
  {
    cat: "balls",
    name: "Coloured Ball Set – 4 Pc",
    desc: "Available in different colors. For ages 3 yrs& above. Best suitable for domestic Cricket.",
    price: "₹130",
    img: "/products/colored-4.png",
    bg: "from-brand-orange to-brand-yellow",
    url: "https://www.toysbasket.in/user/product.php?id=95",
  },
  {
    cat: "balls",
    name: "Sporty Ball",
    desc: "Baby hands squeezy toys. The ball makes a squeak sound when pressed. Contains 3 different types of multiple color balls. For ages 3 months & above.",
    price: "₹158",
    img: "/products/sporty-ball.png",
    bg: "from-orange-300 to-brand-orange",
    url: "https://www.toysbasket.in/user/product.php?id=103",
  },
  {
    cat: "balls",
    name: "Champ Ball",
    desc: "Baby hands squeezy toys. The ball makes a squeak sound when pressed. For ages 3 months & above.",
    price: "₹171",
    img: "/products/champ-ball.png",
    bg: "from-brand-yellow to-orange-400",
    url: "https://www.toysbasket.in/user/product.php?id=100",
  },
  {
    cat: "balls",
    name: "Colored Ball Set - 3 Pc",
    desc: "Available in different colors. For ages 3 yrs& above. Best suitable for domestic Cricket.",
    price: "₹115",
    img: "/products/colored-3.png",
    bg: "from-orange-400 to-brand-orangeDark",
    url: "https://www.toysbasket.in/user/product.php?id=94",
  },
  // Balls
  {
    cat: "balls",
    name: "Wind Ball",
    desc: "Available in multiple colors. Very Durable as it does not tears off. For ages 3 yrs& above.",
    price: "₹149",
    img: "/products/wind-ball.png",
    bg: "from-amber-300 to-brand-yellow",
    url: "https://www.toysbasket.in/user/product.php?id=98",
  },
  // Toy Guns
  {
    cat: "gun",
    name: "Blaze Shot Gun",
    desc: "Light, Soft and Safe Foam Bullets. For ages 8yrs& above.Contains 6 Foam Bullets and 1 Gun.",
    price: "₹270",
    img: "/products/blaze-shot-gun.png",
    bg: "from-rose-400 to-brand-orange",
    url: "https://www.toysbasket.in/user/product.php?id=17",
  },
  {
    cat: "gun",
    name: "Ghost Hunter Set",
    desc: "Contains 1 Ghost and 1 Bat for hunting down, 1 Gun, 1 Knife and 3 Bullets. For ages 5 yrs & above.",
    price: "₹320",
    img: "/products/ghost-hunter-set.webp",
    bg: "from-brand-navySoft to-brand-navy",
    url: "https://www.toysbasket.in/user/product.php?id=18",
  },
  {
    cat: "gun",
    name: "Pubg Battle Field",
    desc: "Contains 1 Gun, 1 Knife, 6 Bullets, 1 Camera, 1 Mobile, 2 different sized Bombs and 1 Police Rod. Light, Soft and Safe Foam Bullets. For ages 3 yrs & above.",
    price: "₹375",
    img: "/products/pubg-battle-field.webp",
    bg: "from-amber-400 to-brand-orangeDark",
    url: "https://www.toysbasket.in/user/product.php?id=15",
  },
  {
    cat: "gun",
    name: "Shikaari Set",
    desc: "Contains 1 Gun, 3 Bullets, 1 Knife and 3 different types of animals. Light, Soft and Safe Foam Bullets. For ages 5 yrs & above.",
    price: "₹342",
    img: "/products/shikaari.png",
    bg: "from-amber-400 to-brand-orangeDark",
    url: "https://www.toysbasket.in/user/product.php?id=16",
  },
  {
    cat: "gun",
    name: "2 in 1 Action Gun",
    desc: "Light, Soft and Safe Foam Bullets and water orbeez bullets. or ages 8yrs& above. Contains Foam Bullets, 1 pack of orbeez (water jelly balls) and 1 Gun.",
    price: "₹327.80",
    img: "/products/2-in-1.png",
    bg: "from-amber-400 to-brand-orangeDark",
    url: "https://www.toysbasket.in/user/product.php?id=19",
  },
  {
    cat: "gun",
    name: "Super Hero Police Forces",
    desc: "Contains 1 Gun, 1 Knife, 3 Bullets, 1 Camera, 1 Mobile, 1 Police Rod and 1 Scanner. Light, Soft and Safe Foam Bullets. For ages 5 yrs & above.",
    price: "₹370",
    img: "/products/super-hero-police-forces.webp",
    bg: "from-brand-navy to-brand-navySoft",
    url: "https://www.toysbasket.in/user/product.php?id=14",
  },
  {
    cat: "gun",
    name: "Super Hero Series",
    desc: "Contains 1 Gun, 1 Handcuff, 3 Bullets, 1 Camera, 1 Mobile, 1 Police Rod and 1 Scanner. Light, Soft and Safe Foam Bullets. For ages 5 yrs & above",
    price: "₹370",
    img: "/products/super-hero-series.webp",
    bg: "from-indigo-400 to-brand-navy",
    url: "https://www.toysbasket.in/user/product.php?id=13",
  },
  {
    cat: "gun",
    name: "Super Army Battle",
    desc: "Contains 3 Army Man having articulated parts like moving hands, legs and rotating face. For ages 3 yrs & above.",
    price: "₹177",
    img: "/products/super-army-battle.png",
    bg: "from-emerald-500 to-brand-navySoft",
    url: "https://www.toysbasket.in/user/product.php?id=20",
  },
  // Activity Toy
  {
    cat: "activity",
    name: "Stepping Stone",
    desc: "For ages 5yrs & above. Contains 2 Stepping Stones along with String & Handle.",
    price: "₹437",
    img: "/products/stepping-stone.png",
    bg: "from-brand-navy to-brand-navySoft",
    url: "https://www.toysbasket.in/user/product.php?id=54",
  },
  {
    cat: "activity",
    name: "Infinite Loop",
    desc: "Excellent for developing balance and dexterity in your kids. For ages 5 yrs& above. Contains 2 Balls and 1 Loop.",
    price: "₹342",
    img: "/products/infinite-loop.png",
    bg: "from-indigo-400 to-brand-navy",
    url: "https://www.toysbasket.in/user/product.php?id=53",
  },
  {
    cat: "activity",
    name: "Juggler",
    desc: "Aids hand-eye coordination. For ages 2 yrs& above. Contains 2 Rubber balls and 1 Juggler.",
    price: "₹299",
    img: "/products/juggler.png",
    bg: "from-emerald-500 to-brand-navySoft",
    url: "https://www.toysbasket.in/user/product.php?id=52",
  },
  {
    cat: "activity",
    name: "Ring Target",
    desc: "Ideal for improving hand-eye coordination, precision and accuracy. Brilliant party game for Ages 3 yrs and above.",
    price: "₹320",
    img: "/products/ring-target.png",
    bg: "from-emerald-500 to-brand-navySoft",
    url: "https://www.toysbasket.in/user/product.php?id=42",
  },
  // Educational Toys
  {
    cat: "edu",
    name: "Shape Bang",
    desc: "Comes with five different shape Tops and a hammer to hit the shape to its maximum depth, Reverse it to repeat the process. For ages 1 Year and above.",
    price: "₹382",
    img: "/products/bang-shape.png",
    bg: "from-brand-yellow to-amber-400",
    url: "https://www.toysbasket.in/user/product.php?id=32",
  },
  {
    cat: "edu",
    name: "Hammer The Shape",
    desc: "Comes with four different shape blocks, a unique changeable lid, a hammer & a container. For ages 1 year & above.",
    price: "₹306",
    img: "/products/hammer-shapes.png",
    bg: "from-indigo-400 to-brand-navySoft",
    url: "https://www.toysbasket.in/user/product.php?id=31",
  },
  {
    cat: "edu",
    name: "Toddler Rings - Big",
    desc: "7 different sized bright & colorful rings stack onto a plastic pole, creating a pyramid. Comes with a base and a cute, adorable face to top the rings.",
    price: "₹299",
    img: "/products/toddler-rings.png",
    bg: "from-brand-navy to-indigo-500",
    url: "https://www.toysbasket.in/user/product.php?id=30",
  },
  {
    cat: "edu",
    name: "Baby Stacker - Small",
    desc: " different sized bright & colorful rings stack onto a plastic pole, creating a pyramid. Comes with a base and a cute, adorable face to top the rings.",
    price: "₹268",
    img: "/products/baby-stacker.png",
    bg: "from-brand-navy to-indigo-500",
    url: "https://www.toysbasket.in/user/product.php?id=27",
  },
  {
    cat: "edu",
    name: "Shapes and Colors",
    desc: "It includes 8 different color and shapes packed in a tray. Double learing – Shapes doubles up as a stencils. Helps children develop shape and color recognition while having fun.",
    price: "₹232",
    img: "/products/shapes.png",
    bg: "from-brand-navy to-indigo-500",
    url: "https://www.toysbasket.in/user/product.php?id=26",
  },
  {
    cat: "edu",
    name: "Musical Activity Ball",
    desc: "Introduce your baby to the world of colors, sound, and shape recognition with the Toys Basket Musical Activity Ball. Made with child-safe materials and vibrant colors, this puzzle-style ball can be assembled by fitting various soft-touch segments. ",
    price: "₹344",
    img: "/products/musical-activity.png",
    bg: "from-brand-navy to-indigo-500",
    url: "https://www.toysbasket.in/user/product.php?id=10",
  },
  {
    cat: "edu",
    name: "Water Rocket",
    desc: "This Toys Will Challenge Your Childs Intellect By Stimulating Amazing Creativity. Contains 2 Bottles, 1 Bottle Stand, 1 pipe, 2 connectors and 1 pump. Rocket goes in the air at a height of approx. 50 to 70 feet.",
    price: "₹696",
    img: "/products/water-rocket.png",
    bg: "from-brand-navy to-indigo-500",
    url: "https://www.toysbasket.in/user/product.php?id=40",
  },
  // Kids Playing Rings
  {
    cat: "rings",
    name: "Coloured Hoopa Hoola (Six Pieces)",
    desc: "Easily create 2 different sized hoops by locking together either 5 or 6 of the sections. Diameter approx 28 inches.",
    price: "₹178",
    img: "/products/kids-hula-rings.png",
    bg: "from-brand-teal to-teal-600",
    url: "https://www.toysbasket.in/user/product.php?id=33",
  },
  {
    cat: "rings",
    name: "Hoop Hula Zig Zag Rings",
    desc: "Adjustable snap-together hoop, 8 pcs in 4 colours · locks into 2 hoop sizes with extra grip loops",
    price: "₹325 / Pc",
    img: "/products/hoop-hula-zig-zag-rings.png",
    bg: "from-emerald-400 to-brand-teal",
    url: "https://www.toysbasket.in/user/product.php?id=36",
  },
  {
    cat: "rings",
    name: "Foam Hoopa Hola Rings",
    desc: "This adjustable, snap-together Hula Hoop is extremely portable and consists of 5 colorful pieces layered with foam. Easily create hoops by locking together all sections. Diameter approx 24 inches.",
    price: "₹285",
    img: "/products/foam-hoopa-hola-rings.png",
    bg: "from-teal-300 to-emerald-500",
    url: "https://www.toysbasket.in/user/product.php?id=34",
  },
  // Kids Hockey Stick
  {
    cat: "rings",
    name: "Kids Hockey Stick",
    desc: "For ages 4 to 10 yrs. A Printed hockey stick & a Ball packed in a Net.",
    price: "₹151",
    img: "/products/kids-hockey-stick.png",
    bg: "from-brand-navySoft to-brand-navy",
    url: "https://www.toysbasket.in/user/product.php?id=92",
  },
  {
    cat: "rings",
    name: "Hockey Pair – Premium",
    desc: "For ages 4 to 10 yrs. Two Printed Hockey Sticks & a Ball packed in a Net.",
    price: "₹225",
    img: "/products/hockey-pairs.png",
    bg: "from-emerald-500 to-brand-tealDark",
    url: "https://www.toysbasket.in/user/product.php?id=93",
  },
  {
    cat: "rings",
    name: "Kids Hockey Set",
    desc: "Put some sporting action into your playtime. For ages 4 to 10 yrs. A Printed hockey stick & a Ball packed in a Net.",
    price: "₹151",
    img: "/products/kids-hockey-set.png",
    bg: "from-brand-teal to-brand-navySoft",
    url: "https://www.toysbasket.in/user/product.php?id=91",
  },
  // Squeeze Toy
  {
    cat: "squeeze",
    name: "Sea World – Squeeze Toy",
    desc: "The fish makes a squeak sound when pressed. Contains 6 different types of multiple color fishes. For ages 3 yrs & above.",
    price: "₹281",
    img: "/products/seal-world.png",
    bg: "from-cyan-400 to-brand-teal",
    url: "https://www.toysbasket.in/user/product.php?id=106",
  },
  {
    cat: "squeeze",
    name: "Circus Animal – Squeeze Toy",
    desc: "It makes a squeak sound when pressed. Contains 4 different types animals and one PVC plastic boy. For ages 3 yrs & above.",
    price: "₹299",
    img: "/products/circus-animal.png",
    bg: "from-amber-400 to-brand-orange",
    url: "https://www.toysbasket.in/user/product.php?id=104",
  },
  {
    cat: "squeeze",
    name: "Rugby Ball",
    desc: "The ball makes a squeak sound when pressed. Contains 6 different types of multiple color balls. For ages 3 months & above.",
    price: "₹250",
    img: "/products/rugby-ball.png",
    bg: "from-brand-orange to-rose-400",
    url: "https://www.toysbasket.in/user/product.php?id=101",
  },
  {
    cat: "squeeze",
    name: "Squkeey Cubes",
    desc: "It makes a squeaky sound when pressed. Very durable as it does not tear off. For ages 6 months & above.",
    price: "₹224",
    img: "/products/cubes.png",
    bg: "from-brand-orange to-rose-400",
    url: "https://www.toysbasket.in/user/product.php?id=107",
  },
  {
    cat: "squeeze",
    name: "Twin Babies",
    desc: "Colorful and Attractive. It makes a squeaky sound when pressed. For ages 6 months & above.",
    price: "₹225",
    img: "/products/babies.png",
    bg: "from-brand-orange to-rose-400",
    url: "https://www.toysbasket.in/user/product.php?id=105",
  },
  {
    cat: "squeeze",
    name: "Finger Pupper Set",
    desc: "Contains 10 different animal shapes which fits on fingers. Safe for kids. Colorful and attractive. For ages 1 Yrs and above.",
    price: "₹350",
    img: "/products/finger.png",
    bg: "from-brand-orange to-rose-400",
    url: "https://www.toysbasket.in/user/product.php?id=110",
  },
  // Kids Bowling Set
  {
    cat: "bowling",
    name: "Junior Bowling Set – 6 Pin",
    desc: "For ages 3 yrs + Height of each pin (skittle) is about 9 inches. 6 pins and one ball packed in a box.",
    price: "₹349",
    img: "/products/junior-bowling-set.png",
    bg: "from-brand-yellow to-orange-400",
    url: "https://www.toysbasket.in/user/product.php?id=60",
  },
  {
    cat: "bowling",
    name: "Junior Bowling 10 pin",
    desc: "For ages 3 yrs + Height of each pin (skittle) is about 9 inches. 10 pins and 2 balls packed in a box.",
    price: "₹499",
    img: "/products/10-pins.png",
    bg: "from-orange-400 to-brand-orangeDark",
    url: "https://www.toysbasket.in/user/product.php?id=59",
  },
  {
    cat: "bowling",
    name: "Kids Bowling Set – Junior",
    desc: "For ages 3 yrs + Height of each pin (skittle) is about 9 inches. 6 Designer PINS and 2 Balls packed in a KIT Bag.",
    price: "₹380",
    img: "/products/kids-junior-bowling-set.png",
    bg: "from-amber-300 to-brand-yellow",
    url: "https://www.toysbasket.in/user/product.php?id=62",
  },
  {
    cat: "bowling",
    name: "Bowling Set MINI",
    desc: "For ages 2yrs + Height of each pin (skittle) is about 6 inches. 10 pins and 2 balls packed in a box.",
    price: "₹268",
    img: "/products/mini-bowling.png",
    bg: "from-amber-300 to-brand-yellow",
    url: "https://www.toysbasket.in/user/product.php?id=61",
  },
  {
    cat: "bowling",
    name: "Senior MUSICAL Bowling 6 pin",
    desc: "For ages 5 yrs + Height of each pin (skittle) is about 12 inches. 6 pins and 1 ball packed in Display Box. Strike the musical skittles with a musical rolling ball.",
    price: "₹868",
    img: "/products/musical-bowling.png",
    bg: "from-amber-300 to-brand-yellow",
    url: "http://toysbasket.in/user/product.php?id=58",
  },
  // Kids Baseball Set
  {
    cat: "baseball",
    name: "Foam Base Ball",
    desc: "Available in your child's favourite cartoon designs. All foam base bat & a foam ball packed in a net. For ages 3 yrs& above.",
    price: "₹553",
    img: "/products/kids-foam-baseball-set.png",
    bg: "from-brand-orange to-amber-400",
    url: "https://www.toysbasket.in/user/product.php?id=90",
  },
  {
    cat: "baseball",
    name: "Basket Ball Set JUNIOR PVC",
    desc: "4 level adjustable heights (up to 4 feet) to grow with your child. Complete with backboard, net, ring, ball, base and connecting poles packed in a PVC pouch. For ages 4 to 10 yrs.",
    price: "₹586",
    img: "/products/basket-junior-pvc.png",
    bg: "from-rose-400 to-brand-orangeDark",
    url: "https://www.toysbasket.in/user/product.php?id=63",
  },
  {
    cat: "baseball",
    name: "Plastic Basketball Set",
    desc: "5 level adjustable heights (up to 5 feet) to grow with your child. Easy to assemble & disassemble. Complete with backboard, net, ring, ball, base and connecting poles. For ages 4 to 10 yrs.",
    price: "₹706",
    img: "/products/basketball-set.png",
    bg: "from-rose-400 to-brand-orangeDark",
    url: "https://www.toysbasket.in/user/product.php?id=11",
  },
];

export default function Products() {
  const [active, setActive] = useState(TABS[0].key);
  const [viewMode, setViewMode] = useState("retail");
  const filtered = PRODUCTS.filter((p) => p.cat === active);
  const isBulk = viewMode === "bulk";

  return (
    <section id="products" className="section-pad bg-orange-50/30">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="chip">Our Collection</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-brand-navy mt-4">
            Trending Products
          </h2>
          <p className="mt-3 text-brand-navySoft">
            From backyard cricket to quiet learning time — a range built for
            every kind of play.
          </p>

          {/* MOQ / bulk pricing note */}
          <p className="mt-4 text-sm text-brand-navySoft bg-white border border-black/5 rounded-full px-5 py-2 inline-block">
            Bulk and wholesale pricing available on request. MOQs vary by
            product category — get in touch for a tailored quote.
          </p>
        </div>

        {/* Download Catalogue button */}
       

        {/* Retail vs Bulk/Distributor toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full border border-black/10 bg-white p-1">
            {VIEW_MODES.map((m) => (
              <button
                key={m.key}
                onClick={() => setViewMode(m.key)}
                className={`px-5 py-2 rounded-full text-sm font-heading font-semibold transition-colors ${
                  viewMode === m.key
                    ? "bg-brand-orange text-white"
                    : "text-brand-navySoft hover:text-brand-orange"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {isBulk && (
          <p className="text-center text-sm text-brand-navySoft max-w-xl mx-auto mb-8">
            Prices shown are indicative retail (per-piece) references only.
            Tap any product to send a bulk enquiry — we&apos;ll get back with
            wholesale pricing, MOQ and lead time for your quantity.
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors ${
                active === tab.key
                  ? "bg-brand-navy text-white border-brand-navy"
                  : "bg-white text-brand-navySoft border-black/10 hover:border-brand-orange hover:text-brand-orange"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-brand-navySoft py-10">
            Products for this category are coming soon — reach out to us for the
            latest catalogue.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((p) => {
              // Retail mode: whole card links out to toysbasket.in (B2C store).
              // Bulk mode: whole card scrolls to the on-page enquiry form
              // instead, and pre-fills nothing external — no B2C checkout
              // shown to a distributor/exporter audience.
              const cardProps = isBulk
                ? { href: "#contact" }
                : { href: p.url, target: "_blank", rel: "noopener noreferrer" };

              return (
                <a
                  key={p.url}
                  {...cardProps}
                  className="group bg-white rounded-2xl border border-black/5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-cardHover)] hover:-translate-y-1 transition-all overflow-hidden flex flex-col cursor-pointer"
                >
                  <div className={`relative h-48 bg-gradient-to-br ${p.bg}`}>
                    <span className="absolute top-3 left-3 z-10 bg-white/90 text-brand-orangeDark text-[10px] font-heading font-bold px-2.5 py-1 rounded-full">
                      {isBulk ? "Bulk Available" : "Best Seller"}
                    </span>
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-heading font-bold text-brand-navy">
                      {p.name}
                    </h3>
                    <p className="text-sm text-brand-navySoft mt-1 flex-1">
                      {p.desc}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-black/5">
                      <span className="font-heading font-bold text-sm text-brand-orangeDark">
                        {isBulk ? (
                          <>
                            <span className="line-through text-brand-navySoft/50 text-xs mr-1">
                              {p.price}
                            </span>
                            MOQ Pricing
                          </>
                        ) : (
                          p.price
                        )}
                      </span>
                      <span className="text-[10px] font-heading font-semibold px-3 py-1.5 rounded-full bg-brand-navy text-white group-hover:bg-brand-orange transition-colors">
                        {isBulk ? "Get Bulk Quote →" : "Buy Now →"}
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}

        <div className="md:flex gap-5 items-center justify-center text-center mt-12">
          <a
            href="https://www.toysbasket.in/"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            View Full Product Range
          </a>
          <a
            href="/Nippon-Catalogue.pdf"
            download
            className="btn-outline inline-flex items-center gap-2"
          >
            <Download size={16} />
            Download Catalogue
          </a>
        </div>
      </div>
    </section>
  );
}