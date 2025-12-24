import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

const TopBar = () => {
  return (
    <div className="w-ful h-24 flex items-center justify-between px-6">
      <div>
        <img
          src="src/assets/logo.png"
          alt="Educa Plus"
          width={150}
          height={50}
        />
      </div>
      <div className="relative w-64">
        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        <Input
          type="search"
          placeholder="Buscar..."
          className="w-full pl-10 rounded-2xl"
        />
      </div>
    </div>
  );
};

export default TopBar;
