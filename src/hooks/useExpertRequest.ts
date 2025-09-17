import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ExpertRequestData {
  name: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  message: string;
}

export const useExpertRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sendExpertRequest = async (data: ExpertRequestData) => {
    setIsLoading(true);
    
    try {
      const { data: result, error } = await supabase.functions.invoke('send-expert-request', {
        body: data
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Request Sent Successfully!",
        description: "Our expert team will contact you within 24 hours.",
      });

      return { success: true };
    } catch (error: any) {
      console.error('Error sending expert request:', error);
      toast({
        title: "Error",
        description: "Failed to send request. Please try again or call us directly.",
        variant: "destructive",
      });
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  return { sendExpertRequest, isLoading };
};