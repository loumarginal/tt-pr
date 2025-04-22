import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Book, BookOpen, FileCode, FileText } from "lucide-react";

const languages = [
  { code: "en", name: "English" },
  { code: "zh", name: "Chinese (Mandarin)" },
  { code: "hi", name: "Hindi" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "ar", name: "Arabic" },
  { code: "bn", name: "Bengali" },
  { code: "ru", name: "Russian" },
  { code: "pt", name: "Portuguese" },
  { code: "id", name: "Indonesian" },
];

const translationModes = [
  { id: "literal", name: "Literal Translation", icon: FileText, description: "Direct word-for-word translation with minimal adjustments" },
  { id: "adaptation", name: "Cultural Adaptation", icon: FileCode, description: "Adapts content to match cultural context and nuances" },
  { id: "dialogue", name: "Book Dialogue", icon: BookOpen, description: "Optimized for character dialogues in literature" },
  { id: "novel", name: "Novel Style", icon: Book, description: "Preserves narrative style and literary qualities" },
];

const TranslatorForm = () => {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("es");
  const [translationMode, setTranslationMode] = useState("literal");
  const [selectedModel, setSelectedModel] = useState("deepseek");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    
    setLoading(true);
    
    setTimeout(() => {
      setTranslatedText(`[${selectedModel} translation using ${translationMode} mode from ${sourceLanguage} to ${targetLanguage}]\n\n${sourceText}`);
      setLoading(false);
    }, 1000);
  };

  const handleSwapLanguages = () => {
    const temp = sourceLanguage;
    setSourceLanguage(targetLanguage);
    setTargetLanguage(temp);
    
    if (translatedText) {
      setSourceText(translatedText);
      setTranslatedText("");
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-4">
      <div className="flex justify-center gap-4 mb-6">
        <Button
          variant={selectedModel === "deepseek" ? "default" : "outline"}
          onClick={() => setSelectedModel("deepseek")}
          className="min-w-[140px]"
        >
          DeepSeek
        </Button>
        <Button
          variant={selectedModel === "gemini" ? "default" : "outline"}
          onClick={() => setSelectedModel("gemini")}
          className="min-w-[140px]"
        >
          Google Gemini
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <div className="flex justify-between mb-2">
            <Select value={sourceLanguage} onValueChange={setSourceLanguage}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Source Language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Textarea
            placeholder="Enter text to translate"
            className="min-h-[200px]"
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
          />
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <Select value={targetLanguage} onValueChange={setTargetLanguage}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Target Language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" onClick={handleSwapLanguages}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-90 md:rotate-0">
                <path d="M16 3 L8 3 L12 7 L16 3" />
                <path d="M8 21 L16 21 L12 17 L8 21" />
                <line x1="12" y1="7" x2="12" y2="17" />
              </svg>
            </Button>
          </div>
          <Textarea
            placeholder="Translation will appear here"
            className="min-h-[200px]"
            value={translatedText}
            readOnly
          />
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {translationModes.map((mode) => (
            <Button
              key={mode.id}
              variant={translationMode === mode.id ? "default" : "outline"}
              size="sm"
              onClick={() => setTranslationMode(mode.id)}
              className="flex items-center gap-1"
            >
              <mode.icon className="h-4 w-4" />
              <span>{mode.name}</span>
            </Button>
          ))}
        </div>
        <Button 
          onClick={handleTranslate} 
          disabled={!sourceText.trim() || loading}
          className="min-w-[120px]"
        >
          {loading ? "Translating..." : "Translate"}
        </Button>
      </div>
    </div>
  );
};

export default TranslatorForm;
