import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <div className="animate-fade-in">
            <Card className="shadow-elegant border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                  Your App
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                  A beautiful foundation ready for your ideas
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-elegant"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;