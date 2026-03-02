import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { Textarea } from "../components/ui/textarea";
import { ChevronRight, ChevronLeft, Plus, X } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";

interface FamilyMember {
  id: string;
  dateOfBirth: string;
  gender: string;
  relationship: string;
}

export function HealthFormPage() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [attemptedNext, setAttemptedNext] = useState(false);
  
  // Page 1 - Personal Details
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [hasPublicInsurance, setHasPublicInsurance] = useState("");
  const [hasPrivateInsurance, setHasPrivateInsurance] = useState("");
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);

  // Page 2 - Health Needs
  const [coverageType, setCoverageType] = useState("");
  const [participationAmount, setParticipationAmount] = useState("");
  const [roomType, setRoomType] = useState("");
  const [hospitalPreference, setHospitalPreference] = useState("");
  const [abroadCoverage, setAbroadCoverage] = useState("");
  const [monthlyCost, setMonthlyCost] = useState("");
  const [selectedCoverages, setSelectedCoverages] = useState<string[]>([]);
  const [otherConcerns, setOtherConcerns] = useState("");

  // Page 3 - Contact Details
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consentGiven, setConsentGiven] = useState(false);

  const addFamilyMember = () => {
    setFamilyMembers([
      ...familyMembers,
      {
        id: Date.now().toString(),
        dateOfBirth: "",
        gender: "",
        relationship: ""
      }
    ]);
  };

  const removeFamilyMember = (id: string) => {
    setFamilyMembers(familyMembers.filter(member => member.id !== id));
  };

  const updateFamilyMember = (id: string, field: string, value: string) => {
    setFamilyMembers(familyMembers.map(member => 
      member.id === id ? { ...member, [field]: value } : member
    ));
  };

  const toggleCoverage = (coverage: string) => {
    if (selectedCoverages.includes(coverage)) {
      setSelectedCoverages(selectedCoverages.filter(c => c !== coverage));
    } else {
      setSelectedCoverages([...selectedCoverages, coverage]);
    }
  };

  const canProceedStep1 = () => {
    return dateOfBirth && gender && maritalStatus && hasPublicInsurance && hasPrivateInsurance;
  };

  const canProceedStep2 = () => {
    return coverageType && participationAmount && roomType && hospitalPreference && abroadCoverage && monthlyCost;
  };

  const canSubmit = () => {
    return fullName && phone && email && consentGiven;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAttemptedNext(true);
    
    if (!canSubmit()) {
      return;
    }
    
    // Prepare email content with all form data
    const formData = {
      // Page 1
      dateOfBirth,
      gender,
      maritalStatus,
      hasPublicInsurance,
      hasPrivateInsurance,
      familyMembers,
      // Page 2
      coverageType,
      participationAmount,
      roomType,
      hospitalPreference,
      abroadCoverage,
      monthlyCost,
      selectedCoverages,
      otherConcerns,
      // Page 3
      fullName,
      phone,
      email
    };

    // In production, this would send to info@valore.com
    console.log("Form submitted to info@valore.com:", formData);
    
    const message = t.healthFormPage.successMessage
      .replace("{name}", fullName)
      .replace("{email}", email);
    
    alert(message);
  };

  const handleNext = () => {
    setAttemptedNext(true);
    if ((currentStep === 1 && canProceedStep1()) || (currentStep === 2 && canProceedStep2())) {
      setCurrentStep(currentStep + 1);
      setAttemptedNext(false);
    }
  };

  const coverageLabels = [
    { id: "birth-allowance", label: t.healthFormPage.step2.birthAllowance },
    { id: "pregnancy", label: t.healthFormPage.step2.pregnancy },
    { id: "payment-protection", label: t.healthFormPage.step2.paymentProtection },
    { id: "accident", label: t.healthFormPage.step2.accident },
    { id: "hospital-allowance", label: t.healthFormPage.step2.hospitalAllowance },
    { id: "surgery-allowance", label: t.healthFormPage.step2.surgeryAllowance },
    { id: "travel", label: t.healthFormPage.step2.travel },
    { id: "rehabilitation", label: t.healthFormPage.step2.rehabilitation },
    { id: "serious-illness", label: t.healthFormPage.step2.seriousIllness }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-[#52a447] mb-2">
              {t.healthFormPage.title}
            </h1>
            <div className="flex items-center gap-2 mt-4">
              <div className={`h-1 flex-1 rounded ${currentStep >= 1 ? 'bg-[#52a447]' : 'bg-gray-200'}`} />
              <div className={`h-1 flex-1 rounded ${currentStep >= 2 ? 'bg-[#52a447]' : 'bg-gray-200'}`} />
              <div className={`h-1 flex-1 rounded ${currentStep >= 3 ? 'bg-[#52a447]' : 'bg-gray-200'}`} />
            </div>
            <p className="text-gray-600 mt-2">{t.healthFormPage.step} {currentStep} {t.healthFormPage.of} 3</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1 - Personal Details */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-gray-900">{t.healthFormPage.step1.title}</h2>

                <div>
                  <Label htmlFor="dob">{t.healthFormPage.step1.dateOfBirth} *</Label>
                  <Input
                    id="dob"
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    required
                    className={`mt-1 ${attemptedNext && !dateOfBirth ? 'border-red-500 border-2' : ''}`}
                  />
                  <p className="text-gray-500 mt-1">{t.healthFormPage.step1.dateOfBirthRequired}</p>
                </div>

                <div>
                  <Label>{t.healthFormPage.step1.gender} *</Label>
                  <div className={`mt-2 rounded-md p-2 ${attemptedNext && !gender ? 'border-red-500 border-2' : ''}`}>
                    <RadioGroup value={gender} onValueChange={setGender}>
                      <div className="form-option-wrapper">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male" className="cursor-pointer ml-2">{t.healthFormPage.step1.male}</Label>
                      </div>
                      <div className="form-option-wrapper">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female" className="cursor-pointer ml-2">{t.healthFormPage.step1.female}</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div>
                  <Label>{t.healthFormPage.step1.maritalStatus} *</Label>
                  <div className={`mt-2 rounded-md p-2 ${attemptedNext && !maritalStatus ? 'border-red-500 border-2' : ''}`}>
                    <RadioGroup value={maritalStatus} onValueChange={setMaritalStatus}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="single" id="single" />
                        <Label htmlFor="single" className="cursor-pointer">{t.healthFormPage.step1.single}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="married" id="married" />
                        <Label htmlFor="married" className="cursor-pointer">{t.healthFormPage.step1.married}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="civilPartnership" id="civilPartnership" />
                        <Label htmlFor="civilPartnership" className="cursor-pointer">{t.healthFormPage.step1.civilPartnership}</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div>
                  <Label>{t.healthFormPage.step1.hasPublicInsurance} *</Label>
                  <div className={`mt-2 rounded-md p-2 ${attemptedNext && !hasPublicInsurance ? 'border-red-500 border-2' : ''}`}>
                    <RadioGroup value={hasPublicInsurance} onValueChange={setHasPublicInsurance}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="publicYes" />
                        <Label htmlFor="publicYes" className="cursor-pointer">{t.healthFormPage.step1.yes}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="publicNo" />
                        <Label htmlFor="publicNo" className="cursor-pointer">{t.healthFormPage.step1.no}</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div>
                  <Label>{t.healthFormPage.step1.hasPrivateInsurance} *</Label>
                  <div className={`mt-2 rounded-md p-2 ${attemptedNext && !hasPrivateInsurance ? 'border-red-500 border-2' : ''}`}>
                    <RadioGroup value={hasPrivateInsurance} onValueChange={setHasPrivateInsurance}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="privateNo" />
                        <Label htmlFor="privateNo" className="cursor-pointer">{t.healthFormPage.step1.noPrivate}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="family" id="privateFamily" />
                        <Label htmlFor="privateFamily" className="cursor-pointer">{t.healthFormPage.step1.hasFamily}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="group" id="privateGroup" />
                        <Label htmlFor="privateGroup" className="cursor-pointer">{t.healthFormPage.step1.hasGroup}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="individual" id="privateIndividual" />
                        <Label htmlFor="privateIndividual" className="cursor-pointer">{t.healthFormPage.step1.hasIndividual}</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="border-t pt-6 mt-6">
                  <h3 className="mb-4">{t.healthFormPage.step1.protectedMembers}</h3>
                  
                  {familyMembers.map((member, index) => (
                    <div key={member.id} className="border rounded-lg p-4 mb-4 bg-gray-50">
                      <div className="flex justify-between items-center mb-4">
                        <h4>{t.healthFormPage.step1.member} {index + 1}</h4>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFamilyMember(member.id)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label>{t.healthFormPage.step1.dateOfBirth}</Label>
                          <Input
                            type="date"
                            value={member.dateOfBirth}
                            onChange={(e) => updateFamilyMember(member.id, 'dateOfBirth', e.target.value)}
                            className="mt-1"
                          />
                          <p className="text-gray-500 mt-1">{t.healthFormPage.step1.required}</p>
                        </div>

                        <div>
                          <Label>{t.healthFormPage.step1.gender}</Label>
                          <RadioGroup 
                            value={member.gender} 
                            onValueChange={(value) => updateFamilyMember(member.id, 'gender', value)}
                            className="mt-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="male" id={`member-male-${member.id}`} />
                              <Label htmlFor={`member-male-${member.id}`} className="cursor-pointer">{t.healthFormPage.step1.male}</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="female" id={`member-female-${member.id}`} />
                              <Label htmlFor={`member-female-${member.id}`} className="cursor-pointer">{t.healthFormPage.step1.female}</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div>
                          <Label>{t.healthFormPage.step1.relationship}</Label>
                          <RadioGroup 
                            value={member.relationship} 
                            onValueChange={(value) => updateFamilyMember(member.id, 'relationship', value)}
                            className="mt-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="spouse" id={`member-spouse-${member.id}`} />
                              <Label htmlFor={`member-spouse-${member.id}`} className="cursor-pointer">{t.healthFormPage.step1.spouse}</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="child" id={`member-child-${member.id}`} />
                              <Label htmlFor={`member-child-${member.id}`} className="cursor-pointer">{t.healthFormPage.step1.child}</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </div>
                  ))}

                  <Button
                    type="button"
                    variant="outline"
                    onClick={addFamilyMember}
                    className="w-full border-dashed"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    {t.healthFormPage.step1.addMember}
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2 - Health Needs Analysis */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-gray-900">{t.healthFormPage.step2.title}</h2>

                <div>
                  <Label htmlFor="coverage-type">{t.healthFormPage.step2.coverageType} *</Label>
                  <Select value={coverageType} onValueChange={setCoverageType}>
                    <SelectTrigger className={`mt-1 ${attemptedNext && !coverageType ? 'border-red-500 border-2' : ''}`}>
                      <SelectValue placeholder={t.healthFormPage.step2.selectPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hospital-emergency">{t.healthFormPage.step2.hospitalEmergency}</SelectItem>
                      <SelectItem value="hospital-outpatient">{t.healthFormPage.step2.hospitalOutpatient}</SelectItem>
                      <SelectItem value="outpatient">{t.healthFormPage.step2.outpatient}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="participation">{t.healthFormPage.step2.participation} *</Label>
                  <Select value={participationAmount} onValueChange={setParticipationAmount}>
                    <SelectTrigger className={`mt-1 ${attemptedNext && !participationAmount ? 'border-red-500 border-2' : ''}`}>
                      <SelectValue placeholder={t.healthFormPage.step2.selectPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">0€</SelectItem>
                      <SelectItem value="500">500€</SelectItem>
                      <SelectItem value="750">750€</SelectItem>
                      <SelectItem value="1000">1.000€</SelectItem>
                      <SelectItem value="1500">1.500€</SelectItem>
                      <SelectItem value="2000">2.000€</SelectItem>
                      <SelectItem value="3000">3.000€</SelectItem>
                      <SelectItem value="6000">6.000€</SelectItem>
                      <SelectItem value="10000">10.000€</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>{t.healthFormPage.step2.roomType} *</Label>
                  <div className={`mt-2 rounded-md p-2 ${attemptedNext && !roomType ? 'border-red-500 border-2' : ''}`}>
                    <RadioGroup value={roomType} onValueChange={setRoomType}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="lux" id="lux" />
                        <Label htmlFor="lux" className="cursor-pointer">{t.healthFormPage.step2.lux}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="single" id="single-room" />
                        <Label htmlFor="single-room" className="cursor-pointer">{t.healthFormPage.step2.singleRoom}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="double" id="double" />
                        <Label htmlFor="double" className="cursor-pointer">{t.healthFormPage.step2.doubleRoom}</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div>
                  <Label htmlFor="hospital-pref">{t.healthFormPage.step2.hospitalPreference} *</Label>
                  <Select value={hospitalPreference} onValueChange={setHospitalPreference}>
                    <SelectTrigger className={`mt-1 ${attemptedNext && !hospitalPreference ? 'border-red-500 border-2' : ''}`}>
                      <SelectValue placeholder={t.healthFormPage.step2.selectPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="many">{t.healthFormPage.step2.manyHospitals}</SelectItem>
                      <SelectItem value="few">{t.healthFormPage.step2.fewHospitals}</SelectItem>
                      <SelectItem value="free">{t.healthFormPage.step2.freeAccess}</SelectItem>
                      <SelectItem value="indifferent">{t.healthFormPage.step2.indifferent}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>{t.healthFormPage.step2.abroadCoverage} *</Label>
                  <div className={`mt-2 rounded-md p-2 ${attemptedNext && !abroadCoverage ? 'border-red-500 border-2' : ''}`}>
                    <RadioGroup value={abroadCoverage} onValueChange={setAbroadCoverage}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="abroad-no" />
                        <Label htmlFor="abroad-no" className="cursor-pointer">{t.healthFormPage.step1.no}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="abroad-yes" />
                        <Label htmlFor="abroad-yes" className="cursor-pointer">{t.healthFormPage.step1.yes}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="indifferent" id="abroad-indifferent" />
                        <Label htmlFor="abroad-indifferent" className="cursor-pointer">{t.healthFormPage.step2.indifferent}</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div>
                  <Label htmlFor="monthly-cost">{t.healthFormPage.step2.monthlyCost} *</Label>
                  <Select value={monthlyCost} onValueChange={setMonthlyCost}>
                    <SelectTrigger className={`mt-1 ${attemptedNext && !monthlyCost ? 'border-red-500 border-2' : ''}`}>
                      <SelectValue placeholder={t.healthFormPage.step2.selectPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-50">0-50€</SelectItem>
                      <SelectItem value="50-100">50-100€</SelectItem>
                      <SelectItem value="100-150">100-150€</SelectItem>
                      <SelectItem value="150-200">150-200€</SelectItem>
                      <SelectItem value="200-250">200-250€</SelectItem>
                      <SelectItem value="250-300">250-300€</SelectItem>
                      <SelectItem value="300-400">300-400€</SelectItem>
                      <SelectItem value="400-500">400-500€</SelectItem>
                      <SelectItem value="other">{t.healthFormPage.step2.other}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>{t.healthFormPage.step2.importantCoverages}</Label>
                  <div className="space-y-3 mt-3">
                    {coverageLabels.map((coverage) => (
                      <div key={coverage.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={coverage.id}
                          checked={selectedCoverages.includes(coverage.id)}
                          onCheckedChange={() => toggleCoverage(coverage.id)}
                        />
                        <Label htmlFor={coverage.id} className="cursor-pointer">{coverage.label}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="other-concerns">{t.healthFormPage.step2.otherConcerns}</Label>
                  <Textarea
                    id="other-concerns"
                    value={otherConcerns}
                    onChange={(e) => setOtherConcerns(e.target.value)}
                    rows={4}
                    className="mt-1"
                  />
                </div>
              </div>
            )}

            {/* Step 3 - Contact Details */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-gray-900">{t.healthFormPage.step3.title}</h2>

                <div>
                  <Label htmlFor="fullName">{t.healthFormPage.step3.fullName} *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className={`mt-1 ${attemptedNext && !fullName ? 'border-red-500 border-2' : ''}`}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">{t.healthFormPage.step3.phone} *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className={`mt-1 ${attemptedNext && !phone ? 'border-red-500 border-2' : ''}`}
                  />
                </div>

                <div>
                  <Label htmlFor="email">{t.healthFormPage.step3.email} *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`mt-1 ${attemptedNext && !email ? 'border-red-500 border-2' : ''}`}
                  />
                </div>

                <div className={`flex items-start space-x-2 rounded-lg p-4 ${attemptedNext && !consentGiven ? 'border-red-500 border-2 bg-red-50' : 'border bg-gray-50'}`}>
                  <Checkbox
                    id="consent"
                    checked={consentGiven}
                    onCheckedChange={(checked) => setConsentGiven(checked as boolean)}
                  />
                  <Label htmlFor="consent" className="cursor-pointer leading-relaxed">
                    {t.healthFormPage.step3.consent}
                  </Label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setCurrentStep(currentStep - 1);
                    setAttemptedNext(false);
                  }}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  {t.healthFormPage.navigation.previous}
                </Button>
              )}
              
              <div className="ml-auto">
                {currentStep < 3 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="bg-[#52a447] hover:bg-[#458a3b]"
                  >
                    {t.healthFormPage.navigation.next}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-[#52a447] hover:bg-[#458a3b]"
                  >
                    {t.healthFormPage.navigation.submit}
                  </Button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}