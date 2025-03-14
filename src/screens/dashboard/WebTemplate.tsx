import HomeIcon from "../../assets/svg/home.svg"
import CardIcon from "../../assets/svg/creditcard.svg"
import UserIcon from "../../assets/svg/profile.svg"

const WebTemplate = () => {
  return (
    <ThreeColumnLayout />
  )
}

export default WebTemplate

interface NavLinkProps {
  href: string;
  label: string;
  icon?: string;
}
const NavLink: React.FC<NavLinkProps> = ({ href, label, icon }) => (
  <a href={href} className="flex flex-col sm:justify-center lg:justify-start lg:flex-row gap-1.5 lg:gap-2.5 items-center px-2 py-2.5 hover:text-[#6D28D9] bg-amber-200 lg:mt-2">
    <div className="w-6 h-6 rounded">
      <img src={icon} alt="" className="w-full h-full object-cover" />
    </div>
    <div className="text-[#22183C] text-[14.5px]">{label}</div>
  </a>
);

const Nav: React.FC = () => (
  <nav className="flex justify-between lg:justify-start lg:flex-col fixed bottom-0 left-0 right-0 lg:static lg:h-[100vh] bg-purple-300 flex-2 !p-3">
    <NavLink href="" label="Home" icon={HomeIcon} />
    <NavLink href="" label="Cards" icon={CardIcon} />
    <NavLink href="" label="Profile" icon={UserIcon} />
  </nav>
);

const ThreeColumnLayout = () => {
  return (
    <div className="lg:flex h-screen bg-[#EFE4FC]">
      <Nav />
      <div className="bg-red-300 flex-6 !p-3">
        <div className="bg-pink-600 rounded-[.625rem] !p-3 min-h-96 h-full"></div>
      </div>
      <div className="bg-green-300 flex-3 !pb-40 lg:!pb-0">
        <div className="!p-3 flex flex-col gap-4">
          TRANSACTIONS
          <div className="h-60 bg-red-700 rounded-[.625rem]"></div>
          <div className="h-30 bg-red-400 rounded-[.625rem]"></div>
        </div>
      </div>
    </div>
  );
};
