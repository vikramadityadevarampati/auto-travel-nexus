
import { useState } from "react";
import { Search, Filter, Car, MapPin, Calendar, Fuel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CarCard from "@/components/CarCard";
import SearchFilters from "@/components/SearchFilters";
import Header from "@/components/Header";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Sample car data
  const cars = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      year: 2020,
      price: 24999,
      mileage: 35000,
      fuelType: "Petrol",
      transmission: "Automatic",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&h=300&fit=crop",
      features: ["Bluetooth", "Backup Camera", "Cruise Control"]
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      year: 2019,
      price: 19999,
      mileage: 42000,
      fuelType: "Petrol",
      transmission: "Manual",
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&fit=crop",
      features: ["Sunroof", "Apple CarPlay", "Lane Assist"]
    },
    {
      id: 3,
      make: "BMW",
      model: "3 Series",
      year: 2021,
      price: 34999,
      mileage: 28000,
      fuelType: "Petrol",
      transmission: "Automatic",
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop",
      features: ["Navigation", "Heated Seats", "Premium Audio"]
    },
    {
      id: 4,
      make: "Tesla",
      model: "Model 3",
      year: 2022,
      price: 42999,
      mileage: 15000,
      fuelType: "Electric",
      transmission: "Automatic",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&h=300&fit=crop",
      features: ["Autopilot", "Supercharging", "Glass Roof"]
    },
    {
      id: 5,
      make: "Ford",
      model: "Mustang",
      year: 2020,
      price: 29999,
      mileage: 38000,
      fuelType: "Petrol",
      transmission: "Manual",
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=500&h=300&fit=crop",
      features: ["Performance Package", "Premium Interior", "Sport Mode"]
    },
    {
      id: 6,
      make: "Audi",
      model: "A4",
      year: 2021,
      price: 38999,
      mileage: 22000,
      fuelType: "Petrol",
      transmission: "Automatic",
      location: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&h=300&fit=crop",
      features: ["Quattro AWD", "Virtual Cockpit", "Bang & Olufsen"]
    }
  ];

  const filteredCars = cars.filter(car =>
    car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Find Your Perfect Car</h1>
          <p className="text-xl mb-8 text-blue-100">
            Discover thousands of quality pre-owned vehicles from trusted dealers
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-2 shadow-xl">
            <div className="flex items-center gap-2">
              <Search className="h-5 w-5 text-gray-400 ml-2" />
              <Input
                placeholder="Search by make, model, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-0 text-gray-900 placeholder-gray-500 flex-1"
              />
              <Button 
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="border-gray-300"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      {showFilters && <SearchFilters />}

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {filteredCars.length} Cars Available
              </h2>
              <p className="text-gray-600 mt-2">
                Find the perfect vehicle for your needs
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Sort by Price
              </Button>
              <Button variant="outline" size="sm">
                Sort by Year
              </Button>
            </div>
          </div>

          {/* Car Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="text-center py-16">
              <Car className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No cars found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">15,000+</div>
              <div className="text-gray-300">Cars Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Trusted Dealers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">50,000+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-gray-300">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
