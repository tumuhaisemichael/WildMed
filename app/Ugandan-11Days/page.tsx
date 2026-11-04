import ItineraryPage from "@/components/itinerary/ItineraryPage";
import { uganda11DayLuxury } from "@/lib/itineraries";
import { tripMetadata } from "@/lib/seo";

export const metadata = tripMetadata(uganda11DayLuxury, "/Ugandan-11Days");

export default function Page() {
  return <ItineraryPage trip={uganda11DayLuxury} />;
}
