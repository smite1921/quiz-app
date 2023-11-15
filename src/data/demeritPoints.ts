import { Question } from './types';

export const demeritPointsQuestions: Question[] = [
  {
    id: 'id:question/20',
    question: 'How many demerit points will be added to your driving record for a speeding ticket?',
    options: [
      { id: 'id:option/80', text: '2 points', isCorrect: false },
      { id: 'id:option/81', text: '4 points', isCorrect: false },
      { id: 'id:option/82', text: '6 points', isCorrect: true },
      { id: 'id:option/83', text: '8 points', isCorrect: false },
    ],
    answerDescription:
      'For a speeding ticket, 6 demerit points will be added to your driving record.',
    hint: 'Speeding violations can result in significant demerit points. Obey speed limits to avoid penalties.',
  },
  {
    id: 'id:question/21',
    question:
      'What happens if you accumulate too many demerit points within a specific time period?',
    options: [
      { id: 'id:option/84', text: 'Your license will be suspended.', isCorrect: true },
      { id: 'id:option/85', text: 'You will be fined.', isCorrect: false },
      { id: 'id:option/86', text: 'You will attend a defensive driving course.', isCorrect: false },
      { id: 'id:option/87', text: 'Your insurance rates will decrease.', isCorrect: false },
    ],
    answerDescription:
      'If you accumulate too many demerit points within a specific time period, your license will be suspended.',
    hint: 'Accumulating excessive demerit points can lead to serious consequences. Safe driving is crucial to maintain your license.',
  },
  {
    id: 'id:question/22',
    question:
      'What is the consequence of refusing a breathalyzer test when requested by law enforcement?',
    options: [
      { id: 'id:option/88', text: 'No consequences.', isCorrect: false },
      { id: 'id:option/89', text: 'License suspension and demerit points.', isCorrect: true },
      { id: 'id:option/90', text: 'A warning from the officer.', isCorrect: false },
      { id: 'id:option/91', text: 'Temporary increase in insurance rates.', isCorrect: false },
    ],
    answerDescription:
      'Refusing a breathalyzer test results in license suspension and demerit points.',
    hint: 'Compliance with law enforcement requests is mandatory. Refusing can lead to severe penalties and legal consequences.',
  },
  {
    id: 'id:question/23',
    question: 'How long do demerit points stay on your driving record?',
    options: [
      { id: 'id:option/92', text: '2 years', isCorrect: false },
      { id: 'id:option/93', text: '4 years', isCorrect: true },
      { id: 'id:option/94', text: '6 years', isCorrect: false },
      { id: 'id:option/95', text: '10 years', isCorrect: false },
    ],
    answerDescription: 'Demerit points stay on your driving record for 4 years.',
    hint: 'Even after the points are reduced, the record of your violation stays for a specific period. Safe driving habits are essential.',
  },
  {
    id: 'id:question/24',
    question:
      'What is the maximum number of demerit points you can accumulate within 2 years before your license is suspended?',
    options: [
      { id: 'id:option/96', text: '8 points', isCorrect: false },
      { id: 'id:option/97', text: '10 points', isCorrect: false },
      { id: 'id:option/98', text: '12 points', isCorrect: true },
      { id: 'id:option/99', text: '14 points', isCorrect: false },
    ],
    answerDescription:
      'The maximum number of demerit points you can accumulate within 2 years before your license is suspended is 12 points.',
    hint: 'Knowing the limit is important. Avoid accumulating excessive demerit points to maintain your driving privileges.',
  },
  {
    id: 'id:question/25',
    question: 'What should you do if you receive a ticket with demerit points?',
    options: [
      {
        id: 'id:option/100',
        text: "Ignore it; it won't affect your record much.",
        isCorrect: false,
      },
      {
        id: 'id:option/101',
        text: 'Pay the fine promptly to avoid points on your record.',
        isCorrect: false,
      },
      {
        id: 'id:option/102',
        text: 'Fight the ticket in court to avoid demerit points.',
        isCorrect: false,
      },
      {
        id: 'id:option/103',
        text: 'Deal with it responsibly, either by paying the fine or contesting it.',
        isCorrect: true,
      },
    ],
    answerDescription:
      'If you receive a ticket with demerit points, deal with it responsibly, either by paying the fine or contesting it. Ignoring it can lead to further consequences.',
    hint: 'Ignoring tickets is not a solution. Address them promptly and appropriately to avoid complications.',
  },
  {
    id: 'id:question/26',
    question: 'What can you do to reduce demerit points on your driving record?',
    options: [
      {
        id: 'id:option/104',
        text: 'Wait for them to expire; they will be automatically removed.',
        isCorrect: false,
      },
      { id: 'id:option/105', text: 'Take a defensive driving course.', isCorrect: true },
      { id: 'id:option/106', text: 'Pay a fine to remove points.', isCorrect: false },
      {
        id: 'id:option/107',
        text: 'Appeal to the Department of Motor Vehicles.',
        isCorrect: false,
      },
    ],
    answerDescription:
      'To reduce demerit points on your driving record, you can take a defensive driving course. Successful completion often results in point reduction.',
    hint: 'Education can help. Defensive driving courses not only enhance your skills but can also reduce demerit points.',
  },
  {
    id: 'id:question/27',
    question: 'What is the purpose of demerit points?',
    options: [
      { id: 'id:option/108', text: 'To increase revenue for the government.', isCorrect: false },
      { id: 'id:option/109', text: 'To penalize drivers for traffic violations.', isCorrect: true },
      { id: 'id:option/110', text: 'To determine insurance premiums.', isCorrect: false },
      {
        id: 'id:option/111',
        text: 'To provide discounts on vehicle registration fees.',
        isCorrect: false,
      },
    ],
    answerDescription:
      'The purpose of demerit points is to penalize drivers for traffic violations, promoting safer driving habits.',
    hint: 'Demerit points are a form of penalty for violating traffic laws. Safe driving helps you avoid accumulating these points.',
  },
  {
    id: 'id:question/28',
    question: 'Can demerit points affect your insurance premiums?',
    options: [
      {
        id: 'id:option/112',
        text: 'Yes, they can lead to higher insurance premiums.',
        isCorrect: true,
      },
      {
        id: 'id:option/113',
        text: 'No, they have no impact on insurance premiums.',
        isCorrect: false,
      },
      { id: 'id:option/114', text: 'Yes, but only for commercial vehicles.', isCorrect: false },
      {
        id: 'id:option/115',
        text: 'No, they are confidential and not disclosed to insurance companies.',
        isCorrect: false,
      },
    ],
    answerDescription:
      'Yes, demerit points can lead to higher insurance premiums as they indicate a higher risk level to insurance companies.',
    hint: 'Insurance companies assess risks, and demerit points can affect your perceived risk level, potentially leading to increased premiums.',
  },
  {
    id: 'id:question/29',
    question:
      'What should you do if you believe a traffic ticket with demerit points was issued unfairly?',
    options: [
      { id: 'id:option/116', text: 'Accept it and pay the fine.', isCorrect: false },
      { id: 'id:option/117', text: 'Ignore it; it will not affect your record.', isCorrect: false },
      { id: 'id:option/118', text: 'Contest it in court.', isCorrect: true },
      { id: 'id:option/119', text: 'Contact your insurance company.', isCorrect: false },
    ],
    answerDescription:
      'If you believe a traffic ticket with demerit points was issued unfairly, you should contest it in court. Legal avenues are available to address such situations.',
    hint: 'Legal recourse exists. If you think a ticket was unjust, explore the appropriate channels to contest it.',
  },
];
