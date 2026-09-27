import ItineraryPage from "@/components/itinerary/ItineraryPage";
import { uganda4DayFlyIn } from "@/lib/itineraries";

export default function Page() {
  return <ItineraryPage trip={uganda4DayFlyIn} />;
}
