"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    content: "+90 536 518 9389",
    link: "tel:+905365189389",
  },
  {
    icon: Mail,
    title: "E-posta",
    content: "alperaksuu@gmail.com",
    link: "mailto:alperaksuu@gmail.com",
  },
  {
    icon: MapPin,
    title: "Adres",
    content: "Mahmutbey, 2417. Sokak 1. Ada No:142, 34218 Bağcılar/İstanbul",
    link: "https://www.google.com/maps/place/Aksu+Otomotiv+Yedek+Parça/@41.0450709,28.8403285,13z/data=!4m6!3m5!1s0x14caa5170c2e70e9:0x5f06cd3ab9d3061a!8m2!3d41.0675603!4d28.8291677!16s%2Fg%2F11vrch73cn?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    content: "Pzt-Cmt: 09:00 - 18:00",
    link: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form gönderim simülasyonu
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

    // 5 saniye sonra başarı mesajını sıfırla
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Bölümü */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
              Bize Ulaşın
            </h1>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              Yedek parçalar hakkında sorularınız mı var? Renault aracınız için
              doğru parçayı bulmakta yardıma mı ihtiyacınız var? Yardımcı olmak
              için buradayız.
            </p>
          </div>
        </div>
      </section>

      {/* İletişim Bölümü */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* İletişim Bilgileri */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  İletişime Geçin
                </h2>
                <p className="text-muted-foreground mb-8">
                  Bu kanallardan herhangi biri aracılığıyla bize ulaşın.
                  Genellikle 24 saat içinde yanıt veriyoruz.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="border-border">
                    <CardContent className="p-4">
                      {info.link ? (
                        <a
                          href={info.link}
                          target={
                            info.link.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            info.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex items-start gap-4 group"
                        >
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 flex-shrink-0">
                            <info.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              {info.title}
                            </p>
                            <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {info.content}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 flex-shrink-0">
                            <info.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              {info.title}
                            </p>
                            <p className="font-medium text-foreground">
                              {info.content}
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-foreground">
                      WhatsApp üzerinden Hızlı Yanıt
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    En hızlı yanıt için bize doğrudan WhatsApp üzerinden mesaj
                    gönderin.
                  </p>
                  <Button asChild className="w-full">
                    <a
                      href="https://wa.me/905365189389?text=Merhaba%2C%20yedek%20parçalar%20hakkında%20bir%20sorum%20vardı."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp'tan Yazın
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* İletişim Formu */}
            <div className="lg:col-span-2">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Bize Mesaj Gönderin</CardTitle>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <Send className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Mesaj Gönderildi!
                      </h3>
                      <p className="text-muted-foreground">
                        Bizimle iletişime geçtiğiniz için teşekkür ederiz. En
                        kısa sürede size geri döneceğiz.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="text-sm font-medium text-foreground"
                          >
                            İsim
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="İsminiz"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium text-foreground"
                          >
                            E-posta
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="eposta@adresiniz.com"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="phone"
                            className="text-sm font-medium text-foreground"
                          >
                            Telefon (Opsiyonel)
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+90 5XX XXX XXXX"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="subject"
                            className="text-sm font-medium text-foreground"
                          >
                            Konu
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Size nasıl yardımcı olabiliriz?"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium text-foreground"
                        >
                          Mesaj
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Neye ihtiyacınız olduğunu bize anlatın..."
                          rows={6}
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full sm:w-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Haritalar Bölümü */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Konumumuzu Ziyaret Edin
            </h2>
            <p className="text-muted-foreground">
              Bizi haritada bulun veya yol tarifi alın
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18751.185648483734!2d28.829116539692883!3d41.0641930067467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5170c2e70e9%3A0x5f06cd3ab9d3061a!2sAksu%20Otomotiv%20Yedek%20Par%C3%A7a!5e0!3m2!1sen!2str!4v1776554718727!5m2!1sen!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RenaultParts Konumu"
              className="w-full"
            />
          </div>
          <div className="mt-6 text-center">
            <Button asChild variant="outline">
              <a
                href="https://maps.app.goo.gl/SZz7pQw2p56BR2kr5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Yol Tarifi Al
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
