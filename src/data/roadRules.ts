import { Question } from './types';

export const roadRulesQuestions: Question[] = [
  {
    id: 'id:question/10',
    question: 'What should you do when you approach a yellow traffic light?',
    imageUrl: 'https://example.com/yellow-light.jpg',
    options: [
      { id: 'id:option/40', text: 'Speed up and quickly pass the intersection.', isCorrect: false },
      { id: 'id:option/41', text: 'Slow down and prepare to stop.', isCorrect: true },
      { id: 'id:option/42', text: 'Ignore the light and continue driving.', isCorrect: false },
      { id: 'id:option/43', text: 'Accelerate to catch the green light.', isCorrect: false },
    ],
    answerDescription:
      'When you approach a yellow traffic light, you must slow down and prepare to stop unless you are too close to stop safely.',
    hint: 'Traffic signals provide important information to drivers. Yellow light indicates caution, so be prepared to stop.',
  },
  {
    id: 'id:question/11',
    question: 'What does a red and white triangular sign indicate?',
    imageUrl: 'https://example.com/triangular-sign.jpg',
    options: [
      { id: 'id:option/44', text: 'Yield', isCorrect: true },
      { id: 'id:option/45', text: 'Stop', isCorrect: false },
      { id: 'id:option/46', text: 'No Entry', isCorrect: false },
      { id: 'id:option/47', text: 'Speed Limit Ahead', isCorrect: false },
    ],
    answerDescription:
      'A red and white triangular sign indicates that you must yield the right-of-way. Be prepared to slow down and let other drivers or pedestrians proceed first.',
    hint: 'This sign is often seen at intersections. Pay attention, as it indicates a specific action you need to take.',
  },
  {
    id: 'id:question/12',
    question: 'What does a blue circle road sign represent?',
    imageUrl: 'https://example.com/blue-circle-sign.jpg',
    options: [
      { id: 'id:option/48', text: 'Hospital Zone', isCorrect: false },
      { id: 'id:option/49', text: 'Speed Limit Zone', isCorrect: false },
      { id: 'id:option/50', text: 'Mandatory Roundabout', isCorrect: true },
      { id: 'id:option/51', text: 'School Zone', isCorrect: false },
    ],
    answerDescription:
      'A blue circle road sign indicates a mandatory roundabout ahead. Drivers must enter the roundabout and follow the directional arrows.',
    hint: 'This sign is often used to regulate traffic flow. Be prepared to follow the designated route.',
  },
  {
    id: 'id:question/13',
    question: 'What does a double solid yellow line in the center of the road mean?',
    imageUrl: 'https://example.com/double-yellow-line.jpg',
    options: [
      { id: 'id:option/52', text: 'No Passing Allowed', isCorrect: true },
      { id: 'id:option/53', text: 'Passing Allowed with Caution', isCorrect: false },
      { id: 'id:option/54', text: 'Passing Allowed in Daylight Only', isCorrect: false },
      { id: 'id:option/55', text: 'Passing Allowed for Trucks Only', isCorrect: false },
    ],
    answerDescription:
      'A double solid yellow line in the center of the road indicates that passing is not allowed in either direction. Drivers must stay in their lane.',
    hint: 'This road marking is used to ensure the safety of drivers. Stay in your lane and avoid overtaking.',
  },
  {
    id: 'id:question/14',
    question:
      'What should you do when you see a pedestrian crossing the road at a marked crosswalk?',
    imageUrl: 'https://example.com/crosswalk.jpg',
    options: [
      { id: 'id:option/56', text: 'Speed up to cross before the pedestrian.', isCorrect: false },
      {
        id: 'id:option/57',
        text: 'Stop and yield the right-of-way to the pedestrian.',
        isCorrect: true,
      },
      { id: 'id:option/58', text: 'Honk your horn to alert the pedestrian.', isCorrect: false },
      { id: 'id:option/59', text: 'Change lanes to avoid the pedestrian.', isCorrect: false },
    ],
    answerDescription:
      'When you see a pedestrian crossing the road at a marked crosswalk, you must stop and yield the right-of-way to the pedestrian.',
    hint: 'Pedestrian safety is a priority. Always be attentive and ready to yield when pedestrians are crossing the road.',
  },
  {
    id: 'id:question/15',
    question: 'What does a sign with a picture of a truck indicate?',
    imageUrl: 'https://example.com/truck-sign.jpg',
    options: [
      { id: 'id:option/60', text: 'Truck Parking Area', isCorrect: false },
      { id: 'id:option/61', text: 'Truck Weight Limit Ahead', isCorrect: true },
      { id: 'id:option/62', text: 'Truck Loading Zone', isCorrect: false },
      { id: 'id:option/63', text: 'Truck Stop Ahead', isCorrect: false },
    ],
    answerDescription:
      'A sign with a picture of a truck indicates a truck weight limit ahead. Trucks must adhere to the specified weight restrictions.',
    hint: "This sign provides specific information to truck drivers. Ensure that the vehicle's weight complies with the indicated limit.",
  },
  {
    id: 'id:question/16',
    question: 'What does a white rectangular sign with black letters or symbols represent?',
    imageUrl: 'https://example.com/white-rectangular-sign.jpg',
    options: [
      { id: 'id:option/64', text: 'Regulatory or Guide Sign', isCorrect: true },
      { id: 'id:option/65', text: 'Warning Sign', isCorrect: false },
      { id: 'id:option/66', text: 'Construction Zone Ahead', isCorrect: false },
      { id: 'id:option/67', text: 'Informational Sign', isCorrect: false },
    ],
    answerDescription:
      'A white rectangular sign with black letters or symbols represents a regulatory or guide sign. These signs provide information about rules and regulations.',
    hint: 'Pay close attention to the shape and color of the sign. Different shapes and colors convey specific meanings.',
  },
  {
    id: 'id:question/17',
    question: 'What does a green traffic light indicate?',
    imageUrl: 'https://example.com/green-light.jpg',
    options: [
      { id: 'id:option/68', text: 'Stop', isCorrect: false },
      { id: 'id:option/69', text: 'Yield', isCorrect: false },
      { id: 'id:option/70', text: 'Go', isCorrect: true },
      { id: 'id:option/71', text: 'Prepare to Stop', isCorrect: false },
    ],
    answerDescription:
      'A green traffic light indicates that you can go. Proceed with caution and be aware of other traffic in the intersection.',
    hint: 'Green means go! However, always check for cross traffic and pedestrians before proceeding through the intersection.',
  },
  {
    id: 'id:question/18',
    question: 'What should you do when you encounter thick fog while driving?',
    imageUrl: 'https://example.com/fog.jpg',
    options: [
      {
        id: 'id:option/72',
        text: 'Turn on high beam headlights for better visibility.',
        isCorrect: false,
      },
      {
        id: 'id:option/73',
        text: 'Increase your speed to quickly get out of the fog.',
        isCorrect: false,
      },
      {
        id: 'id:option/74',
        text: 'Slow down, turn on low beam headlights, and use fog lights if available.',
        isCorrect: true,
      },
      {
        id: 'id:option/75',
        text: 'Follow the tail lights of the vehicle in front closely.',
        isCorrect: false,
      },
    ],
    answerDescription:
      'When you encounter thick fog while driving, you should slow down, turn on low beam headlights, and use fog lights if available. This improves visibility and reduces the risk of accidents.',
    hint: 'Fog significantly reduces visibility. Adjust your driving to the conditions, and use appropriate lights to be visible to other drivers.',
  },
  {
    id: 'id:question/19',
    question: 'What does a diamond-shaped sign with an orange symbol indicate?',
    imageUrl: 'https://example.com/diamond-orange-sign.jpg',
    options: [
      { id: 'id:option/76', text: 'Road Work Ahead', isCorrect: true },
      { id: 'id:option/77', text: 'No Passing Zone', isCorrect: false },
      { id: 'id:option/78', text: 'Dangerous Curve Ahead', isCorrect: false },
      { id: 'id:option/79', text: 'Wildlife Crossing Zone', isCorrect: false },
    ],
    answerDescription:
      'A diamond-shaped sign with an orange symbol indicates road work ahead. Be prepared for construction activities and possible lane closures.',
    hint: 'Construction zones require extra attention. Slow down, follow signs, and watch for construction workers and equipment.',
  },
];
