import Lottie from "react-lottie-player";
import animation from "../assets/ecomerce.json";

export function LottieAnimation() {
  return (
    <Lottie
      loop
      play
      animationData={animation}
      style={{ width: 340, height: 340 }}
    />
  );
}