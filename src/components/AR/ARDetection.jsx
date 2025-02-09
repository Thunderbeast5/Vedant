import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// import { ArrowLeft } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

const ARDetection = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  // const navigate = useNavigate();

  const startStream = async () => {
    try {
      const response = await fetch('http://localhost:8000/start');
      if (response.ok) {
        setIsStreaming(true);
      }
    } catch (error) {
      console.error('Failed to start stream:', error);
    }
  };

  const stopStream = async () => {
    try {
      await fetch('http://localhost:8000/stop');
      setIsStreaming(false);
    } catch (error) {
      console.error('Failed to stop stream:', error);
    }
  };

  useEffect(() => {
    return () => {
      if (isStreaming) {
        stopStream();
      }
    };
  }, [isStreaming]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-500 to-aqua-300 flex flex-col">
      {/* Back button in top-left corner */}
      {/* <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button> */}

      {/* Main content - centered vertically and horizontally */}
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-3xl">
          <div className="p-6">
            {/* <h1 className="text-2xl font-bold text-center mb-6">AR Object Detection</h1> */}
            
            <div className="aspect-video relative bg-black rounded-lg overflow-hidden">
              {isStreaming && (
                <img
                  src="http://localhost:8000/video_feed"
                  alt="Object Detection Stream"
                  className="w-full h-full object-contain"
                />
              )}
              
              {!isStreaming && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white">Click Start to begin detection</p>
                </div>
              )}
            </div>

            <div className="mt-6 flex justify-center">
              <Button
                onClick={isStreaming ? stopStream : startStream}
                className="w-32"
              >
                {isStreaming ? 'Stop' : 'Start'}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ARDetection;