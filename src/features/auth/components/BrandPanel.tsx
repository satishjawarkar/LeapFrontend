import { Logo } from "../../../components/common/Logo";
import heroImage from "../../../assets/Main_NBCGDC-logo.png";
export function BrandPanel() {
  return (
    <div
      className="
      bg-white/10
      "
    >
      {/* Background Glow */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      {/* <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" /> */}
      {/* <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" /> */}
      <div
        className="
          relative
          z-10
          flex
          ms-10
          h-full
          w-full
          flex-col
          justify-center
          text-center
         
        "
      >
        <img src={heroImage} alt="Leap Logo" />

        {/* ---------------- Footer ---------------- */}
      </div>
    </div>
  );
}
