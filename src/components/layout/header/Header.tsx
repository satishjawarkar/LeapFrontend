import { SearchBar } from "./SearchBar";
import { HeaderActions } from "./HeaderAction";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">

      <div>
        <h1 className="text-lg font-semibold">
          Dashboard
        </h1>

        <p className="text-sm text-muted-foreground">
          Welcome back, Admin
        </p>
      </div>

      <div className="flex items-center gap-6">
        <SearchBar />

        <HeaderActions />
      </div>

    </header>
  );
}