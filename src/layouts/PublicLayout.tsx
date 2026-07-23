import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b p-4">Leap</header>

      {/* Page */}
      <main className="container mx-auto py-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t p-4 text-center text-sm">© Leap</footer>
    </div>
  );
}
