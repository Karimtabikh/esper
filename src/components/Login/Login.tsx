import Logo from "../../assets/esper_logo.png";

export default function Login() {
  return (
    <>
      <div className="grid grid-cols-2 h-screen">
        <div className="p-[31px]">
          <div className="image flex justify-center">
            <img src={Logo} />
          </div>
        </div>
        <div className="bg-[#136BA9] relative overflow-hidden flex flex-col items-center justify-center gap-[67px]">
          <div className="absolute top-[-89px] right-[-120px] bg-[#cfd8dc57] w-[366px] h-[366px] rounded-full"></div>
          <div className="text-white text-[40px] leading-[60px]">Bienvenue</div>
          <div className="text-white text-center text-[18px] leading-[27px] w-[535px]">
            Connectez-vous pour gérer vos projets, suivre les dons et avoir un
            impact positif sur vos initiatives.
          </div>
          <button className="border rounded-lg p-[10px] w-[173px] text-[18px] leading-[27px] text-white">
            S'inscrire
          </button>
          <div className="absolute bottom-[-82px] left-[-82px] bg-[#cfd8dc57] w-[366px] h-[366px] rounded-full"></div>
        </div>
      </div>
    </>
  );
}
