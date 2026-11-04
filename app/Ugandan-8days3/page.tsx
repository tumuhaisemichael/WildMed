import ItineraryPage from "@/components/itinerary/ItineraryPage";
import { uganda8DayGrandLuxury } from "@/lib/itineraries";
import { tripMetadata } from "@/lib/seo";

export const metadata = tripMetadata(uganda8DayGrandLuxury, "/Ugandan-8days3");

export default function Page() {
  return <ItineraryPage trip={uganda8DayGrandLuxury} />;
}
