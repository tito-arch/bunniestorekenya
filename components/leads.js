"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

export default function Leads() {
  const form = useForm();

  function onSubmit(data) {
    console.log(data);
    // Add your logic for form submission here
  }

  return (
    <div className="w-full sm:w-3/4 mx-auto mt-8">
      <hr />
      <div className="w-full max-w-md mx-auto p-6  rounded-md">
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
              placeholder="Enter your budget..."
              {...form.register("budget", { required: true })}
              className="w-full bg-transparent focus:outline-none transition-all duration-300"
            />
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
