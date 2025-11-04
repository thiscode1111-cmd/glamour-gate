import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { User, Calendar, Clock, MapPin, LogOut } from "lucide-react";
import { format } from "date-fns";

interface Booking {
  id: string;
  movie_title: string;
  movie_image: string | null;
  show_date: string;
  show_time: string;
  seats: string[];
  total_amount: number;
  booking_status: string;
  created_at: string;
}

interface Profile {
  full_name: string | null;
  email: string | null;
}

const Profile = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/auth");
      return;
    }

    await fetchProfile(session.user.id);
    await fetchBookings(session.user.id);
    setLoading(false);
  };

  const fetchProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("full_name, email")
      .eq("id", userId)
      .single();

    if (error) {
      console.error("Error fetching profile:", error);
      return;
    }

    setProfile(data);
  };

  const fetchBookings = async (userId: string) => {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching bookings:", error);
      return;
    }

    setBookings(data || []);
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Signed out",
      description: "Come back soon!",
    });
    
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Profile Header */}
          <Card className="gradient-card border-0 p-8 mb-8">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                  <User className="w-10 h-10 text-accent" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-1">
                    {profile?.full_name || "User"}
                  </h1>
                  <p className="text-muted-foreground">{profile?.email}</p>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={handleSignOut}
                className="border-accent/50 hover:bg-accent/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </Card>

          {/* Bookings Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              My <span className="text-gradient">Bookings</span>
            </h2>
          </div>

          {bookings.length === 0 ? (
            <Card className="gradient-card border-0 p-12 text-center">
              <p className="text-muted-foreground text-lg mb-4">
                You haven't made any bookings yet
              </p>
              <Button
                onClick={() => navigate("/")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Browse Movies
              </Button>
            </Card>
          ) : (
            <div className="grid gap-6">
              {bookings.map((booking) => (
                <Card
                  key={booking.id}
                  className="gradient-card border-0 p-6 hover-lift"
                >
                  <div className="flex gap-6">
                    {booking.movie_image && (
                      <img
                        src={booking.movie_image}
                        alt={booking.movie_title}
                        className="w-32 h-48 object-cover rounded-lg"
                      />
                    )}
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {booking.movie_title}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{format(new Date(booking.show_date), "PPP")}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{booking.show_time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>Seats: {booking.seats.join(", ")}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-accent">
                            ${booking.total_amount.toFixed(2)}
                          </span>
                        </div>
                        <div className="px-4 py-2 rounded-full bg-accent/20 text-accent font-semibold">
                          {booking.booking_status}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-border/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 CineVerse. Your gateway to entertainment.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
