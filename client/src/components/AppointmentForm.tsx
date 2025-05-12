import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

const appointmentFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  appointmentType: z.string().min(1, { message: 'Please select an appointment type' }),
  message: z.string().optional(),
  reminderPreference: z.string().min(1, { message: 'Please select a reminder preference' }),
  consent: z.boolean().refine(value => value === true, {
    message: 'You must consent to continue',
  }),
});

type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

const AppointmentForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      appointmentType: '',
      message: '',
      reminderPreference: '',
      consent: false,
    },
  });

  const appointmentMutation = useMutation({
    mutationFn: (data: Omit<AppointmentFormValues, 'consent'>) => 
      apiRequest('POST', '/api/appointments', data),
    onSuccess: () => {
      // Customize message based on reminder preference
      let reminderText = "";
      const reminderPref = form.getValues("reminderPreference");
      
      if (reminderPref === "whatsapp") {
        reminderText = "You'll receive appointment reminders via WhatsApp.";
      } else if (reminderPref === "sms") {
        reminderText = "You'll receive appointment reminders via text message.";
      } else if (reminderPref === "both") {
        reminderText = "You'll receive appointment reminders via both WhatsApp and text message.";
      } else if (reminderPref === "email") {
        reminderText = "You'll receive appointment reminders via email.";
      }
      
      toast({
        title: "Appointment Requested",
        description: `Thank you! Your appointment request has been submitted. We will contact you shortly to confirm. ${reminderText}`,
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: AppointmentFormValues) => {
    setIsSubmitting(true);
    
    // Remove consent field before sending to API
    const { consent, ...appointmentData } = data;
    
    // Log the reminder preference for development purposes
    console.log(`Patient prefers ${data.reminderPreference} reminders`);
    
    appointmentMutation.mutate(appointmentData);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <h3 className="font-heading font-semibold text-2xl text-neutral-darkest text-center mb-6">Request an Appointment</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-dark font-medium">Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your name" 
                      {...field} 
                      className="px-4 py-2 border border-neutral-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-dark font-medium">Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      {...field} 
                      className="px-4 py-2 border border-neutral-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-dark font-medium">Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="(123) 456-7890" 
                      {...field} 
                      className="px-4 py-2 border border-neutral-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="appointmentType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-dark font-medium">Appointment Type</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="px-4 py-2 border border-neutral-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="cleaning">Cleaning & Check-up</SelectItem>
                      <SelectItem value="emergency">Emergency Care</SelectItem>
                      <SelectItem value="cosmetic">Cosmetic Consultation</SelectItem>
                      <SelectItem value="restorative">Restorative Treatment</SelectItem>
                      <SelectItem value="orthodontic">Orthodontic Consultation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="reminderPreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-dark font-medium">Reminder Preference</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="px-4 py-2 border border-neutral-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light">
                        <SelectValue placeholder="How should we remind you?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="whatsapp">WhatsApp Messages</SelectItem>
                      <SelectItem value="sms">SMS Text Messages</SelectItem>
                      <SelectItem value="both">Both WhatsApp & SMS</SelectItem>
                      <SelectItem value="email">Email Only</SelectItem>
                      <SelectItem value="none">No Reminders</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-dark font-medium">Message (Optional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Please share any specific concerns or questions..." 
                    {...field}
                    className="w-full px-4 py-2 border border-neutral-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light"
                    rows={4}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 mb-6">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="mt-1"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm text-neutral-dark">
                    I consent to having this website store my submitted information so they can respond to my inquiry and provide the requested services.
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AppointmentForm;
