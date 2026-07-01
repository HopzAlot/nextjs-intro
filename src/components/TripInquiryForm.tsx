"use client";

import { Alert, Button } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormSelectField } from "./forms/FormSelectField";
import { FormTextField } from "./forms/FormTextField";

type TripInquiryFormValues = {
  name: string;
  contact: string;
  destination: string;
  travelMonth: string;
  message: string;
};

const destinations = ["Hunza", "Skardu", "Naran & Kaghan", "Fairy Meadows"];
const travelMonths = ["March-May", "June-August", "September-November", "Flexible"];
const contactPattern =
  /^([^\s@]+@[^\s@]+\.[^\s@]+|(\+92|0)?3[0-9]{9})$/;

const defaultValues: TripInquiryFormValues = {
  name: "",
  contact: "",
  destination: "",
  travelMonth: "",
  message: "",
};

export default function TripInquiryForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<TripInquiryFormValues>({ defaultValues });

  const onSubmit = async (values: TripInquiryFormValues) => {
    setStatus("idle");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Could not save inquiry");
      }

      reset(defaultValues);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="inquiry" className="bg-[#fff9ed] py-[70px]">
      <div className="mx-auto grid max-w-6xl grid-cols-[0.85fr_1fr] gap-10 px-6 max-md:grid-cols-1 max-sm:px-4">
        <div>
          <p className="text-[13px] font-black tracking-[3px] text-[#c4532e] uppercase">
            Trip Inquiry
          </p>
          <h2 className="mt-3 text-[38px] leading-[1.15] font-black">
            Tell us where the road should take you.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#536052]">
            This form uses React Hook Form controllers, reusable MUI fields, and
            a Next.js API route to securely store each request in Firestore.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-4 border-2 border-[#18231d] bg-[#f5efe3] p-6 shadow-[10px_10px_0_#6b9f88]"
        >
          {status === "success" && (
            <Alert severity="success">
              Inquiry sent. Safarnama will contact you soon.
            </Alert>
          )}

          {status === "error" && (
            <Alert severity="error">
              Inquiry could not be sent. Check Firebase setup and try again.
            </Alert>
          )}

          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <FormTextField
              control={control}
              name="name"
              label="Full name"
              required
              rules={{
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
                maxLength: {
                  value: 60,
                  message: "Name must be 60 characters or less",
                },
              }}
            />
            <FormTextField
              control={control}
              name="contact"
              label="Email or phone"
              required
              helperText="Use an email or Pakistani mobile number"
              rules={{
                pattern: {
                  value: contactPattern,
                  message: "Enter a valid email or Pakistani mobile number",
                },
              }}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <FormSelectField
              control={control}
              name="destination"
              label="Destination"
              options={destinations}
              required
              rules={{
                validate: (value) =>
                  destinations.includes(value) || "Choose a valid destination",
              }}
            />
            <FormSelectField
              control={control}
              name="travelMonth"
              label="Travel month"
              options={travelMonths}
              required
              rules={{
                validate: (value) =>
                  travelMonths.includes(value) || "Choose a valid travel month",
              }}
            />
          </div>

          <FormTextField
            control={control}
            name="message"
            label="Trip details"
            multiline
            minRows={4}
            helperText="Group size, preferred dates, budget, or special requests."
            rules={{
              maxLength: {
                value: 500,
                message: "Trip details must be 500 characters or less",
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            sx={{
              justifySelf: "start",
              borderRadius: 0,
              bgcolor: "#18231d",
              px: 3,
              py: 1.4,
              fontWeight: 900,
              textTransform: "none",
              boxShadow: "6px 6px 0 #c4532e",
              "&:hover": { bgcolor: "#26342c" },
            }}
          >
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </Button>
        </form>
      </div>
    </section>
  );
}
