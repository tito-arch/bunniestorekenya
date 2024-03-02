"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";

export default function Leads({ id, selectedPlan }) {
  const form = useForm();
  // toast(".") // This will show a success toast
  // Initialize planDetails with the selected plan
  const initialValues = {
    ...form.getValues(),
    projectDescription: {
      ...form.getValues("projectDescription"),
      planDetails: selectedPlan ? JSON.stringify(selectedPlan) : "",
    },
  };
  const onSubmit = async (formData) => {
    try {
      // Append selected plan if any exist.

      const response = await axios.post(
        "https://bunnie-llc.vercel.app/submit-form",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Handle the response
      if (response.data.success) {
        // Form submission was successful

        toast.message("Request submitted successfully", {
          description: new Date().toLocaleString(),
        });

        console.log(selectedPlan);
        // Reset the form
        form.reset();
      } else {
        // Form submission failed
        console.error("Form submission failed:", response.data.error);
        toast.error("Form submission failed");
      }
    } catch (error) {
      toast.error("Form submission failed: Server Error");
    }
  };
  // console.log(selectedPlan);

  return (
    <div className="w-full sm:w-3/4 mx-auto mt-8">
      <hr />
      <div className="w-full max-w-md mx-auto p-6  rounded-md" id="lead-form">
        <h1 className="text-3xl font-semibold mb-4 text-center">
          Get in Touch
        </h1>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div className="relative border-gradient-futuristic p-1 rounded-md mb-4">
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email..."
              {...form.register("email", { required: true })}
              className="w-full bg-transparent focus:outline-none transition-all duration-300"
            />
          </div>

          {/* Name */}
          <div className="relative border-gradient-futuristic p-1 rounded-md mb-4">
            <Input
              label="Name"
              placeholder="Enter your name..."
              {...form.register("name", { required: true })}
              className="w-full bg-transparent focus:outline-none transition-all duration-300"
            />
          </div>

          {/* Phone Number */}
          <div className="relative border-gradient-futuristic p-1 rounded-md mb-4">
            <Input
              label="Phone Number"
              type="tel"
              placeholder="Enter your phone number..."
              {...form.register("phone", { required: true })}
              className="w-full bg-transparent focus:outline-none transition-all duration-300"
            />
          </div>

          {/* Budget */}
          <div className="relative border-gradient-futuristic p-1 rounded-md mb-4">
            <Input
              label="Budget"
              type="number"
              placeholder="Enter your budget... $100 +"
              {...form.register("budget", { required: true, min: 100 })}
              className={`w-full bg-transparent focus:outline-none transition-all duration-300 ${
                form.errors && form.errors.budget ? "border-red-500" : ""
              }`}
            />
            {form.errors && form.errors.budget && (
              <div>
                {console.log(form.errors.budget)}{" "}
                {/* Log the errors to the console */}
                <span className="text-red-500 block">
                  {form.errors.budget.message || "Unknown error"}
                </span>
              </div>
            )}
          </div>

          {/* Project Description */}
          <div className="relative border-gradient-futuristic p-1 rounded-md mb-4">
            <Input
              label="Project Description"
              type="textarea"
              placeholder="Tell us about your project..."
              {...form.register("projectDescription", { required: true })}
              className="w-full bg-transparent focus:outline-none transition-all duration-300"
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="flex mx-auto">
            Submit Request
          </Button>
        </form>
      </div>
    </div>
  );
}
