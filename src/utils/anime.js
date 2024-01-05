import anime from "animejs";
import { useLanguageStore } from "@/stores/useLanguageStore";

export function animateLanguage(callback) {
  const store = useLanguageStore();

  const worldAnim = anime({
    targets: ".world",
    translateX: store.isLanguage ? [28, 0] : [0, 28],
    easing: "linear",
    duration: 200,
  });
  const languageAnim = anime({
    targets: ".language",
    translateX: store.isLanguage ? [-24, 0] : [0, -24],
    easing: "linear",
    duration: 200,
    complete: callback,
  });

  toggle(worldAnim, languageAnim);
}

function toggle(worldAnim, languageAnim) {
  if (worldAnim.began) {
    worldAnim.reverse();
    languageAnim.reverse();

    if (worldAnim.progress === 100 && worldAnim.direction === "reverse") {
      worldAnim.completed = false;
      languageAnim.completed = false;
    }
  }

  if (worldAnim.paused) {
    worldAnim.play();
    languageAnim.play();
  }
}
