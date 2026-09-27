import ItineraryPage from "@/components/itinerary/ItineraryPage";
import { uganda5DayHoliday } from "@/lib/itineraries";

export default function Page() {
  return <ItineraryPage trip={uganda5DayHoliday} />;
}
