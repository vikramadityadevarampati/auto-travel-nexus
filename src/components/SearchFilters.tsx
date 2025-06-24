
import { useState } from "react";
import { X, DollarSign, Calendar, Fuel, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

const SearchFilters = () => {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [yearRange, setYearRange] = useState([2015, 2024]);

  const makes = ["Toyota", "Honda", "Ford", "BMW", "Mercedes", "Audi", "Tesla", "Chevrolet"];
  const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid"];
  const transmissions = ["Automatic", "Manual"];

  return (
    <div className="bg-gray-50 border-b">
      <div className="container mx-auto px-4 py-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <CardTitle className="text-lg font-semibold">Filter Your Search</CardTitle>
            <Button variant="ghost" size="sm">
              <X className="h-4 w-4 mr-2" />
              Clear All
            </Button>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Price Range */}
              <div className="space-y-3">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Price Range
                </Label>
                <div className="px-2">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={100000}
                    min={0}
                    step={1000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>${priceRange[0].toLocaleString()}</span>
                    <span>${priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Year Range */}
              <div className="space-y-3">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Year Range
                </Label>
                <div className="px-2">
                  <Slider
                    value={yearRange}
                    onValueChange={setYearRange}
                    max={2024}
                    min={2000}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{yearRange[0]}</span>
                    <span>{yearRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Make */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Make</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select make" />
                  </SelectTrigger>
                  <SelectContent>
                    {makes.map((make) => (
                      <SelectItem key={make} value={make.toLowerCase()}>
                        {make}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Fuel Type */}
              <div className="space-y-3">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <Fuel className="h-4 w-4" />
                  Fuel Type
                </Label>
                <div className="space-y-2">
                  {fuelTypes.map((fuel) => (
                    <div key={fuel} className="flex items-center space-x-2">
                      <Checkbox id={fuel} />
                      <Label htmlFor={fuel} className="text-sm font-normal">
                        {fuel}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transmission */}
              <div className="space-y-3">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Transmission
                </Label>
                <div className="space-y-2">
                  {transmissions.map((transmission) => (
                    <div key={transmission} className="flex items-center space-x-2">
                      <Checkbox id={transmission} />
                      <Label htmlFor={transmission} className="text-sm font-normal">
                        {transmission}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mileage */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Max Mileage</Label>
                <Input
                  type="number"
                  placeholder="e.g., 50000"
                  className="w-full"
                />
              </div>

              {/* Location */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Location</Label>
                <Input
                  type="text"
                  placeholder="City or ZIP code"
                  className="w-full"
                />
              </div>

              {/* Apply Filters Button */}
              <div className="flex items-end">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Apply Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SearchFilters;
