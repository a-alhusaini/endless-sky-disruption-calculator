export default function calculateDisruption(frames, disruptors) {
  let disruption = 12;
  let minDisrupt = 0.12 * disruptors;
  let maxDisrupt = 0.24 * disruptors;

  let i;
  for (i = 0; i < frames; i++) {
    disruption =
      (disruption + (maxDisrupt - minDisrupt / (1 + 0.01 * disruption))) * 0.99;
  }

  console.log(`Disruption after ${i} frames: ${1 / (1 + 0.01 * disruption)}`);
  return 1 / (1 + 0.01 * disruption);
}
