import memoryIcon from "./assets/images/icon-memory.svg";
import reactionIcon from "./assets/images/icon-reaction.svg";
import verbalIcon from "./assets/images/icon-verbal.svg";
import visualIcon from "./assets/images/icon-visual.svg";

export const data = [
  {
    category: "Reaction",
    score: 80,
    icon: reactionIcon,
    color: "hsl(0, 100%, 67%)",
    bgColor: "hsla(0, 100%, 67%,0.1)",
  },
  {
    category: "Memory",
    score: 92,
    icon: memoryIcon,
    color: "hsl(39, 100%, 56%)",
    bgColor: "hsla(39, 100%, 56%,0.1)",
  },
  {
    category: "Verbal",
    score: 61,
    icon: verbalIcon,
    color: "hsl(166, 100%, 37%)",
    bgColor: "hsla(166, 100%, 37%,0.1)",
  },
  {
    category: "Visual",
    score: 72,
    icon: visualIcon,
    color: "hsl(234, 85%, 45%)",
    bgColor: "hsla(234, 85%, 45%,0.1)",
  },
];
