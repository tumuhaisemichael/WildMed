import ItineraryPage from "@/components/itinerary/ItineraryPage";
import { uganda5DayHoliday } from "@/lib/itineraries";
import { tripMetadata } from "@/lib/seo";

export const metadata = tripMetadata(uganda5DayHoliday, "/Ugandan-5Days");

export default function Page() {
  return <ItineraryPage trip={uganda5DayHoliday} />;
}
