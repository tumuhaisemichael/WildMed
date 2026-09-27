import ItineraryPage from "@/components/itinerary/ItineraryPage";
import { uganda5DayKisoro } from "@/lib/itineraries";

export default function Page() {
  return <ItineraryPage trip={uganda5DayKisoro} />;
}
