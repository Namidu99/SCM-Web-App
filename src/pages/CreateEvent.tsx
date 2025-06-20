
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Users, Clock, Plus, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: '',
    maxAttendees: '',
    organizer: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const categories = ['Workshop', 'Hackathon', 'Career', 'Club Meeting', 'Social', 'Academic', 'Sports'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.title || !formData.description || !formData.date || !formData.time || 
        !formData.location || !formData.category || !formData.maxAttendees || !formData.organizer) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (parseInt(formData.maxAttendees) < 1) {
      toast({
        title: "Error",
        description: "Maximum attendees must be at least 1",
        variant: "destructive",
      });
      return;
    }

    const eventDate = new Date(formData.date);
    if (eventDate < new Date()) {
      toast({
        title: "Error",
        description: "Event date cannot be in the past",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Event Created Successfully",
        description: `${formData.title} has been created and is now live!`,
      });
      navigate('/');
      setIsLoading(false);
    }, 1000);
  };

  return (

  );
};

export default CreateEvent;
