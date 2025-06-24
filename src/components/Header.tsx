
import { useState } from "react";
import { Car, User, Menu, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<"user" | "admin">("user");

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 rounded-lg p-2">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">CarMarket</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Buy Cars
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Sell Cars
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Finance
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                {userRole === "admin" && (
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add Car
                  </Button>
                )}
                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 rounded-full p-2">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">John Doe</span>
                    {userRole === "admin" && (
                      <Badge variant="secondary" className="text-xs">Admin</Badge>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <Button variant="ghost">Sign In</Button>
                <Button>Get Started</Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">
              Buy Cars
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">
              Sell Cars
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">
              Finance
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">
              About
            </a>
            <div className="border-t pt-4">
              {isLoggedIn ? (
                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 rounded-full p-2">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="font-medium">John Doe</span>
                  {userRole === "admin" && (
                    <Badge variant="secondary" className="text-xs">Admin</Badge>
                  )}
                </div>
              ) : (
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    Sign In
                  </Button>
                  <Button className="w-full">Get Started</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
