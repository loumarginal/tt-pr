
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
  { code: "kr", name: "Korea" },
  { code: "ru", name: "Russian" },
  { code: "pt", name: "Portuguese" },
  { code: "id", name: "Indonesian" },
  { code: "jp", name: "Japanese" },
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
  const [loading, setLoading] = useState(false);

  // const handleTranslate = async () => {
  //   if (!sourceText.trim()) return;
    
  //   setLoading(true);
    
  //   // Here you would implement the Google Gemini API call
  //   // For now, we'll use a mock response
  //   setTimeout(() => {
  //     setTranslatedText(`[Translation from ${sourceLanguage} to ${targetLanguage} using ${translationMode} mode]\n\n${sourceText}`);
  //     setLoading(false);
  //   }, 1000);
  // };

  // Cambiar tu función handleTranslate:
const handleTranslate = async () => {
  if (!sourceText.trim()) return;

  setLoading(true);

  try {
    console.log('Starting translation process...');
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    console.log('API Key available:', !!apiKey);
    
    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + apiKey;
    console.log('Request URL:', url);

    // Calculate input tokens (rough estimation: 1 token ≈ 4 characters)
    const promptText = `Translate the following text from ${sourceLanguage} to ${targetLanguage} using ${translationMode} style:\n\n${sourceText}`;
    const estimatedInputTokens = Math.ceil(promptText.length / 4);
    console.log('Estimated input tokens:', estimatedInputTokens);

    const requestBody = {
      contents: [{
        parts: [{
          text: promptText
        }]
      }]
    };
    console.log('Request body:', requestBody);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    console.log('Response status:', response.status);

    const data = await response.json();
    console.log('Response data:', data);

    if (data && data.candidates && data.candidates.length > 0) {
      const textResult = data.candidates[0].content.parts[0].text;
      // Calculate output tokens
      const estimatedOutputTokens = Math.ceil(textResult.length / 4);
      console.log('Estimated output tokens:', estimatedOutputTokens);
      console.log('Total estimated tokens:', estimatedInputTokens + estimatedOutputTokens);
      console.log('Translation result:', textResult);
      setTranslatedText(textResult);
    } else {
      console.warn('No translation candidates found in response');
      setTranslatedText("No translation found.");
    }
  } catch (error) {
    console.error("Error translating:", error);
    setTranslatedText("Error during translation.");
  } finally {
    console.log('Translation process completed');
    setLoading(false);
  }
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
