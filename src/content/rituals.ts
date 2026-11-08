// Ritual content library — ported from the original Soma Living (Christie Yoga) site.
// Media/CDN references removed until Soma Stream infrastructure lands.

export type Ritual = {
  id: string;
  title: string;
  minutes: number;
  type: 'breath' | 'yoga' | 'meditation' | 'habit' | 'note';
  tags: string[];
  intensity: 'gentle' | 'steady';
  instructions: string;
};

export type RitualRoutine = {
  id: string;
  title: string;
  description: string;
  modules: string[];
};

export type RitualTemplate = {
  id: string;
  title: string;
  description: string;
  entries: { day: number; slot: string; moduleId: string }[];
};

export const ritualCatalog: Ritual[] = [
  {
    "id": "breath-2min-reset",
    "title": "2-minute breath reset",
    "minutes": 2,
    "type": "breath",
    "tags": [
      "calming",
      "no-mat",
      "quiet",
      "anytime"
    ],
    "intensity": "gentle",
    "instructions": "Inhale for 4, exhale for 6. Slow, easy, and steady."
  },
  {
    "id": "gratitude-3min-note",
    "title": "3-minute gratitude + intention",
    "minutes": 3,
    "type": "note",
    "tags": [
      "grounding",
      "anytime",
      "quiet"
    ],
    "intensity": "gentle",
    "instructions": "Write one thing you appreciate, one thing you need today."
  },
  {
    "id": "warm-water-morning",
    "title": "Warm water + gentle start",
    "minutes": 4,
    "type": "habit",
    "tags": [
      "morning",
      "digestion",
      "no-mat"
    ],
    "intensity": "gentle",
    "instructions": "Sip warm water, pause, and take three calm breaths."
  },
  {
    "id": "neck-shoulders-5min",
    "title": "5-minute neck + shoulders",
    "minutes": 5,
    "type": "yoga",
    "tags": [
      "neck",
      "shoulders",
      "no-mat",
      "quiet"
    ],
    "intensity": "gentle",
    "instructions": "Slow circles, soft stretches, no strain."
  },
  {
    "id": "kid-friendly-breath",
    "title": "3-minute kid-friendly breath",
    "minutes": 3,
    "type": "breath",
    "tags": [
      "kid-friendly",
      "no-mat",
      "anytime"
    ],
    "intensity": "gentle",
    "instructions": "Smell the flower, blow the candle. Repeat slowly."
  },
  {
    "id": "morning-mobility-10",
    "title": "10-minute morning mobility",
    "minutes": 10,
    "type": "yoga",
    "tags": [
      "morning",
      "back",
      "hips"
    ],
    "intensity": "steady",
    "instructions": "Cat-cow, low lunge, gentle twists."
  },
  {
    "id": "spine-shoulders-7",
    "title": "7-minute spine + shoulders",
    "minutes": 7,
    "type": "yoga",
    "tags": [
      "back",
      "shoulders",
      "desk"
    ],
    "intensity": "gentle",
    "instructions": "Move slowly, pause where it feels good."
  },
  {
    "id": "evening-wind-down-12",
    "title": "12-minute calm-down after the day",
    "minutes": 12,
    "type": "meditation",
    "tags": [
      "evening",
      "sleep",
      "quiet"
    ],
    "intensity": "gentle",
    "instructions": "Body scan + soft breath counting."
  },
  {
    "id": "steady-energy-15",
    "title": "15-minute steady energy flow",
    "minutes": 15,
    "type": "yoga",
    "tags": [
      "midday",
      "energy"
    ],
    "intensity": "steady",
    "instructions": "Simple flow, no rush. Keep it easy."
  },
  {
    "id": "focus-5min",
    "title": "5-minute focus reset",
    "minutes": 5,
    "type": "meditation",
    "tags": [
      "midday",
      "focus",
      "quiet"
    ],
    "intensity": "gentle",
    "instructions": "Count 10 breaths, restart if you drift."
  },
  {
    "id": "hips-10",
    "title": "10-minute hips + low back care",
    "minutes": 10,
    "type": "yoga",
    "tags": [
      "hips",
      "back",
      "evening"
    ],
    "intensity": "gentle",
    "instructions": "Long holds, soft edges, no forcing."
  },
  {
    "id": "standing-reset-6",
    "title": "6-minute standing reset",
    "minutes": 6,
    "type": "yoga",
    "tags": [
      "no-mat",
      "anytime",
      "balance"
    ],
    "intensity": "gentle",
    "instructions": "Mountain, side stretch, gentle fold."
  },
  {
    "id": "quiet-sit-8",
    "title": "8-minute quiet sit",
    "minutes": 8,
    "type": "meditation",
    "tags": [
      "quiet",
      "evening",
      "calming"
    ],
    "intensity": "gentle",
    "instructions": "Let the breath be natural. Notice the exhale."
  },
  {
    "id": "vata-grounding-9",
    "title": "9-minute grounding flow",
    "minutes": 9,
    "type": "yoga",
    "tags": [
      "grounding",
      "vata",
      "morning"
    ],
    "intensity": "gentle",
    "instructions": "Slow pace, longer holds, steady breath."
  },
  {
    "id": "pitta-cooling-7",
    "title": "7-minute cooling breath",
    "minutes": 7,
    "type": "breath",
    "tags": [
      "cooling",
      "pitta",
      "midday"
    ],
    "intensity": "gentle",
    "instructions": "Slow exhale focus, soften the jaw."
  },
  {
    "id": "kapha-lift-8",
    "title": "8-minute gentle lift",
    "minutes": 8,
    "type": "yoga",
    "tags": [
      "kapha",
      "energy",
      "morning"
    ],
    "intensity": "steady",
    "instructions": "Simple flow with light effort."
  },
  {
    "id": "sleepy-3",
    "title": "3-minute sleepy eyes",
    "minutes": 3,
    "type": "habit",
    "tags": [
      "sleep",
      "evening",
      "quiet"
    ],
    "intensity": "gentle",
    "instructions": "Warm washcloth on eyes, breathe slowly."
  },
  {
    "id": "journal-5",
    "title": "5-minute gentle journal",
    "minutes": 5,
    "type": "note",
    "tags": [
      "quiet",
      "evening",
      "anytime"
    ],
    "intensity": "gentle",
    "instructions": "One page or five lines — either counts."
  },
  {
    "id": "digestive-walk-10",
    "title": "10-minute digestive walk",
    "minutes": 10,
    "type": "habit",
    "tags": [
      "digestion",
      "after-meal",
      "anytime"
    ],
    "intensity": "gentle",
    "instructions": "Easy pace, nasal breathing if comfortable."
  },
  {
    "id": "box-breath-4",
    "title": "4-minute box breath",
    "minutes": 4,
    "type": "breath",
    "tags": [
      "calming",
      "focus",
      "no-mat"
    ],
    "intensity": "gentle",
    "instructions": "4 in, 4 hold, 4 out, 4 hold."
  },
  {
    "id": "midday-shoulders-6",
    "title": "6-minute desk shoulders reset",
    "minutes": 6,
    "type": "yoga",
    "tags": [
      "desk",
      "shoulders",
      "no-mat"
    ],
    "intensity": "gentle",
    "instructions": "Roll, stretch, and breathe. Keep it soft."
  },
  {
    "id": "kind-to-knees-7",
    "title": "7-minute kind-to-knees flow",
    "minutes": 7,
    "type": "yoga",
    "tags": [
      "knees",
      "gentle",
      "evening"
    ],
    "intensity": "gentle",
    "instructions": "Support with a pillow or folded blanket."
  },
  {
    "id": "tea-pause-5",
    "title": "5-minute tea pause",
    "minutes": 5,
    "type": "habit",
    "tags": [
      "quiet",
      "anytime",
      "calming"
    ],
    "intensity": "gentle",
    "instructions": "Make tea, sit, sip slowly."
  },
  {
    "id": "flow-sun-a-7",
    "title": "7-minute Sun Salutation A (easy pace)",
    "minutes": 7,
    "type": "yoga",
    "tags": [
      "morning",
      "energy",
      "classic",
      "mat"
    ],
    "intensity": "steady",
    "instructions": "Skip anything that doesn’t feel good today. Modify freely."
  },
  {
    "id": "sunlight-2",
    "title": "2-minute sunlight reset",
    "minutes": 2,
    "type": "habit",
    "tags": [
      "morning",
      "anytime",
      "energy"
    ],
    "intensity": "gentle",
    "instructions": "Step outside, face the light, breathe."
  },
  {
    "id": "breath-5min-slow",
    "title": "5-minute slow exhale",
    "minutes": 5,
    "type": "breath",
    "tags": [
      "calming",
      "sleep",
      "quiet"
    ],
    "intensity": "gentle",
    "instructions": "Exhale a little longer than you inhale."
  }
];

export const ritualRoutines: RitualRoutine[] = [
  {
    "id": "morning-gentle-12",
    "title": "12-min Gentle Morning",
    "description": "A soft start: breath, mobility, and steadiness.",
    "modules": [
      "breath-2min-reset",
      "morning-mobility-10"
    ]
  },
  {
    "id": "evening-winddown-15",
    "title": "15-min Wind-Down",
    "description": "Ease the nervous system before sleep.",
    "modules": [
      "breath-5min-slow",
      "evening-wind-down-12"
    ]
  },
  {
    "id": "midday-reset-10",
    "title": "10-min Midday Reset",
    "description": "Simple energy and focus without overdoing it.",
    "modules": [
      "focus-5min",
      "standing-reset-6"
    ]
  },
  {
    "id": "grounding-9",
    "title": "9-min Grounding",
    "description": "Slow pace, steady breath, calm attention.",
    "modules": [
      "vata-grounding-9",
      "gratitude-3min-note"
    ]
  }
];

export const ritualTemplates: RitualTemplate[] = [
  {
    "id": "busy-week",
    "title": "Busy Week",
    "description": "Short rituals across the week. Minimal time, steady care.",
    "entries": [
      {
        "day": 1,
        "slot": "morning",
        "moduleId": "breath-2min-reset"
      },
      {
        "day": 2,
        "slot": "morning",
        "moduleId": "sunlight-2"
      },
      {
        "day": 3,
        "slot": "morning",
        "moduleId": "warm-water-morning"
      },
      {
        "day": 4,
        "slot": "morning",
        "moduleId": "box-breath-4"
      },
      {
        "day": 5,
        "slot": "morning",
        "moduleId": "breath-2min-reset"
      },
      {
        "day": 1,
        "slot": "evening",
        "moduleId": "journal-5"
      },
      {
        "day": 3,
        "slot": "evening",
        "moduleId": "breath-5min-slow"
      },
      {
        "day": 5,
        "slot": "evening",
        "moduleId": "quiet-sit-8"
      }
    ]
  },
  {
    "id": "gentle-reset",
    "title": "Gentle Reset",
    "description": "Longer, softer practices for a calmer week.",
    "entries": [
      {
        "day": 0,
        "slot": "morning",
        "moduleId": "vata-grounding-9"
      },
      {
        "day": 2,
        "slot": "morning",
        "moduleId": "morning-mobility-10"
      },
      {
        "day": 4,
        "slot": "morning",
        "moduleId": "spine-shoulders-7"
      },
      {
        "day": 0,
        "slot": "evening",
        "moduleId": "evening-wind-down-12"
      },
      {
        "day": 3,
        "slot": "evening",
        "moduleId": "hips-10"
      },
      {
        "day": 6,
        "slot": "evening",
        "moduleId": "quiet-sit-8"
      },
      {
        "day": 6,
        "slot": "flex",
        "moduleId": "tea-pause-5"
      }
    ]
  },
  {
    "id": "evenings-only",
    "title": "Evenings Only",
    "description": "A simple wind-down ritual for each night.",
    "entries": [
      {
        "day": 0,
        "slot": "evening",
        "moduleId": "evening-wind-down-12"
      },
      {
        "day": 1,
        "slot": "evening",
        "moduleId": "breath-5min-slow"
      },
      {
        "day": 2,
        "slot": "evening",
        "moduleId": "quiet-sit-8"
      },
      {
        "day": 3,
        "slot": "evening",
        "moduleId": "hips-10"
      },
      {
        "day": 4,
        "slot": "evening",
        "moduleId": "journal-5"
      },
      {
        "day": 5,
        "slot": "evening",
        "moduleId": "sleepy-3"
      },
      {
        "day": 6,
        "slot": "evening",
        "moduleId": "kind-to-knees-7"
      }
    ]
  }
];
