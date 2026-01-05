"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, TrendingUp, Users, Zap } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    content: "LeadTella increased our lead quality by 400%. The lead intelligence eliminated our manual processes.",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Growth Manager",
    company: "SaaS Solutions",
    content: "We replaced our old form builder in one week. Conversion rates jumped from 2% to 8%.",
    rating: 5,
  },
  {
    name: "Lisa Rodriguez",
    role: "CEO",
    company: "Digital Agency",
    content: "The built-in CRM and HubSpot sync saved us thousands per month. One platform for everything.",
    rating: 5,
  },
]

const stats = [
  { icon: TrendingUp, value: "300%+", label: "Avg. Conversion Increase" },
  { icon: Users, value: "10,000+", label: "Businesses" },
  { icon: Zap, value: "5 Min", label: "Setup Time" },
]

export function Results() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-border"}`} />
    ))
  }

  return (
    <section className="py-24 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-20 max-w-3xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">{renderStars(testimonial.rating)}</div>
                <blockquote className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-foreground font-semibold text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
