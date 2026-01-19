import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, TrendingUp, Shield, Clock, Loader2, ArrowRight, Users, Phone, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import bitloonxLogo from "@/assets/bitloonx-logo.png";

const trustElements = [
  { icon: Shield, text: "Kostenlose Registrierung" },
  { icon: TrendingUp, text: "Bis zu 30% monatliche Rendite" },
  { icon: Clock, text: "24/7 automatisierter Handel" },
  { icon: Users, text: "Keine Vorkenntnisse nötig" },
];

const LeadFormSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (formData.fullName.length < 2) {
      newErrors.fullName = "Name muss mindestens 2 Zeichen haben";
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Bitte gib eine gültige E-Mail-Adresse ein";
    }
    
    if (!formData.phone || formData.phone.length < 6) {
      newErrors.phone = "Bitte gib eine gültige Telefonnummer ein";
    } else if (!/^[\d\s+\-()]+$/.test(formData.phone)) {
      newErrors.phone = "Bitte nur Zahlen und gültige Zeichen verwenden";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      const response = await fetch('https://fyloldkiuxtcdiazbtwn.supabase.co/functions/v1/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          branding_id: '87ce3a46-0b13-4175-adcb-63f4ef3ee057'
        })
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ fullName: "", email: "", phone: "" });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({ 
        title: "Fehler aufgetreten", 
        description: "Bitte versuche es später erneut.", 
        variant: "destructive" 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section className="relative py-20 md:py-32 bg-casino-darker overflow-hidden">
      {/* Background Effects - dezenter */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/2 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Column - Trust Elements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <motion.span 
                className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Exklusiver Zugang
              </motion.span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                  Starte jetzt
                </span>
                <br />
                <span className="text-white">mit KI-Trading</span>
              </h2>
              
              <p className="text-white/70 text-lg max-w-md">
                Bewirb dich jetzt für unseren exklusiven KI Trading Bot und sichere dir deinen Platz unter den ersten Nutzern.
              </p>
            </div>

            {/* Trust Elements */}
            <div className="space-y-4">
              {trustElements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-white/90 text-lg">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gold">20.000+</div>
                <div className="text-white/50 text-sm">Aktive Nutzer</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gold">94%</div>
                <div className="text-white/50 text-sm">Erfolgsquote</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gold">24/7</div>
                <div className="text-white/50 text-sm">Automatisiert</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full">
              {/* Glassmorphic Form Card - kein Glow */}
              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 min-h-[580px] flex flex-col">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="flex flex-col items-center justify-center flex-1 text-center py-4"
                    >
                      {/* Logo */}
                      <img 
                        src={bitloonxLogo} 
                        alt="bitloonx Logo" 
                        className="h-12 object-contain mb-8" 
                      />

                      {/* Success Icon */}
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500/40 flex items-center justify-center mb-6"
                      >
                        <CheckCircle2 className="w-10 h-10 text-green-400" />
                      </motion.div>

                      {/* Title */}
                      <motion.h3 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl md:text-3xl font-bold text-white mb-4"
                      >
                        Bewerbung erfolgreich!
                      </motion.h3>

                      {/* Message */}
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-white/70 text-lg mb-6"
                      >
                        Vielen Dank für deine Bewerbung.
                      </motion.p>

                      {/* Phone Hint Card */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="w-full p-5 bg-gold/10 border border-gold/20 rounded-xl mb-8"
                      >
                        <div className="flex items-center justify-center gap-3 mb-2">
                          <Phone className="w-5 h-5 text-gold" />
                          <p className="text-gold font-semibold text-lg">
                            Wir kontaktieren dich in Kürze telefonisch
                          </p>
                        </div>
                        <p className="text-white/60 text-sm">
                          Bitte halte dein Telefon bereit.
                        </p>
                      </motion.div>

                      {/* Back Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <Button
                          onClick={() => setIsSubmitted(false)}
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 rounded-xl px-6 py-3 h-auto"
                        >
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Neue Bewerbung einreichen
                        </Button>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col flex-1"
                    >
                      {/* Logo */}
                      <div className="flex justify-center mb-6">
                        <img 
                          src={bitloonxLogo} 
                          alt="bitloonx Logo" 
                          className="h-12 object-contain" 
                        />
                      </div>

                      <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                          Jetzt bewerben
                        </h3>
                        <p className="text-white/60">
                          Sichere dir deinen exklusiven Zugang
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5 flex-1">
                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            Vollständiger Name *
                          </label>
                          <Input
                            type="text"
                            name="fullName"
                            placeholder="Max Mustermann"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl focus:border-gold/50 focus:ring-gold/20 transition-all duration-300"
                            required
                          />
                          {errors.fullName && (
                            <p className="text-red-400 text-sm mt-2">{errors.fullName}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            E-Mail-Adresse *
                          </label>
                          <Input
                            type="email"
                            name="email"
                            placeholder="max.mustermann@email.de"
                            value={formData.email}
                            onChange={handleChange}
                            className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl focus:border-gold/50 focus:ring-gold/20 transition-all duration-300"
                            required
                          />
                          {errors.email && (
                            <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">
                            Telefonnummer *
                          </label>
                          <Input
                            type="tel"
                            name="phone"
                            placeholder="+49 176 12345678"
                            value={formData.phone}
                            onChange={handleChange}
                            className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl focus:border-gold/50 focus:ring-gold/20 transition-all duration-300"
                            required
                          />
                          {errors.phone && (
                            <p className="text-red-400 text-sm mt-2">{errors.phone}</p>
                          )}
                        </div>

                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="relative w-full h-14 bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-black font-semibold text-lg rounded-xl overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gold/25"
                        >
                          {/* Shine Effect */}
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                          
                          {isLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                          ) : (
                            <span className="flex items-center gap-2">
                              Jetzt Zugang beantragen
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                          )}
                        </Button>
                      </form>

                      {/* Trust Badge */}
                      <div className="flex items-center justify-center gap-3 mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                        <Shield className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <div className="text-center">
                          <p className="text-white/80 text-sm font-medium">SSL-verschlüsselt & DSGVO-konform</p>
                          <p className="text-white/50 text-xs">Deine Daten sind bei uns sicher</p>
                        </div>
                      </div>

                      <p className="text-white/40 text-xs text-center mt-6">
                        Mit dem Absenden stimmst du unseren{" "}
                        <a href="/datenschutz" className="text-gold/70 hover:text-gold underline">
                          Datenschutzbestimmungen
                        </a>{" "}
                        zu.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
