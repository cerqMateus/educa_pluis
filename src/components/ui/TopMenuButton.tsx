import { Button } from "./button";

interface TopMenuButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const TopMenuButton = ({ children, isActive, onClick }: TopMenuButtonProps) => {
  return (
    <div>
      <Button
        variant={"ghost"}
        className={
          isActive ? "text-primary font-bold" : "text-muted-foreground"
        }
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
};

export default TopMenuButton;
