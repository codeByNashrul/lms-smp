import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "../ui/themeToggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-t-2xl shadow-sm">
      
      <div className="flex h-16 items-center px-4 lg:px-6">

        {/* Left */}
        <div className="flex items-center gap-4">
          
          <SidebarTrigger className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-xl transition" />

          <Separator
            orientation="vertical"
            className="h-5 bg-gray-300 dark:bg-gray-700"
          />

          <div className="flex flex-col leading-tight">
            <h1 className="text-lg font-semibold tracking-tight text-gray-800 dark:text-white">
              LMS SMP POMOSDA
            </h1>
          </div>
        </div>

        {/* Right */}
        <div className="ml-auto flex items-center gap-3">

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center text-sm font-semibold shadow-sm">
            A
          </div>

        </div>
      </div>
    </header>
  );
}