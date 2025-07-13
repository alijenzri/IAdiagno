import React, { useState } from 'react';
import { ArrowLeft, Upload, Brain, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { Organ } from '../App';

interface DiagnosticFormProps {
  organ: Organ;
  onBack: () => void;
}

interface FormData {
  [key: string]: string | number | File | null;
}

const organForms = {
  breast: {
    title: 'Breast Cancer Screening',
    fields: [
      { name: 'age', label: 'Age', type: 'number', required: true },
      { name: 'familyHistory', label: 'Family History of Breast Cancer', type: 'select', options: ['None', 'Mother', 'Sister', 'Grandmother', 'Multiple relatives'], required: true },
      { name: 'previousBiopsy', label: 'Previous Breast Biopsy', type: 'select', options: ['No', 'Yes - Benign', 'Yes - Atypical'], required: true },
      { name: 'mammogram', label: 'Latest Mammogram', type: 'file', accept: '.jpg,.jpeg,.png,.dicom', required: true },
      { name: 'breastDensity', label: 'Breast Density', type: 'select', options: ['Almost entirely fatty', 'Scattered fibroglandular', 'Heterogeneously dense', 'Extremely dense'], required: true },
      { name: 'symptoms', label: 'Current Symptoms', type: 'textarea', placeholder: 'Describe any lumps, pain, discharge, or changes...', required: false },
    ]
  },
  brain: {
    title: 'Brain Tumor Detection',
    fields: [
      { name: 'age', label: 'Age', type: 'number', required: true },
      { name: 'symptoms', label: 'Neurological Symptoms', type: 'textarea', placeholder: 'Headaches, seizures, vision changes, memory issues...', required: true },
      { name: 'mriScan', label: 'MRI Scan', type: 'file', accept: '.jpg,.jpeg,.png,.dicom', required: true },
      { name: 'seizureHistory', label: 'History of Seizures', type: 'select', options: ['No', 'Occasional', 'Frequent', 'Controlled with medication'], required: true },
      { name: 'motorFunction', label: 'Motor Function', type: 'select', options: ['Normal', 'Mild weakness', 'Moderate weakness', 'Severe impairment'], required: true },
      { name: 'cognitiveChanges', label: 'Cognitive Changes', type: 'select', options: ['None', 'Mild', 'Moderate', 'Severe'], required: true },
    ]
  },
  liver: {
    title: 'Liver Cancer Assessment',
    fields: [
      { name: 'age', label: 'Age', type: 'number', required: true },
      { name: 'hepatitisHistory', label: 'Hepatitis History', type: 'select', options: ['None', 'Hepatitis B', 'Hepatitis C', 'Both B and C'], required: true },
      { name: 'alcoholConsumption', label: 'Alcohol Consumption', type: 'select', options: ['None', 'Light (1-7 drinks/week)', 'Moderate (8-14 drinks/week)', 'Heavy (15+ drinks/week)'], required: true },
      { name: 'ctScan', label: 'CT/MRI Scan', type: 'file', accept: '.jpg,.jpeg,.png,.dicom', required: true },
      { name: 'alphaFetoprotein', label: 'Alpha-fetoprotein Level (ng/mL)', type: 'number', placeholder: 'Enter AFP level', required: true },
      { name: 'symptoms', label: 'Symptoms', type: 'textarea', placeholder: 'Abdominal pain, weight loss, fatigue...', required: false },
    ]
  },
  pancreas: {
    title: 'Pancreatic Cancer Screening',
    fields: [
      { name: 'age', label: 'Age', type: 'number', required: true },
      { name: 'diabetesHistory', label: 'Diabetes History', type: 'select', options: ['No diabetes', 'Type 1', 'Type 2 - Recent onset', 'Type 2 - Long-standing'], required: true },
      { name: 'smokingHistory', label: 'Smoking History', type: 'select', options: ['Never smoked', 'Former smoker', 'Current smoker'], required: true },
      { name: 'ctScan', label: 'Pancreatic CT Scan', type: 'file', accept: '.jpg,.jpeg,.png,.dicom', required: true },
      { name: 'ca199Level', label: 'CA 19-9 Level (U/mL)', type: 'number', placeholder: 'Enter CA 19-9 level', required: true },
      { name: 'weight', label: 'Recent Weight Loss', type: 'select', options: ['No weight loss', 'Minor (< 5%)', 'Moderate (5-10%)', 'Significant (> 10%)'], required: true },
      { name: 'symptoms', label: 'Symptoms', type: 'textarea', placeholder: 'Abdominal pain, jaundice, fatigue...', required: false },
    ]
  },
  ovary: {
    title: 'Ovarian Cancer Assessment',
    fields: [
      { name: 'age', label: 'Age', type: 'number', required: true },
      { name: 'familyHistory', label: 'Family History', type: 'select', options: ['None', 'Ovarian cancer', 'Breast cancer', 'Both', 'BRCA mutation known'], required: true },
      { name: 'reproductiveHistory', label: 'Reproductive History', type: 'select', options: ['Nulliparous', '1-2 children', '3+ children'], required: true },
      { name: 'ultrasound', label: 'Pelvic Ultrasound', type: 'file', accept: '.jpg,.jpeg,.png,.dicom', required: true },
      { name: 'ca125Level', label: 'CA-125 Level (U/mL)', type: 'number', placeholder: 'Enter CA-125 level', required: true },
      { name: 'menopauseStatus', label: 'Menopause Status', type: 'select', options: ['Premenopausal', 'Perimenopausal', 'Postmenopausal'], required: true },
      { name: 'symptoms', label: 'Symptoms', type: 'textarea', placeholder: 'Bloating, pelvic pain, urinary symptoms...', required: false },
    ]
  },
};

const DiagnosticForm: React.FC<DiagnosticFormProps> = ({ organ, onBack }) => {
  const [formData, setFormData] = useState<FormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: string}>({});

  const formConfig = organForms[organ];

  const handleInputChange = (name: string, value: string | number | File) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (name: string, file: File) => {
    setFormData(prev => ({ ...prev, [name]: file }));
    setUploadedFiles(prev => ({ ...prev, [name]: file.name }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsSubmitting(false);
    setShowResults(true);
  };

  const isFormValid = () => {
    return formConfig.fields
      .filter(field => field.required)
      .every(field => formData[field.name] !== undefined && formData[field.name] !== '');
  };

  if (showResults) {
    return (
      <div className="min-h-screen p-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Analysis Complete</h1>
            <p className="text-xl text-green-300">AI diagnostic results for {formConfig.title}</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Risk Assessment</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-200">Overall Risk Level</span>
                    <span className="text-green-400 font-semibold">Low</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-200">Confidence Score</span>
                    <span className="text-blue-400 font-semibold">96.8%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full" style={{ width: '96.8%' }}></div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Recommendations</h3>
                <div className="space-y-3 text-blue-200">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Continue regular screening schedule</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Follow-up with primary care physician</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>Monitor any changes in symptoms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBack}
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>New Analysis</span>
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Download Report
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Organ Selection</span>
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">MedAI</span>
          </div>
        </div>

        {/* Form Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">{formConfig.title}</h1>
          <p className="text-xl text-blue-200">
            Please provide the required information for AI analysis
          </p>
        </div>

        {/* Diagnostic Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {formConfig.fields.map((field) => (
                <div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                  <label className="block text-sm font-medium text-blue-200 mb-3">
                    {field.label}
                    {field.required && <span className="text-red-400 ml-1">*</span>}
                  </label>

                  {field.type === 'text' || field.type === 'number' ? (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name] as string || ''}
                      onChange={(e) => handleInputChange(field.name, field.type === 'number' ? Number(e.target.value) : e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      required={field.required}
                    />
                  ) : field.type === 'select' ? (
                    <select
                      value={formData[field.name] as string || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      required={field.required}
                    >
                      <option value="" disabled className="bg-gray-800">Select an option</option>
                      {field.options?.map((option) => (
                        <option key={option} value={option} className="bg-gray-800">{option}</option>
                      ))}
                    </select>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      placeholder={field.placeholder}
                      value={formData[field.name] as string || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      rows={4}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                      required={field.required}
                    />
                  ) : field.type === 'file' ? (
                    <div className="relative">
                      <input
                        type="file"
                        accept={field.accept}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload(field.name, file);
                        }}
                        className="hidden"
                        id={field.name}
                        required={field.required}
                      />
                      <label
                        htmlFor={field.name}
                        className="flex items-center justify-center w-full bg-white/10 border-2 border-dashed border-white/20 rounded-lg px-4 py-6 cursor-pointer hover:border-blue-400 hover:bg-white/20 transition-all duration-300"
                      >
                        <div className="text-center">
                          <Upload className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                          <div className="text-white font-medium">
                            {uploadedFiles[field.name] ? uploadedFiles[field.name] : 'Click to upload file'}
                          </div>
                          <div className="text-blue-300 text-sm mt-1">
                            {field.accept?.replace(/\./g, '').toUpperCase()} files only
                          </div>
                        </div>
                      </label>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!isFormValid() || isSubmitting}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 flex items-center space-x-3"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Brain className="w-6 h-6" />
                  <span>Start AI Analysis</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DiagnosticForm;