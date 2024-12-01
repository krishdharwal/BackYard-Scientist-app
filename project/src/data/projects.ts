import { Project } from '../types';


import woodenRaceCar from '../assets/images/woodencar.jpg';
import waterWheel from '../assets/images/waterpump.jpg';
import paperMicroscope from '../assets/images/papermicroscope.jpg';
import motorFan from '../assets/images/motorfan.jpg';
import leafBoat from '../assets/images/leaboat.jpg';
import cardboardDreamHouse from '../assets/images/cardboardhouse.jpg';
import rubberBandGun from '../assets/images/rubbergun.jpg';
import oilWaterArt from '../assets/images/oilandwater.jpg';
import rainbowDensityTower from '../assets/images/rainbowtower.jpg';



export const projects: Project[] = [
  {
    id: '1',
    name: 'Wooden Race Car',
    description: 'Build an awesome wooden race car using simple materials. Learn about wheels, axles, and basic physics!',
    requirements: ['Wood blocks', 'Wooden dowels', 'Rubber bands', 'Sandpaper', 'Wood glue', 'Paint (optional)', 'Wheels (bottle caps or wooden)'],
    image: woodenRaceCar,
    difficulty: 'Medium',
    category: 'kids',
    steps: [
      'Cut the wood block into a car shape',
      'Sand the edges smooth',
      'Drill holes for the axles',
      'Insert dowels for axles',
      'Attach wheels to the axles',
      'Paint and decorate your car'
    ]
  },
  {
    id: '2',
    name: 'Water Wheel',
    description: 'Create a fascinating water wheel that spins with flowing water. Perfect for learning about energy conversion!',
    requirements: ['Plastic bottles', 'Wooden skewer', 'Plastic spoons', 'Hot glue gun (with adult supervision)', 'Scissors', 'Waterproof tape'],
    image: waterWheel,
    difficulty: 'Medium',
    category: 'kids',
    steps: [
      'Cut plastic bottles into wheel shape',
      'Attach spoons as paddles',
      'Create the axle support',
      'Mount the wheel',
      'Test with flowing water',
      'Adjust for optimal spinning'
    ]
  },
  {
    id: '3',
    name: 'Paper Microscope',
    description: 'Make a simple microscope using paper and a phone lens. Explore the microscopic world!',
    requirements: ['Thick paper', 'Clear tape', 'Old phone camera lens', 'LED light', 'Battery', 'Scissors'],
    image: paperMicroscope,
    difficulty: 'Easy',
    category: 'kids',
    steps: [
      'Cut and fold paper structure',
      'Install the phone lens',
      'Create the light source',
      'Make the specimen holder',
      'Assemble all parts',
      'Start exploring!'
    ]
  },
  {
    id: '4',
    name: '2V Motor Fan',
    description: 'Build a simple electric fan using a small motor. Learn about electricity and motion!',
    requirements: ['2V DC motor', 'Battery holder', 'Propeller', 'Wires', 'Switch', 'Cardboard base'],
    image: motorFan,
    difficulty: 'Medium',
    category: 'kids',
    steps: [
      'Create the base structure',
      'Install the motor',
      'Connect the battery holder',
      'Attach the propeller',
      'Add the switch',
      'Test and adjust'
    ]
  },
  {
    id: '5',
    name: 'Leaf Boat',
    description: 'Create a nature-inspired boat using leaves and twigs. Perfect for outdoor science fun!',
    requirements: ['Large leaves', 'Small twigs', 'String', 'Paper for sail', 'Scissors'],
    image:leafBoat,
    difficulty: 'Easy',
    category: 'kids',
    steps: [
      'Collect large sturdy leaves',
      'Create the boat base',
      'Make a simple sail',
      'Attach the mast',
      'Test in water',
      'Decorate if desired'
    ]
  },
  {
    id: '6',
    name: 'Cardboard Dream House',
    description: 'Design and build your own miniature house using cardboard. Learn about architecture and design!',
    requirements: ['Cardboard boxes', 'Scissors', 'Glue', 'Markers', 'Decorative paper', 'Ruler'],
    image: cardboardDreamHouse,
    difficulty: 'Medium',
    category: 'kids',
    steps: [
      'Draw house plans',
      'Cut main structure pieces',
      'Assemble walls and roof',
      'Add windows and doors',
      'Create furniture',
      'Decorate inside and out'
    ]
  },
  {
    id: '7',
    name: 'Rubber Band Gun',
    description: 'Make a safe and fun rubber band launcher. Great for learning about potential energy!',
    requirements: ['Wooden clothespins', 'Rubber bands', 'Popsicle sticks', 'Glue', 'Decorative tape'],
    image: rubberBandGun,
    difficulty: 'Easy',
    category: 'kids',
    steps: [
      'Prepare the trigger mechanism',
      'Create the handle',
      'Add rubber band support',
      'Test the mechanism',
      'Decorate your launcher',
      'Practice safe shooting'
    ]
  },
  {
    id: '8',
    name: 'Oil and Water Art',
    description: 'Create beautiful patterns using oil and water. Learn about density and molecular polarity!',
    requirements: ['Cooking oil', 'Water', 'Food coloring', 'Clear container', 'Flashlight'],
    image: oilWaterArt,
    difficulty: 'Easy',
    category: 'kids',
    steps: [
      'Fill container with water',
      'Add food coloring',
      'Pour in cooking oil',
      'Observe separation',
      'Shine light through',
      'Create patterns'
    ]
  },
  {
    id: '9',
    name: 'Rainbow Density Tower',
    description: 'Build a colorful liquid tower using different densities. Amazing chemistry demonstration!',
    requirements: ['Honey', 'Dish soap', 'Water', 'Oil', 'Food coloring', 'Tall glass'],
    image:rainbowDensityTower,
    difficulty: 'Medium',
    category: 'kids',
    steps: [
      'Pour honey first',
      'Add dish soap carefully',
      'Add colored water',
      'Top with oil',
      'Observe layers',
      'Try dropping objects'
    ]
  }
];