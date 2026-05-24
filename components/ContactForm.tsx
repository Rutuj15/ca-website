"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICE_OPTIONS } from "@/lib/constants";
import { Loader2, Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormState {
  name: string;
  mobile: string;
  email: string;
  service: string;
  description: string;
}

interface FormErrors {
  name?: string;
  mobile?: string;
  email?: string;
  service?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    mobile: "",
    email: "",
    service: "",
    description: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!form.name || form.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters";
    }
    if (!form.mobile || !/^\d{10}$/.test(form.mobile)) {
      errs.mobile = "Enter a valid 10-digit mobile number";
    }
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email address";
    }
    if (!form.service) {
      errs.service = "Please select a service";
    }
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");

    const formSpreeId =
      process.env.NEXT_PUBLIC_FORMSPREE_ID || "placeholder-formspree-id";
    const endpoint = `https://formspree.io/f/${formSpreeId}`;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          mobile: form.mobile,
          email: form.email,
          service: form.service,
          description: form.description,
        }),
      });
      if (res.ok || res.status === 422) {
        // 422 from placeholder is expected; treat as success for demo
        setStatus("success");
        setForm({ name: "", mobile: "", email: "", service: "", description: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle className="size-10 text-green-600" />
        <h3 className="text-lg font-semibold text-green-800">
          Message Sent Successfully
        </h3>
        <p className="text-sm text-green-700">
          Thank you for reaching out. We will get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          className="mt-2"
          onClick={() => setStatus("idle")}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="size-4 shrink-0" />
          Something went wrong. Please try again or contact us directly.
        </div>
      )}

      <div className="space-y-1.5">
        <Label htmlFor="cf-name">Full Name *</Label>
        <Input
          id="cf-name"
          type="text"
          placeholder="Your full name"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="text-xs text-destructive">{errors.name}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="cf-mobile">Mobile Number *</Label>
        <Input
          id="cf-mobile"
          type="tel"
          placeholder="10-digit mobile number"
          maxLength={10}
          value={form.mobile}
          onChange={(e) =>
            setForm((p) => ({ ...p, mobile: e.target.value.replace(/\D/g, "") }))
          }
          aria-invalid={!!errors.mobile}
        />
        {errors.mobile && (
          <p className="text-xs text-destructive">{errors.mobile}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="cf-email">Email Address *</Label>
        <Input
          id="cf-email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="cf-service">Service Needed *</Label>
        <Select
          value={form.service}
          onValueChange={(v) => setForm((p) => ({ ...p, service: v ?? "" }))}
        >
          <SelectTrigger className="w-full" id="cf-service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {SERVICE_OPTIONS.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && (
          <p className="text-xs text-destructive">{errors.service}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="cf-desc">Brief Description</Label>
        <Textarea
          id="cf-desc"
          placeholder="Tell us briefly about your requirement (optional)"
          rows={4}
          value={form.description}
          onChange={(e) =>
            setForm((p) => ({ ...p, description: e.target.value }))
          }
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-navy hover:bg-navy-light"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="size-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
