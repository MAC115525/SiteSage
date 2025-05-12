import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const TelehealthConsultation = () => {
  const { toast } = useToast();
  const [consultationId, setConsultationId] = useState('');
  const [userName, setUserName] = useState('');
  const [isJoining, setIsJoining] = useState(false);
  const [isScheduling, setIsScheduling] = useState(false);
  const [showVideoInterface, setShowVideoInterface] = useState(false);
  
  // Function to handle joining an existing telehealth consultation
  const handleJoinConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    setIsJoining(true);
    
    // Simulate API request delay
    setTimeout(() => {
      if (consultationId && userName) {
        setShowVideoInterface(true);
        setIsJoining(false);
        
        toast({
          title: "Consultation Joined",
          description: `You've joined consultation #${consultationId}. The doctor will connect with you shortly.`,
        });
      } else {
        setIsJoining(false);
        toast({
          title: "Error",
          description: "Please enter both consultation ID and your name.",
          variant: "destructive",
        });
      }
    }, 1500);
  };
  
  // Function to handle scheduling a new telehealth consultation
  const handleScheduleConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    setIsScheduling(true);
    
    // Simulate API request delay
    setTimeout(() => {
      // Generate random consultation ID
      const newConsultationId = Math.floor(100000 + Math.random() * 900000).toString();
      setConsultationId(newConsultationId);
      
      setIsScheduling(false);
      toast({
        title: "Consultation Scheduled",
        description: `Your telehealth consultation has been scheduled. Your consultation ID is #${newConsultationId}. Please save this ID for your records.`,
      });
    }, 1500);
  };
  
  // Function to end the current telehealth consultation
  const handleEndConsultation = () => {
    setShowVideoInterface(false);
    setConsultationId('');
    setUserName('');
    
    toast({
      title: "Consultation Ended",
      description: "Your telehealth consultation has ended. Thank you for using our telehealth services.",
    });
  };
  
  // Render video interface when consultation is joined
  if (showVideoInterface) {
    return (
      <div className="telehealth-video-container bg-neutral-lightest p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-heading font-semibold">Telehealth Consultation #{consultationId}</h2>
            <p className="text-neutral-dark">Patient: {userName}</p>
          </div>
          <Button variant="destructive" onClick={handleEndConsultation}>
            End Consultation
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Main video feed */}
          <div className="md:col-span-2 bg-neutral-dark rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-white">
              <i className="fa-solid fa-video text-5xl mb-4"></i>
              <p>Doctor's video feed will appear here.</p>
              <p className="text-sm text-neutral-medium mt-2">The doctor will join shortly...</p>
            </div>
          </div>
          
          {/* Patient video (smaller) */}
          <div className="bg-neutral-dark rounded-lg h-48 md:h-96 flex items-center justify-center">
            <div className="text-center text-white">
              <i className="fa-solid fa-user text-3xl mb-3"></i>
              <p>Your video feed</p>
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Button className="bg-neutral-dark">
            <i className="fa-solid fa-microphone mr-2"></i> Mute
          </Button>
          <Button className="bg-neutral-dark">
            <i className="fa-solid fa-video mr-2"></i> Turn off Video
          </Button>
          <Button className="bg-neutral-dark">
            <i className="fa-solid fa-share-from-square mr-2"></i> Share Screen
          </Button>
          <Button className="bg-neutral-dark">
            <i className="fa-solid fa-message mr-2"></i> Chat
          </Button>
        </div>
        
        <div className="mt-6 p-4 bg-neutral-light rounded-lg">
          <p className="text-sm text-neutral-dark">
            <strong>Note:</strong> This is a simulated telehealth interface. In a production environment, 
            this would connect to a real-time video communication service like Twilio, Agora, or WebRTC.
          </p>
        </div>
      </div>
    );
  }
  
  // Render consultation setup interface
  return (
    <div className="telehealth-container">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-heading">Telehealth Video Consultations</CardTitle>
          <CardDescription>
            Connect with your dentist from the comfort of your home for follow-ups, quick consultations, and treatment discussions.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="join">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="join">Join Consultation</TabsTrigger>
              <TabsTrigger value="schedule">Schedule Consultation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="join">
              <form onSubmit={handleJoinConsultation}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Consultation ID</label>
                    <Input 
                      placeholder="Enter your 6-digit consultation ID" 
                      value={consultationId}
                      onChange={(e) => setConsultationId(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Your Name</label>
                    <Input 
                      placeholder="Enter your full name" 
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  
                  <Button className="w-full" type="submit" disabled={isJoining}>
                    {isJoining ? 'Joining...' : 'Join Consultation'}
                  </Button>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="schedule">
              <form onSubmit={handleScheduleConsultation}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Your Name</label>
                    <Input 
                      placeholder="Enter your full name" 
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone Number</label>
                    <Input placeholder="Enter your phone number" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Reason for Consultation</label>
                    <Input placeholder="Briefly describe your dental concern" />
                  </div>
                  
                  <Button className="w-full" type="submit" disabled={isScheduling}>
                    {isScheduling ? 'Scheduling...' : 'Schedule Consultation'}
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        
        <CardFooter className="flex flex-col">
          <div className="bg-neutral-light p-3 rounded-lg w-full">
            <h4 className="font-semibold mb-2">Telehealth Instructions:</h4>
            <ul className="text-sm space-y-1 list-disc pl-5">
              <li>Ensure you have a stable internet connection before joining</li>
              <li>Use a device with a working camera and microphone</li>
              <li>Find a quiet, well-lit space for your consultation</li>
              <li>Have your dental records or previous treatment information handy</li>
              <li>Join 5 minutes before your scheduled appointment time</li>
            </ul>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TelehealthConsultation;