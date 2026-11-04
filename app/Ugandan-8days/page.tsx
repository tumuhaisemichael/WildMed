import ItineraryPage from "@/components/itinerary/ItineraryPage";
import { uganda8DayLuxury } from "@/lib/itineraries";
import { tripMetadata } from "@/lib/seo";

export const metadata = tripMetadata(uganda8DayLuxury, "/Ugandan-8days");

export default function Page() {
  return <ItineraryPage trip={uganda8DayLuxury} />;
}
