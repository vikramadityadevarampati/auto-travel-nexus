
import { MapPin, Calendar, Fuel, Settings, Heart, Eye } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  location: string;
  image: string;
  features: string[];
}

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('en-US').format(mileage);
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/80 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/80 hover:bg-white">
            <Eye className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute top-3 left-3">
          <Badge className="bg-green-600 hover:bg-green-700">
            Featured
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {car.year} {car.make} {car.model}
            </h3>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              {car.location}
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">
              {formatPrice(car.price)}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Key Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-t border-gray-100">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Calendar className="h-4 w-4 text-gray-400" />
            </div>
            <div className="text-sm font-medium">{car.year}</div>
            <div className="text-xs text-gray-500">Year</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Settings className="h-4 w-4 text-gray-400" />
            </div>
            <div className="text-sm font-medium">{formatMileage(car.mileage)}</div>
            <div className="text-xs text-gray-500">Miles</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Fuel className="h-4 w-4 text-gray-400" />
            </div>
            <div className="text-sm font-medium">{car.fuelType}</div>
            <div className="text-xs text-gray-500">Fuel</div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {car.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {car.features.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{car.features.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
            View Details
          </Button>
          <Button variant="outline" className="flex-1">
            Request Info
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;
