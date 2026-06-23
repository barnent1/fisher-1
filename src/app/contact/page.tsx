"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema, ContactFormData } from "@/lib/validations/contact"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Something went wrong")

      setStatus("success")
      setMessage("Your message has been sent successfully!")
      reset()
    } catch (err) {
      setStatus("error")
      setMessage("Failed to send message. Please try again later.")
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground">
          Have questions? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                {...register("name")} 
                placeholder="John Doe"
                className={cn(errors.name && "border-destructive")}
              />
              {errors.name && (
                <p className="text-sm font-medium text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                {...register("email")} 
                placeholder="john@example.com"
                className={cn(errors.email && "border-destructive")}
              />
              {errors.email && (
                <p className="text-sm font-medium text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input 
                id="subject" 
                {...register("subject")} 
                placeholder="How can we help?"
                className={cn(errors.subject && "border-destructive")}
              />
              {errors.subject && (
                <p className="text-sm font-medium text-destructive">{errors.subject.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                {...register("message")} 
                placeholder="Your message here..."
                className={cn(errors.message && "border-destructive")}
              />
              {errors.message && (
                <p className="text-sm font-medium text-destructive">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <div className="p-3 bg-green-100 text-green-700 rounded-md text-sm text-center">
                {message}
              </div>
            )}
            {status === "error" && (
              <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm text-center">
                {message}
              </div>
            )}
          </form>
        </div>

        {/* Business Info */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="text-muted-foreground">
              Our team is available to help you with any inquiries.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-muted p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 10c0 6-8 4-8 4v8"/></svg>
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted-foreground">123 Business Ave, Suite 100<br />Tech City, TC 12345</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-muted p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <h3 className="font-medium">Hours of Operation</h3>
                <p className="text-muted-foreground">Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM<br />Saturday: 10:00 AM &ndash; 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
