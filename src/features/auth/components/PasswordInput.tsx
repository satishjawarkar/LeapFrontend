import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";

type PasswordInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function PasswordInput({
  value,
  onChange,
  placeholder,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <Input
        type={showPassword ? "text" : "password"}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="
          h-12
          w-full
          rounded-xl
          border
          border-slate-300
          bg-white
          pr-12
          text-sm
          transition-all
          focus:border-primary
          focus:ring-2
          focus:ring-primary/20
        "
      />

      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => setShowPassword((prev) => !prev)}
        className="
          absolute
          right-2
          top-1/2
          h-8
          w-8
          -translate-y-1/2
          rounded-lg
          text-muted-foreground
          hover:bg-transparent
          hover:text-foreground
        "
      >
        {showPassword ? (
          <EyeOff className="h-4 w-4" />
        ) : (
          <Eye className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
