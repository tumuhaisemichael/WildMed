import ItineraryPage from "@/components/itinerary/ItineraryPage";
import { uganda14DayLuxury } from "@/lib/itineraries";
import { tripMetadata } from "@/lib/seo";

export const metadata = tripMetadata(uganda14DayLuxury, "/Ugandan-14-Days");

export default function Page() {
  return <ItineraryPage trip={uganda14DayLuxury} />;
}
