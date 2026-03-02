import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Checkbox } from "../components/ui/checkbox";
import { Plus, X } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";

interface Vehicle {
  id: string;
  startDate: string;
  brand: string;
  year: string;
  engineSize: string;
  licenseYear: string;
  value: string;
  youngDriver: string;
  additionalCoverages: string[];
}

interface Property {
  id: string;
  type: string;
  area: string;
  construction: string;
  yearBuilt: string;
  owned: string;
  earthquakeCoverage: string;
  insuranceFor: string;
}

export function PropertyFormPage() {
  const { t } = useLanguage();
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [insuranceType, setInsuranceType] = useState("");
  
  // Vehicle Insurance
  const [vehicles, setVehicles] = useState<Vehicle[]>([{
    id: Date.now().toString(),
    startDate: "",
    brand: "",
    year: "",
    engineSize: "",
    licenseYear: "",
    value: "",
    youngDriver: "",
    additionalCoverages: []
  }]);

  // Home Insurance
  const [properties, setProperties] = useState<Property[]>([{
    id: Date.now().toString(),
    type: "",
    area: "",
    construction: "",
    yearBuilt: "",
    owned: "",
    earthquakeCoverage: "",
    insuranceFor: ""
  }]);

  // Business Insurance
  const [businessType, setBusinessType] = useState("");
  const [businessArea, setBusinessArea] = useState("");
  const [businessYearBuilt, setBusinessYearBuilt] = useState("");
  const [businessLocation, setBusinessLocation] = useState("");
  const [numberOfEmployees, setNumberOfEmployees] = useState("");
  const [buildingValue, setBuildingValue] = useState("");
  const [contentsValue, setContentsValue] = useState("");
  const [businessCoverages, setBusinessCoverages] = useState<string[]>([]);
  const [wantsStaffInsurance, setWantsStaffInsurance] = useState("");

  // Boat Insurance
  const [boatUsage, setBoatUsage] = useState("");
  const [hasProfessionalCrew, setHasProfessionalCrew] = useState("");
  const [boatLength, setBoatLength] = useState("");
  const [boatAge, setBoatAge] = useState("");

  // Contact Details
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consentGiven, setConsentGiven] = useState(false);

  const addVehicle = () => {
    setVehicles([
      ...vehicles,
      {
        id: Date.now().toString(),
        startDate: "",
        brand: "",
        year: "",
        engineSize: "",
        licenseYear: "",
        value: "",
        youngDriver: "",
        additionalCoverages: []
      }
    ]);
  };

  const removeVehicle = (id: string) => {
    if (vehicles.length > 1) {
      setVehicles(vehicles.filter(v => v.id !== id));
    }
  };

  const updateVehicle = (id: string, field: string, value: string) => {
    setVehicles(vehicles.map(v => 
      v.id === id ? { ...v, [field]: value } : v
    ));
  };

  const toggleVehicleCoverage = (vehicleId: string, coverage: string) => {
    setVehicles(vehicles.map(v => {
      if (v.id === vehicleId) {
        const coverages = v.additionalCoverages.includes(coverage)
          ? v.additionalCoverages.filter(c => c !== coverage)
          : [...v.additionalCoverages, coverage];
        return { ...v, additionalCoverages: coverages };
      }
      return v;
    }));
  };

  const addProperty = () => {
    setProperties([
      ...properties,
      {
        id: Date.now().toString(),
        type: "",
        area: "",
        construction: "",
        yearBuilt: "",
        owned: "",
        earthquakeCoverage: "",
        insuranceFor: ""
      }
    ]);
  };

  const removeProperty = (id: string) => {
    if (properties.length > 1) {
      setProperties(properties.filter(p => p.id !== id));
    }
  };

  const updateProperty = (id: string, field: string, value: string) => {
    setProperties(properties.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ));
  };

  const toggleBusinessCoverage = (coverage: string) => {
    if (businessCoverages.includes(coverage)) {
      setBusinessCoverages(businessCoverages.filter(c => c !== coverage));
    } else {
      setBusinessCoverages([...businessCoverages, coverage]);
    }
  };

  const isVehicleValid = (vehicle: Vehicle) => {
    return vehicle.startDate && vehicle.brand && vehicle.year && 
           vehicle.engineSize && vehicle.licenseYear && vehicle.value && vehicle.youngDriver;
  };

  const isPropertyValid = (property: Property) => {
    return property.type && property.area && property.construction && 
           property.yearBuilt && property.owned && property.earthquakeCoverage && property.insuranceFor;
  };

  const canSubmit = () => {
    if (!insuranceType || !fullName || !phone || !email || !consentGiven) {
      return false;
    }

    if (insuranceType === "vehicle") {
      return vehicles.every(v => isVehicleValid(v));
    } else if (insuranceType === "home") {
      return properties.every(p => isPropertyValid(p));
    } else if (insuranceType === "business") {
      return businessType && businessArea && businessYearBuilt && 
             businessLocation && numberOfEmployees && buildingValue && 
             contentsValue && wantsStaffInsurance;
    } else if (insuranceType === "boat") {
      return boatUsage && hasProfessionalCrew && boatLength && boatAge;
    }

    return false;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);
    
    if (!canSubmit()) {
      return;
    }
    
    let specificData = {};
    
    if (insuranceType === "vehicle") {
      specificData = { vehicles };
    } else if (insuranceType === "home") {
      specificData = { properties };
    } else if (insuranceType === "business") {
      specificData = {
        businessType,
        businessArea,
        businessYearBuilt,
        businessLocation,
        numberOfEmployees,
        buildingValue,
        contentsValue,
        businessCoverages,
        wantsStaffInsurance
      };
    } else if (insuranceType === "boat") {
      specificData = {
        boatUsage,
        hasProfessionalCrew,
        boatLength,
        boatAge
      };
    }

    const formData = {
      insuranceType,
      ...specificData,
      contact: {
        fullName,
        phone,
        email
      }
    };

    console.log("Form submitted to info@valore.com:", formData);
    
    const message = t.propertyFormPage.successMessage
      .replace("{name}", fullName)
      .replace("{email}", email);
    
    alert(message);
  };

  const vehicleCoveragesList = [
    { id: "roadAssistance", label: t.propertyFormPage.vehicleSection.roadAssistance },
    { id: "legalProtection", label: t.propertyFormPage.vehicleSection.legalProtection },
    { id: "replacementVehicle", label: t.propertyFormPage.vehicleSection.replacementVehicle }
  ];

  const businessCoveragesList = [
    { id: "fire", label: t.propertyFormPage.businessSection.fire },
    { id: "waterDamage", label: t.propertyFormPage.businessSection.waterDamage },
    { id: "theft", label: t.propertyFormPage.businessSection.theft },
    { id: "glassBreakage", label: t.propertyFormPage.businessSection.glassBreakage },
    { id: "electricalDamage", label: t.propertyFormPage.businessSection.electricalDamage },
    { id: "liability", label: t.propertyFormPage.businessSection.liability },
    { id: "businessInterruption", label: t.propertyFormPage.businessSection.businessInterruption }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-[#52a447] mb-8">
            {t.propertyFormPage.title}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Insurance Type Selection */}
            <div>
              <Label className="text-lg">{t.propertyFormPage.insuranceType} *</Label>
              <div className={`mt-4 space-y-3 rounded-lg p-4 ${attemptedSubmit && !insuranceType ? 'border-red-500 border-2 bg-red-50' : 'border bg-gray-50'}`}>
                <RadioGroup value={insuranceType} onValueChange={setInsuranceType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="vehicle" id="type-vehicle" />
                    <Label htmlFor="type-vehicle" className="cursor-pointer">{t.propertyFormPage.vehicle}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="home" id="type-home" />
                    <Label htmlFor="type-home" className="cursor-pointer">{t.propertyFormPage.home}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="business" id="type-business" />
                    <Label htmlFor="type-business" className="cursor-pointer">{t.propertyFormPage.business}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="boat" id="type-boat" />
                    <Label htmlFor="type-boat" className="cursor-pointer">{t.propertyFormPage.boat}</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Vehicle Insurance Form */}
            {insuranceType === "vehicle" && (
              <div className="border-t pt-8">
                <h2 className="text-gray-900 mb-6">{t.propertyFormPage.vehicleSection.title}</h2>
                
                {vehicles.map((vehicle, index) => (
                  <div key={vehicle.id} className="border rounded-lg p-6 mb-6 bg-gray-50">
                    <div className="flex justify-between items-center mb-4">
                      <h3>{t.propertyFormPage.vehicleSection.vehicleNumber} {index + 1}</h3>
                      {vehicles.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeVehicle(vehicle.id)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`startDate-${vehicle.id}`}>{t.propertyFormPage.vehicleSection.startDate} *</Label>
                        <Input
                          id={`startDate-${vehicle.id}`}
                          type="date"
                          value={vehicle.startDate}
                          onChange={(e) => updateVehicle(vehicle.id, 'startDate', e.target.value)}
                          className={`mt-1 ${attemptedSubmit && !vehicle.startDate ? 'border-red-500 border-2' : ''}`}
                        />
                      </div>

                      <div>
                        <Label htmlFor={`brand-${vehicle.id}`}>{t.propertyFormPage.vehicleSection.brand} *</Label>
                        <Input
                          id={`brand-${vehicle.id}`}
                          type="text"
                          value={vehicle.brand}
                          onChange={(e) => updateVehicle(vehicle.id, 'brand', e.target.value)}
                          className={`mt-1 ${attemptedSubmit && !vehicle.brand ? 'border-red-500 border-2' : ''}`}
                        />
                      </div>

                      <div>
                        <Label htmlFor={`year-${vehicle.id}`}>{t.propertyFormPage.vehicleSection.year} *</Label>
                        <Input
                          id={`year-${vehicle.id}`}
                          type="text"
                          value={vehicle.year}
                          onChange={(e) => updateVehicle(vehicle.id, 'year', e.target.value)}
                          className={`mt-1 ${attemptedSubmit && !vehicle.year ? 'border-red-500 border-2' : ''}`}
                        />
                      </div>

                      <div>
                        <Label htmlFor={`engineSize-${vehicle.id}`}>{t.propertyFormPage.vehicleSection.engineSize} *</Label>
                        <Input
                          id={`engineSize-${vehicle.id}`}
                          type="text"
                          value={vehicle.engineSize}
                          onChange={(e) => updateVehicle(vehicle.id, 'engineSize', e.target.value)}
                          className={`mt-1 ${attemptedSubmit && !vehicle.engineSize ? 'border-red-500 border-2' : ''}`}
                        />
                      </div>

                      <div>
                        <Label htmlFor={`licenseYear-${vehicle.id}`}>{t.propertyFormPage.vehicleSection.licenseYear} *</Label>
                        <Input
                          id={`licenseYear-${vehicle.id}`}
                          type="text"
                          value={vehicle.licenseYear}
                          onChange={(e) => updateVehicle(vehicle.id, 'licenseYear', e.target.value)}
                          className={`mt-1 ${attemptedSubmit && !vehicle.licenseYear ? 'border-red-500 border-2' : ''}`}
                        />
                      </div>

                      <div>
                        <Label htmlFor={`value-${vehicle.id}`}>{t.propertyFormPage.vehicleSection.value} *</Label>
                        <Input
                          id={`value-${vehicle.id}`}
                          type="text"
                          value={vehicle.value}
                          onChange={(e) => updateVehicle(vehicle.id, 'value', e.target.value)}
                          className={`mt-1 ${attemptedSubmit && !vehicle.value ? 'border-red-500 border-2' : ''}`}
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <Label>{t.propertyFormPage.vehicleSection.youngDriver} *</Label>
                      <div className={`mt-2 rounded-md p-2 ${attemptedSubmit && !vehicle.youngDriver ? 'border-red-500 border-2' : ''}`}>
                        <RadioGroup 
                          value={vehicle.youngDriver} 
                          onValueChange={(value) => updateVehicle(vehicle.id, 'youngDriver', value)}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id={`youngDriver-yes-${vehicle.id}`} />
                            <Label htmlFor={`youngDriver-yes-${vehicle.id}`} className="cursor-pointer">{t.propertyFormPage.vehicleSection.yes}</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id={`youngDriver-no-${vehicle.id}`} />
                            <Label htmlFor={`youngDriver-no-${vehicle.id}`} className="cursor-pointer">{t.propertyFormPage.vehicleSection.no}</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="mt-4">
                      <Label>{t.propertyFormPage.vehicleSection.additionalCoverages}</Label>
                      <div className="space-y-2 mt-2">
                        {vehicleCoveragesList.map((coverage) => (
                          <div key={coverage.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={`${coverage.id}-${vehicle.id}`}
                              checked={vehicle.additionalCoverages.includes(coverage.id)}
                              onCheckedChange={() => toggleVehicleCoverage(vehicle.id, coverage.id)}
                            />
                            <Label htmlFor={`${coverage.id}-${vehicle.id}`} className="cursor-pointer">{coverage.label}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  onClick={addVehicle}
                  className="w-full border-dashed"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  {t.propertyFormPage.vehicleSection.addVehicle}
                </Button>
              </div>
            )}

            {/* Home Insurance Form */}
            {insuranceType === "home" && (
              <div className="border-t pt-8">
                <h2 className="text-gray-900 mb-6">{t.propertyFormPage.homeSection.title}</h2>
                
                {properties.map((property, index) => (
                  <div key={property.id} className="border rounded-lg p-6 mb-6 bg-gray-50">
                    <div className="flex justify-between items-center mb-4">
                      <h3>{t.propertyFormPage.homeSection.propertyNumber} {index + 1}</h3>
                      {properties.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeProperty(property.id)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label>{t.propertyFormPage.homeSection.type} *</Label>
                        <div className={`mt-2 rounded-md p-2 ${attemptedSubmit && !property.type ? 'border-red-500 border-2' : ''}`}>
                          <RadioGroup 
                            value={property.type} 
                            onValueChange={(value) => updateProperty(property.id, 'type', value)}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="apartment" id={`type-apartment-${property.id}`} />
                              <Label htmlFor={`type-apartment-${property.id}`} className="cursor-pointer">{t.propertyFormPage.homeSection.apartment}</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="house" id={`type-house-${property.id}`} />
                              <Label htmlFor={`type-house-${property.id}`} className="cursor-pointer">{t.propertyFormPage.homeSection.house}</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor={`area-${property.id}`}>{t.propertyFormPage.homeSection.area} *</Label>
                        <Input
                          id={`area-${property.id}`}
                          type="text"
                          value={property.area}
                          onChange={(e) => updateProperty(property.id, 'area', e.target.value)}
                          className={`mt-1 ${attemptedSubmit && !property.area ? 'border-red-500 border-2' : ''}`}
                        />
                      </div>

                      <div>
                        <Label>{t.propertyFormPage.homeSection.construction} *</Label>
                        <div className={`mt-2 rounded-md p-2 ${attemptedSubmit && !property.construction ? 'border-red-500 border-2' : ''}`}>
                          <RadioGroup 
                            value={property.construction} 
                            onValueChange={(value) => updateProperty(property.id, 'construction', value)}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="concrete" id={`construction-concrete-${property.id}`} />
                              <Label htmlFor={`construction-concrete-${property.id}`} className="cursor-pointer">{t.propertyFormPage.homeSection.concrete}</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="mixed" id={`construction-mixed-${property.id}`} />
                              <Label htmlFor={`construction-mixed-${property.id}`} className="cursor-pointer">{t.propertyFormPage.homeSection.mixed}</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="stone" id={`construction-stone-${property.id}`} />
                              <Label htmlFor={`construction-stone-${property.id}`} className="cursor-pointer">{t.propertyFormPage.homeSection.stone}</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor={`yearBuilt-${property.id}`}>{t.propertyFormPage.homeSection.yearBuilt} *</Label>
                        <Input
                          id={`yearBuilt-${property.id}`}
                          type="text"
                          value={property.yearBuilt}
                          onChange={(e) => updateProperty(property.id, 'yearBuilt', e.target.value)}
                          className={`mt-1 ${attemptedSubmit && !property.yearBuilt ? 'border-red-500 border-2' : ''}`}
                        />
                      </div>

                      <div>
                        <Label>{t.propertyFormPage.homeSection.owned} *</Label>
                        <div className={`mt-2 rounded-md p-2 ${attemptedSubmit && !property.owned ? 'border-red-500 border-2' : ''}`}>
                          <RadioGroup 
                            value={property.owned} 
                            onValueChange={(value) => updateProperty(property.id, 'owned', value)}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id={`owned-yes-${property.id}`} />
                              <Label htmlFor={`owned-yes-${property.id}`} className="cursor-pointer">{t.propertyFormPage.homeSection.yes}</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id={`owned-no-${property.id}`} />
                              <Label htmlFor={`owned-no-${property.id}`} className="cursor-pointer">{t.propertyFormPage.homeSection.no}</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>

                      <div>
                        <Label>{t.propertyFormPage.homeSection.earthquakeCoverage} *</Label>
                        <div className={`mt-2 rounded-md p-2 ${attemptedSubmit && !property.earthquakeCoverage ? 'border-red-500 border-2' : ''}`}>
                          <RadioGroup 
                            value={property.earthquakeCoverage} 
                            onValueChange={(value) => updateProperty(property.id, 'earthquakeCoverage', value)}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id={`earthquake-yes-${property.id}`} />
                              <Label htmlFor={`earthquake-yes-${property.id}`} className="cursor-pointer">{t.propertyFormPage.homeSection.yes}</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id={`earthquake-no-${property.id}`} />
                              <Label htmlFor={`earthquake-no-${property.id}`} className="cursor-pointer">{t.propertyFormPage.homeSection.yes}</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>

                      <div>
                        <Label>{t.propertyFormPage.homeSection.insuranceFor} *</Label>
                        <div className={`mt-2 rounded-md p-2 ${attemptedSubmit && !property.insuranceFor ? 'border-red-500 border-2' : ''}`}>
                          <RadioGroup 
                            value={property.insuranceFor} 
                            onValueChange={(value) => updateProperty(property.id, 'insuranceFor', value)}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="building" id={`insuranceFor-building-${property.id}`} />
                              <Label htmlFor={`insuranceFor-building-${property.id}`} className="cursor-pointer">{t.propertyFormPage.homeSection.building}</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="contents" id={`insuranceFor-contents-${property.id}`} />
                              <Label htmlFor={`insuranceFor-contents-${property.id}`} className="cursor-pointer">{t.propertyFormPage.homeSection.contents}</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="both" id={`insuranceFor-both-${property.id}`} />
                              <Label htmlFor={`insuranceFor-both-${property.id}`} className="cursor-pointer">{t.propertyFormPage.homeSection.both}</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  onClick={addProperty}
                  className="w-full border-dashed"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  {t.propertyFormPage.homeSection.addProperty}
                </Button>
              </div>
            )}

            {/* Business Insurance Form */}
            {insuranceType === "business" && (
              <div className="border-t pt-8">
                <h2 className="text-gray-900 mb-6">{t.propertyFormPage.businessSection.title}</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="businessType">{t.propertyFormPage.businessSection.businessType} *</Label>
                    <Input
                      id="businessType"
                      type="text"
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className={`mt-1 ${attemptedSubmit && !businessType ? 'border-red-500 border-2' : ''}`}
                    />
                  </div>

                  <div>
                    <Label htmlFor="businessArea">{t.propertyFormPage.businessSection.area} *</Label>
                    <Input
                      id="businessArea"
                      type="text"
                      value={businessArea}
                      onChange={(e) => setBusinessArea(e.target.value)}
                      className={`mt-1 ${attemptedSubmit && !businessArea ? 'border-red-500 border-2' : ''}`}
                    />
                  </div>

                  <div>
                    <Label htmlFor="businessYearBuilt">{t.propertyFormPage.businessSection.yearBuilt} *</Label>
                    <Input
                      id="businessYearBuilt"
                      type="text"
                      value={businessYearBuilt}
                      onChange={(e) => setBusinessYearBuilt(e.target.value)}
                      className={`mt-1 ${attemptedSubmit && !businessYearBuilt ? 'border-red-500 border-2' : ''}`}
                    />
                  </div>

                  <div>
                    <Label htmlFor="businessLocation">{t.propertyFormPage.businessSection.location} *</Label>
                    <Input
                      id="businessLocation"
                      type="text"
                      value={businessLocation}
                      onChange={(e) => setBusinessLocation(e.target.value)}
                      className={`mt-1 ${attemptedSubmit && !businessLocation ? 'border-red-500 border-2' : ''}`}
                    />
                  </div>

                  <div>
                    <Label htmlFor="numberOfEmployees">{t.propertyFormPage.businessSection.numberOfEmployees} *</Label>
                    <Input
                      id="numberOfEmployees"
                      type="text"
                      value={numberOfEmployees}
                      onChange={(e) => setNumberOfEmployees(e.target.value)}
                      className={`mt-1 ${attemptedSubmit && !numberOfEmployees ? 'border-red-500 border-2' : ''}`}
                    />
                  </div>

                  <div>
                    <Label htmlFor="buildingValue">{t.propertyFormPage.businessSection.buildingValue} *</Label>
                    <Input
                      id="buildingValue"
                      type="text"
                      value={buildingValue}
                      onChange={(e) => setBuildingValue(e.target.value)}
                      className={`mt-1 ${attemptedSubmit && !buildingValue ? 'border-red-500 border-2' : ''}`}
                    />
                  </div>

                  <div>
                    <Label htmlFor="contentsValue">{t.propertyFormPage.businessSection.contentsValue} *</Label>
                    <Input
                      id="contentsValue"
                      type="text"
                      value={contentsValue}
                      onChange={(e) => setContentsValue(e.target.value)}
                      className={`mt-1 ${attemptedSubmit && !contentsValue ? 'border-red-500 border-2' : ''}`}
                    />
                  </div>

                  <div>
                    <Label>{t.propertyFormPage.businessSection.coverages}</Label>
                    <div className="space-y-2 mt-2">
                      {businessCoveragesList.map((coverage) => (
                        <div key={coverage.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={coverage.id}
                            checked={businessCoverages.includes(coverage.id)}
                            onCheckedChange={() => toggleBusinessCoverage(coverage.id)}
                          />
                          <Label htmlFor={coverage.id} className="cursor-pointer">{coverage.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>{t.propertyFormPage.businessSection.wantsStaffInsurance} *</Label>
                    <div className={`mt-2 rounded-md p-2 ${attemptedSubmit && !wantsStaffInsurance ? 'border-red-500 border-2' : ''}`}>
                      <RadioGroup value={wantsStaffInsurance} onValueChange={setWantsStaffInsurance}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="staff-yes" />
                          <Label htmlFor="staff-yes" className="cursor-pointer">{t.propertyFormPage.businessSection.yes}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="staff-no" />
                          <Label htmlFor="staff-no" className="cursor-pointer">{t.propertyFormPage.businessSection.no}</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Boat Insurance Form */}
            {insuranceType === "boat" && (
              <div className="border-t pt-8">
                <h2 className="text-gray-900 mb-6">{t.propertyFormPage.boatSection.title}</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label>{t.propertyFormPage.boatSection.usage} *</Label>
                    <div className={`mt-2 rounded-md p-2 ${attemptedSubmit && !boatUsage ? 'border-red-500 border-2' : ''}`}>
                      <RadioGroup value={boatUsage} onValueChange={setBoatUsage}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="private" id="usage-private" />
                          <Label htmlFor="usage-private" className="cursor-pointer">{t.propertyFormPage.boatSection.private}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="commercial" id="usage-commercial" />
                          <Label htmlFor="usage-commercial" className="cursor-pointer">{t.propertyFormPage.boatSection.commercial}</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <div>
                    <Label>{t.propertyFormPage.boatSection.hasProfessionalCrew} *</Label>
                    <div className={`mt-2 rounded-md p-2 ${attemptedSubmit && !hasProfessionalCrew ? 'border-red-500 border-2' : ''}`}>
                      <RadioGroup value={hasProfessionalCrew} onValueChange={setHasProfessionalCrew}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="crew-yes" />
                          <Label htmlFor="crew-yes" className="cursor-pointer">{t.propertyFormPage.boatSection.yes}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="crew-no" />
                          <Label htmlFor="crew-no" className="cursor-pointer">{t.propertyFormPage.boatSection.no}</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="boatLength">{t.propertyFormPage.boatSection.length} *</Label>
                    <Input
                      id="boatLength"
                      type="text"
                      value={boatLength}
                      onChange={(e) => setBoatLength(e.target.value)}
                      className={`mt-1 ${attemptedSubmit && !boatLength ? 'border-red-500 border-2' : ''}`}
                    />
                  </div>

                  <div>
                    <Label htmlFor="boatAge">{t.propertyFormPage.boatSection.age} *</Label>
                    <Input
                      id="boatAge"
                      type="text"
                      value={boatAge}
                      onChange={(e) => setBoatAge(e.target.value)}
                      className={`mt-1 ${attemptedSubmit && !boatAge ? 'border-red-500 border-2' : ''}`}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Contact Details */}
            {insuranceType && (
              <div className="border-t pt-8">
                <h2 className="text-gray-900 mb-6">{t.propertyFormPage.contactSection.title}</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">{t.propertyFormPage.contactSection.fullName} *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`mt-1 ${attemptedSubmit && !fullName ? 'border-red-500 border-2' : ''}`}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">{t.propertyFormPage.contactSection.phone} *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`mt-1 ${attemptedSubmit && !phone ? 'border-red-500 border-2' : ''}`}
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">{t.propertyFormPage.contactSection.email} *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`mt-1 ${attemptedSubmit && !email ? 'border-red-500 border-2' : ''}`}
                    />
                  </div>

                  <div className={`flex items-start space-x-2 rounded-lg p-4 ${attemptedSubmit && !consentGiven ? 'border-red-500 border-2 bg-red-50' : 'border bg-gray-50'}`}>
                    <Checkbox
                      id="consent"
                      checked={consentGiven}
                      onCheckedChange={(checked) => setConsentGiven(checked as boolean)}
                    />
                    <Label htmlFor="consent" className="cursor-pointer leading-relaxed">
                      {t.propertyFormPage.contactSection.consent}
                    </Label>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    type="submit"
                    className="w-full bg-[#52a447] hover:bg-[#458a3b]"
                  >
                    {t.propertyFormPage.submit}
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
